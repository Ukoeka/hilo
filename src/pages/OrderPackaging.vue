<template>
  <div class="hero">
    <TopNav></TopNav>
    <div class="content">
      <h2>Order Packaging</h2>
    </div>
  </div>

  <div class="main-content">
    <div class="drive-info" v-if="bigDisplay == 1">
      <div class="left">
        <div class="bars mb-3">
          <div :class="[this.display > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display > 2 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display > 3 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display == 5 ? 'active-bar each-bar' : 'each-bar']"></div>
        </div>
        <form action="">
          <div v-if="display == 1">
            <h2 class="text-center mt-5 mb-4">Address Details</h2>
            <div class="row mb-3">
              <div class="div-group col-md-12">
                <label for="first_name">Post Code</label>
                  <MapboxAddressInput 
                  v-model="packageDetails.pickUp.name"
                  :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }" 
                  placeholder="Post Code"
                  @addressSelect="(address) => handleAddressSelect('first', address)" 
                />
              </div>
            </div>



            <div class="form-group mt-5 buttons">
              <button type="button" disabled class="btn white-btn">Back</button>
              <button type="button" @click="showCard2()" class="btn green-btn">Next</button>
            </div>

          </div>
          <div class="upload col-md-12" v-if="display == 2">
            <h2 class="text-center mt-5 mb-3">Which rooms would you like us to pack</h2>
            <div class="row mb-3">
              <div class="each-row mt-3" v-for="room in rooms">
                <p>{{ room.name }}</p>
                <div class="rightss">
                  <button @click="updateRoom(room.name, 'decrease')" type="button" class="red-btn">
                    -
                  </button>
                  <p>{{ room.number }}</p>
                  <button @click="updateRoom(room.name, 'increase')" type="button" class="green-btn">
                    +
                  </button>
                </div>
              </div>

            </div>




            <div class="form-group mt-5 buttons">
              <button @click="showCard1()" type="button" class="btn white-btn">Back</button>
              <button @click="showCard3()" type="button" class="btn green-btn">Next</button>
            </div>

          </div>
          <div class="additional" v-if="display == 3">
            <h2 class="text-center mt-5 mb-4">What are You Moving?</h2>

            <!-- Number of Vehicles -->
            <nav class="big-tabs ">
              <div class="nav nav-tabs tabs-container" id="nav-tab" role="tablist">
                <div v-for="(tab, index) in tabs" :key="index" class="nav-lin" :class="{ active: activeTab === tab.id }"
                  :id="`${tab.id}-tab`" data-bs-toggle="tab" :data-bs-target="`#${tab.id}`" type="div" role="tab"
                  :aria-controls="tab.id" :aria-selected="activeTab === tab.id" @click="setActiveTab(tab.id)">
                  {{ tab.name }}
                </div>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div v-for="(tab, index) in tabs" :key="index" class="tab-pane fade" :class="{
                show: activeTab === tab.id,
                active: activeTab === tab.id,
              }" :id="tab.id" role="tabpanel" :aria-labelledby="`${tab.id}-tab`">
                <div class="row each-tab mb-3">
                  <div v-for="(item, idx) in tab.items" :key="idx" class="each-row mt-3">
                    <p>{{ item.name }}</p>
                    <div class="rights">
                      <button @click="item.quantity > 0 ? item.quantity-- : null" type="button" class="red-btn">
                        -
                      </button>
                      <p>{{ item.quantity }}</p>
                      <button @click="item.quantity++" type="button" class="green-btn">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- VAT Registered -->

            <div class="form-group mt-5 buttons">
              <button @click="showCard2()" type="submit" class="btn white-btn">Back</button>
              <button @click="showCard4()" type="submit" class="btn green-btn">Next</button>
            </div>
          </div>

          <div class="upload" v-if="display == 4">
            <h2 class="text-center mt-5 mb-4">Based on Rooms Selected, We Recommend a Team of 2 For</h2>
            <div class="row mb-3">
              <div class="each-row mt-3">
                <p>Hours</p>
                <div class="rightss">
                  <button @click="packageDetails.hours > 2 ? packageDetails.hours-- : null" type="button"
                    class="red-btn">-</button>
                  <p>{{ packageDetails.hours }}</p>
                  <button @click=" packageDetails.hours++" type="button" class="green-btn">+</button>
                </div>
              </div>
            </div>


            <!--  -->



            <div class="form-group mt-5 buttons">
              <button @click="showCard4()" type="submit" class="btn white-btn">Back</button>
              <button type="button" @click="showCard5()" class="btn green-btn">Next</button>
            </div>

          </div>
          <div class="upload col-md-12" v-if="display == 5">
            <h2 class="text-center mt-5 mb-4">Time and Date</h2>
            <div class="row mb-3">
              <VDatePicker v-model="bookDate" mode="dateTime" is-required expanded />
            </div>

            <div class="form-group mt-5 buttons">
              <button @click="showCard4()" type="button" class="btn white-btn">Back</button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                class="btn green-btn">Next</button>
            </div>

          </div>
        </form>
      </div>
  
    </div>
    <div class="payment-info" v-if="bigDisplay == 2">
      <div class="left">
        <h2 class="mt-4 mb-4">Payment Summary</h2>
        <div class="text-contain mt-3 mb-3">
          <h5>{{formatDate(this.packageDetails.bookingDate)}}</h5>
        </div>
        <div class="time-area mt-3">
          <div class="top-text">
            <p>Booking Time</p>
            <h5>{{extractTime(this.packageDetails.bookingDate)}}</h5>
          </div>
          <div class="button-area mb-3">
            <div class="change-time col-md-12"></div>
            <button @click="showInput()" v-if="timeDisplay == 1" class="big-btn">Change Time Slot</button>
            <div class="change-time" v-if="timeDisplay == 2">
              <button @click="hideInput()" class="cancel-btn">Cancel</button>
              <input type="time" value="" class="time-input form-control">
            </div>
            
          </div>
        </div>
        <div class="top-textss mt-3">
          <p>Total</p>
          <h5>£{{ estimatedPrice }}</h5>
        </div>


        <button type="button" class="pay-btn mt-3" @click="redirectStripes">Pay now</button>
      </div>
      <!-- <div class="right">
              <div class="big-card">
                <div class="card-head mb-3">
                  <input type="radio">
                  <h4>Card Payment</h4>
                </div>
                <form action="" class="mt-3">
                  <div class="row mb-3 mt-3">
                      <div class="col-md-12">
                      <label for="first_name">Card Number</label>
                      <input type="text" class="form-control" id="card_number" placeholder="Card Number">
                      </div>
                  </div>
                  <div class="row mb-3 mt-4">
                      <div class="col-md-12">
                      <label for="first_name">Expiry Date</label>
                      <input type="text" class="form-control" id="expiry_date" placeholder="Expiry Date">
                      </div>
                  </div>
                  <div class="row mb-3 mt-4">
                      <div class="col-md-12">
                      <label for="first_name">CVV</label>
                      <input type="text" class="form-control" id="cvv" placeholder="CVV">
                      </div>
                  </div>
                  <button class="mt-4">Confirm Payment and Book</button>
                </form>
              </div>
              <div class="small-card mt-3">
                <input type="radio">
                  <h2>Klarna</h2>
              </div>
            </div> -->
    </div>
  </div>

  <!-- MODAL -->

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="exampleModalLabel">Please input Contact information
            for Instant Prices</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>Why Add Your Email?</h5>
          <ul>
            <li>
              <h5>Get Instant Booking Confirmation</h5>
              <p>Receive a detailed summary of your move and all key details right in your inbox.</p>
            </li>
            <li>
              <h5>Stay Updated with Real-Time Notifications</h5>
              <p>Track your booking status, receive reminders, and stay informed about any changes.</p>
            </li>
            <li>
              <h5>Access Exclusive Discounts</h5>
              <p>Get notified about special offers and seasonal discounts available only to email subscribers.</p>
            </li>
            <li>
              <h5>Receive Helpful Moving Tips & Checklists</h5>
              <p>Prepare with expert advice to make your move as smooth and stress-free as possible.</p>
            </li>
            <li>
              <h5>Easily Modify or Cancel Your Booking</h5>
              <p>Quickly manage your reservation through a convenient link in your confirmation email.</p>
            </li>
          </ul>
          <form action="" class="mb-3 mt-5">
            <div class="row mb-3">
              <div class="div-group col-md-6">
                <label for="first_name">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" v-model="packageDetails.email">
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Phone Number</label>
                  <vue-tel-input :onlyCountries="['GB']" 
                  v-model="packageDetails.phoneNumber" 
                  placeholder="Phone Number" 
                  required>
                </vue-tel-input>
              </div>
            </div>
            <button type="button" @click="orderPackaging()" class="view-button mt-3" data-bs-dismiss="modal"
              aria-label="Close">View Instant Prices</button>
          </form>

        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import MapboxAddressInput from "@/components/MapBoxAddressInput.vue";
