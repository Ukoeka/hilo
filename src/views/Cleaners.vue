<template>
  <AdminLayout>

<div class="d-flex justify-content-between vh-100 w-100 bg">
  
      <!-- Main Content Section -->
      <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h2>Cleaners</h2>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
        
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Cleaners</h2>
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
            <!-- Details Cleaning -->

        <div class="container p-5" v-show="!showDetails">
          <div class="d-flex justify-content-between px-3 sizing mb-5">
              <h6>Details Cleaning</h6>
              <div class="d-flex gap-3 align-items-center profile">
                <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
                <span>Favour Udoh</span>
              </div>
            </div>
          <div class="rounded-4">
              <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1)),rgba(241, 255, 211, 1);">
              <button class="btn" @click="showDetail">Arrow back</button>
              <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
                <p class="m-0">Cleaner</p>
                <span class="badge bg-light text-dark px-3 py-2 me-2">Charlie Brakus</span>
                <button class="btn btn-success">Cleaner Profile</button>          
              </div>
            </div>

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
                    <p class="title">Cleaning Type</p>
                    <p class="description">Weekly</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Time</p>
                    <p class="description">10:00 AM</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Hours</p>
                    <p class="description">8</p>
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

              <div class="col-lg-5 px-4 pt-2" style="background: rgba(245, 249, 251, 1)">
                <p class="title">Service Details</p>
                <ul class="list-unstyled">
                  <li class="description">2 Bedroom</li>
                  <li class="description">1 Living Room</li>
                  <li class="description">1 Living Room</li>
                  <li class="description">1 kitchen cabinet</li>
                  <li class="description">1 Small Room</li>
                  <li class="description">1 Lobby</li>
                </ul>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
  </template>
  
  <script>
    import AdminLayout from '@/layouts/AdminLayout.vue';
    export default {
      components:{
       AdminLayout
      },
      data() {
        return {
          payments: [
            { image: '../assets/Cleaners/01.png', name: 'Charlie Brakus', email: 'Erin33@hotmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/02.png', name: 'Jamie Schroeder', email: 'Ernest_Altenwerth@gmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/03.png', name: 'Alexander O\'Conner', email: 'Lori.Rodriguez@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Cleaners/04.png', name: 'Anne Stanton', email: 'Clarence69@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/05.png', name: 'Abel Brown', email: 'Carole.McCullough@hotmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Cleaners/06.png', name: 'Lorene Nienow', email: 'Javier.Olson@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Male', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/07.png', name: 'Abel Turcotte', email: 'Wilma.Crona@hotmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Male', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/08.png', name: 'Rosa Kohler', email: 'Micheal_Hane@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Cleaners/09.png', name: 'Mike Sporer', email: 'Veronica_Reynolds36@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/10.png', name: 'Elena Okuneva', email: 'Marlon_Hills14@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Male', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/11.png', name: 'Darrell Brown', email: 'Kathleen_Bode@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Male', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Cleaners/12.png', name: 'Lillian Mohr', email: 'Shane71@yahoo.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
            { image: '../assets/Cleaners/13.png', name: 'Kelvin Johnson', email: 'Katherine.VonRueden@gmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Inactive', accountType: 'Driver' },
            { image: '../assets/Cleaners/13.png', name: 'Rosemary Howe', email: 'Santos_Corkery17@gmail.com', city: 'Glasgow', age: 45, dateAdded: '11/6/2022', gender:'Female', status: 'Active', accountType: 'Driver' },
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
    