<template>
    <div class="d-flex justify-content-between vh-100">
      <!-- Sidebar Section -->
      <Sidebar class="flex-grow-1 overflow-auto" />
  
      <!-- Main Content Section -->
      <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>Moving Quotes</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
  
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
                <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="background-color: rgba(94, 166, 244, 0.1); height: 50px;">
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
                <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="background-color: rgba(94, 244, 136, 0.1); height: 50px;">
                  <img src="../assets/Payment_Sales/card-pos.png" alt="" >
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
                <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="background-color: rgba(94, 244, 136, 0.1); height: 50px;">
                  <img src="../assets/Payment_Sales/card-pos.png" alt="" >
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
                <span class="d-flex align-items-center justify-content-between p-3 rounded-3" style="background-color: rgba(255, 254, 206, 1); height: 50px;">
                  <img src="../assets/Payment_Sales/convertshape.png" alt="" >
                </span>
              </div>  
            </div>
          </div>
        </div>
        
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Drivers</h2>
                <p class="p-1 rounded-1 m-0" style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">13 Drivers</p>
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
                <th>Image <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Name <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Email <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Moves Completed<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Age<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Date Added<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                <img :src="payment.image" alt="Driver Image" style="width: 50px; height: auto;">
                </td>
                <td>{{ payment.name }}</td>
                <td>{{ payment.email }}</td>
                <td>{{ payment.completedMove }}</td>
                <td>{{ payment.age }}</td>
                <td>{{ payment.dateAdded }}</td>
                <td>{{ payment.status }}</td>
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
            { image: '../assets/Drivers/00.png', name: 'Charlie Brakus', email: 'Erin33@hotmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/01.png', name: 'Jamie Schroeder', email: 'Ernest_Altenwerth@gmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/02.png', name: 'Alexander O\'Conner', email: 'Lori.Rodriguez@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Drivers/03.png', name: 'Anne Stanton', email: 'Clarence69@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/04.png', name: 'Abel Brown', email: 'Carole.McCullough@hotmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Drivers/05.png', name: 'Lorene Nienow', email: 'Javier.Olson@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/06.png', name: 'Abel Turcotte', email: 'Wilma.Crona@hotmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/07.png', name: 'Rosa Kohler', email: 'Micheal_Hane@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Drivers/08.png', name: 'Mike Sporer', email: 'Veronica_Reynolds36@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/09.png', name: 'Elena Okuneva', email: 'Marlon_Hills14@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/10.png', name: 'Darrell Brown', email: 'Kathleen_Bode@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Drivers/11.png', name: 'Lillian Mohr', email: 'Shane71@yahoo.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Drivers/12.png', name: 'Kelvin Johnson', email: 'Katherine.VonRueden@gmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Drivers/13.png', name: 'Rosemary Howe', email: 'Santos_Corkery17@gmail.com', completedMove: 232, age: 45, dateAdded: '11/6/2022', status: 'Active', accountType: 'Driver' },
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
    