import Footer from '@/layouts/partials/footer.vue';
import TopNav from '@/layouts/partials/topnav.vue'
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'
export default {
  name: 'OnboardDriver',
  components: {
    TopNav,
    Footer,
    StripeCheckout,
    MapboxAddressInput
  },

  props: {
    // Define props here
  },
  data() {
    return {
      timeDisplay: 1,
      bigDisplay: 1,
      display: 1,
      doubleBed: 1,
      kingBed: 1,
      wardrobe: 1,
      drawers: 1,
      bedSideTable: 1,
      dressingTable: 1,
      television: 1,
      packageDetails: {
        bookingDate: "",
        pickUp: {
          postcode: "",
          name: "",
          lat: "",
          lng: "",
        },
        email: "",
        phoneNumber: "",
        hours: 2,
        rooms: [],
        items: [],
      },
      rooms: [],
      servicePrice: 0,
      activeTab: "bedroom",
      tabs: [],
      bookDate: null,
      stripesUrl: "",
      estimatedPrice: 0,
    };
  },
  watch: {
    tabs: {
      handler(newValue, oldValue) {
        if (newValue) {
          const items = newValue.reduce(
            (acc, tab) =>
              acc.concat(
                tab.items.map((item) => ({
                  id: item.name,
                  quantity: item.quantity,
                }))
              ),
            []
          );
          this.packageDetails.items = items;
        }
      },
      deep: true,
    },
    rooms: {
      handler(newValue, oldValue) {
        if (newValue) {
          const rooms = newValue.map((room) => {
            return {
              name: room.name,
              number: room.number,
            };
          });
          this.packageDetails.rooms = rooms;
        }
      },
      deep: true,
    },
    bookDate(newValue) {
      if (newValue) {
        const date = new Date(newValue); // Create a Date object from the input string
        const formattedDate = date.toISOString(); // Convert to ISO 8601 format
        this.packageDetails.bookingDate = formattedDate;
      }
    },
  },
  mounted() {
    this.getParameters();
  },
  methods: {

    handleAddressSelect(field, address) {
      if (field === 'first') {
        this.packageDetails.pickUp.name = address.label;
        this.packageDetails.pickUp.lat = address.latitude;
        this.packageDetails.pickUp.lng = address.longitude;
        this.packageDetails.pickUp.postcode = address.postcode;
      } else if (field === 'second') {
      }
    },
    formatDate(data, lastSeen = false) {
      let processedData = data

      if (lastSeen) {
        const splitData = data.split(',')
        processedData = splitData[0] // Assuming you want the first part after splitting
      }

      const date = new Date(processedData)
      return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString()
    },
      extractTime(isoDate) {
      const date = new Date(isoDate);
      const hours = String(date.getUTCHours()).padStart(2, '0');
      const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      const seconds = String(date.getUTCSeconds()).padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
  },
    redirectStripes() {
      // You will be redirected to Stripe's secure checkout page
      if (this.stripesUrl) window.location.assign(this.stripesUrl);
    },
    async getParameters() {
      try {
        const url = "parameters";
        const resp = await fetchFromApi(url);
        console.log(resp);
        if (resp.status) {
          this.parameters = resp.data;
          // rooms to pack
          this.rooms = resp.data.map((room) => {
            return {
              name: room.name,
              number: 0,
              cost: room.movingCost
            };
          });
          // what you are moving
          resp.data.map((room) => {
            const roomName = room.name;
            const roomItems = [];
            room.items.map((item) => {
              roomItems.push({
                name: item.name,
                quantity: 0,
                cost: item.movingCost
              })
            })
            this.tabs.push({
              id: roomName.toLowerCase(),
              name: roomName,
              items: roomItems
            })
          })
          this.setActiveTab(this.tabs[0]?.id);
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    async orderPackaging() {
      try {
        const url = "booking/packaging";
        const resp = await postToApi(url, this.packageDetails);
        console.log(resp);
        if (resp.status) {
          this.stripesUrl = resp.data.url;
          this.estimatedPrice = resp.data.estimated_price
          this.paymentView();
          // swal({
          //   text: resp.message,
          //   icon: "success",
          // });
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
      } catch (error) {
        console.error("API call failed:", error);
      }
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    updateRoom(name, type, cost) {
      this.rooms.map((room) => {
        if (room.name == name && type == "increase") {
          room.number += 1;
          this.servicePrice = this.servicePrice + room.cost;
        } else if (room.name == name && type == "decrease" && room.number > 0) {
          room.number -= 1;
          this.servicePrice = this.servicePrice - room.cost;
        }
      })
    },
    triggerFileInput(index, listName) {
      // Trigger the file input programmatically
      this.$refs['fileInput' + index][0].click();
    },
    handleFileChange(event, index, listName) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Ensure the preview URL is correctly set
          this[listName][index].preview = e.target.result;  // Base64 image preview
          this[listName][index].file = file;
        };
        reader.readAsDataURL(file); // This will load the image or file
      }
    },
    onSelect({ name, iso2, dialCode }) {
      console.log(name, iso2, dialCode);
    },
    showCard1() {
      this.display = 1;
    },
    showCard2() {
      this.display = 2;
    },
    showCard3() {
      this.display = 3;
      this.servicePrice = 0
    },
    showCard4() {
      this.display = 4;
    },
    showCard5() {
      this.display = 5;
    },
    paymentView() {
      this.bigDisplay = 2;
    },
    showInput() {
      this.timeDisplay = 2;
    },
    hideInput() {
      this.timeDisplay = 1;
    },
  },
};
</script>

<style scoped lang="scss">
.cursor {
  cursor: pointer;
}

.preview-img {
  max-width: 100%;
  max-height: 100px;
  object-fit: cover;
}

.hero {
  width: 99%;
  height: 25vh;
  border-radius: 20px;
  background: url('@/assets/images/getquote.png');
  background-repeat: no-repeat;
  margin: 1% 0.5%;
  position: relative;
  display: flex;

  .content {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    color: white;
    margin-top: 100px;

    h1 {
      text-align: left;
      font-family: Lato;
      font-size: 70px;
      font-weight: 700;
      color: white;
    }
  }
}

.give-space {
  margin-top: 150px;
}

.main-content {
  width: 100%;
  margin: auto;
  display: flex;
  margin-top: 20px;
  gap: 5%;
  padding: 5%;
  gap: 30px;
  box-sizing: border-box;
  justify-content: center;

  .drive-info {
    width: 90%;
    padding: 4%;
    border-radius: 10px;
    margin: auto;
    display: flex;
    gap: 35px;

    .left {
      width: 80%;
      margin-left: 10%;
      background: white;
      padding: 4%;
      border-radius: 10px;

      .bars {
        width: 100%;
        gap: 2%;
        display: flex;

        .each-bar {
          height: 7px;
          width: 23%;
          background: #D9D9D9;
          border-radius: 8px;
        }

        .active-bar {
          background: #2E7D32;
        }
      }


      .buttons {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .white-btn {
          border: 1px solid #2E7D32;
          color: #2E7D32;
          width: 170px;
        }

        .green-btn {
          background: #2E7D32;
          color: white;
          width: 170px;
        }
      }

      .additional {
        .de-flex {
          width: 70%;
          display: flex;
          justify-content: space-between;
        }
      }

      .browse-link {
        color: rgba(76, 149, 108, 1);
        text-align: center;
      }

      .cursor {
        cursor: pointer;
      }
    }

    .right {
      width: 30%;
      background: white;
      padding: 10px;
      border-radius: 20px;

      img {
        width: 100%;
      }

      .each-details {
        display: flex;
        justify-content: space-between;
        padding: 0px 12px;
      }

      .each-detail {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          display: flex;
          align-items: center;
          gap: 5px;

          h4,
          p {
            margin: 0px !important;
          }
        }

        img {
          width: 12px;
          height: 12px;
        }
      }

      h2 {
        color: var(--Primarryyy, #4C956C);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;

      }


    }
  }


}

.give-gap {
  gap: 10px;

  label {
    font-family: Lato;
    font-size: 18.33px;
    font-weight: 700;
    line-height: 27.5px;

  }
}

.each-tab {


  .each-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px solid rgb(196, 196, 196);

    .rights {
      display: flex;
      gap: 10px;

      button {
        width: 22px;
        height: 22px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        border: none;
        border-radius: 5px;
      }

      .red-btn {
        background: #FF2222;
      }

      .green-btn {
        background: #2E7D32;
      }
    }
  }
}

.big-tabs {
  width: 100%;

  .tabs-container {
    width: 100%;
    display: flex;

    .nav-lin {
      flex-grow: 1;
      border: none;
      height: 60px;
      text-align: center;
    }
  }
}

.question-modal {
  width: 20px;
  margin: -5px 10px;
}

.faded {
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6E7191;
}

.d-flexe {
  display: flex;
  gap: 40px;
}

.radio-btn {
  input {
    width: 25px;
  }
}

.checkers {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.view-button {
  background: #2E7D32;
  color: white;
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 10px;
}

.payment-info {
  width: 60%;
  background: white;
  padding: 4% 2%;
  border-radius: 15px;
  display: flex;
  gap: 5%;

  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text-contain {
      background: #DFEEFF;
      display: flex;
      justify-content: center;
      padding: 15px 20px;
      border-radius: 10px;
    }

    .time-area {
      background: #F0F5F3;
      width: 80%;
      border-radius: 10px;
      box-shadow: 0px 10px 24px 0px #058DB840;

      .top-text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }

      .button-area {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;


        button {
          width: 80%;
          background: #F0F2F5;
          color: #2E7D32;
          height: 48px;
          border: 1px solid #2E7D32;
          border-radius: 15px;
        }
      }
    }

    .top-textss {
      width: 80%;
      display: flex;
      justify-content: space-between;
      padding: 15px;
    }

    .more-details {
      background: #F0F5F3;
      width: 80%;
      border-radius: 10px;
      box-shadow: 0px 10px 24px 0px #058DB840;
      padding: 20px;

      .top-text {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px;
      }

      .button-area {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;


        button {
          width: 80%;
          background: #F0F2F5;
          color: #2E7D32;
          height: 48px;
          border: 1px solid #2E7D32;
          border-radius: 15px;
        }
      }
    }
  }

  // .right{
  //   width: 40%;
  //   border: 0.3px solid rgb(212, 212, 212);
  //   border-radius: 10px;
  //   padding: 35px;

  //   .big-card{
  //     border: 0.3px solid rgb(212, 212, 212);
  //     border-radius: 10px;
  //     padding: 18px;

  //     .card-head{
  //       border: 0.3px solid rgb(212, 212, 212);
  //       border-radius: 10px;
  //       padding: 18px;
  //       display: flex;
  //       gap: 15px;
  //       align-items: center;

  //       h4{
  //         margin: 0px;
  //       }
  //     }
  //     button{
  //       background: #2E7D32;
  //       color: white;
  //       width: 100%;
  //       height: 48px;
  //       border: none;
  //       border-radius: 10px;
  //     }

  //   }
  // }
  .small-card {
    border: 0.3px solid rgb(212, 212, 212);
    border-radius: 10px;
    padding: 6px 18px;
    display: flex;
    gap: 15px;
    align-items: center;
  }
}

.each-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(196, 196, 196);

  .rightss {
    display: flex;
    gap: 10px;

    button {
      width: 22px;
      height: 22px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border: none;
      border-radius: 5px;
    }

    .red-btn {
      background: #FF2222;
    }

    .green-btn {
      background: #2E7D32;
    }
  }
}

.pay-btn {
  width: 70%;
  background: #2E7D32;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
}
.change-time{
  display: flex;
  width: 100%;
  align-items: center;
  gap: 30px;
  justify-content: center;

  .cancel-btn{
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #ff2222;
    color: white;
  }
}
.time-input{
  border-radius: 10px;
  height: 40px;
  width: 150px;
}
</style>
