<template>
  <div>
    <table class="table text-grayed">
      <thead>
        <tr class="text-grayed">
          <th class="text-grayed" @click="sort('serialNumber')">
            Serial Number
            <span v-if="sortColumn === 'serialNumber'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed" @click="sort('driver')">
            Driver
            <span v-if="sortColumn === 'driver'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed" @click="sort('accountType')">
            Account Type
            <span v-if="sortColumn === 'accountType'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed" @click="sort('date')">
            Date
            <span v-if="sortColumn === 'date'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed" @click="sort('amount')">
            Amount
            <span v-if="sortColumn === 'amount'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed" @click="sort('status')">
            Status
            <span v-if="sortColumn === 'status'">{{
              sortDirection === "asc" ? "↑" : "↓"
              }}</span>
          </th>
          <th class="text-grayed">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td class="text-grayed">{{ index + 1 }}</td>
          <td class="text-grayed">
            {{ item.user.firstName }} {{ item.user.lastName }}
          </td>
          <td class="text-grayed">{{ item.user.accountType }}</td>
          <td class="text-grayed">{{ formatDate(item.createdAt) }}</td>
          <td class="text-grayed">NGN {{ item.amount }}</td>
          <td class="text-grayed">
            <div :class="['status-badge', item.status.toLowerCase()]">
              <span class="status-dot"></span>
              <span>{{ item.status }}</span>
            </div>
          </td>
          <td>
            <div class="d-flex gap-2">
              <button class="details-btn" @click="showPR(item.id)">
                Details
              </button>
              <button v-if="item.status === 'pending'" class="approve-btn" @click="approvePR(item.id)">
                <span class="spinner-border spinner-border-sm" v-if="
                  loading &&
                  item.id === selectedId &&
                  actionType === 'approve'
                "></span>
                <span v-else>Approve</span>
              </button>
              <button v-if="item.status === 'pending'" class="deny-btn" @click="denyPR(item.id)">
                <span class="spinner-border spinner-border-sm" role="status" v-if="loading && item.id === selectedId &&
                  actionType === 'deny'"></span>
                <span v-else>Deny</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";

export default {
  name: "TableDetails",
  props: {
    items: Array,
  },
  data() {
    return {
      searchQuery: "",
      sortColumn: "serialNumber",
      sortDirection: "asc",
      currentPage: 1,
      pageSize: 14,
      maxDisplayedPages: 5,
      totalItems: 12400,
      loading: false,
      selectedId: null,
      actionType: "",
    };
  },
  computed: {
    filteredItems() {
      let filtered = this.items;

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (item) =>
            item.driver.toLowerCase().includes(query) ||
            item.accountType.toLowerCase().includes(query)
        );
      }

      filtered = filtered.sort((a, b) => {
        const aVal = a[this.sortColumn];
        const bVal = b[this.sortColumn];

        if (this.sortDirection === "asc") {
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
      let endPage = Math.min(
        this.lastPage,
        startPage + this.maxDisplayedPages - 1
      );

      if (endPage - startPage + 1 < this.maxDisplayedPages) {
        startPage = Math.max(1, endPage - this.maxDisplayedPages + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      return pages;
    },
  },
  
  methods: {
    async approvePR(requestId) {
      this.selectedId = requestId;
      this.actionType = "approve";
      this.loading = true;
      try {
        const url = `payment-requests/${requestId}/approve`;
        const resp = await postToApi(url);
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          });
          this.$emit("refresh");
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
      } finally {
        this.loading = false;
      }
    },
    async denyPR(requestId) {
      this.selectedId = requestId;
      this.actionType = "deny";
      this.loading = true;
      try {
        const url = `payment-requests/${requestId}/decline`;
        const resp = await postToApi(url);
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          });
          this.$emit("refresh");
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(data, lastSeen = false) {
      let processedData = data;

      if (lastSeen) {
        const splitData = data.split(",");
        processedData = splitData[0]; // Assuming you want the first part after splitting
      }

      const date = new Date(processedData);
      return isNaN(date) ? "Invalid Date" : date.toLocaleDateString();
    },
    sort(column) {
      if (this.sortColumn === column) {
        this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
      } else {
        this.sortColumn = column;
        this.sortDirection = "asc";
      }
    },
    showPR(id) {
      this.$emit("paymentRequest", id);
    },
  },
};
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
  color: #6b7280;
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
  border: 1px solid #e5e7eb;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}

.filter-btn {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.table th {
  color: #6b7280;
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
  background-color: #e6f4ea;
  color: #1e8e3e;
}

.status-badge.pending {
  background-color: #fef3c7;
  color: #d97706;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.completed .status-dot {
  background-color: #1e8e3e;
}

.pending .status-dot {
  background-color: #d97706;
}

.details-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 6px;
}

.approve-btn {
  border: 1px solid #4caf50;
  color: #4caf50;
  background: white;
  padding: 6px 16px;
  border-radius: 6px;
}

.deny-btn {
  color: #dc2626;
  background: white;
  border: none;
  padding: 6px 16px;
}

</style>
