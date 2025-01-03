<template>
  <AdminLayout>
    <div class="d-flex justify-content-between vh-100 w-100 bg">
      <!-- Main Content Section -->
      <div class="flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>{{showMovingDetails ? "Details" : 'Moving Quotes'}}</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="" />
            <span>Favour Udoh</span>
          </div>
        </div>
        <!-- Main Content Section -->
        <div class="flex-grow-1 position-relative pt-2 px-5 h-100" v-if="!showMovingDetails">
          <!-- Card Section -->
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex w-100 gap-3">
              <!-- 1 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>All Quotes</h6>
                    <p class="mb-0">{{ movingQuotesStats.allQuotes }}</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="
                      background-color: rgba(94, 166, 244, 0.1);
                      height: 50px;
                    ">
                    <img src="../assets/Payment_Sales/shop.png" alt="" />
                  </span>
                </div>
              </div>
              <!-- 2 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Quotes Value</h6>
                    <p class="mb-0">NGN {{ movingQuotesStats.quotesValue }}</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="
                      background-color: rgba(94, 244, 136, 0.1);
                      height: 50px;
                    ">
                    <img src="../assets/Payment_Sales/card-pos.png" alt="" />
                  </span>
                </div>
              </div>
              <!-- 3 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Paid</h6>
                    <p class="mb-0">NGN {{ movingQuotesStats.paid }}</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="
                      background-color: rgba(94, 244, 136, 0.1);
                      height: 50px;
                    ">
                    <img src="../assets/Payment_Sales/card-pos.png" alt="" />
                  </span>
                </div>
              </div>
              <!-- 4 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Pending</h6>
                    <p class="mb-0">{{ movingQuotesStats.pending }}</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="
                      background-color: rgba(255, 254, 206, 1);
                      height: 50px;
                    ">
                    <img src="../assets/Payment_Sales/convertshape.png" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quotes Table Section -->
          <div class="card p-3 mb-3">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Quotes</h2>
                <p class="p-1 rounded-1 m-0" style="
                    background: rgba(247, 250, 255, 1);
                    color: rgba(76, 149, 108, 1);
                    line-height: none;
                  ">
                 {{movingQuotesStats.allQuotes}} Quotes
                </p>
              </div>
              <div class="d-flex align-items-center gap-3 justify-content-between ">
                <div class="d-none  d-flex align-items-center justify-content-center search">
                  <img src="../assets/Payment_Sales/search.png" alt="" class="search-img" />
                  <input type="text" class="inputs" placeholder="Search" v-model="searchQuery" />
                </div>
                <button class="d-none d-flex gap-2 btn">
                  <img src="../assets/Payment_Sales/filter-lines.png" alt="" />
                  Filters
                </button>
                <router-link to="/book-driver" class="btn btn-success d-flex align-items-center gap-2 justify-content-center">
                  <span><img src="../assets/Payment_Sales/plus.png" alt="" /></span>
                  Add New
                </router-link> 
              </div>
            </div>

            <!-- Table Section -->
            <QuotesTable :data="tableData" @payment="handlePR" type='moving' :quotes-data="movingQuotes" />
          </div>

          <!-- Pagination and Items Per Page Controls -->
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex gap-3 align-items-center">
              <span>Number Of Items displayed per page</span>
              <select v-model="itemsPerPage" class="form-select" style="
                  width: 65px;
                  background-color: #28a745;
                  color: white;
                  border: none;
                ">
                <option value="10">10</option>
                <option value="14">14</option>
                <option value="20">20</option>
              </select>
              <p class="mb-0">
                {{ displayedStartIndex }}-{{ displayedEndIndex }} of
                {{ totalItems }} items
              </p>
            </div>
            <div>
              <ul class="pagination mb-0">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <button class="page-link" @click="changePage(currentPage - 1)">
                    <img src="../assets/Payment_Sales/pageleft.png" alt="" />
                  </button>
                </li>
                <li v-for="page in visiblePages" :key="page" class="page-item"
                  :class="{ active: currentPage === page }">
                  <button class="page-link" @click="changePage(page)">
                    {{ page }}
                  </button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button class="page-link" @click="changePage(currentPage + 1)">
                    <img src="../assets/Payment_Sales/pageright.png" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- MOving Details -->
        <DriversPaymentRequest v-if="showMovingDetails" @payment="handlePR" type="moving" :quotesId="quotesId" />
      </div>
    </div>
  </AdminLayout>

  <div v-if="showModal" class="modal fade show" style="display: block; background: rgba(10, 11, 21, 0.5)">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-4">
        <div class="modal-header">
          <h5 class="modal-title m-auto">Add Quotes</h5>
        </div>

        <div class="modal-body">
          <!-- Form Fields -->
          <form class="mt-4">
            <!-- Service Type -->
            <div class="mb-3">
              <label for="serviceType" class="form-label">Service Type</label>
              <select id="serviceType" class="form-select" required v-model="quotesBody.serviceType">
                <option value="">Select Service Type</option>
                <option value="DaV">DaV</option>
                <option value="complete">Complete</option>
              </select>
            </div>

            <!-- Booking Date -->
            <div class="mb-3">
              <label for="bookingDate" class="form-label">Booking Date</label>
              <input type="datetime-local" id="bookingDate" class="form-control" required
                v-model="quotesBody.bookingDate" />
            </div>

            <!-- Hours -->
            <div class="mb-3">
              <label for="hours" class="form-label">Hours</label>
              <input type="number" id="hours" class="form-control" min="1" required v-model="quotesBody.hours" />
            </div>

            <!-- Pick-Up Details -->
            <fieldset class="border p-3 mb-3">
              <legend class="float-none w-auto px-3">Pick-Up</legend>
              <div class="mb-3">
                <label for="pickUpPostcode" class="form-label">Postcode</label>
                <input type="text" id="pickUpPostcode" class="form-control" required
                  v-model="quotesBody.pickUp.postcode" />
              </div>
              <div class="mb-3">
                <label for="pickUpName" class="form-label">Name</label>
                <input type="text" id="pickUpName" class="form-control" required v-model="quotesBody.pickUp.name" />
              </div>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="pickUpLat" class="form-label">Latitude</label>
                  <input type="number" id="pickUpLat" class="form-control" step="any" required
                    v-model="quotesBody.pickUp.lat" />
                </div>
                <div class="col-md-6">
                  <label for="pickUpLng" class="form-label">Longitude</label>
                  <input type="number" id="pickUpLng" class="form-control" step="any" required
                    v-model="quotesBody.pickUp.lng" />
                </div>
              </div>
            </fieldset>

            <!-- Drop-Off Details -->
            <fieldset class="border p-3 mb-3">
              <legend class="float-none w-auto px-3">Drop-Off</legend>
              <div class="mb-3">
                <label for="dropOffPostcode" class="form-label">Postcode</label>
                <input type="text" id="dropOffPostcode" class="form-control" required
                  v-model="quotesBody.dropOff.postcode" />
              </div>
              <div class="mb-3">
                <label for="dropOffName" class="form-label">Name</label>
                <input type="text" id="dropOffName" class="form-control" required v-model="quotesBody.dropOff.name" />
              </div>
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="dropOffLat" class="form-label">Latitude</label>
                  <input type="number" id="dropOffLat" class="form-control" step="any" required
                    v-model="quotesBody.dropOff.lat" />
                </div>
                <div class="col-md-6">
                  <label for="dropOffLng" class="form-label">Longitude</label>
                  <input type="number" id="dropOffLng" class="form-control" step="any" required
                    v-model="quotesBody.dropOff.lng" />
                </div>
              </div>
            </fieldset>

            <!-- Contact Information -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-control" required v-model="quotesBody.email" />
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">Phone Number</label>
              <input type="tel" id="phoneNumber" class="form-control" required v-model="quotesBody.phoneNumber" />
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-between">
          <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2" @click="closeModal">
            Cancel
          </button>
          <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addQuote">
            Add Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import QuotesTable from "@/components/Dashboard/QuotesTable.vue";
