<template>
  <div class="d-flex vh-100">
    <Sidebar2 class="flex-grow-1 overflow-auto" />
    <div class="container flex-grow-1 h-100 overflow-auto position-relative pt-2 px-5">
      <Nav title="Open Jobs" />

      <div class="filter-section d-flex justify-content-between align-items-center bg-white p-3 rounded mb-3">
        <h5>Filter Results</h5>
        <img src="../assets/Drivers/dropdown.png" alt="">
      </div>

      <div v-for="(job, index) in jobs" :key="index" class="job-card bg-white border rounded p-3 mb-3">
        <div class="job-details">
          <div class="border border-danger-subtle">
            <div class="row">
              <div class="col-10">
                <p class="bg-light-green text-dark fw-bold p-2 rounded">
                  {{ job.details }}
                </p>
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Distance</th>
                      <th>Duration</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{{ job.from }}</td>
                      <td>{{ job.to }}</td>
                      <td>{{ job.date }}</td>
                      <td>{{ job.time }}</td>
                      <td>{{ job.distance }}</td>
                      <td><img src="../assets/Drivers/Vector2.png" alt=""> {{ job.duration }}</td>
                      <td>£{{ job.price }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="col-2 border border-danger">
                <div class="row border border-success">
                  <div class="col-12 jus">
                    <button class="btn btn-outline-success w-50 m-auto">View</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <button class="btn btn-success w-50 mt-4">Claim</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-between align-items-center">
          <span class="price text-success fw-bold">£{{ job.price }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
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