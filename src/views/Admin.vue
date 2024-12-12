<template>
  <AdminLayout>
    <div class="vh-100 w-100 bg d-flex flex-column p-3">
      <div class="d-flex justify-content-between px-3 sizing mb-5">
        <h2>Admins</h2>
        <div class="d-flex gap-3 align-items-center profile">
          <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
          <span>Favour Udoh</span>
        </div>
      </div>
      <!-- Sidebar Section -->

      <!-- Main Content Section -->
      <div class=" flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2 p-3">
              <h2>Account Managers</h2>
              <p class="p-1 rounded-1 m-0"
                style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">{{adminPagination?.totalRecords }} Admins
              </p>
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
              <tr v-for="(item, index) in admins" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td><img :src="item.image" alt="N/A"></td>
                <td>{{ item.firstName }} {{ item.lastName }}</td>
                <td>{{ item.email }}</td>
                <td>{{formatDate(item.createdAt)}}</td>
                <td :class="[item.role === 'Super Admin' ? 'text-success text-green' : '']">{{ item.role }}</td>
                <td>2 Hours</td>
                <td>
                  <span :class="[
                    'd-flex align-items-center justify-content-center gap-2 rounded p-2',
                    item.status === 'Active' ? 'completed' : '',
                    item.status === 'Inactive' ? 'draft' : '',
                    //   payment.status === 'Pending'? 'ongoing': ''

                  ]" style="width: fit-content">
                    <div :class="[
                      item.status === 'Active' ? 'completed-circle' : '',
                      item.status === 'Inactive' ? 'draft-circle' : '',
                      // payment.status === 'Pending' ? 'ongoing-circle' : '',
                    ]" class="rounded-circle" style="height: 10px; width: 10px;"></div>
                    {{ item.status }}
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
                <div class="mb-3" @click="triggerUpload">
                  <div class="rounded-circle border d-flex align-items-center justify-content-center m-auto mb-2"
                    style="width: 80px; height: 80px; background: rgba(236, 236, 238, 1);">
                    <img v-if="preview" :src="preview" alt="Selected Icon" class="img-fluid"
                      style="width: 100%; height: 100%; object-fit: cover;" />
                    <img v-else src="../assets/Admin/upload.png" alt="Default Icon" class="img-fluid" />
                  </div>
                  <p class="text-success cursor-pointer m-auto text-center" style="color: rgba(76, 149, 108, 1);">
                    Upload Photo
                  </p>
                  <input type="file" ref="fileInput" accept="image/*" class="d-none" @change="handleFileUpload" />
                </div>
                <!-- Form Fields -->
                <form>
                  <div class="form-group mb-3">
                    <label for="firstName" class="mb-2 label">First Name</label>
                    <input type="text" class="form-control inputs p-3 border" id="firstName"
                      v-model="adminData.firstName" placeholder="Enter first name" />
                  </div>
                  <div class="form-group mb-4">
                    <label for="lastName" class="mb-2 label">Last Name</label>
                    <input type="text" class="form-control inputs p-3 border" id="lastName" v-model="adminData.lastName"
                      placeholder="Enter last name" />
                  </div>
                  <div class="form-group mb-4">
                    <label for="email" class="mb-2 label">Email</label>
                    <input type="email" class="form-control inputs p-3 border" id="email" v-model="adminData.email"
                      placeholder="Enter email" />
                  </div>
                </form>
              </div>
              <div class="modal-footer justify-content-between">
                <button type="button" class="btn btn-outline-danger btn-outline-red col-5 p-2"
                  @click="closeModal">Cancel</button>
                <button type="button" class="btn btn-success col-5 p-2 btn-green" @click="addAdmin">Add Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>

</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import Nav from '@/components/Nav.vue';
import admin from '../assets/Admin/admin0.png';
import admin1 from '../assets/Admin/admin.png';
import AdminLayout from '@/layouts/AdminLayout.vue';
import loader from '@/components/loader.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'


export default {
  components: {
    Sidebar, Nav, loader, AdminLayout
  },
  data() {
    return {
      payments: [
        { image: admin, adminName: 'Pharaoh Moses', email: 'Phamo@gmail.com', joindate: '11/6/2001', lastseen: '8/7/2024', role: 'Super Admin', status: 'Active' },
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
      preview: null, // Holds the preview image URL
      selectedImage: null,
      adminData: {
        firstName: '',
        lastName: '',
        email: '',
      },
      admins: [],
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
  mounted() {
    this.fetchAdmin(1, 10)
  },
  methods: {
    formatDate(data, lastSeen = false) {
      let processedData = data

      if (lastSeen) {
        const splitData = data.split(',')
        processedData = splitData[0] // Assuming you want the first part after splitting
      }

      const date = new Date(processedData)
      return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString()
    },
    async fetchAdmin(page, pageSize) {
      try {
        const url = `account/admins?page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.admins = resp.data;
          this.adminPagination = resp.pagination
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },

    async addAdmin() {
      this.Loader = true;

      const url = `account/admins`;

      try {
        const formdata = new FormData();
        formdata.append('firstName', this.adminData.firstName);
        formdata.append('lastName', this.adminData.lastName);
        formdata.append('email', this.adminData.email);
        formdata.append('profilePic', this.selectedImage);

        const resp = await postToApi(url, formdata, 'multipart/form-data');
        if (resp.status) {
          swal({
            text: "Admin added successfully!",
            icon: "success",
          });
          this.fetchAdmin(1, 10)
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false;
      }
    },
    triggerUpload() {
      // Trigger the file input when the "Upload Photo" text is clicked
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      // Handle file selection and create a preview
      const file = event.target.files[0];
      if (file) {
        this.selectedImage = file;
        this.preview = URL.createObjectURL(file);
        // Convert image to Base64 data string
        const reader = new FileReader();
        reader.onload = (e) => {
          // this.selectedImage = e.target.result;  // This is your data string
        };
        reader.readAsDataURL(file);
      }
    },
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    openModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
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
