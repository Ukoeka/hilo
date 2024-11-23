<template>
  <AdminLayout>
    <div class="d-flex justify-content-between vh-100 w-100  bg ">

      <!-- Main Content Section -->
      <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>Moving Quotes</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
        <!-- Main Content Section -->
        <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto" v-if="!showMovingDetails">
          <!-- Card Section -->
          <div class="d-flex justify-content-between align-items-center mb-4">
            <div class="d-flex w-100 gap-3">
              <!-- 1 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>All Quotes</h6>
                    <p class="mb-0">10,000</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3"
                    style="background-color: rgba(94, 166, 244, 0.1); height: 50px;">
                    <img src="../assets/Payment_Sales/shop.png" alt="">
                  </span>
                </div>
              </div>
              <!-- 2 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Quotes Value</h6>
                    <p class="mb-0">NGN 99,500,000</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3"
                    style="background-color: rgba(94, 244, 136, 0.1); height: 50px;">
                    <img src="../assets/Payment_Sales/card-pos.png" alt="">
                  </span>
                </div>
              </div>
              <!-- 3 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Paid</h6>
                    <p class="mb-0">NGN 4,500,900</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3"
                    style="background-color: rgba(94, 244, 136, 0.1); height: 50px;">
                    <img src="../assets/Payment_Sales/card-pos.png" alt="">
                  </span>
                </div>
              </div>
              <!-- 4 -->
              <div class="card p-4 payment-description">
                <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                  <span>
                    <h6>Pending</h6>
                    <p class="mb-0">500</p>
                  </span>
                  <span class="d-flex align-items-center justify-content-between p-3 rounded-3"
                    style="background-color: rgba(255, 254, 206, 1); height: 50px;">
                    <img src="../assets/Payment_Sales/convertshape.png" alt="">
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
                <p class="p-1 rounded-1 m-0"
                  style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">10,000
                  Quotes</p>
              </div>
              <div class="d-flex align-items-center right gap-3 justify-content-between">
                <div class="d-flex align-items-center justify-content-center search">
                  <img src="../assets/Payment_Sales/search.png" alt="" class="search-img">
                  <input type="text" class="inputs" placeholder="Search" v-model="searchQuery" />
                </div>
                <button class="d-flex gap-2 btn">
                  <img src="../assets/Payment_Sales/filter-lines.png" alt="">
                  Filters
                </button>
                <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center">
                  <span><img src="../assets/Payment_Sales/plus.png" alt=""></span>
                  Add New
                </button>
              </div>
            </div>

            <!-- Table Section -->
            <QuotesTable :data="tableData" @payment="handlePR" />

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

        <!-- MOving Details -->
        <DriversPaymentRequest v-if="showMovingDetails" @payment="handlePR"  />
      </div>
    </div>
  </AdminLayout>

</template>

<script>
import Sidebar from '../components/Sidebar.vue'
import AdminLayout from '@/layouts/AdminLayout.vue';
import QuotesTable from '@/components/Dashboard/QuotesTable.vue';
import DriversPaymentRequest from '@/components/Dashboard/DriversPaymentRequest.vue';

export default {
  components: {
    Sidebar,
    AdminLayout,
    QuotesTable,
    DriversPaymentRequest
  },
  data() {
    return {
      tableData: [
        {
          customer: "Raman Ismail",
          pickup: "Birmingham",
          dropoff: "Central Square",
          date: "7/7/2024",
          amount: "NGN 439,000",
          status: "Paid",
        },
        {
          customer: "Raman Ismail",
          pickup: "Birmingham",
          dropoff: "Central Square",
          date: "7/7/2024",
          amount: "NGN 439,000",
          status: "Pending",
        },
        {
          customer: "Raman Ismail",
          pickup: "Birmingham",
          dropoff: "Central Square",
          date: "7/7/2024",
          amount: "NGN 439,000",
          status: "Draft",
        },
        // Add more data here
      ],
      searchQuery: '',
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1,    // Current page number
      totalItems: 12400, // Total number of items (example)
      showMovingDetails: false,
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
  methods: {
    handlePR() {
      console.log('called')
      // Toggle between main and detail views
      this.showMovingDetails = !this.showMovingDetails
    },
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
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
