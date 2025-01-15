<template>
  <div v-if="Loading" class="spinner-border text-success mt-3"></div>
  <p v-if="jobs.length == 0 && !Loading" class="text-center fw-bold fs-5 ">No Open Jobs Available</p>
  <div class="job-card " v-for="job in jobs" :key="job.id">
    <div class="job-header">
      <span v-if="type == 'moving'" class="d-flex gap-3 flex-wrap">
        <span v-for="item in job.items" :key="item._id">
          <span v-if="item.quantity"> {{ item.quantity }} {{ item.id }},</span>
        </span>
      </span>
      <span v-if="type == 'cleaning'" class="d-flex gap-3 flex-wrap">
        <span v-for="item in job.rooms" :key="item._id">
          <span v-if="item.number"> {{ item.number }} {{ item.name }},</span>
        </span>
      </span>
    </div>
    <div class="job-details">
      <div class="job-info">
        <div>
          <strong>Pickup Location:</strong>
          <p>{{ type == 'moving' ? job?.pickUp?.name : job?.postCode }}</p>
        </div>
        <div>
          <strong v-if="type == 'moving'">Delivery Location:</strong>
          <strong v-else>Type:</strong>
          <p>{{ type == 'moving' ? job?.dropOff?.name : job?.cleaningType }}</p>
        </div>
        <div>
          <strong>Date:</strong>
          <p>{{ type == 'moving' ? formatDate(job?.bookingDate) : formatDate(job?.startTime) }}</p>
        </div>
        <div>
          <strong>Time:</strong>
          <p> N/A</p>
        </div>
        <div>
          <strong>Hours:</strong>
          <p> N/A</p>
        </div>
      </div>
      <div class="job-actions">
        <button class="view-btn" @click="view(job)">View</button>
        <div class="price">£{{ job?.amount }}</div>
        <button class="claim-btn" @click="claimJob(job.id)">
          <span class="spinner-border spinner-border-sm" v-if="Loader && job.id"></span>
          <span v-else>Claim</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Pagination and Items Per Page Controls -->
  <div class="d-flex align-items-center justify-content-between m-3">
    <div class="d-flex gap-3 align-items-center">
      <span>Number Of Items displayed per page</span>
      <select v-model="itemsPerPage" class="form-select"
        style="width: 65px; background-color: #28a745; color: white; border: none;">
        <option value="10">10</option>
        <option value="14">14</option>
        <option value="20">20</option>
      </select>
      <p class="mb-0">
        {{ displayedStartIndex }}-{{ displayedEndIndex }} of {{ totalItems }} items
      </p>
    </div>
    <div>
      <ul class="pagination mb-0">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <button class="page-link" @click="changePage(currentPage - 1)">
            <img src="../../assets/Payment_Sales/pageleft.png" alt="">
          </button>
        </li>
        <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: currentPage === page }">
          <button class="page-link" @click="changePage(page)">{{ page }}</button>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <button class="page-link" @click="changePage(currentPage + 1)">
            <img src="../../assets/Payment_Sales/pageright.png" alt="">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'

export default {
  name: "JobCard",
  data() {
    return {
      CleanerJob: ["Location", "Type", "Date", "Time", "Hours"],
      DriverJob: ["Pickup Location", "Delivery Location", "Type", "Date", "Time", "Hours"],
      type: null,
      jobs: [],
      jobsPagination: {},
      Loader: false,
      Loading: false,
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1,    // Current page number
      totalItems: 0, // Total number of items (example)
    }

  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage);
    },
    displayedStartIndex() {
      return (this.currentPage - 1) * this.itemsPerPage + 1;
    },
    displayedEndIndex() {
      return Math.min(this.displayedStartIndex + this.itemsPerPage - 1, this.totalItems);
    },
    visiblePages() {
      // Only show the first few and last pages with ellipsis in between
      const range = [];
      if (this.totalPages <= 5) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
      } else if (this.currentPage <= 3) {
        range.push(1, 2, 3, 4, '...', this.totalPages);
      } else if (this.currentPage > this.totalPages - 3) {
        range.push(1, '...', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        range.push(1, '...', this.currentPage - 1, this.currentPage, this.currentPage + 1, '...', this.totalPages);
      }
      return range;
    },
  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal) {
        this.getJobs(this.currentPage, newVal);
      }
    }
  },
  mounted() {
    this.type = localStorage.getItem("accountType");
    this.getJobs(this.currentPage, this.itemsPerPage);
  },

  methods: {
    formatDate(data, lastSeen = false) {
      let processedData = data

      if (lastSeen) {
        const splitData = data.split(',')
        processedData = splitData[0] // Assuming you want the first part after splitting
      }

      const date = new Date(processedData)
      return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString()
    },
    async claimJob(jobId) {
      this.Loader = true
      const url = `jobs/${this.type}/${jobId}`
      try {
        const response = await postToApi(url, {})
        console.log(response)
        if (response.status) {
          swal({
            title: "Success",
            text: "Job claimed successfully",
            icon: "success",
            button: "Close",
          })
        }
      } catch (error) {
        swal({
          title: "Error",
          text: error,
          icon: "error",
          button: "Close",
        })
      } finally {
        this.Loader = false
      }
    },
    async getJobs(page, pageSize) {
      this.Loading = true
      const url = `jobs/${this.type}?page=${page}&pageSize=${pageSize}`
      try {
        const response = await fetchFromApi(url);
        if (response.status) {
          this.jobs = response.data;
          this.totalItems = response.pagination.totalRecords
          this.jobsPagination = response.pagination
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error("API call failed:", error);
      }
      finally {
        this.Loading = false
      }
    },
    view(job) {
      this.$emit("view", job);
    },
    changePage(page) {
      this.getJobs(page, this.itemsPerPage);
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style scoped>
.job-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  /* max-width: 900px; */
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.job-header {
  background-color: #d9f8d9;
  padding: 12px 16px;
  font-weight: 600;
  color: #2f4f2f;
  font-size: 16px;
  text-align: center;
  border-bottom: 1px solid #cce7cc;
}

.job-details {
  display: flex;
  justify-content: space-between;
  padding: 16px;
}

.job-info {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  flex: 1;
}

.job-info div {
  flex-basis: calc(20% - 10px);
}

.job-info strong {
  display: block;
  font-size: 13px;
  color: #4a4a4a;
  margin-bottom: 5px;
}

.job-info p {
  font-size: 14px;
  margin: 0;
  color: #6d6d6d;
}

.job-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.view-btn {
  padding: 6px 14px;
  border: 1px solid #4caf50;
  border-radius: 4px;
  background-color: transparent;
  color: #4caf50;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.view-btn:hover {
  background-color: rgba(76, 175, 80, 0.1);
}

.claim-btn {
  padding: 6px 14px;
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.claim-btn:hover {
  background-color: #388e3c;
}

.price {
  font-size: 18px;
  font-weight: 600;
  color: #2f2f2f;
}

.pagination .page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
  color: #fff;
}

.pagination .page-link {
  color: #28a745;
}

.pagination .page-item.disabled .page-link {
  color: #ccc;
}
</style>
