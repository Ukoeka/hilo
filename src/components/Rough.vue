<template>
    <div class="d-flex justify-content-between vh-100">
      <!-- Sidebar Section -->
      <Sidebar class="flex-grow-1 overflow-auto" />
  
      <!-- Main Content Section -->
      <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>Wallet</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
        <div class="d-flex mb-5 justify-content-end">
          <button @click="openModal" style="background-color: rgba(36, 36, 36, 0.11); color: white; width: 20%; border: none" class="rounded-3 p-2">Withdraw</button>
        </div>
        <!-- Card Section -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex w-100 gap-3">
            <!-- 1 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Balance</h6>
                  <p class="mb-0 txt-primary fw-bold">$5,502.45</p>
                </span>

              </div>
            </div>
            <!-- 2 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Income</h6>
                  <p class="mb-0 txt-primary-next fw-bold">$9,450.00</p>
                </span>

              </div>  
            </div>
            <!-- 3 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Withdrawn</h6>
                  <p class="mb-0 txt-danger fw-bold">$3,945.55</p>
                </span>

              </div>  
            </div>
            <!-- 4 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Ongoing Jobs</h6>
                  <p class="mb-0 txt-dark fw-bold">$3,945.55</p>
                </span>
              </div>  
            </div>
          </div>
        </div>
        
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
    
          <table class="table">
            <thead>
              <tr>
                <th>S/N <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Date <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Amount <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Type <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ payment.date }}</td>
                <td>{{ payment.amount }}</td>
                <td>{{ payment.type }}</td>
              <td>
                    <span
                        :class="[
                          'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                          payment.status === 'Success' ? 'txt-primary-next' : '',
                          payment.status === 'Failed' ? 'txt-danger' : '',
                        ]"
                        style="width: fit-content"
                      >
                        {{ payment.status }}
                    </span>
                </td>
                <td>
                    <img src="../assets/Payment_Sales/more.png" alt="">
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
      <div v-show="showModal" class="modal fade show" style="display: block; background: rgba(10, 11, 21, .5);">
          <!-- Modal content here -->
          <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content p-4">
              <div class="mb-3">
                  <h5 class="modal-title text-center">Withdraw Funds</h5>
              </div>

              <div class="modal-body">
                  <!-- Form Fields -->
                  <form class="">
                      <div class="form-group mb-3">
                          <label for="itemName" class="mb-1 label">Account Number</label>
                          <input type="text" class="modal-inputs p-3 mb-3" id="itemName" v-model="itemName" />
                      </div>
                      <div class="form-group">
                          <label for="movingCost" class="mb-1 label">Bank</label>
                          <input type="text" class="modal-inputs p-3 mb-3" id="movingCost" v-model="movingCost" />
                      </div>
                      <div class="form-group">
                          <label for="movingCost" class="mb-1 label">Amount</label>
                          <input type="text" class="modal-inputs p-3 mb-3" id="movingCost" v-model="movingCost" />
                      </div>
                      <div class="form-group">
                          <label for="movingCost" class="mb-1 label">Routing Number</label>
                          <input type="text" class="modal-inputs p-3 mb-3" id="movingCost" v-model="movingCost" />
                      </div>
                  </form>
              </div>
              <div class="modal-footer justify-content-between">
                  <button type="button" class="btn btn-dark text-white col-12 p-2" @click="closeModal2">Submit</button>
              </div>
          </div>
          </div>
        </div>
    </div>
  </template>
  
<script>
    import Sidebar from '../components/Sidebar.vue'
    export default {
      components:{
        Sidebar
      },
      data() {
        return {
          payments: [
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Failed' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Failed' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Failed' },
            {type:'Funding',date: '7/july/2024', amount: '£ 439,000', status: 'Success' },
          ],
          showModal: false,
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
        changePage(page) {
          if (page !== '...' && page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
          }
        },
        openModal() {
          this.showModal = true;
        },
      },
    };
</script>
<style scoped>
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
    .draft{
      background: rgba(234, 236, 240, 1);
      color: rgba(0, 0, 0, 1);
    }
    .ongoing-circle{
      background-color:rgba(255, 106, 0, 1) ;
    }
    .completed-circle{
      background: rgba(76, 149, 108, 1);
    }
    .draft-circle{
      background: rgba(0, 0, 0, 1);
    }
    .container {
      background-color: #f8f9fa;
      background-color: rgba(240, 240, 240, 1);
      width: 85%;
    }
    .payment-description{
      width: 300px;
    }
    .inputs{
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
    .search{
      width: 60%;
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
    