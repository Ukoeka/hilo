<template>
<<<<<<< HEAD
  <!-- Used by both payments and Qoutes -->
  <div  class="page-container w-100">
=======
  <div class="page-container w-100">
>>>>>>> f1500711511191858c66b4007377590db863a28f
    <header class="header">
      <button class="back-button" @click="back">
        ← Back
      </button>
      <div class="driver-section">
        <div>
<<<<<<< HEAD
          <a href="javascript:void(0);" class="fw-bold me-3 text-decoration-none text-black" @click="assignDriver">Assigned Driver</a>
          <span class="bg-white text-gray p-3">Charlie Brakus</span>
=======
          <span class="me-3">Assigned Driver</span>
          <span class="fw-bold">Charlie Brakus</span>
>>>>>>> f1500711511191858c66b4007377590db863a28f
        </div>
        <button class="driver-profile-btn">Driver Profile</button>
      </div>
    </header>

    <div class="details-container">
      <div class="details-card">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Client Name</div>
            <div class="info-value">{{ clientName }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone Number</div>
            <div class="info-value">{{ phoneNumber }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Post Code</div>
            <div class="info-value">{{ postCode }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Booking Date</div>
            <div class="info-value">{{ bookingDate }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Pickup Location</div>
            <div class="info-value">{{ pickupLocation }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Delivery Location</div>
            <div class="info-value">{{ deliveryLocation }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Pickup Property Type</div>
            <div class="info-value">{{ pickupPropertyType }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Delivery Property Type</div>
            <div class="info-value">{{ deliveryPropertyType }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Pickup Property Floor</div>
            <div class="info-value">{{ pickupPropertyFloor }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">{{ email }}</div>
          </div>
          <div class="info-item additional-info">
            <div class="info-label">Additional Information</div>
            <div class="info-value">{{ additionalInfo }}</div>
          </div>
        </div>
      </div>

      <div class="recent-deliveries">
        <h2>Recent Deliveries</h2>
        <div v-for="item in deliveryItems" :key="item.id" class="delivery-item">
          {{ item.quantity }} {{ item.name }}
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD

=======
>>>>>>> f1500711511191858c66b4007377590db863a28f
</template>

<script>
export default {
<<<<<<< HEAD

  data() {
    return {

      // manages Component rendering
      openDriversTable: false,

=======
  data() {
    return {
>>>>>>> f1500711511191858c66b4007377590db863a28f
      clientName: 'Charlie Brakus',
      phoneNumber: '+44 012 9904 9944',
      postCode: 'B455AT',
      bookingDate: '1/1/2001',
      pickupLocation: 'Birmingham',
      deliveryLocation: 'London',
      pickupPropertyType: 'House',
      deliveryPropertyType: 'House',
      pickupPropertyFloor: 'Ground Floor',
      email: 'Phamo@gmail.com',
      additionalInfo: 'Placeholder',
      deliveryItems: [
        { id: 1, quantity: '2', name: 'beds' },
        { id: 2, quantity: '4', name: 'couches' },
        { id: 3, quantity: '8', name: 'Chairs' },
        { id: 4, quantity: '1', name: 'Kitchen Cabinet' },
        { id: 5, quantity: '1', name: 'Small Box' },
        { id: 6, quantity: '1', name: 'Small Bed' }
      ]
    }
  },
  methods: {
    back() {
      this.$emit('payment')
<<<<<<< HEAD
    },
    assignDriver() {
      this.openDriversTable = !this.openDriversTable
=======
>>>>>>> f1500711511191858c66b4007377590db863a28f
    }
  }
}
</script>

<style>
.page-container {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: linear-gradient(to right, #B2EBF2 50%, #E8F5E9 50%);
}

.back-button {
  background: none;
  border: none;
  color: #000;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px;
}

.driver-section {
  display: flex;
  align-items: center;
  gap: 15px;
}

.driver-profile-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
}

.details-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
  padding: 20px;
}

.details-card {
  background: white;
  border: 1px solid #0088cc;
  border-radius: 4px;
  padding: 20px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.info-item {
  padding: 10px;
  background-color: #f8f9fa;
}

.info-label {
  color: #6c757d;
  font-size: 14px;
  margin-bottom: 5px;
}

.info-value {
  font-weight: 500;
}

.additional-info {
  grid-column: span 2;
  min-height: 150px;
}

.recent-deliveries {
  background: white;
  padding: 20px;
  border-radius: 4px;
}

.recent-deliveries h2 {
  font-size: 18px;
  margin-bottom: 20px;
}

.delivery-item {
  margin-bottom: 10px;
}
</style>
