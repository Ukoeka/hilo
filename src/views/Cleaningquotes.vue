<template>
  <AdminLayout>
    <div class="vh-100 w-100 bg d-flex flex-column p-3">
      <Nav title="Cleaning Quotes" />
      <!-- Main Content Section -->
      <div v-if="!showMovingDetails" class="flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2 p-3">
              <h5 class="size-18">Cleanings</h5>
              <p class="p-1 rounded-1 m-0 size-15" style="
                  background: rgba(247, 250, 255, 1);
                  color: rgba(76, 149, 108, 1);
                  line-height: none;
                ">
                {{ totalItems }} quotes
              </p>
            </div>
            <router-link to="/book-cleaning" class="btn btn-success d-flex align-items-center gap-2 justify-content-center">
                  <span><img src="../assets/Payment_Sales/plus.png" alt="" /></span>
                  Add New
                </router-link> 
          </div>
          <div class="container mt-4">
            <span class="spinner-border spinner-border-lg text-success" role="status" aria-hidden="true" v-if="Loader"></span>
            <table v-else class="table align-middle text-center">
              <thead>
                <tr class="text-secondary">
                  <th class="text-grayed">Serial Number</th>
                  <th class="text-grayed">Client Name</th>
                  <th class="text-grayed">Post Code</th>
                  <th class="text-grayed">Cleaning Type</th>
                  <th class="text-grayed">Hours</th>
                  <th class="text-grayed">Booking Date</th>
                  <th class="text-grayed">Time</th>
                  <th class="text-grayed">Phone Number</th>
                  <th class="text-grayed">Status</th>
                  <th class="text-grayed"></th> <!-- Empty column for action menu -->
                </tr>
              </thead>
              <tbody>
                <!-- Single Row -->
                <tr v-for="(item, index) in cleaningQuotes" :key="item in cleaningQuotes">
                  <td class="text-grayed">{{ index + 1 }}</td>
                  <td class="text-grayed">N/A</td>
                  <td class="text-grayed fw-bold">{{ item.postCode }}</td>
                  <td class="text-grayed text-primary">{{ item.cleaningType }}</td>
                  <td class="text-grayed">8</td>
                  <td class="text-grayed">1/1/2001</td>
                  <td class="text-grayed">10:00 AM</td>
                  <td class="text-grayed">{{ item.phoneNumber }}</td>
                  <td class="text-grayed">
                    <span class="badge bg-success rounded-pill px-2 py-1">
                      <span class="me-1" style="font-size: 0.8rem;">●</span> {{ item.status }}
                    </span>
                  </td>
                  <td class="text-grayed">
                    <button class="btn btn-sm btn-success text-white rounded-full"
                      @click="showDetails(item.id)">view</button>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Pagination and Items Per Page Controls -->
          <div class="d-flex align-items-center justify-content-between">
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
                    <img src="../assets/Payment_Sales/pageleft.png" alt="">
                  </button>
                </li>
                <li v-for="page in visiblePages" :key="page" class="page-item"
                  :class="{ active: currentPage === page }">
                  <button class="page-link" @click="changePage(page)">{{ page }}</button>
                </li>
                <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                  <button class="page-link" @click="changePage(currentPage + 1)">
                    <img src="../assets/Payment_Sales/pageright.png" alt="">
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Details Cleaning -->
      </div>
      <DriversPaymentRequest v-if="showMovingDetails" @payment="handlePR" type="cleaning" :quotesId="quotesId" />

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
            <!-- Postcode -->
            <div class="mb-3">
              <label for="postCode" class="form-label">Postcode</label>
              <input type="text" id="postCode" class="form-control" v-model="cleaningData.postCode" />
            </div>

            <!-- Cleaning Type -->
            <div class="mb-3">
              <label for="cleaningType" class="form-label">Cleaning Type</label>
              <select id="cleaningType" class="form-select" v-model="cleaningData.cleaningType">
                <option value="oneTime">One Time</option>
                <option value="recurring">Recurring</option>
              </select>
            </div>

            <!-- Phone Number -->
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">Phone Number</label>
              <input type="tel" id="phoneNumber" class="form-control" v-model="cleaningData.phoneNumber" />
            </div>

            <!-- Start Time -->
            <div class="mb-3">
              <label for="startTime" class="form-label">Start Time</label>
              <input type="datetime-local" id="startTime" class="form-control" v-model="cleaningData.startTime" />
            </div>

            <!-- End Time -->
            <div class="mb-3">
              <label for="endTime" class="form-label">End Time</label>
              <input type="datetime-local" id="endTime" class="form-control" v-model="cleaningData.endTime" />
            </div>

            <!-- Additional Services -->
            <div class="mb-3">
              <label class="form-label">Additional Services</label>
              <div class="form-check" v-for="service in availableServices" :key="service">
                <input type="checkbox" class="form-check-input" :id="`service-${service}`" :value="service"
                  v-model="cleaningData.additionalServices" />
                <label class="form-check-label" :for="`service-${service}`">{{ service }}</label>
              </div>
            </div>

            <!-- Pets -->
            <div class="mb-3">
              <label class="form-label">Do You Have Pets?</label>
              <div class="form-check">
                <input type="radio" name="havePets" id="petsYes" class="form-check-input" value="true"
                  v-model="cleaningData.havePets" />
                <label for="petsYes" class="form-check-label">Yes</label>
              </div>
              <div class="form-check">
                <input type="radio" name="havePets" id="petsNo" class="form-check-input" value="false"
                  v-model="cleaningData.havePets" />
                <label for="petsNo" class="form-check-label">No</label>
              </div>
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" id="email" class="form-control" v-model="cleaningData.email" />
            </div>

            <!-- Rooms -->
            <fieldset class="border p-3 mb-3">
              <legend class="float-none w-auto px-3">Rooms</legend>
              <div v-for="(room, index) in cleaningData.rooms" :key="index" class="mb-3">
                <div class="row g-3">
                  <div class="col-md-6">
                    <label :for="`roomName-${index}`" class="form-label">Room Name</label>
                    <input type="text" :id="`roomName-${index}`" class="form-control" v-model="room.name"
                      placeholder="e.g., Bathroom" />
                  </div>
                  <div class="col-md-6">
                    <label :for="`roomNumber-${index}`" class="form-label">Number of Rooms</label>
                    <input type="number" :id="`roomNumber-${index}`" class="form-control" v-model="room.number"
                      min="1" />
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-secondary mt-2" @click="addRoom">Add Room</button>
            </fieldset>


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
import Quotes from "./Quotes.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import DriversPaymentRequest from "@/components/Dashboard/DriversPaymentRequest.vue";
import loader from "@/components/loader.vue";
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";
import Nav from "@/components/Nav.vue";


