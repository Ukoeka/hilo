<template>
  <div class="hero">
    <TopNav></TopNav>
    <div class="content">
      <h2>Book Cleaning Service</h2>
    </div>
  </div>

  <div class="main-content">
    <div class="clean-info" v-if="bigDisplay == 1">
      <div class="bars mb-3">
        <div :class="[this.display > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
        <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>
        <div :class="[this.display > 2 ? 'active-bar each-bar' : 'each-bar']"></div>
        <div :class="[this.display > 3 ? 'active-bar each-bar' : 'each-bar']"></div>
        <div :class="[this.display > 4 ? 'active-bar each-bar' : 'each-bar']"></div>
      </div>
      <form action="">
        <div v-if="display == 1">
          <h2 class="text-center mt-5 mb-4">Cleaning Location</h2>

          <div class="row mb-3">
            <div class="div-group col-md-12">
              <label for="first_name">Address</label>
                <MapboxAddressInput 
                  v-model="bookCleaning.postCode"
                  :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }" 
                  placeholder="Your Address"
                  @addressSelect="(address) => handleAddressSelect('first', address)" 
                />
            </div>
          </div>

          <div class="form-group mt-5 buttons">
            <button type="submit" disabled class="btn white-btn">Back</button>
            <button type="submit" @click="showCard2()" class="btn green-btn">
              Next
            </button>
          </div>
        </div>
        <div class="upload col-md-12" v-if="display == 2">
          <h2 class="text-center mt-5 mb-4">Service Details</h2>
          <div class="row radios mb-3">
            <label for="first_name" class="mb-3">Do you have pets?</label>
            <div class="form-group dee-flex mb-3 col-md-8">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pets" id="inlineRadio1" @change="havePet(true)" />
                <label class="form-check-label" for="inlineRadio1">YES</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="pets" id="inlineRadio2" checked
                  @change="havePet(false)" />
                <label class="form-check-label" for="inlineRadio2">NO</label>
              </div>
            </div>

            <div class="row mb-3 mt-3">
              <div class="div-group col-md-8">
                <label for="first_name">Cleaning Type</label>
                <select name="" id="" class="form-control" v-model="bookCleaning.cleaningType">
                  <option>Regular Cleaning</option>
                  <option>End of tenancy Cleaning</option>
                  <option>After Builders Cleaning</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-group mt-5 buttons">
            <button @click="showCard1()" type="button" class="btn white-btn">
              Back
            </button>
            <button @click="showCard3()" type="button" class="btn green-btn">
              Next
            </button>
          </div>
        </div>
        <div class="upload col-md-12" v-if="display == 3">
          <h2 class="text-center mt-5 mb-3">
            Which rooms would you like us to clean
          </h2>
          <div class="row mb-3">
            <div class="each-row mt-3" v-for="room in bookCleaning.rooms">
              <p>{{ room.name }}</p>
              <div class="right">
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
            <button @click="showCard2()" type="button" class="btn white-btn">
              Back
            </button>
            <button @click="showCard4()" type="button" class="btn green-btn">
              Next
            </button>
          </div>
        </div>
        <div class="upload col-md-12" v-if="display == 4">
          <h2 class="text-center mt-5 mb-4">Book Additional Service</h2>
          <div class="row mb-3">
            <div class="form-group de-flex mt- col-md-12">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="" id="inlineRadio1" value="I want ironing done"
                  @change="updateAdditionalService($event.target.value, $event.target.checked)" />
                <label class="form-check-label" for="inlineRadio1">I want ironing done</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="" id="inlineRadio2" value="I want laundry done"
                  @change="updateAdditionalService($event.target.value, $event.target.checked)" />
                <label class="form-check-label" for="inlineRadio2"> I want laundry
                  done</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="" id="inlineRadio3"
                  value="I want my carpet(s) cleaned"
                  @change="updateAdditionalService($event.target.value, $event.target.checked)" />
                <label class="form-check-label" for="inlineRadio3">I want my carpet(s)
                  cleaned</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="" id="inlineRadio3"
                  value="I want my fridge cleaned"
                  @change="updateAdditionalService($event.target.value, $event.target.checked)" />
                <label class="form-check-label" for="inlineRadio3">I want my fridge
                  cleaned</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" name="" id="no_of_vehicle"
                  value="I want my oven cleaned"
                  @change="updateAdditionalService($event.target.value, $event.target.checked)" />
                <label class="form-check-label" for="inlineRadio3">I want my oven
                  cleaned</label>
              </div>
            </div>
          </div>
          <div class="form-group mt-5 buttons">
            <button @click="showCard3()" type="button" class="btn white-btn">
              Back
            </button>
            <button @click="showCard5()" type="button" class="btn green-btn">
              Next
            </button>
          </div>
        </div>
        <div class="upload col-md-12" v-if="display == 5">
          <h2 class="text-center mt-5 mb-4">Book Additional Service</h2>
          <div class="row mb-3">
            <VDatePicker v-model="bookDate" mode="dateTime" is-required expanded />
          </div>

          <div class="form-group mt-5 buttons">
            <button @click="showCard4()" type="button" class="btn white-btn">
              Back
            </button>
            <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn green-btn">
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
    <div class="payment-info" v-if="bigDisplay == 2">
      <div class="left">
        <h2 class="mt-4 mb-4">Payment Summary</h2>
        <div class="text-contain mt-3 mb-3">
          <h5>{{formatDate(this.bookCleaning.startTime)}}</h5>
        </div>
        <div class="time-area mt-3">
          <div class="top-text">
            <p>Booking Time</p>
            <h5>{{ extractTime(this.bookCleaning.startTime) }}</h5>
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
        <!-- <div class="more-details mt-5">
                <h5>Moving Service</h5>
                <div class="row mb-3">
                  <div class="form-group d-flex give-gap col-md-12">
                    <input type="radio" id="email"  name="service" placeholder="Post Code">
                    <label class="labelled" for="first_name">Driver and Van Alone <br> <span>Your are responsible for  loading and unloading van</span></label>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="form-group d-flex give-gap col-md-12">
                    <input type="radio" id="email" name="service" placeholder="Post Code">
                    <label class="labelled" for="first_name">Complete Removal Service <br> <span></span></label>
                  </div>
                </div>
              </div> -->
        <div class="top-textss mt-3">
          <p>Total</p>
          <h5>$ {{ estimatedPrice }}</h5>
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
          <h5 class="modal-title text-center" id="exampleModalLabel">
            Please input Contact information for Instant Prices
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>Why Add Your Email?</h5>
          <ul>
            <li>
              <h5>Get Instant Booking Confirmation</h5>
              <p>
                Receive a detailed summary of your move and all key details
                right in your inbox.
              </p>
            </li>
            <li>
              <h5>Stay Updated with Real-Time Notifications</h5>
              <p>
                Track your booking status, receive reminders, and stay informed
                about any changes.
              </p>
            </li>
            <li>
              <h5>Access Exclusive Discounts</h5>
              <p>
                Get notified about special offers and seasonal discounts
                available only to email subscribers.
              </p>
            </li>
            <li>
              <h5>Receive Helpful Moving Tips & Checklists</h5>
              <p>
                Prepare with expert advice to make your move as smooth and
                stress-free as possible.
              </p>
            </li>
            <li>
              <h5>Easily Modify or Cancel Your Booking</h5>
              <p>
                Quickly manage your reservation through a convenient link in
                your confirmation email.
              </p>
            </li>
          </ul>
          <form action="" class="mb-3 mt-5">
            <div class="row mb-3">
              <div class="div-group col-md-6">
                <label for="first_name">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email" v-model="bookCleaning.email" />
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Phone Number</label>
                  <vue-tel-input :onlyCountries="['GB']" v-model="bookCleaning.phoneNumber" placeholder="Phone Number" required></vue-tel-input>
              </div>
            </div>
            <button type="button" class="view-button mt-3" @click="bookCleaningService">
              <loader v-if="loading"></loader>
              <span v-else>View Instant Prices</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import MapboxAddressInput from "@/components/MapBoxAddressInput.vue";
