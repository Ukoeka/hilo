<template>
  <div class="quotes-container">
    <!-- Header Section -->
    <div class="header-section">
      <div class="back-button">
        <button @click="goBack">
          ← Back
        </button>
      </div>
      <div class="title-section">
        <h6 class="assigned-title">Assigned</h6>
        <span class="quote-count">10,000 Quotes</span>
      </div>

      <div class="d-none actions-section">
        <div class="search-wrapper">
          <i class="search-icon bi bi-search"></i>
          <input type="text" class="search-input" placeholder="Search" v-model="searchQuery">
        </div>
        <button class="filters-btn">
          <i class="bi bi-sliders me-2"></i>
          Filters
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="table-responsive">
      <table class="quotes-table">
        <thead>
          <tr>
            <th>
              Serial Number
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Customer
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Pickup location
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Drop-off location
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Date
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Amount
              <i class="bi bi-chevron-down"></i>
            </th>
            <th>
              Status
              <i class="bi bi-chevron-down"></i>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="quote in paginatedQuotes" :key="quote.serialNumber">
            <td>{{ quote.serialNumber }}</td>
            <td>{{ quote.customer }}</td>
            <td>{{ quote.pickupLocation }}</td>
            <td>{{ quote.dropOffLocation }}</td>
            <td>{{ quote.date }}</td>
            <td>{{ quote.amount }}</td>
            <td>
              <span :class="['status-badge', getStatusClass(quote.status)]">
                {{ quote.status }}
              </span>
            </td>
            <td>
              <button class="action-btn">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Pagination and Items Per Page Controls -->
    <div class="mt-5 d-flex align-items-center justify-content-between">
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
              <img src="@/assets/Payment_Sales/pageleft.png" alt="">
            </button>
          </li>
          <li v-for="page in visiblePages" :key="page" class="page-item" :class="{ active: currentPage === page }">
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
</template>

<script>
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'

export default {
  name: 'AssignedQuotesTable',
  emits: ['close'],
  props: {
    quotesId: {
      type: String
    },
    type: {
      type: String
    }     
  },
  data() {
    return {
      quotes: [
        {
          serialNumber: 1,
          customer: 'Raman Ismail',
          pickupLocation: 'Birmingham',
          dropOffLocation: 'Central Square',
          date: '7/7/2024',
          amount: 'NGN 439,000',
          status: 'Ongoing'
        },
        // Add remaining quotes...
      ],
      quotesPagination: {},
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 14,
      totalItems: 12400
    }
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
    // this.fetchAssignedQuotes(this.quotesId, this.type);            
  },
  methods: {
    async fetchAssignedQuotes(quotesId, userType) {
      const type = userType == 'driver' ? 'moving' : 'cleaning'
      try {
        const url = `quotes/${quotesId}?type=${type}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.quotes  = resp.data;
          this.quotesPagination = resp.pagination
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
    getStatusClass(status) {
      return {
        'ongoing': status === 'Ongoing',
        'payment-pending': status === 'Payment Pending',
        'new': status === 'New',
        'paid': status === 'Paid'
      }
    },
    goBack() {
      this.$emit('close')
    },
    changePage(page) {
      if (page !== '...' && page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  }
}
</script>

<style scoped>
.back-button button {
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #047857;
}

.quotes-container {
  padding: 24px;
  background: white;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title-section {
  display: flex;
  align-items: center;
  gap: 12px;
}

.assigned-title {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #111827;
}

.quote-count {
  color: green;
  font-size: 14px;
}

.actions-section {
  display: flex;
  gap: 16px;
}

.search-wrapper {
  position: relative;
  width: 320px;
}

.search-input {
  width: 100%;
  height: 40px;
  padding: 8px 16px 8px 40px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-size: 14px;
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #9CA3AF;
}

.filters-btn {
  height: 40px;
  padding: 8px 16px;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  background: white;
  color: #374151;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quotes-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.quotes-table th {
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  color: #6B7280;
  text-align: left;
  border-bottom: 1px solid #E5E7EB;
}

.quotes-table td {
  padding: 16px 24px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #E5E7EB;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.ongoing {
  background: rgba(0, 0, 0, 0.05);
  color: #111827;
}

.payment-pending {
  background: #FEF3C7;
  color: #B45309;
}

.new {
  background: #DBEAFE;
  color: #1D4ED8;
}

.paid {
  background: #D1FAE5;
  color: #047857;
}

.action-btn {
  border: none;
  background: none;
  color: #6B7280;
  padding: 4px;
}

.pagination-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
}

.items-display {
  display: flex;
  align-items: center;
  gap: 16px;
}

.items-per-page {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-size: 14px;
}

.page-select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  background: white;
}

.items-count {
  color: #6B7280;
  font-size: 14px;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.page-nav,
.page-number {
  min-width: 32px;
  height: 32px;
  padding: 0 6px;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  background: white;
  color: #374151;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-number.active {
  background: #4F46E5;
  color: white;
  border-color: #4F46E5;
}

.page-ellipsis {
  color: #6B7280;
  padding: 0 4px;
}

/* Disabled state */
.page-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
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
</style>
