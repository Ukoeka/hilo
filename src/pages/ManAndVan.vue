<template>
  <div class="hero">
    <TopNav></TopNav>
    <div class="content">
      <h2>Man and Van</h2>
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
            <h2 class="text-center mt-5 mb-4">Moving Service Selection</h2>
            <div class="row mb-3">
              <div class="form-group d-flex give-gap col-md-12">
                <input type="radio" id="DaV" name="moving_service" value="DaV" checked
                  @change="selectPropertyType($event.target.value)" />
                <label class="labelled" for="DaV">Driver and Van Alone <br />
                  <span>Your are responsible for loading and unloading van</span></label>
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group d-flex give-gap col-md-12">
                <input type="radio" id="complete" name="moving_service" value="complete"
                  @change="selectPropertyType($event.target.value)" />
                <label class="labelled" for="complete">Complete Removal Service <br />
                  <span></span></label>
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
            <h2 class="text-center mt-5 mb-3">Address Details</h2>

            <div class="row mb-3">
              <div class="div-group col-md-6">
                <label for="first_name">Pick-up (Post Code)</label>
                  <MapboxAddressInput 
                  v-model="manVan.pickUp.name"
                  :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }" 
                  placeholder="Pickup Address"
                  @addressSelect="(address) => handleAddressSelect('first', address)" 
                />
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Drop-off (Post Code)</label>
                  <MapboxAddressInput 
                  v-model="manVan.dropOff.name"
                  :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }" 
                  placeholder="Drop-off Address"
                  @addressSelect="(address) => handleAddressSelect('second', address)" 
                />
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
          <div class="additional" v-if="display == 3">
            <h2 class="text-center mt-5 mb-4">
              How many Hours Would you like to book us for?
            </h2>

            <div class="row mb-3">
              <div class="each-row mt-3">
                <p>Hours (2 hours Min)</p>
                <div class="rightss">
                  <button @click="manVan.hours > 2 ? manVan.hours-- : null" type="button" class="red-btn">
                    -
                  </button>
                  <p>{{ manVan.hours }}</p>
                  <button @click="manVan.hours++" type="button" class="green-btn">
                    +
                  </button>
                </div>
              </div>
            </div>
            <h2 class="text-center mt-5 mb-4" v-if="manVan.serviceType =='complete'">
              How many movers would you want to book?
            </h2>

            <div class="row mb-3" v-if="manVan.serviceType =='complete'">
              <div class="each-row mt-3">
                <p>Mover (1 Mover Min)</p>
                <div class="rightss">
                  <button @click="manVan.movers > 1 ? manVan.movers-- : null" type="button" class="red-btn">
                    -
                  </button>
                  <p>{{ manVan.movers }}</p>
                  <button @click="manVan.movers++" type="button" class="green-btn">
                    +
                  </button>
                </div>
              </div>
            </div>

            
            <!-- VAT Registered -->

            <div class="form-group mt-5 buttons">
              <button @click="showCard2()" type="submit" class="btn white-btn">
                Back
              </button>
              <button @click="showCard4()" type="submit" class="btn green-btn">
                Next
              </button>
            </div>
          </div>

          <div class="upload col-md-12" v-if="display == 4">
            <h2 class="text-center mt-5 mb-4">Time and Date</h2>
            <div class="row mb-3">
              <VDatePicker v-model="bookDate" mode="dateTime" is-required expanded />
            </div>

            <div class="form-group mt-5 buttons">
              <button @click="showCard3()" type="button" class="btn white-btn">
                Back
              </button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn green-btn">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="right">
        <div class="map">
                  <div
                    id="map-container-google-2"
                    class="z-depth-1-half map-container"
                  >
                    <iframe
                      class="main-map"
                      src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      style="border: 0; width:100%; height: 400px;"
                      allowfullscreen
                    ></iframe>
                  </div>
                  </div>
        <div class="details">
          <div class="each-details">
            <h2>{{ this.manVan.pickUp.name.split(', ')[0]}}</h2>
            <p class="mt-3">TO</p>
            <h2>{{ this.manVan.dropOff.name.split(', ')[0]}}</h2>
          </div>
          <!-- <div class="each-detail">
            <div class="left">
              <img src="@/assets/icons/distance.png" alt="" />
              <p>Distance</p>
            </div>
            <h5>64 Miles</h5>
          </div> -->
          <!-- <div class="each-detail">
            <div class="left">
              <img src="@/assets/icons/price.png" alt="" />
              <p>Service Price</p>
            </div>
            <h5>$12</h5>
          </div> -->
        </div>
      </div>
    </div>
    <div class="payment-info" v-if="bigDisplay == 2">
      <div class="left">
        <h2 class="mt-4 mb-4">Payment Summary</h2>
        <div class="text-contain mt-3 mb-3">
          <h5>{{formatDate(this.manVan.bookingDate)}}</h5>
        </div>
          <div class="time-area mt-3">
          <div class="top-text">
            <p>Booking Time</p>
            <h5>{{extractTime(this.manVan.bookingDate)}}</h5>
          </div>
          <div class="button-area mb-3">
            <div class="change-time col-md-12"></div>
            <button @click="showInput()" v-if="timeDisplay == 1" class="big-btn">Change Time Slot</button>
            <div class="change-time" v-if="timeDisplay == 2">
              <input type="time" value="" class="time-input form-control">
              <div class="change-btns">
                <button @click="hideInput()" class="cancel-btn">Cancel</button>
                <button class="update-btn">Update</button>
              </div>
              
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
                <input type="text" class="form-control" id="email" placeholder="Email" v-model="manVan.email" />
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Phone Number</label>
                  <vue-tel-input :onlyCountries="['GB']" 
                  v-model="manVan.phoneNumber"
                  placeholder="Phone Number" 
                  required>
                </vue-tel-input>
              </div>
            </div>
            <button type="button" @click="bookManVan()" class="view-button mt-3" data-bs-dismiss="modal"
              aria-label="Close">
              View Instant Prices
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
import { StripeCheckout } from "@vue-stripe/vue-stripe";
import {
  fetchFromApi,
  postToApi,
  deleteFromApi,
  patchToApi,
} from "@/services/baseApi";
export default {
  name: "OnboardDriver",
  components: {
    TopNav,
    Footer,
    // loader,
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
      hours: 2,
      manVan: {
        serviceType: "", 
        bookingDate: "",
        hours: 2,
        pickUp: {
          postcode: "",
          name: "",
          lat: "",
          lng: "",
        },
        dropOff: {
          postcode: "",
          name: "",
          lat: "",
          lng: "",
        },
        email: "",
        phoneNumber: "",
        movers:1,
      },
      bookDate: null,
      estimatedPrice: 0,
      stripesUrl: "",
    };
  },
  watch: {
    bookDate(newValue) {
      if (newValue) {
        const date = new Date(newValue); // Create a Date object from the input string
        const formattedDate = date.toISOString(); // Convert to ISO 8601 format
        this.manVan.bookingDate = formattedDate;
      }
    },
  },
  methods: {
    handleAddressSelect(field, address) {
      if (field === 'first') {
        this.manVan.pickUp.name = address.label;
        this.manVan.pickUp.lat = address.latitude;
        this.manVan.pickUp.lng = address.longitude;
        this.manVan.pickUp.postcode = address.postcode;
      } else if (field === 'second') {
        this.manVan.dropOff.name = address.label;
        this.manVan.dropOff.lat = address.latitude;
        this.manVan.dropOff.lng = address.longitude;
        this.manVan.dropOff.postcode = address.postcode;
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
    async bookManVan() {
      console.log(this.manVan);
      try {
        const url = "booking/man-and-van";
        const resp = await postToApi(url, this.manVan);
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
    selectPropertyType(serviceName) {
      console.log(serviceName);
      this.manVan.serviceType = serviceName
    },
    triggerFileInput(index, listName) {
      // Trigger the file input programmatically
      this.$refs["fileInput" + index][0].click();
    },
    handleFileChange(event, index, listName) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // Ensure the preview URL is correctly set
          this[listName][index].preview = e.target.result; // Base64 image preview
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
  mounted() { },
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
  background: url("@/assets/images/getquote.png");
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
      width: 70%;
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
        color: var(--Primarryyy, #4c956c);
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
        background: #ff2222;
      }

      .green-btn {
        background: #2e7d32;
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
  color: #6e7191;
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
      background: #dfeeff;
      display: flex;
      justify-content: center;
      padding: 15px 20px;
      border-radius: 10px;
    }
    .time-area {
      background: #f0f5f3;
      width: 80%;
      border-radius: 10px;
      box-shadow: 0px 10px 24px 0px #058db840;

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
          background: #f0f2f5;
          color: #2e7d32;
          height: 48px;
          border: 1px solid #2e7d32;
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
      background: #f0f5f3;
      width: 80%;
      border-radius: 10px;
      box-shadow: 0px 10px 24px 0px #058db840;
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
          background: #f0f2f5;
          color: #2e7d32;
          height: 48px;
          border: 1px solid #2e7d32;
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
      background: #ff2222;
    }

    .green-btn {
      background: #2e7d32;
    }
  }
}

.pay-btn {
  width: 70%;
  background: #2e7d32;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
}
.change-time{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  gap: 30px;
  justify-content: center;

  .change-btns{
    display: flex;
    gap: 15px;

    .cancel-btn{
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #ff2222;
    color: white;
  }
  .update-btn{
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 10px;
    background-color: #2e7d32;
    color: white;
  }
  }
}
.time-input{
  border-radius: 10px;
  height: 40px;
  width: 150px;
}
</style>
