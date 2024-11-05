<template>
  <!-- main view -->
  <div class="d-flex justify-content-between vh-100" >
    <!-- Sidebar Section -->
    <Sidebar class="flex-grow-1 overflow-auto" />

    <!-- Main Content Section -->
    <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto" v-show="!showDetails">
      
      <Nav title='Payment Request' />

      <!-- Filter Tabs -->
      <div class="d-flex gap-3 mb-4 p-2 w-25 border rounded-4 bg-white justify-content-around">
          <span 
            class="toggle-active" 
            :class="{ active: filterType === 'all' }"
            @click="filterBy('all')"
          >
            All
          </span>
          <span 
            class="toggle-active" 
            :class="{ active: filterType === 'drivers' }"
            @click="filterBy('drivers')"
          >
            Drivers
          </span>
          <span 
            class="toggle-active" 
            :class="{ active: filterType === 'cleaners' }"
            @click="filterBy('cleaners')"
          >
            Cleaners
          </span>
      </div>

      <!-- Payment Overview Cards -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div class="d-flex w-100 gap-3">
          <div class="card p-4 payment-description">
            <div class="w-100 h-100 d-flex align-items-center justify-content-between">
              <span>
                <h6>All Payments</h6>
                <p class="mb-0">10,000</p>
              </span>
              <span class="icon-background ">
                <img src="../assets/Payment_Sales/shop.png" alt="">
              </span>
            </div>
          </div>
          <div class="card p-4 payment-description">
            <div class="w-100 h-100 d-flex align-items-center justify-content-between">
              <span>
                <h6>Requests</h6>
                <p class="mb-0">399</p>
              </span>
              <span class="icon-background-2">
                <img src="../assets/Payment_Sales/shop.png" alt="">
              </span>
            </div>
          </div>
          <div class="card p-4 payment-description">
            <div class="w-100 h-100 d-flex align-items-center justify-content-between">
              <span>
                <h6>Payment Value</h6>
                <p class="mb-0">NGN 99,500,000</p>
              </span>
              <span class="icon-background">
                <img src="../assets/Payment_Sales/card-pos.png" alt="">
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Payment Requests Table -->
      <div class="card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div>
            <h2>Payment Requests</h2>
            <p>List Of All Payment Requests on The Platform</p>
          </div>
          <div class="d-flex align-items-center gap-3 w-50">
            <div class="d-flex align-items-center search">
              <img src="../assets/Payment_Sales/search.png" alt="" class="search-img">
              <input type="text" class="inputs" placeholder="Search" v-model="searchQuery"/>
            </div>
            <button class="btn btn-outline-secondary">
              <img src="../assets/Payment_Sales/filter-lines.png" alt="">
              Filters
            </button>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr class="">
              <th class="">Serial Number <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Driver <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Account Type <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Date <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Amount <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Status <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="">Action <img class="" src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in filteredPayments" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ payment.customer }}</td>
              <td>{{ payment.accountType }}</td>
              <td>{{ payment.date }}</td>
              <td>{{ payment.amount }}</td>
              <td>
                <span
                    :class="[
                      'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                      payment.status === 'Completed' ? 'completed' : '',
                      payment.status === 'Payment Request' ? 'ongoing' : ''
                    ]"
                    style="width: fit-content"
                  >
                  <div
                    :class="[
                      payment.status === 'Completed' ? 'completed-circle' : '',
                      payment.status === 'Payment Request' ? 'ongoing-circle' : ''
                    ]"
                    class="rounded-circle"
                    style="height: 10px; width: 10px;"
                  ></div>
                    {{ payment.status }}
                </span>
              </td>
              <td>
                <button v-if="payment.status === 'Payment Request' || payment.status === 'Completed' " class="btn " style="background: rgba(76, 149, 108, 1); color: white;">Detail</button>
                <button v-if="payment.status === 'Payment Request'" class="btn" style="margin-left: 20px; border: 1px solid rgba(54, 136, 90, 1); background: transparent; color: rgba(54, 136, 90, 1)">Approve</button>
                <button v-if="payment.status === 'Payment Request'" class="btn" style="color: rgba(188, 78, 78, 1); background: transparent; margin-left: 20px; ">Deny</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination and Items Per Page Controls -->
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex gap-3 align-items-center">
          <span>Number Of Items displayed per page</span>
          <select v-model="itemsPerPage" class="form-select" style="width: 65px; background-color: #28a745; color: white; border: none;">
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
            <li
              v-for="page in visiblePages"
              :key="page"
              class="page-item"
              :class="{ active: currentPage === page }"
            >
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
    <!-- Details Moving -->
    <div class="container flex-grow-1 h-100 overflow-auto p-5" v-show="showDetails">
      <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h6>Details Moving</h6>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
      </div>
      <div class="bg-white">
        <div class="rounded-4">
          <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
            <button class=" rounded-circle border bg-white" @click="showDetail" style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
            <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
              <p class="m-0">Assigned Driver</p>
              <span class="badge bg-light text-dark px-3 py-2 me-2">Charlie Brakus</span>
              <button class="btn btn-success">Driver Profile</button>          
            </div>
          </div>

          <!-- body -->

          <div class="row justify-content-between px-4 py-3">

            <div class="col-lg-6">
              <div class="row justify-content-between">
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Client Name</p>
                  <p class="description">Charlie Brakus</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Phone Number</p>
                  <p class="description">+44 012 9904 9944</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Post Code</p>
                  <p class="description">B455AT</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Booking Date</p>
                  <p class="description">1/1/2001</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Location</p>
                  <p class="description">Birmingham</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Delivery Location</p>
                  <p class="description">10:00 AM</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Property Type</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Delivery Property Type</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Property Floor</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Email</p>
                  <p class="description">Phamo@gmail.com</p>
                </div>
                <div class="col-12 rounded-2 py-2" style="background: rgba(245, 249, 251, 1); height: 100px;">
                  <p class="title">Additional Information</p>
                  <p class="description">Placeholder</p>
                </div>
              </div>
            </div>

            <div class="col-lg-5 px-4 pt-2 rounded-2" style="background: rgba(245, 249, 251, 1)">
              <p class="title">Recent Deliveries</p>
              <ul class="list-unstyled">
                <li class="description">2 beds</li>
                <li class="description">4 couches</li>
                <li class="description">8 chairs</li>
                <li class="description">1 kitchen cabinet</li>
                <li class="description">1 small box</li>
                <li class="description">1 small bed</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </div>

