<template>
  <UserLayout>
    <div class="vh-100 w-100 bg d-flex flex-column ">
      <!-- Main Content Section -->
      <div class="flex-grow-1 position-relative pt-2 px-5 h-100 overflow-auto">
        <Nav title="Wallet" />
        <div class="d-flex mb-5 justify-content-end">
          <button @click="openModal"
            style="background-color: rgba(36, 36, 36, 0.11); color: white; width: 20%; border: none"
            class="rounded-3 p-2 bg-black">Withdraw Funds</button>
        </div>
        <!-- Card Section -->
        <div class="d-flex justify-content-between align-items-center mb-4">
          <div class="d-flex w-100 gap-3">
            <!-- 1 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Balance</h6>
                  <p class="mb-0 txt-primary fw-bold">${{ walletStats.balance }}</p>
                </span>

              </div>
            </div>
            <!-- 2 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color">Income</h6>
                  <p class="mb-0 txt-primary-next fw-bold">${{ walletStats.income }}</p>
                </span>

              </div>
            </div>
            <!-- 3 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color ">Withdrawn</h6>
                  <p class="mb-0 txt-danger fw-bold">${{ walletStats.withdrawal }}</p>
                </span>

              </div>
            </div>
            <!-- 4 -->
            <div class="card p-4 payment-description">
              <div class="w-100 h-100 d-flex align-items-center justify-content-between">
                <span>
                  <h6 class="txt-color ">Ongoing Jobs</h6>
                  <p class="mb-0 txt-dark fw-bold">${{ walletStats.ongoingJobsEarning }}</p>
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
                <th class="text-grayed">S/N <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">Date <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">Amount <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">Type <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed">Status <img src="../assets/Payment_Sales/arrowdown.png" alt=""></th>
                <th class="text-grayed"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(payment, index) in transactions" :key="index">
                <td class="text-grayed">{{ index + 1 }}</td>
                <td class="text-grayed">{{ formatDate(payment.createdAt) }}</td>
                <td class="text-grayed">{{ payment.amount }}</td>
                <td class="text-grayed">{{ payment.type }}</td>
                <td class="text-grayed">
                  <span :class="[
                    'd-flex align-items-center justify-content-center gap-2 rounded p-2',
                    payment.status === 'Success' ? 'txt-primary-next' : '',
                    payment.status === 'Failed' ? 'txt-danger' : '',
                  ]" style="width: fit-content">
                    {{ payment.status }}
                  </span>
                </td>
                <td class="text-grayed">
                  <img src="../assets/Payment_Sales/more.png" alt="">
                </td>
              </tr>
            </tbody>
          </table>
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
              <form class="" @submit.prevent="withdrawFunds">
                <div class="form-group mb-3">
                  <label for="accountNumber" class="mb-1 label">Account Number</label>
                  <input type="text" class="form-control modal-inputs p-3 mb-3" id="accountNumber"
                    v-model="withdrawal.accountNumber" placeholder="Enter your account number" required>
                </div>
                <div class="form-group mb-3">
                  <label for="bankName" class="mb-1 label">Bank</label>
                  <input type="text" class="form-control modal-inputs p-3" id="bankName" v-model="withdrawal.bank"
                    placeholder="Enter bank name" required>
                </div>
                <div class="form-group mb-3">
                  <label for="amount" class="mb-1 label">Amount</label>
                  <input type="number" class="form-control modal-inputs p-3" id="amount"
                    v-model.number="withdrawal.amount" placeholder="Enter amount" required>
                </div>
                <div class="form-group mb-3">
                  <label for="routingNumber" class="mb-1 label">Routing Number</label>
                  <input type="text" class="form-control modal-inputs p-3" id="routingNumber"
                    v-model="withdrawal.routingNumber" placeholder="Enter routing number" required>
                </div>
                <div class="modal-footer justify-content-between">
                  <button type="submit" class="btn btn-dark text-white p-2">Submit</button>
                  <button type="button" class="btn btn-light text-dark p-2" @click="showModal = false">Cancel</button>
                </div>
              </form>
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
import loader from 'sass-loader';
import Nav from '@/components/Nav.vue';



export default {
  components: {
    UserLayout,
    Nav
  },
  data() {
    return {
      itemsPerPage: 14,
      currentPage: 1,
      totalItems: 0,
      showModal: false,
      transactions: '',
      transactionsPagination: {},
      withdrawal: {
        amount: '',
        accountNumber: '1234567890',
        bank: ' Union Bank',
        routingNumber: 123456789
      },
      loader: false,
      walletStats: {}
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
      if (newVal) {
        this.fetchTransactions(this.currentPage, newVal)
      }
    }
  },
  mounted() {
    this.fetchTransactions(1, this.itemsPerPage)
    this.fetchWalletStats()
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
    async fetchWalletStats() {
      try {
        const url = `profile/stats`
        const resp = await fetchFromApi(url)
        console.log('login res', resp)

        if (resp.status) {
          this.walletStats = resp.data
         
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
    },
    async fetchTransactions(page, pageSize) {
      try {
        const url = `profile/transactions?page=${page}&pageSize=${pageSize}`
        const resp = await fetchFromApi(url)
        console.log('login res', resp)

        if (resp.status) {
          this.transactions = resp.data
          this.totalItems = resp.data.length
          this.transactionsPagination = resp.pagination
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
    },
    async withdrawFunds() {
      this.loader = true
      try {
        const url = `profile/withdraw?amount=${this.withdrawal.amount}&accountNumber=${this.withdrawal.accountNumber}&bank=${this.withdrawal.bank}&routingNumber=${this.withdrawal.routingNumber}`
        const resp = await postToApi(url, {})
        console.log('login res', resp)

        if (resp.status) {
          swal({
            title: "Success",
            text: resp.message,
            icon: "success"
          })
          this.fetchTransactions(1, 10)

        } else {
          swal({
            title: "Error",
            text: resp.message,
            icon: "error"
          });
        }
      }
      catch (error) {

      } finally {
        this.loader = false
      }
    },
    changePage(page) {
      this.fetchTransactions(page, this.itemsPerPage)
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
  width: 85%;
}

.payment-description {
  width: 300px;
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
}

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
