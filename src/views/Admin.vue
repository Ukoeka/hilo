<template>
    <div class="d-flex justify-content-between vh-100">
      <!-- Sidebar Section -->
      <Sidebar class="flex-grow-1 overflow-auto" />
  
      <!-- Main Content Section -->
      <div class="container flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <Nav title="Admins" />

        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
              <div class="d-flex align-items-center gap-2 p-3">
                <h2>Account Managers</h2>
                <p class="p-1 rounded-1 m-0" style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">13 Admins</p>
              </div>
              <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center" @click="openModal()">
                <span><img src="../assets/Payment_Sales/plus.png" alt=""></span>
                Add New
              </button>
          </div>
    
          <table class="table">
            <thead>
              <tr>
                <th>Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Image<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Name<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Email<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Join date<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Role<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Last seen<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in payments" :key="index">
                <td>{{ index + 1 }}</td>
                <td><img :src="payment.image" alt=""></td>
                <td>{{ payment.adminName }}</td>
                <td>{{ payment.email}}</td>
                <td>{{ payment.joindate }}</td>
                <td :class="[payment.role === 'Super Admin' ? 'text-success text-green' : '' ]">{{ payment.role }}</td>
                <td>{{ payment.lastseen }}</td>
                <td>
                    <span
                        :class="[
                          'd-flex align-items-center justify-content-center gap-2 rounded p-2', 
                          payment.status === 'Active' ? 'completed' : '',
                          payment.status === 'Inactive' ? 'draft' : '',
                        //   payment.status === 'Pending'? 'ongoing': ''
                          
                        ]"
                        style="width: fit-content"
                    >
                        <div
                        :class="[
                            payment.status === 'Active' ? 'completed-circle' : '',
                            payment.status === 'Inactive' ? 'draft-circle' : '',
                            // payment.status === 'Pending' ? 'ongoing-circle' : '',
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
        
        <!-- Admin Modal -->
        <div v-show="showModal" class="modal fade show" style="display: block; background: rgba(10, 11, 21, .5);">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content p-4">
                <div class="modal-header">
                    <h5 class="modal-title m-auto">Add Admin</h5>
                </div>

                <div class="modal-body">
                    <!-- Icon Selection -->
                    <div class="mb-3">
                        <div class="rounded-circle border d-flex align-items-center justify-content-center m-auto mb-2" style="width: 80px; height: 80px; background:rgba(236, 236, 238, 1);">
                            <img src="../assets/Admin/upload.png" alt="Selected Icon" class="img-fluid " />
                        </div>
                        <p class="text-success cursor-pointer m-auto text-center" style="color: rgba(76, 149, 108, 1);">Upload Photo</p>
                    </div>
                    <!-- Form Fields -->
                    <form>
                        <div class="form-group mb-3">
                            <label for="itemName" class="mb-2 label">First Name</label>
                            <input type="text" class="inputs p-3" id="itemName" v-model="itemName" placeholder="Enter item name" />
                        </div>
                        <div class="form-group mb-4">
                            <label for="movingCost" class="mb-2 label">Last Name</label>
                            <input type="text" class="inputs p-3" id="movingCost" v-model="movingCost" placeholder="Enter moving cost" />
                        </div>
                        <div class="form-group mb-4">
                            <label for="movingCost" class="mb-2 label">Email</label>
                            <input type="text" class="inputs p-3" id="movingCost" v-model="movingCost" placeholder="Enter moving cost" />
                        </div>
                    </form>
                </div>
                <div class="modal-footer justify-content-between">
                    <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2" @click="closeModal">Cancel</button>
                    <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addCategory">Add Now</button>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import Sidebar from '../components/Sidebar.vue';
import Nav from '@/components/Nav.vue';
import admin from '../assets/Admin/admin0.png';
import admin1 from '../assets/Admin/admin.png';
    
    export default {
      components:{
        Sidebar, Nav
      },
      data() {
        return {
            payments: [
                { image: admin,  adminName: 'Pharaoh Moses', email: 'Phamo@gmail.com', joindate: '11/6/2001', lastseen: '8/7/2024', role: 'Super Admin', status: 'Active' },
                { image: admin1, adminName: 'Darla Schroeder', email: 'Darla@gmail.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Ryan Russel', email: 'Ryan@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Inactive' },
                { image: admin1, adminName: 'Lynn Kuhlman', email: 'Lynn@hotmail.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Phil Steuber', email: 'Phi9@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Inactive' },
                { image: admin1, adminName: 'Muriel Gulgowski', email: 'Muriel@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Andrew Boyer', email: 'Andrew27@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Heidi Weissnat', email: 'Heidi@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Inactive' },
                { image: admin1, adminName: 'Gabriel Nader-Blick', email: 'Gabriel@gmail.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Madeline Kuphal', email: 'Madeline@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Isaac Hartmann', email: 'Isaac96@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Inactive' },
                { image: admin1, adminName: 'Angelina Wyman', email: 'Angelina90@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' },
                { image: admin1, adminName: 'Courtney Von', email: 'Courtney@yahoo.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Inactive' },
                { image: admin1, adminName: 'Kayla Will', email: 'Kayla41@gmail.com', joindate: '11/6/2022', lastseen: '8/7/2024', role: 'Admin', status: 'Active' }
            ],
            searchQuery: '',
            itemsPerPage: 14, 
            currentPage: 1,  
            totalItems: 12400,
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
            this.showModal =true
        },
        closeModal() {
            this.showModal = false
        }
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
    