</template>

<script>
import Nav from '../components/Nav.vue'
import Sidebar from '../components/Sidebar.vue';
export default {
  components: {
    Sidebar, Nav
  },
  data() {
    return {
      payments: [
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Completed' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
        { customer: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
        // { customer: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 'NGN 439,000', status: 'Payment Request' },
      ],
      searchQuery: '',
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 12400,
      filterType: 'all',
      showDetails:true,
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
    filteredPayments() {
      const filtered = this.filterType === 'all'
        ? this.payments
        : this.payments.filter(payment => payment.accountType.toLowerCase() === this.filterType);
      return filtered.filter(payment => payment.customer.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    filterBy(type) {
      this.filterType = type;
    },
    showDetail() {
      // Toggle between main and detail views
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style scoped>
    .body-area{
      box-sizing: border-box
    }
    .title{
      color: rgba(102, 112, 133, 1);
      font-weight:500;
    }
    .description{
      color: rgba(16, 24, 40, 1);
      font-weight: 800;
    }
    .list li{
      color: rgba(16, 24, 40, 1);
    }
    .icon-background{
      height: 50px;
      width: 50px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: rgba(94, 166, 244, 0.1); 
    }
    .icon-background-2{
      background: rgba(244, 94, 94, 0.1);
      height: 50px;
      width: 50px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .toggle-active.active {
      border-bottom:1px solid rgba(76, 149, 108, 1); /* Active background color */
      color: rgba(76, 149, 108, 1); 
    }
    .toggle-active{
      cursor: pointer;
    }
   .table{
      vertical-align: middle;
    }
    .completed{
      background-color: rgba(236, 253, 240, 1);
      color: rgba(76, 149, 108, 1)
    }
    .ongoing{
      color: rgba(155, 93, 0, 1);
      background-color: rgba(255, 254, 206, 1);
    }
    .ongoing-circle{
      background-color:rgba(255, 106, 0, 1) ;
    }
    .completed-circle{
      background: rgba(76, 149, 108, 1);
    }
    .container {
      background-color: rgba(240, 240, 240, 1);
      width: 100%;
    }
    .payment-description{
      width: 100%;
    }
    .inputs{
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
    .search{
      width: 80%;
      border: 1px solid  rgba(208, 213, 221, 1);
      border-radius: 5px;
      padding: 5px 0;
    }
    .search-img{
      padding-left: 5px;
    }
    .right{
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
    .card{
      border:1px solid white;
      border-radius: 5px;
    }
  
</style>
