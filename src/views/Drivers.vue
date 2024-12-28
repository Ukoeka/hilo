<template>
  <AdminLayout>

    <div class="vh-100 w-100 bg d-flex flex-column p-3">
      <div class="d-flex justify-content-between px-3 sizing mb-5">
        <h2>Drivers</h2>
        <div class="d-flex gap-3 align-items-center profile">
          <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
          <span>Favour Udoh</span>
        </div>
      </div>

      <!-- Main Content Section -->
      <div v-if="!viewAssign" class="flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">

        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2 p-3">
              <h2>Drivers</h2>
              <p class="p-1 rounded-1 m-0"
                style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">{{
                  driversPagination?.totalRecords }} Drivers
              </p>
            </div>
            <button class="d-none btn btn-success d-flex align-items-center gap-2 justify-content-center"
              @click="AssignDriver('add')">
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
              <tr v-for="(payment, index) in driversData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="payment.profilePic" alt="Driver Image"
                    style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
                </td>
                <td>{{ payment.firstName }} {{ payment.lastName }}</td>
                <td>{{ payment.email }}</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>{{ formatDate(payment.createdAt) }}</td>
                <td>
                  <span :class="[
                    'd-flex align-items-center justify-content-center gap-2 rounded p-2',
                    payment.status === 'active' ? 'completed' : '',
                    payment.status === 'inactive' ? 'draft' : ''
                  ]" style="width: fit-content">
                    <div :class="[
                      payment.status === 'active' ? 'completed-circle' : '',
                      payment.status === 'inactive' ? 'draft-circle' : ''
                    ]" class="rounded-circle" style="height: 10px; width: 10px;"></div>
                    {{ payment.status }}
                  </span>
                </td>
                <td>
                  <button class="btn btn-sm btn-success text-white rounded-full"
                    @click="AssignDriver('view', payment.id)">view</button>
                </td>
              </tr>
            </tbody>
          </table>
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
              <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: currentPage === page }">
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
      <ViewAssign v-if="viewAssign" :formAction="viewAssign" :CompType="'driver'" @close="viewAssign = null"
        :userId="userId" />
    </div>
  </AdminLayout>

</template>

<script>
import ViewAssign from '@/components/Dashboard/ViewAssign.vue';
import AdminLayout from '@/layouts/AdminLayout.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'


export default {
  components: {
    AdminLayout,
    ViewAssign
  },
  data() {
    return {
      viewAssign: '',
      userId: '',
      searchQuery: '',
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 12400,
      isDriverDetailsVisible: false,
      isDriverAddDetailsVisible: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        country: '',
        city: '',
        address: '',
        language: ''
      },
      isDriverDetailsVisible: true,
      drivers: Array.from({ length: 13 }, (_, i) => ({
        image: new URL(`../assets/Drivers/${String(i + 1).padStart(2, '0')}.png`, import.meta.url).href,
        name: [
          'Charlie Brakus', 'Jamie Schroeder', 'Alexander O\'Conner', 'Anne Stanton', 'Abel Brown',
          'Lorene Nienow', 'Abel Turcotte', 'Rosa Kohler', 'Mike Sporer', 'Elena Okuneva',
          'Darrell Brown', 'Lillian Mohr', 'Kelvin Johnson'
        ][i],
        email: `user${i}@example.com`,
        movesCompleted: 232,
        age: 45,
        dateAdded: '11/6/2022',
        status: ['Active', 'Inactive', 'Active', 'Inactive', 'Active'][i % 5]
      })),
      Loader: false,
      driversData: [],
      driversPagination: {}
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
    this.fetchDrivers(1, this.itemsPerPage)
  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal ) {
        this.fetchDrivers(this.currentPage, newVal)
      }
    }
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
    async fetchDrivers(page, pageSize) {
      try {
        const url = `account/drivers?page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.driversData = resp.data;
          this.driversPagination = resp.pagination
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
    AssignDriver(view, id) {
      this.viewAssign = view;
      this.userId = id
      console.log(view)
    },
    changePage(page) {
      this.fetchDrivers(page, this.itemsPerPage)
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    statusClass(status, isCircle = false) {
      if (status === 'Active') return isCircle ? 'active-circle' : 'active-status';
      if (status === 'Inactive') return isCircle ? 'inactive-circle' : 'inactive-status';
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

.driver-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-weight: 500;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.status-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.active {
  background-color: rgba(236, 253, 239, 1);
  color: rgba(76, 149, 108, 1);
}

.active-circle {
  background-color: rgba(76, 149, 108, 1);
}

.inactive {
  background-color: rgba(234, 236, 240, 1);
  color: rgba(0, 0, 0, 1);
}

.inactive-circle {
  background-color: rgba(0, 0, 0, 1);
}

.cleaner-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.btn-green {
  background-color: #28a745;
  color: #fff;
}
</style>
