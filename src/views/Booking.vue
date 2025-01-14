<template>
  <UserLayout>
    <div class="vh-100 w-100 bg d-flex flex-column ">

      <!-- Main Content Section -->
      <div v-if="!display" class=" flex-grow-1 position-relative pt-2 px-5 h-100  w-100">
        <Nav title="Assigned Cleaner" />

        <!-- Quotes Table Section -->
        <div class="card p-3 mb-3 w-100">
          <div class="d-flex justify-content-between align-items-center mb-2">
            <div class="d-flex align-items-center gap-2 p-3">
              <h2 class="size-18">Cleaners </h2>
              <p class="p-1 rounded-1 m-0 size-15"
                style="background: rgba(247, 250, 255, 1); color: rgba(76, 149, 108, 1); line-height: none;"> {{ bookingsPagination?.totalRecords	 }}
                Quotes</p>
            </div>
            <div class="d-none d-flex align-items-center right gap-2 justify-content-around">
              <div class=" d-flex align-items-center justify-content-center search">
                <img src="../assets/Payment_Sales/search.png" alt="" class="search-img me-2">
                <input type="text" class="search-inputs" placeholder="Search" v-model="searchQuery" style="padding: 5px; border: 1px solid #ccc; border-radius: 5px;" />
              </div>
              <button class="d-flex gap-2 btn">
                <img src="../assets/Payment_Sales/filter-lines.png" alt="">
                Filters
              </button>
            </div>
          </div>

          <table class="table">
            <div v-if="Loader" class="spinner-border text-success mt-3"></div>

            <thead>
              <tr>
                <th class="text-grayed">Serial Number <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed"> {{ type === 'moving' ? 'Customer Name' : 'Client Name' }} <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">{{ type === 'moving' ? 'Post Code' : 'Cleaning Type' }} <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">{{ type === 'moving' ? 'Drop-off location' : 'Hours' }}  <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">{{ type === 'moving' ? 'Date' : 'Booking Date' }}<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">{{ type === 'moving' ? 'Amount' : 'Phone Number' }}<img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in bookings" :key="payment?.id">
                <td class="text-grayed">{{ index + 1 }}</td>
                <td class="text-grayed">N/A</td>
                <td class="text-grayed">{{ type === 'moving' ? payment.pickUp?.name : payment.cleaningType }}</td>
                <td class="text-grayed">{{ payment.dropOff?.name || 'N/A'}}</td>
                <td class="text-grayed">{{ type === 'moving' ? formatDate(payment?.bookingDate) : formatDate(payment?.startTime) }}</td>
                <td class="text-grayed">{{ payment?.amount }}</td>
                <td class="text-grayed">
                  <span :class="[
                    'd-flex align-items-center justify-content-center gap-2 rounded p-2',
                    payment.status === 'completed' ? 'completed' : '',
                    payment.status === 'pending' ? 'ongoing' : '',
                    payment.status === 'new' ? 'draft' : ''
                  ]" style="width: fit-content">
                    <div :class="[
                      payment.status === 'completed' ? 'completed-circle' : '',
                      payment.status === 'pending' ? 'ongoing-circle' : '',
                      payment.status === 'new' ? 'draft-circle' : ''

                    ]" class="rounded-circle" style="height: 10px; width: 10px;"></div>
                    {{ payment.status }}
                  </span>
                </td>
                <td @click="toggleDisplay(payment)">
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

      <div v-else class="flex-grow-1 h-100 overflow-auto p-5">
        <div class="d-flex justify-content-between px-3 sizing mb-5">
          <h6>Details Moving</h6>
          <div class="d-flex gap-3 align-items-center profile">
            <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
            <span>Favour Udoh</span>
          </div>
        </div>
        <div class="bg-white">
          <div class="rounded-4">
            <div class="d-flex justify-content-between align-items-center p-2 rounded-top"
              style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
              <button class=" rounded-circle border bg-white" @click="toggleDisplay"
                style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
              <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
                <p style="background-color: rgba(231, 231, 231, 1);"
                  class="d-flex align-items-center justify-content-center gap-2 rounded p-2 m-0"> <span
                    style="width: 10px; height: 10px;" class="draft-circle rounded-circle"></span> {{
                  selectedBooking?.status }}</p>
                <button class="btn btn-success" @click="markJobDone(selectedBooking.id)">
                  <span class="spinner-border spinner-border-sm" v-if="Loader"></span>
                  <span v-else class="text-white">Mark Done/Request Payment</span>
                </button>
              </div>
            </div>

            <!-- body -->

            <div class="row justify-content-between px-4 py-3">

              <div class="col-lg-6">
                <div class="row justify-content-between">
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Client Name</p>
                    <p class="description">N/A</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Phone Number</p>
                    <p class="description">{{ selectedBooking?.phoneNumber }}</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Post Code</p>
                    <p class="description">{{ type === 'moving' ? selectedBooking?.dropOff?.postcode : selectedBooking?.postCode }}</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Booking Date</p>
                    <p class="description">{{ type === 'moving' ? formatDate(selectedBooking?.bookingDate)  : formatDate(selectedBooking?.startTime)}}</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">{{ type === 'moving' ? 'Pickup Location' : 'Cleaning Type' }}</p>
                    <p class="description">{{ selectedBooking?.pickUp?.name || selectedBooking?.cleaningType }}</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title"> {{ type === 'moving' ? 'Delivery Location' : 'Time' }}</p>
                    <p class="description">{{ selectedBooking?.dropOff?.name || 'N/A' }}</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">{{ type === 'moving' ? 'Pickup Property Type' : 'Hours' }}</p>
                    <p class="description">{{ selectedBooking?.propertyType || 'N/A'}}</p>
                  </div>
                  <div  v-if="type === 'moving'" class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Delivery Property Type</p>
                    <p class="description">N/A </p>
                  </div>
                  <div  v-if="type === 'moving'" class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Pickup Property Floor</p>
                    <p class="description">N/A</p>
                  </div>
                  <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                    <p class="title">Email</p>
                    <p class="description">{{ selectedBooking?.email }}</p>
                  </div>
                  <div class="col-12 rounded-2 py-2" style="background: rgba(245, 249, 251, 1); height: 100px;">
                    <p class="title">Additional Information</p>
                    <p class="description d-flex gap-2 flex-wrap">
                      <span v-for="info in selectedBooking?.additionalServices"> {{ info }} </span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 px-4 pt-2 rounded-2" style="background: rgba(245, 249, 251, 1)">
                <p class="title">{{ type === 'moving' ? 'Recent Deliveries' : 'Recent Details' }}</p>
                <ul v-if="type === 'moving'" class="list-unstyled">
                  <li class="description" v-for="item in selectedBooking?.items"><span v-if="item.quantity"> {{
                    item.quantity }} {{
                        item.id }}</span> </li>
                </ul>
                <ul class="list-unstyled">
                  <li class="description" v-for="item in selectedBooking?.rooms"><span v-if="item.number"> {{
                     item.number}} {{
                      item.name }}</span> </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </UserLayout>

