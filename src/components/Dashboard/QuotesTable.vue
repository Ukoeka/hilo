<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th scope="col">Serial Number <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Customer <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Pickup location <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Drop-off location <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Date <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Amount <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Status <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.customer }}</td>
          <td>{{ item.pickup }}</td>
          <td>{{ item.dropoff }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <span class="badge" :class="{
              'bg-success text-light': item.status === 'Paid',
              'bg-warning text-dark': item.status === 'Pending',
              'bg-dark text-light': item.status === 'Draft',
            }">
              <i class="bi bi-circle-fill me-2" :class="{
                'text-success': item.status === 'Paid',
                'text-warning': item.status === 'Pending',
                'text-dark': item.status === 'Draft',
              }"></i>
              {{ item.status }}
            </span>
          </td>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-three-dots-vertical" viewBox="0 0 16 16" @click="openDetails">
              <path
                d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {

    }
  },
  methods: {
    openDetails() {
      this.$emit('payment')
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
