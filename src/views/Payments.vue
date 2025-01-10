<template>
  <AdminLayout>
    <!-- main view -->
    <div class="vh-100 w-100 bg d-flex flex-column">
      <Nav title="Payments Requests" />
      <!-- Main Content Section -->
      <div class="flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto" v-if="showDetails || showCleanerDetails">
        <!-- Filter Tabs -->
        <div class="d-flex gap-3 mb-4 p-3 w-25 border rounded-4 bg-white justify-content-around text-grayed">
          <span class="toggle-active" :class="{ active: filterType === 'all' }" @click="filterBy('all')">
            All
          </span>
          <span class="toggle-active" :class="{ active: filterType === 'driver' }" @click="filterBy('driver')">
            Drivers
          </span>
          <span class="toggle-active" :class="{ active: filterType === 'cleaner' }" @click="filterBy('cleaner')">
            Cleaners
          </span>
        </div>

        <!-- Payment Overview Cards -->
        <div v-if="showDetails" class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex gap-3">
            <OverView v-for="card in cards" :key="card.title" :title="card.title" :value="card.value" :icon="card.icon"
              :icon-bg="card.iconBg" class="" />
          </div>
        </div>

        <!-- Payment Requests Table -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div>
              <h2 class="size-18">Payment Requests</h2>
              <p class="text-grayed">
                List Of All Payment Requests on The Platform
              </p>
            </div>
            <div class="d-flex align-items-center gap-3 w-25">
              <div class="d-none d-flex align-items-center search">
                <img src="../assets/Payment_Sales/search.png" alt="" class="search-img" />
                <input type="text" class="inputs" placeholder="Search" v-model="searchQuery" style="width: 100%" />
              </div>
              <button class="btn btn-outline-secondary d-none">
                <img src="../assets/Payment_Sales/filter-lines.png" alt="" />
                Filters
              </button>
            </div>
          </div>

          <div>
            <div v-if="Loader" class="spinner-border text-success"></div>
            <TableDetails v-else @paymentRequest="handlePR" :items="paymentData" />

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

        </div>
      </div>
      <!-- Details Moving -->
      <PaymentRequest v-if="!showDetails" @payment="handlePR" :requestId="requestId" :requestType="requestType" />
    </div>

  </AdminLayout>
</template>

<script>
import OverView from "@/components/OverView.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import TableDetails from "@/components/Dashboard/TableDetails.vue";
import PaymentRequest from "@/components/Dashboard/PaymentRequest.vue";
import Nav from "@/components/Nav.vue";
// Images
import pos from "../assets/Payment_Sales/card-pos.png";
import shop from "../assets/Payment_Sales/shop.png";
import CleanersPaymentRequest from "@/components/Dashboard/CleanersPaymentRequest.vue";
import loader from "@/components/loader.vue";
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";
import Loader from "@/components/loader.vue";

export default {
  components: {
    OverView,
    AdminLayout,
    TableDetails,
    PaymentRequest,
    CleanersPaymentRequest,
    Nav,
  },
  data() {
    return {
      requestId: null,
      requestType: null,
      searchQuery: "",
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1,    // Current page number
      totalItems: 0, // Total number of items (example)
      filterType: "all",
      showDetails: true,
      showCleanerDetails: true,
      cards: [
        {
          title: "All Payments",
          value: "0",
          icon: shop,
          iconBg: "#5EA6F41A",
          id: "allPayments",
        },
        {
          title: "Requests",
          value: "0",
          icon: shop,
          iconBg: "#F45E5E1A",
          id: "requests",
        },
        {
          title: "Payments value",
          value: "0",
          icon: pos,
          iconBg: "#292D321A",
          id: "paymentValue",
        },
      ],
      paymentData: null,
      Loader: false,
    };
  },
  created() {
    this.fetchPaymentRequestStats();
    this.fetchPaymentRequest(this.currentPage, this.itemsPerPage);
  },
  computed: {
    filteredList() {
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        return this.paymentData.filter((item) => {
          return Object.keys(item).some((key) => {
            return String(item[key]).toLowerCase().includes(query);
          });
        });
      } else {
        return this.paymentData;
      }
    },
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
        this.filterType == 'all' ? this.fetchPaymentRequest(this.currentPage, newVal) : this.fetchPaymentRequest(this.currentPage, newVal, this.filterType)
      }
    },
    searchQuery(newVal, oldVal) { }
  },
  methods: {
    async fetchPaymentRequestStats() {
      try {
        const url = `statistics/payment-requests`;
        const resp = await fetchFromApi(url);
        if (resp) {
          const stats = Object.keys(resp);

          stats.forEach((element) => {
            this.cards.forEach((card) => {
              if (card.id === element) {
                card.value = resp[element];
              }
            });
          });
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
    async fetchPaymentRequest(page, pageSize, type, status) {
      this.Loader = true

      try {
        let url
        if (status) {
          url = `payment-requests?page=${page}&pageSize=${pageSize}&type=${type}&status=${status}`
        } else if (type) {
          url = `payment-requests?page=${page}&pageSize=${pageSize}&type=${type}`
        } else {
          url = `payment-requests?page=${page}&pageSize=${pageSize}`
        }


        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.paymentData = resp.data;
          this.totalItems = resp.data.length;
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
    handlePR(id) {
      console.log("called", id);
      if (id) {
        this.requestId = id;
        this.requestType =
          this.filterType == "all" ? "driver" : this.filterType;
      }
      // Toggle between main and detail views
      if (this.filterType === "cleaners") {
        this.showCleanerDetails = !this.showCleanerDetails;
      } else {
        this.showDetails = !this.showDetails;
      }
    },
    changePage(page) {
      this.filterType == 'all' ? this.fetchPaymentRequest(page, this.itemsPerPage) : this.fetchPaymentRequest(page, this.itemsPerPage, this.filterType)
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    filterBy(type) {
      this.filterType = type;
      this.filterType == 'all' ? this.fetchPaymentRequest(this.currentPage, this.itemsPerPage) : this.fetchPaymentRequest(this.currentPage, this.itemsPerPage, type)

    },
  },
};
</script>

<style scoped>
.body-area {
  box-sizing: border-box;
}

.title {
  color: rgba(102, 112, 133, 1);
  font-weight: 500;
}

.description {
  color: rgba(16, 24, 40, 1);
  font-weight: 800;
}

.list li {
  color: rgba(16, 24, 40, 1);
}

.icon-background {
  height: 50px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(94, 166, 244, 0.1);
}

.icon-background-2 {
  background: rgba(244, 94, 94, 0.1);
  height: 50px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.toggle-active.active {
  border-bottom: 1px solid rgba(76, 149, 108, 1);
  /* Active background color */
  color: rgba(76, 149, 108, 1);
}

.toggle-active {
  cursor: pointer;
}

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

.ongoing-circle {
  background-color: rgba(255, 106, 0, 1);
}

.completed-circle {
  background: rgba(76, 149, 108, 1);
}

.container {
  background-color: rgba(240, 240, 240, 1);
  width: 100%;
}

.inputs {
  display: block;
  width: 100%;
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
  width: 80%;
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
