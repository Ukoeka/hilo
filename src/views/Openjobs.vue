<template>
  <UserLayout >
    <div class="vh-100 w-100 bg d-flex flex-column ">
      <div class=" w-100 h-100 position-relative pt-2 px-5">
      <Nav title="Open Jobs" />

      <div class="d-none filter-section d-flex justify-content-between align-items-center bg-white p-3 rounded mb-3">
        <h5>Filter Results</h5>
        <img src="../assets/Drivers/dropdown.png" alt="">
      </div>

        <Jobs class="w-100 mb-3 " @view="viewAssigned" v-if="!display" type= "cleaning"/>
        <ClaimJob  v-if="display" @close="viewAssigned" :job="job"/> 
    </div>
  </div>
  </UserLayout>

</template>

<script>
import ClaimJob from '@/components/Dashboard/ClaimJob.vue';
import Jobs from '@/components/Dashboard/Jobs.vue';
import Nav from '@/components/Nav.vue';
import UserLayout from '@/layouts/UserLayout.vue';


export default {
  components: {
    UserLayout,
    Nav,
    ClaimJob,
    Jobs
  },
  data() {
    return {
      display: false,
      jobs: [
        {
          details: "2 Beds, 4 Couches, 8 Chairs, 1 Kitchen Cabinet, 1 Small Box, 1 Small Bed",
          from: "Burningham (B455AT)",
          to: "Milton Keynes (MK9)",
          date: "1 - 1 January",
          time: "9am - 10am",
          distance: "53 Miles",
          duration: "1 Hour 31 Minutes",
          price: 58,
        },
        {
          details: "2 Beds, 4 Couches, 8 Chairs, 1 Kitchen Cabinet, 1 Small Box, 1 Small Bed",
          from: "Burningham (B455AT)",
          to: "Milton Keynes (MK9)",
          date: "1 - 1 January",
          time: "9am - 10am",
          distance: "53 Miles",
          duration: "1 Hour 31 Minutes",
          price: 58,
        },
        {
          details: "2 Beds, 4 Couches, 8 Chairs, 1 Kitchen Cabinet, 1 Small Box, 1 Small Bed",
          from: "Burningham (B455AT)",
          to: "Milton Keynes (MK9)",
          date: "1 - 1 January",
          time: "9am - 10am",
          distance: "53 Miles",
          duration: "1 Hour 31 Minutes",
          price: 58,
        },
      ],
      job: {}
    };
  },
  methods: {
    viewAssigned(job) {
      this.display = !this.display
      this.job = job
    }
  }
};
</script>

<style scoped>
.user-name {
  font-weight: bold;
}

.filter-section {
  background-color: #f9f9f9;
}

.job-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.bg-light-green {
  background-color: #e0f7ea;
}

.price {
  font-size: 1.5rem;
}

.actions .btn-outline-success {
  color: #28a745;
  border-color: #28a745;
}
</style>
