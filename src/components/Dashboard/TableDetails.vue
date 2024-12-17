<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th @click="sort('serialNumber')">
            Serial Number
            <span v-if="sortColumn === 'serialNumber'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="sort('driver')">
            Driver
            <span v-if="sortColumn === 'driver'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="sort('accountType')">
            Account Type
            <span v-if="sortColumn === 'accountType'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="sort('date')">
            Date
            <span v-if="sortColumn === 'date'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="sort('amount')">
            Amount
            <span v-if="sortColumn === 'amount'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th @click="sort('status')">
            Status
            <span v-if="sortColumn === 'status'">{{ sortDirection === 'asc' ? '↑' : '↓' }}</span>
          </th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td>{{ item.serialNumber }}</td>
          <td>{{ item.driver }}</td>
          <td>{{ item.accountType }}</td>
          <td>{{ item.date }}</td>
          <td>NGN {{ item.amount.toLocaleString() }}</td>
          <td>
            <div :class="['status-badge', item.status.toLowerCase()]">
              <span class="status-dot"></span>
              <span>{{ item.status }}</span>
            </div>
          </td>
          <td>
            <div class="d-flex gap-2">
              <button class="details-btn" @click="showPR">Details</button>
              <button v-if="item.status === 'Payment Request'" class="approve-btn">Approve</button>
              <button v-if="item.status === 'Payment Request'" class="deny-btn">Deny</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="pagination-section">
      <div class="page-size-selector">
        Number Of Items displayed per page
        <select v-model="pageSize" class="form-select" style="width: auto;">
          <option value="14">14</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span>1-{{ pageSize }} of {{ totalItems }} items</span>
      </div>
                
      <div class="pagination">
        <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">←</button>
        <button 
          v-for="page in displayedPages" 
          :key="page"
          :class="['page-btn', currentPage === page ? 'active' : '']"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button class="page-btn" v-if="lastPage > maxDisplayedPages">...</button>
        <button class="page-btn" @click="nextPage" :disabled="currentPage === lastPage">→</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      items: [
        { id: 1, serialNumber: 1, driver: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 439000, status: 'Completed' },
        { id: 2, serialNumber: 2, driver: 'Raman Ismail', accountType: 'Cleaner', date: '7/7/2024', amount: 439000, status: 'Completed' },
        { id: 3, serialNumber: 3, driver: 'Raman Ismail', accountType: 'Driver', date: '7/7/2024', amount: 439000, status: 'Payment Request' },
      ],
      searchQuery: '',
      sortColumn: 'serialNumber',
      sortDirection: 'asc',
      currentPage: 1,
      pageSize: 14,
      maxDisplayedPages: 5,
      totalItems: 12400
    }
  },
  computed: {
    filteredItems() {
      let filtered = this.items;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(item =>
          item.driver.toLowerCase().includes(query) ||
          item.accountType.toLowerCase().includes(query)
        );
      }

      filtered = filtered.sort((a, b) => {
        const aVal = a[this.sortColumn];
        const bVal = b[this.sortColumn];

        if (this.sortDirection === 'asc') {
          return aVal > bVal ? 1 : -1;
        } else {
          return aVal < bVal ? 1 : -1;
        }
      });

      return filtered;
    },
    lastPage() {
      return Math.ceil(this.totalItems / this.pageSize);
    },
    displayedPages() {
      const pages = [];
      const halfMaxPages = Math.floor(this.maxDisplayedPages / 2);

      let startPage = Math.max(1, this.currentPage - halfMaxPages);
      let endPage = Math.min(this.lastPage, startPage + this.maxDisplayedPages - 1);

      if (endPage - startPage + 1 < this.maxDisplayedPages) {
        startPage = Math.max(1, endPage - this.maxDisplayedPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    }
  },
  methods: {
    sort(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortColumn = column;
        this.sortDirection = 'asc';
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    showPR() {
      this.$emit('paymentRequest')
    }
  }
}
</script>

<style>
.table-container {
    padding: 20px;
}

.header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.title-section h1 {
    font-size: 24px;
    margin-bottom: 5px;
}

.subtitle {
    color: #6B7280;
    font-size: 14px;
}

.search-section {
    display: flex;
    gap: 15px;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-box input {
    padding-left: 40px;
    border-radius: 8px;
    border: 1px solid #E5E7EB;
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #6B7280;
}

.filter-btn {
    background: white;
    border: 1px solid #E5E7EB;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.table th {
    color: #6B7280;
    font-weight: 500;
    cursor: pointer;
    padding: 12px 16px;
}

.table td {
    padding: 16px;
    vertical-align: middle;
}

.status-badge {
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
}

.status-badge.completed {
    background-color: #E6F4EA;
    color: #1E8E3E;
}

.status-badge.pending {
    background-color: #FEF3C7;
    color: #D97706;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
}

.completed .status-dot {
    background-color: #1E8E3E;
}

.pending .status-dot {
    background-color: #D97706;
}

.details-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 6px 16px;
    border-radius: 6px;
}

.approve-btn {
    border: 1px solid #4CAF50;
    color: #4CAF50;
    background: white;
    padding: 6px 16px;
    border-radius: 6px;
}

.deny-btn {
    color: #DC2626;
    background: white;
    border: none;
    padding: 6px 16px;
}

.pagination-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.page-size-selector {
    display: flex;
    align-items: center;
    gap: 10px;
}

.pagination {
    display: flex;
    gap: 5px;
}

.page-btn {
    padding: 8px 12px;
    border: 1px solid #E5E7EB;
    border-radius: 6px;
    background: white;
}

.page-btn.active {
    background-color: #4CAF50;
    color: white;
    border-color: #4CAF50;
}
</style>
