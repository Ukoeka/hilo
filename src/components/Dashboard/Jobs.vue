<template>
  <p v-if="jobs.length == 0" class="text-center fw-bold fs-5 ">No Open Jobs Available</p>
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
        <div >
          <strong>Pickup Location:</strong>
          <p>{{ type == 'moving' ? job?.pickup?.name : job?.postCode }}</p>
        </div>
        <div>
          <strong v-if="type == 'moving'">Delivery Location:</strong>
          <strong v-else>Type:</strong>
          <p>{{ type == 'moving' ? job?.delivery?.name : job?.cleaningType }}</p>
        </div>
        <div>
          <strong>Date:</strong>
          <p>{{ type == 'moving' ? formatDate(job?.movingDate) : formatDate(job?.startTime) }}</p>
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
      Loader: false
    }

  },
  mounted() {
    this.type = localStorage.getItem("accountType");
    this.getJobs(1, 10);
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

      const url = `jobs/${this.type}?page=${page}&pageSize=${pageSize}`
      try {
        const response = await fetchFromApi(url);
        if (response.status) {
          this.jobs = response.data;
          this.jobsPagination = response.pagination
        } else {
          console.log(response.message);
        }
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    view(job) {
      this.$emit("view", job);
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
</style>
