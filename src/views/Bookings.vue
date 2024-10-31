<template>
    <div class="d-flex justify-content-between vh-100">
      <!-- Sidebar Section -->
      <Sidebar class="flex-grow-1 overflow-auto" />
  
      <!-- Main Content Section -->
      <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>Cleaners Quotes</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
        
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Cleanings</h2>
                <p class="p-1 rounded-1 m-0" style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">13 Quotes</p>
              </div>
              <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center">
                <span><img src="../assets/Payment_Sales/plus.png" alt=""></span>
                Add New
              </button>
          </div>
    
          <table class="table">
            <thead>
              <tr>
                <th>Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Client Name<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Post<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Cleaning Type<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Hours<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Booking Date<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Time<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Phone Number<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ payment.clientName }}</td>
                <td>{{ payment.post }}</td>
                <td>{{ payment.cleaningType }}</td>
                <td>{{ payment.hours }}</td>
                <td>{{ payment.bookingDate }}</td>
                <td>{{ payment.time }}</td>
                <td>{{ payment.PhoneNumber }}</td>
                <td>
                    <span
                        :class="[
                        'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                        payment.status === 'Active' ? 'completed' : '',
                        payment.status === 'Inactive'? 'draft': ''
                        ]"
                        style="width: fit-content"
                    >
                        <div
                        :class="[
                            payment.status === 'Active' ? 'completed-circle' : '',
                            payment.status === 'Inactive' ? 'draft-circle' : ''
                        ]"
                        class="rounded-circle"
                        style="height: 10px; width: 10px;"
                        ></div>
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
  
        <!-- Pagination and Items Per Page Controls -->
        <!-- <div class="d-flex align-items-center justify-content-between">
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
        </div> -->
        
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
            {clientName: 'Charlie Brakus',  post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Jamie Schroeder',  post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Alexander O\'Conner', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Inactive'},
            {clientName: 'Anne Stanton', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Abel Brown', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Inactive'},
            {clientName: 'Lorene Nienow',post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Abel Turcotte', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Rosa Kohler',post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Inactive'},
            {clientName: 'Mike Sporer', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Elena Okuneva', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Darrell Brown', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Inactive'},
            {clientName: 'Lillian Mohr', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Active'},
            {clientName: 'Kelvin Johnson', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM',  PhoneNumber:'+44 012 9904 9944', status: 'Inactive'},
            {clientName: 'Rosemary Howe', post:'B455AT', cleaningType:'Weekly', hours:8, bookingDate:'1/1/2022', time:'10:00 AM', PhoneNumber:'+44 012 9904 9944',  status: 'Active'},
          ],
          searchQuery: '',
          itemsPerPage: 14, // Items per page, with a default value of 14
          currentPage: 1,    // Current page number
          totalItems: 12400, // Total number of items (example)
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
      width: 95%;
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
    