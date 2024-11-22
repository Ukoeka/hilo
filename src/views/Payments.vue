<template>
  <AdminLayout>
    <!-- main view -->
    <div class="vh-100 w-100 bg d-flex flex-column ">
      <div class="d-flex justify-content-between px-3 sizing mb-5 mt-4">
        <h2>Payments Requests</h2>
        <div class="d-flex gap-3 align-items-center profile">
          <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
          <span>Favour Udoh</span>
        </div>
      </div>
      <!-- Main Content Section -->
      <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto" v-if="showDetails || showCleanerDetails">


        <!-- Filter Tabs -->
        <div class="d-flex gap-3 mb-4 p-3 w-25 border rounded-4 bg-white justify-content-around">
          <span class="toggle-active" :class="{ active: filterType === 'all' }" @click="filterBy('all')">
            All
          </span>
          <span class="toggle-active" :class="{ active: filterType === 'drivers' }" @click="filterBy('drivers')">
            Drivers
          </span>
          <span class="toggle-active" :class="{ active: filterType === 'cleaners' }" @click="filterBy('cleaners')">
            Cleaners
          </span>
        </div>

        <!-- Payment Overview Cards -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex gap-3 ">
            <OverView v-for="card in cards" :key="card.title" :title=card.title :value=card.value :icon=card.icon
              :icon-bg="card.iconBg" class="" />
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
                <input type="text" class="inputs" placeholder="Search" v-model="searchQuery" />
              </div>
              <button class="btn btn-outline-secondary">
                <img src="../assets/Payment_Sales/filter-lines.png" alt="">
                Filters
              </button>
            </div>
          </div>
          <TableDetails @paymentRequest="handlePR" />

        </div>


      </div>
      <!-- Details Moving -->

      <PaymentRequest v-if="!showDetails" @payment="handlePR" />
      <CleanersPaymentRequest v-if="!showCleanerDetails" @payment="handlePR" />
    </div>
  </AdminLayout>


</template>

<script>

import OverView from '@/components/OverView.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import TableDetails from '@/components/Dashboard/TableDetails.vue';
import PaymentRequest from '@/components/Dashboard/PaymentRequest.vue';
// Images
import pos from '../assets/Payment_Sales/card-pos.png'
import shop from '../assets/Payment_Sales/shop.png'
import CleanersPaymentRequest from '@/components/Dashboard/CleanersPaymentRequest.vue';

export default {
  components: {
    OverView,
    AdminLayout,
    TableDetails,
    PaymentRequest,
    CleanersPaymentRequest
  },
  data() {
    return {

      searchQuery: '',
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 12400,
      filterType: 'all',
      showDetails: true,
      showCleanerDetails: true,
      cards: [
        {
          title: 'All Payments',
          value: '10,000',
          icon: shop,
          iconBg: '#5EA6F41A'
        },
        {
          title: 'Requests',
          value: '399',
          icon: shop,
          iconBg: '#F45E5E1A'
        },
        {
          title: 'Payments value',
          value: 'NGN 999,000',
          icon: pos,
          iconBg: '#292D321A'
        }
      ]
    };
  },

  methods: {
    filterBy(type) {
      this.filterType = type;
    },
    handlePR() {
      console.log('called')
      // Toggle between main and detail views
      if (this.filterType === 'cleaners') {

        this.showCleanerDetails = !this.showCleanerDetails;
      } else {
        this.showDetails = !this.showDetails;

      }
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
