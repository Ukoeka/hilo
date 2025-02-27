<template>
  <!-- Used by both payments and Qoutes -->
  <div v-if="!openDriversTable" class="page-container w-100">
    <header class="header">
      <button class="back-button" @click="back">
        ← Back
      </button>
      <div class="driver-section">
        <div>
          <a href="javascript:void(0);" class="fw-bold me-3 text-decoration-none text-black"
          >Assigned {{ type == 'moving' ? 'Driver' : 'Cleaner' }}</a>
          <span class="bg-white text-gray p-3">{{ type == 'moving' ?  movingDetails?.driver?.firstName : movingDetails?.cleaner?.firstName }} {{type == 'moving' ? movingDetails?.driver?.lastName : movingDetails?.cleaner?.lastName }}</span>
        </div>

        <button v-if="!movingDetails.driver && type == 'moving'"  class="driver-profile-btn"   @click="assignDriver">Assign Driver</button>

        <button v-if="!movingDetails.cleaner && type == 'cleaning'"  class="driver-profile-btn"   @click="assignDriver">Assign Cleaner</button>
      </div>
    </header>

    <div class="details-container">
      <div class="details-card">
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Quote ID</div>
            <div class="info-value">{{quotesId }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone Number</div>
            <div class="info-value">{{ movingDetails.phoneNumber }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Post Code</div>
            <div class="info-value">{{movingDetails.pickUp?.postcode || movingDetails.postCode }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Booking Date</div>
            <div class="info-value">{{ type == 'moving' ? formatDate(movingDetails.bookingDate) :  formatDate(movingDetails.startTime)}}</div>
          </div>
          <div v-if="type == 'moving'" class="info-item">
            <div class="info-label" >Pickup Location</div>
            <div class="info-value">{{ movingDetails.pickUp?.name }}</div>
          </div>
          <div v-if="type == 'moving'" class="info-item">
            <div class="info-label">Delivery Location</div>
            <div class="info-value">{{ movingDetails.dropOff?.name }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">{{ type == 'moving' ? 'Pickup Property Type' : 'Cleaning Type' }}</div>
            <div class="info-value">{{ movingDetails.type || movingDetails.cleaningType }}</div>
          </div>
          <div v-if="type == 'moving'" class="info-item">
            <div class="info-label">Delivery Property Type</div>
            <div class="info-value">{{movingDetails.serviceType || movingDetails.propertyType }}</div>
          </div>
          <div  class="info-item">
            <div class="info-label">Pickup Property Floor</div>
            <div class="info-value">N/A</div>
          </div>
          <div v-if="type == 'moving'"  class="info-item">
            <div class="info-label">Hours</div>
            <div class="info-value">{{ movingDetails.hours }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">{{ movingDetails.email }}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Time</div>
            <div class="info-value">{{ type == 'moving' ? extractTimeAmPm(movingDetails.bookingDate) : extractTimeAmPm(movingDetails.startTime)}}</div>
          </div>
          <div class="info-item additional-info">
            <div class="info-label">Additional Information</div>
            <div  class="info-value d-flex flex-wrap gap-2">
              <span v-if="type == 'cleaning'" class="text-gray" v-for="(item, index) in movingDetails?.additionalServices " :key="`moving-${index}`">{{ item }}</span>
              <span v-else class="text-gray "v-for="(item, index) in movingDetails?.extraData?.additionalServices" :key="`extra-${index}`">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="recent-deliveries">
        <h2>{{ type == 'moving' ? 'Items' : 'Service Details' }}</h2>
        <template v-if="type == 'moving'">
          <div v-for="item in movingDetails.items" :key="item.id" class="delivery-item">
          {{ item.quantity }} {{ item.id }}
          </div>
        </template>
        
        <template v-else>
          <div v-for="item in movingDetails.rooms " :key="item.id" class="delivery-item">
          {{ item.number }} {{ item.name }}
        </div>
        </template>
      
      </div>
    </div>
  </div>
  <div>
  <DriversTable v-if="openDriversTable" @payment="assignDriver" :type='type' :quotesId="quotesId"></DriversTable>
  </div>
</template>

<script>
import DriversTable from './DriversTable.vue';
import Loader from '@/components/loader.vue';
import loader from "@/components/loader.vue";
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";
import { parse } from 'vue/compiler-sfc';

export default {
  name: 'DriversPaymentRequest',
  props: {
    quotesId: {
      type: String,
    },
    type: {
      type: String
    }
  },
  components: {
    DriversTable
  },
  data() {
    return {

      // manages Component rendering
      openDriversTable: false,
     Loader: false,
      movingDetails: {}
    }
  },
  mounted() {
    this.fetchDetails(this.quotesId)
  },
  methods: {
    parseDateTime(datetimeString) {
      const date = new Date(datetimeString); // Parse the datetime string into a Date object

      // Format the date as YYYY-MM-DD
      const formattedDate = date.toISOString().split('T')[0];

      // Format the time as HH:mm:ss
      const formattedTime = date.toISOString().split('T')[1].split('.')[0];

      return {
        date: formattedDate,
        time: formattedTime,
      }
    },
    extractTimeAmPm(isoTimestamp) {
      const date = new Date(isoTimestamp);

      // Extract hours, minutes, and seconds
      let hours = date.getHours();
      const minutes = date.getMinutes().toString().padStart(2, '0');
      const seconds = date.getSeconds().toString().padStart(2, '0');

      // Determine AM/PM
      const amPm = hours >= 12 ? 'PM' : 'AM';

      // Convert to 12-hour format
      hours = hours % 12 || 12; // Adjust for 0-hour in 12-hour format

      return `${hours}:${minutes}:${seconds} ${amPm}`;
    },
    formatDate(data) {
      const date = new Date(data)
      const processDateTime = date.toLocaleDateString()
      const processDate = processDateTime.split(',')[0]
      return processDate
    },

    async fetchDetails(quoteId) {
      try {
        const url = `quotes/${quoteId}?type=${this.type}`;
        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.movingDetails = resp.data;
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log("Response:", resp);
      } catch (error) {
        console.error("API call failed:", error);
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
