<template>

  <div  class="d-flex justify-content-between vh-100 w-100 bg">
    <!-- Sidebar Section -->

    <!-- Main Content Section -->
    <div class="flex-grow-1 position-relative pt-2 px-5 h-100 ">
      <button class="back-button mb-3" @click="back">
        ← Back
      </button>

      <!-- Quotes Table Section -->
      <div class="card p-3 mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <div class="d-flex align-items-center gap-2 p-3">
            <h2 class="size-18">{{ type === 'moving' ? 'Drivers' : 'Cleaners' }}</h2>
            <p class="p-1 rounded-1 m-0 size-15"
              style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;">{{ totalItems }} {{ type === 'moving' ? 'Drivers' : 'Cleaners' }}
            </p>
          </div>
        </div>
        <div v-if="Loader" class="spinner-border text-success"></div>

        <table v-else class="table">
          <thead>
            <tr>
              <th class="text-grayed">Serial Number <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Image <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Name <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Email <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th v-if="type === 'moving'" class="text-grayed">Moves Completed<img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Age<img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th v-if="type !== 'moving'" class="text-grayed">City <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Date Added<img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th v-if="type !== 'moving'" class="text-grayed">Gender <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Status <img src="@/assets/Payment_Sales/arrowdown.png" alt=""></th>
              <th class="text-grayed">Assign {{ type === 'moving' ? 'Drivers' : 'Cleaners' }} <img src="@/assets/Payment_Sales/arrowdown.png"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(payment, index) in driversData" :key="index">
              <td class="text-grayed">{{ index + 1 }}</td>
              <td class="text-grayed">
                <img :src="payment.profilePic" alt="Driver Image"
                  style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover;">
              </td>
              <td class="text-grayed">{{ payment.firstName }} {{ payment.lastName }}</td>
              <td class="text-grayed">{{ payment.email }}</td>
              <td v-if="type === 'moving'" class="text-grayed"> N/A</td>
              <td class="text-grayed">N/A</td>
              <td v-if="type !== 'moving'" class="text-grayed"> {{ payment.city }}</td>
              <td class="text-grayed">{{ formatDate(payment.createdAt) }}</td>
              <td v-if="type !== 'moving'" class="text-grayed"> {{ payment.gender }}</td>
              <td class="text-grayed">
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
              <td class="">
                <button class="btn btn-success d-flex align-items-center gap-2 justify-content-center size-15" @click=" assignDrivers(payment.id)"> Assign
                  {{ type == 'moving' ? 'Driver' : 'Cleaner' }}</button>
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
                  <img src="@/assets/Payment_Sales/pageleft.png" alt="">
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
                  <img src="@/assets/Payment_Sales/pageright.png" alt="">
                </button>
              </li>
            </ul>
          </div>
        </div>

    </div>
  </div>

</template>

<script>
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'


export default {
  props: {
    quotesId: {
      type: String
    },
    type: {
      type: String
    }
  },
  components: {
  },
  data() {
    return {
     
      searchQuery: '',
      itemsPerPage: 14, // Items per page, with a default value of 14
      currentPage: 1,    // Current page number
      totalItems: 0, // Total number of items (example)
      driversData: [],
      Loader: false
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
        range.push(1, 2, 3, 4, '@.', this.totalPages);
      } else if (this.currentPage > this.totalPages - 3) {
        range.push(1, '@.', this.totalPages - 3, this.totalPages - 2, this.totalPages - 1, this.totalPages);
      } else {
        range.push(1, '@.', this.currentPage - 1, this.currentPage, this.currentPage + 1, '@.', this.totalPages);
      }
      return range;
    },
  },
  mounted() {
    this.fetchDrivers(1, 20)
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
      this.Loader = true
      try {
        const type = this.type === 'moving' ? 'drivers' : 'cleaners'
     
        const url = `account/${type}?page=${page}&pageSize=${pageSize}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.driversData = resp.data;
          this.totalItems = resp.pagination.totalRecords
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
      finally {
        this.Loader = false
      }
    },
    async assignDrivers(id) {
      try {
        const url = `quotes/${this.quotesId}/assign`;
        const resp = await postToApi(url, {
          type: this.type,
          userId: id,
        });
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          })
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log(' Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },
    changePage(page) {
      this.fetchDrivers(page, this.itemsPerPage)
      if (page !== '@.' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    back() {
      this.$emit('payment')
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
</style>
