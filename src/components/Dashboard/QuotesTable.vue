<template>
  
  <div class="table-responsive">
    <table class="table table-hover align-middle">
      <thead class="table-light">
        <tr>
          <th scope="col">Serial Number <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Customer / ServiceType <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Pickup location <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Drop-off location <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Date <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Amount <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col">Status <i class="bi bi-caret-down-fill"></i></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in quotesData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.serviceType }}</td>
          <td>{{ item.pickUp?.name }}</td>
          <td>{{ item.dropOff?.name }}</td>
          <td>{{ formatDate(item.bookingDate, true) }}</td>
          <td>{{ item.amount }}</td>
          <td>
            <span class="badge" :class="{
              'bg-success text-light': item.status === 'paid',
              'bg-warning text-dark': item.status === 'pending',
              'bg-dark text-light': item.status === 'draft',
            }">
              <i class="bi bi-circle-fill me-2" :class="{
                'text-success': item.status === 'Paid',
                'text-warning': item.status === 'Pending',
                'text-dark': item.status === 'draft',
              }"></i>
              {{ item.status }}
            </span>
          </td>
          <td>
            <button class="btn btn-sm btn-success text-white rounded-full"
            @click="openDetails(item.id)">view</button>
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
    type: {
      type: String,
      required: true,
    },
    quotesData: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {

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
    openDetails(id) {
      this.$emit('payment', id)
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