export default {
  components: {
    AdminLayout,
    DriversPaymentRequest,
    Quotes,
    Nav
  },

  data() {
    return {
      showMovingDetails: false,
      Loader: false,
      cleaningData: {
        postCode: "41020",
        cleaningType: "oneTime",
        phoneNumber: "1273273283",
        startTime: "2024-12-15T22:28:15.808Z",
        endTime: "2024-12-15T22:28:15.808Z",
        additionalServices: ["ironning", "laundry", "carpet cleaned"],
        havePets: false,
        email: "testcustomer@test.email",
        rooms: [
          {
            name: "Bathroom",
            number: 2,
          },
        ],
  
      },
      availableServices: ["ironning", "laundry", "carpet cleaned", "window cleaning", "dusting"],

      searchQuery: "",
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1, // Current page number
      totalItems: 0, // Total number of items (example)
      showModal: false,
      cleaningQuotes: [],
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
  mounted() {
    this.fetchQuotes(1, this.itemsPerPage);
  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal ) {
        this.fetchQuotes(this.currentPage, newVal)
      }
    }
  },
  methods: {
    showDetails(id) {
      this.quotesId = id;
      if (this.quotesId) this.showMovingDetails = true;
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

    async fetchQuotes(page, pageSize) {
      this.Loader = true
      try {
        const url = `quotes?type=cleaning&page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.cleaningQuotes = resp.data;
          this.totalItems = resp.pagination.totalRecords
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
      finally {
        this.Loader = false
      }
    },
    async addQuote() {
      try {
        const url = `booking/cleaning`;
        const resp = await postToApi(url, this.cleaningData);
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
    addRoom() {
      cleaningData.rooms.push({ name: "", number: 1 });
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
  width: 95%;
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
  color: #fff;
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