</template>

<script>
import { fetchFromApi, postToApi } from '@/services/baseApi'
import UserLayout from '@/layouts/UserLayout.vue';
import Nav from '../components/Nav.vue';
export default {
  components: {
    Nav,
    UserLayout
  },
  data() {
    return {
      searchQuery: '',
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 0,
      display: false,
      Loader: false,
      bookings: [],
      bookingsPagination: {},
      selectedBooking: null,
      type: null,
 
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
    this.type = localStorage.getItem('accountType');
    this.Bookings(1, this.itemsPerPage);

  },
  watch: {
    itemsPerPage(newVal, oldVal) {
      if (newVal) {
        this.Bookings(this.currentPage, newVal)
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
    async markJobDone(jobId) {
      this.Loader = true
      try {
        const url = `jobs/${jobId}/complete`
        const resp = await postToApi(url, {})
        console.log('login res', resp)

        if (resp.status) {
          this.Bookings(1, 10)

          swal({
            title: "Success",
            text: "Job marked as done",
            icon: "success"
          })
          setTimeout(() => {
            this.display = !this.display;
          }, 1000);
        } else {
          swal({
            title: "Error",
            text: resp.message,
            icon: "error"
          });
        }
      } catch (error) {
        console.error('Login error:', error)

      } finally {
        this.Loader = false
      }
    },
    async Bookings(page, pageSize) {
      this.Loader = true
      try {
        const url = `profile/jobs?page=${page}&pageSize=${pageSize}`
        const resp = await fetchFromApi(url)
        console.log('login res', resp)

        if (resp.status) {
          this.bookings = resp.data
          this.totalItems = resp.data.length
          this.bookingsPagination = resp.pagination
        } else {
          swal({
            title: "Error",
            text: resp.message,
            icon: "error"
          });
        }
      }
      catch (error) {
        console.error('Login error:', error)
        swal({
          title: "Error",
          text: "An error occurred during login",
          icon: "error"
        });
      }
      finally {
        this.Loader = false
      }
    },
    changePage(page) {
      this.bookings(page, this.itemsPerPage)

      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    toggleDisplay(booking) {
      if (!this.display) {
        this.selectedBooking = booking
      }
      this.display = !this.display;
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
  color: #0037FF;
}

.ongoing-circle {
  background-color: rgba(255, 106, 0, 1);
}

.completed-circle {
  background: rgba(76, 149, 108, 1);
}

.draft-circle {
  background: #008C9B;
}

.container {
  background-color: #f8f9fa;
  background-color: rgba(240, 240, 240, 1);
  width: 85%;
}

.payment-description {
  width: 300px;
}

.search {
  width: 80%;
  border: 1px solid rgba(208, 213, 221, 1);
  border-radius: 5px;
  padding: 5px 0;
}

.search-img {
  padding-left: 5px;
}

.right {
  width: 50%;
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