import Footer from "@/layouts/partials/footer.vue";
import TopNav from "@/layouts/partials/topnav.vue";
import { ref } from "vue";
import { fetchFromApi, postToApi } from "@/services/baseApi";
import loader from "@/components/loader.vue";

export default {
  name: "OnboardDriver",
  components: {
    TopNav,
    Footer,
    loader,
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
      bedroom: 1,
      bathroom: 1,
      kitchen: 1,
      dining: 1,
      livingRoom: 1,
      bookCleaning: {
        postCode: "",
        cleaningType: "",
        phoneNumber: "",
        startTime: "",
        endTime: "",
        additionalServices: [],
        havePets: false,
        email: "",
        rooms: [
          {
            name: "Bathroom",
            number: 0,
          },
          {
            name: "Bedroom",
            number: 0,
          },
          {
            name: "Kitchen",
            number: 0,
          },
          {
            name: "Dining",
            number: 0,
          },
          {
            name: "Living Room",
            number: 0,
          },

        ],

      },
      bookDate: null,
      stripesUrl: '',
      estimatedPrice: 0,
    };
  },
  watch: {
    bookDate(newValue) {
      if (newValue) {
        const date = new Date(newValue); // Create a Date object from the input string
        const formattedDate = date.toISOString(); // Convert to ISO 8601 format
        this.bookCleaning.startTime = formattedDate;
        this.bookCleaning.endTime = formattedDate;
      }
    }
  },
  methods: {

    handleAddressSelect(field, address) {
      if (field === 'first') {
        this.bookCleaning.postCode = address;
        console.log(this.bookCleaning.postCode)
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
      if (this.stripesUrl)
        window.location.assign(this.stripesUrl);
    },
    async bookCleaningService() {
      try {
        const url = "booking/cleaning";
        const resp = await postToApi(url, this.bookCleaning);
        console.log(resp.status);
        if (resp.status) {
          this.bigDisplay = 2
          this.stripesUrl = resp.data.url
          this.estimatedPrice = resp.data.estimated_price
          console.log(this.bookCleaning.startTime)
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
    // Method
    updateRoom(name, type) {
      this.bookCleaning.rooms.map((room) => {
        if (room.name == name && type == "increase") {
          room.number += 1;
        } else if (room.name == name && type == "decrease" && room.number > 0) {
          room.number -= 1;
        }
      })
    },
    updateAdditionalService(serviceName, isChecked) {
      console.log(serviceName, isChecked);
      const serviceIndex = this.bookCleaning.additionalServices.indexOf(serviceName);

      if (isChecked && serviceIndex === -1) {
        this.bookCleaning.additionalServices.push(serviceName);
      } else if (!isChecked && serviceIndex !== -1) {
        this.bookCleaning.additionalServices.splice(serviceIndex, 1);
      }
    },
    havePet(value) {
      this.bookCleaning.havePets = value;
      console.log(value);
    },
    showCard1() {
      this.display = 1;
    },
    showCard2() {
      this.display = 2;
    },
    showCard3() {
      this.display = 3;
    },
    showCard4() {
      this.display = 4;
    },
    showCard5() {
      this.display = 5;
    },
    showInput() {
      this.timeDisplay = 2;
    },
    hideInput() {
      this.timeDisplay = 1;
    },

    handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      console.log(file);
      // Handle file upload logic here
    },
  },
  mounted() {
    const attributes = ref([
      {
        highlight: true,
        dates: new Date(),
      },
    ]);
  },
};
</script>

<style scoped lang="scss">
.hero {
  width: 99%;
  height: 25vh;
  border-radius: 20px;
  background: url("@/assets/images/getquote.png");
  background-repeat: no-repeat;
  margin: 1% 0.5%;
  position: relative;
  display: flex;
  justify-content: center;

  .content {
    position: relative;
    margin-left: 4%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
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
  gap: 20px;
  padding: 5% 15%;
  gap: 30px;
  box-sizing: border-box;
  justify-content: center;

  .clean-info {
    width: 90%;
    background: white;
    padding: 4%;
    border-radius: 10px;
    margin: auto;

    .bars {
      width: 100%;
      gap: 2%;
      display: flex;

      .each-bar {
        height: 7px;
        width: 50%;
        background: #d9d9d9;
        border-radius: 8px;
      }

      .active-bar {
        background: #2e7d32;
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .white-btn {
        border: 1px solid #2e7d32;
        color: #2e7d32;
        width: 170px;
      }

      .green-btn {
        background: #2e7d32;
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
}

.each-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgb(196, 196, 196);

  .right {
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
      background: #ff2222;
    }

    .green-btn {
      background: #2e7d32;
    }
  }
}

.de-flex {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 80%;
  margin: auto;
  font-size: 30px;
}

.view-button {
  background: #2e7d32;
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


        .big-btn {
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