import DriversPaymentRequest from "@/components/Dashboard/DriversPaymentRequest.vue";
import loader from "@/components/loader.vue";
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";

export default {
  components: {
    Sidebar,
    AdminLayout,
    QuotesTable,
    DriversPaymentRequest,
  },
  data() {
    return {
      searchQuery: "",
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1, // Current page number
      totalItems: 12400, // Total number of items (example)
      showMovingDetails: false,
      movingQuotesStats: {
        allQuotes: 0,
        quotesValue: 0,
        paid: 0,
        pending: 0,
      },
      movingQuotes: [],
      showModal: false,

      quotesBody: {
        serviceType: "DaV", // must be one of: [DaV, complete]
        bookingDate: "2024-12-15T16:29:34.767Z",
        hours: 2,
        pickUp: {
          postcode: "23422",
          name: "Georgia",
          lat: 0.38843,
          lng: 2.32111,
        },
        dropOff: {
          postcode: "23422",
          name: "Georgia",
          lat: 0.38843,
          lng: 2.32111,
        },
        email: "Shaun80@gmail.com",
        phoneNumber: "332-834-2149",
      },
      quotesId: null,
    };
  },
  mounted() {
    this.fetchMQStats();
    this.fetchQuotes(1, this.itemsPerPage);
  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal ) {
        this.fetchQuotes(this.currentPage, newVal)
      }
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
      return Math.min(
        this.displayedStartIndex + this.itemsPerPage - 1,
        this.totalItems
      );
    },
    visiblePages() {
      // Only show the first few and last pages with ellipsis in between
      const range = [];
      if (this.totalPages <= 5) {
        for (let i = 1; i <= this.totalPages; i++) {
          range.push(i);
        }
      } else if (this.currentPage <= 3) {
        range.push(1, 2, 3, 4, "...", this.totalPages);
      } else if (this.currentPage > this.totalPages - 3) {
        range.push(
          1,
          "...",
          this.totalPages - 3,
          this.totalPages - 2,
          this.totalPages - 1,
          this.totalPages
        );
      } else {
        range.push(
          1,
          "...",
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          "...",
          this.totalPages
        );
      }
      return range;
    },
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

    async addQuote() {
      try {
        const url = `booking/man-and-van`;
        const resp = await postToApi(url, this.quotesBody);
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          })
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    async fetchQuotes(page, pageSize) {
      try {
        const url = `quotes?type=moving&page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.movingQuotes = resp.data;
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    async fetchMQStats() {
      try {
        const url = `statistics/moving-quotes`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.movingQuotesStats = resp.data;
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    handlePR(id) {
      console.log("called");
      this.quotesId = id;
      if (this.quotesId) {
        // Toggle between main and detail views
        this.showMovingDetails = !this.showMovingDetails;
      } else {
        this.showMovingDetails = false;
      }
    },

    changePage(page) {
      this.fetchQuotes(page, this.itemsPerPage)
      if (page !== "..." && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    openModal() {
      this.showModal = true;
      console.log("called");
    },
    closeModal() {
      this.showModal = false;
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
  color: rgba(76, 149, 108, 1);
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

.inputs {
  display: block;
  width: 100%;
  /* padding: .375rem .75rem; */
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: var(--bs-body-color);
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border: 1px transparent;
}

.search {
  width: 60%;
  border: 1px solid rgba(208, 213, 221, 1);
  border-radius: 5px;
  padding: 5px 0;
}

.search-img {
  padding-left: 5px;
}

.right {
  width: 55%;
  /* background-color: gray; */
}

/* .btn-success{
      width: 15%;
    } */
.pagination .page-item.active .page-link {
  background-color: #28a745;
  border-color: #28a745;
  color: white;
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
