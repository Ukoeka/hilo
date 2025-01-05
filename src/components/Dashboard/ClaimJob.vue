<template>
  <div class="bg-white w-100">
    <div class="rounded-4">
      <div class="d-flex justify-content-between align-items-center p-2 rounded-top"
        style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
        <button class=" rounded-circle border bg-white" @click="toggleDisplay" style="height: 50px; width: 50px;">
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.71317 1.14453L1.57031 6.28739L6.71317 11.4302" fill="#F5F5F5" />
            <path d="M6.71317 1.14453L1.57031 6.28739L6.71317 11.4302" stroke="black" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.1417 6.28711H1.57031" stroke="black" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg></button>
        <div class="d-flex justify-content-between align-items-center p-2 gap-2">

          <button class="btn btn-success" @click="claimJob">
            <span v-if="Loader" class="spinner-border spinner-border-sm" />
            <span v-else class="text-white">Claim Job</span>
          </button>
        </div>
      </div>

      <!-- body -->

      <div class="row justify-content-between px-4 py-3">

<div class="col-lg-6">
  <div class="row justify-content-between">
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Client Name</p>
      <p class="description">N/A</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Phone Number</p>
      <p class="description">{{ job?.phoneNumber }}</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Post Code</p>
      <p class="description">{{ type === 'moving' ? job?.dropOff?.postcode : job?.postCode }}</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Booking Date</p>
      <p class="description">{{ type === 'moving' ? formatDate(job?.bookingDate)  : formatDate(job?.startTime)}}</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">{{ type === 'moving' ? 'Pickup Location' : 'Cleaning Type' }}</p>
      <p class="description">{{ job?.pickUp?.name || job?.cleaningType }}</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title"> {{ type === 'moving' ? 'Delivery Location' : 'Time' }}</p>
      <p class="description">{{ job?.dropOff?.name || 'N/A' }}</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">{{ type === 'moving' ? 'Pickup Property Type' : 'Hours' }}</p>
      <p class="description">{{ job?.propertyType || 'N/A'}}</p>
    </div>
    <div  v-if="type === 'moving'" class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Delivery Property Type</p>
      <p class="description">N/A </p>
    </div>
    <div  v-if="type === 'moving'" class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Pickup Property Floor</p>
      <p class="description">N/A</p>
    </div>
    <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
      <p class="title">Email</p>
      <p class="description">{{ job?.email }}</p>
    </div>
    <div class="col-12 rounded-2 py-2" style="background: rgba(245, 249, 251, 1); height: 100px;">
      <p class="title">Additional Information</p>
      <p class="description d-flex gap-2 flex-wrap">
        <span v-for="info in job?.additionalServices || job?.extraData.additionalServices"> {{ info }} </span>
      </p>
    </div>
  </div>
</div>

<div class="col-lg-5 px-4 pt-2 rounded-2" style="background: rgba(245, 249, 251, 1)">
  <p class="title">{{ type === 'moving' ? 'Recent Deliveries' : 'Recent Details' }}</p>
  <ul v-if="type === 'moving'" class="list-unstyled">
    <li class="description" v-for="item in job?.items"><span v-if="item.quantity"> {{
      item.quantity }} {{
          item.id }}</span> </li>
  </ul>
  <ul class="list-unstyled">
    <li class="description" v-for="item in job?.rooms"><span v-if="item.number"> {{
       item.number}} {{
        item.name }}</span> </li>
  </ul>
</div>
</div>

    </div>
  </div>
</template>

<script>
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'
import Loader from '../loader.vue';
export default {
  name: 'ClaimJob',
  props: {
    job: Object
  },
  data() {
    return {
      searchQuery: '',
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 12400,
      display: false,
      Loader: false,
      type: null,
    };
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
  mounted() {
    this.type = localStorage.getItem('accountType');
  },
  methods: {
    async claimJob() {
      this.Loader = true
      const url = `jobs/${this.type}/${this.job.id}`
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
        } else {
          swal({
            title: "Error",
            text: response.message,
            icon: "error",
            button: "Close",
          })
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.Loader = false
      }
    },
    formatDate(data, lastSeen = false) {
      let processedData = data

      if (lastSeen) {
        const splitData = data.split(',')
        processedData = splitData[0] // Assuming you want the first part after splitting
      }

      const date = new Date(processedData)
      return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString()
    },
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    toggleDisplay() {
      this.$emit('close')
    },
  },
};
</script>

<style scoped>
.table {
  vertical-align: middle;
}

.completed {
  background-color: rgba(236, 253, 240, 1);
  color: rgba(76, 149, 108, 1)
}

.ongoing {
  color: rgba(155, 93, 0, 1);
  background-color: rgba(255, 254, 206, 1);
}

.draft {
  background: rgba(234, 236, 240, 1);
  color: rgba(0, 0, 0, 1);
}

.ongoing-circle {
  background-color: rgba(255, 106, 0, 1);
}

.completed-circle {
  background: rgba(76, 149, 108, 1);
}

.draft-circle {
  background: rgba(0, 0, 0, 1);
}

.container {
  background-color: #f8f9fa;
  background-color: rgba(240, 240, 240, 1);
  width: 85%;
}

.payment-description {
  width: 300px;
}

.search {
  width: 80%;
  border: 1px solid rgba(208, 213, 221, 1);
  border-radius: 5px;
  padding: 5px 0;
}

.search-img {
  padding-left: 5px;
}

.right {
  width: 50%;
  /* background-color: gray; */
}

/* .btn-success{
    width: 15%;
  } */
.pagination .page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
}

.pagination .page-link {
  color: #28a745;
}

.pagination .page-item.disabled .page-link {
  color: #ccc;
}

.card {
  border: 1px solid white;
  border-radius: 5px;
}
</style>
