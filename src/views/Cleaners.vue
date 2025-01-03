<template>
  <AdminLayout>

    <div class="vh-100 w-100 bg d-flex flex-column p-3">
      <div class="d-flex justify-content-between px-3 sizing mb-5">
        <h2>Cleaners</h2>
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
              <h2>Cleaners</h2>
              <p class="p-1 rounded-1 m-0"
                style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">{{ cleanersPagination?.totalRecords }} Cleaners
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
                <th>Age<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>City<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Date Added<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Gender<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th>Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in cleanersData" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="payment.profilePic" alt="Driver Image" style="width: 50px; height: auto;">
                </td>
                <td>{{ payment.firstName }} {{ payment.lastName }}</td>
                <td>{{ payment.email }}</td>
                <td>{{ payment.age }}</td>
                <td>{{ payment.city }}</td>
                <td>{{ formatDate(payment.createdAt) }}</td>
                <td>{{ payment.gender }}</td>
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
                <td @click="AssignDriver('view', payment.id)">
                  <!-- <img src="../assets/Payment_Sales/more.png" alt=""> -->
                   <button class="btn btn-sm btn-success text-white rounded-full">view</button>
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
      <ViewAssign v-if="viewAssign" :form-action="viewAssign" :CompType="'cleaner'"
        @close="viewAssign = null" :userId="userId" />

    </div>
  </AdminLayout>
</template>

<script>
import AdminLayout from '@/layouts/AdminLayout.vue';
import ViewAssign from '@/components/Dashboard/ViewAssign.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'


export default {
  components: {
    AdminLayout,
    ViewAssign
  },

  data() {
    return {
      viewAssign: null,
      searchQuery: '',
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1,    // Current page number
      totalItems: 12400, // Total number of items (example)
      Loader: false,
      cleanersData: [],
      cleanersPagination: {}
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
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal ) {
        this.fetchCleaners(this.currentPage, newVal)
      }
    }
  },
  mounted() {
    this.fetchCleaners(1, this.itemsPerPage);
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
    async fetchCleaners(page, pageSize) {
      try {
        const url = `account/cleaners?page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.cleanersData = resp.data;
          this.cleanersPagination = resp.pagination
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Cleaners Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },
    AssignDriver(view, id) {
      console.log('assign', view);
      this.viewAssign = view;
      this.userId = id
    },
    changePage(page) {
      this.fetchCleaners(page, this.itemsPerPage)
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
  color: #fff;
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
