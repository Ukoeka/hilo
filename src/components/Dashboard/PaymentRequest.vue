<template>
  <!-- Used by both payments and Qoutes -->
  <div class="page-container w-100">
    <header class="header">
      <button class="back-button" @click="back">
        ← Back
      </button>
      <div class="driver-section">
        <div>
          <a href="javascript:void(0);" class="fw-bold me-3 text-decoration-none text-black"
            @click="assignDriver">Assigned Driver</a>
          <span class="bg-white text-gray p-3">{{ PRDetails.user?.firstName }} {{ PRDetails.user?.lastName }}</span>
        </div>
        <button class="driver-profile-btn">{{ requestType == 'driver' ? 'Driver' : 'Cleaner' }} Profile</button>
      </div>
    </header>

    <div class="details-container">
      <div class="details-card">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Client Name</div>
            <div class="info-value">{{ PRDetails.user?.firstName }} {{ PRDetails.user?.lastName }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone Number</div>
            <div class="info-value">{{ PRDetails?.quote?.phoneNumber }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Post Code</div>
            <div class="info-value">{{ requestType == 'driver' ? PRDetails?.quote?.dropOff?.postcode :
              PRDetails?.quote?.postCode }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Booking Date</div>
            <div class="info-value">{{ requestType == 'driver' ? formatDate(PRDetails?.quote?.bookingDate) :
              formatDate(PRDetails?.quote?.startTime) }}</div>
          </div>
          <div v-if="requestType == 'driver'" class="info-item">
            <div class="info-label">Pickup Location</div>
            <div class="info-value">{{ requestType == 'driver' ? PRDetails?.quote?.pickUp?.name : 'N/A' }}</div>
          </div>
          <div v-if="requestType == 'driver'" class="info-item">
            <div class="info-label">Delivery Location</div>
            <div class="info-value">{{ requestType == 'driver' ? PRDetails?.quote?.dropOff?.name : 'N/A' }}</div>
          </div>
          <div v-if="requestType == 'driver'" class="info-item">
            <div class="info-label">Pickup Property Type</div>
            <div class="info-value">{{ requestId == 'driver' ? PRDetails?.quote?.propertyType : 'N/A' }}</div>
          </div>
          <div v-if="requestType == 'driver'" class="info-item">
            <div class="info-label">Delivery Property Type</div>
            <div class="info-value">{{ 'N/A' }}</div>
          </div>
          <div v-if="requestType == 'driver'" class="info-item">
            <div class="info-label">Pickup Property Floor</div>
            <div class="info-value">{{ 'N/A' }}</div>
          </div>
          <div v-if="requestType == 'cleaner'" class="info-item">
            <div class="info-label">Cleaning Type</div>
            <div class="info-value">{{ PRDetails?.quote?.cleaningType }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">{{ PRDetails?.quote?.email }}</div>
          </div>
          <div class="info-item additional-info">
            <div class="info-label">Additional Information</div>
            <div class="info-value d-flex gap-2 ">
              <span
                v-for="item in PRDetails?.quote?.extraData?.additionalServices || PRDetails?.quote?.additionalServices"
                :key="item.id">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="recent-deliveries">
        <h2>{{ requestType == 'driver' ? 'Recent Deliveries' : 'Service Details' }}</h2>
        <div v-if="requestType == 'driver'">
          <div v-for="item in PRDetails?.quote?.items" :key="item._id" class="delivery-item">
            <span v-if="item.quantity > 0"> {{ item.quantity }} {{ item.id }}</span>
          </div>
        </div>
        <div v-if="requestType == 'cleaner'">
          <div v-for="item in PRDetails?.quote?.rooms" :key="item._id" class="delivery-item">
            <span v-if="item.number > 0"> {{ item.number }} {{ item.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'

export default {
  name: 'PaymentRequest',
  props: {
    requestId: Number,
    requestType: String
  },
  data() {
    return {

      // manages Component rendering
      openDriversTable: false,
      PRDetails: {},
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
  mounted() {
    this.fetchPRDetails()
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
    async fetchPRDetails() {
      try {
        const url = `payment-requests/${this.requestId}`;
        const resp = await fetchFromApi(url);
        if (resp) {
          this.PRDetails = resp.data;
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },
    back() {
      this.$emit('payment')
    },
    assignDriver() {
      this.openDriversTable = !this.openDriversTable
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
