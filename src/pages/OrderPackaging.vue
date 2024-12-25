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
                <input type="text" class="form-control" id="post_code" placeholder="Post Code"
                  v-model='packageDetails.pickUp.postcode'>
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
              <div class="each-row mt-3" v-for="room in packageDetails.rooms">
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
            <nav class="big-tabs">
              <div
                class="nav nav-tabs tabs-container"
                id="nav-tab"
                role="tablist"
              >
                <div
                  v-for="(tab, index) in tabs"
                  :key="index"
                  class="nav-lin"
                  :class="{ active: activeTab === tab.id }"
                  :id="`${tab.id}-tab`"
                  data-bs-toggle="tab"
                  :data-bs-target="`#${tab.id}`"
                  type="div"
                  role="tab"
                  :aria-controls="tab.id"
                  :aria-selected="activeTab === tab.id"
                  @click="setActiveTab(tab.id)"
                >
                  {{ tab.name }}
                </div>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                v-for="(tab, index) in tabs"
                :key="index"
                class="tab-pane fade"
                :class="{
                  show: activeTab === tab.id,
                  active: activeTab === tab.id,
                }"
                :id="tab.id"
                role="tabpanel"
                :aria-labelledby="`${tab.id}-tab`"
              >
                <div class="row each-tab mb-3">
                  <div
                    v-for="(item, idx) in tab.items"
                    :key="idx"
                    class="each-row mt-3"
                  >
                    <p>{{ item.name }}</p>
                    <div class="rights">
                      <button
                        @click="item.quantity > 0 ? item.quantity-- : null"
                        type="button"
                        class="red-btn"
                      >
                        -
                      </button>
                      <p>{{ item.quantity }}</p>
                      <button
                        @click="item.quantity++"
                        type="button"
                        class="green-btn"
                      >
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
                  <button @click="packageDetails.hours > 0 ? packageDetails.hours-- : null" type="button" class="red-btn">-</button>
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
              <VDatePicker
                v-model="bookDate"
                mode="dateTime"
                is-required
                expanded
              />
            </div>

            <div class="form-group mt-5 buttons">
              <button @click="showCard4()" type="button" class="btn white-btn">Back</button>
              <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                class="btn green-btn">Next</button>
            </div>

          </div>
        </form>
      </div>
      <div class="right">
        <img src="@/assets/images/map.png" alt="">
        <div class="details">
          <div class="each-details">
            <h2>GU16 7H</h2>
            <p>TO</p>
            <h2>L1 8JQ</h2>
          </div>
          <div class="each-detail">
            <div class="left">
              <img src="@/assets/icons/distance.png" alt="">
              <p>Distance</p>
            </div>
            <h5>64 Miles</h5>
          </div>
          <div class="each-detail">
            <div class="left">
              <img src="@/assets/icons/price.png" alt="">
              <p>Service Price</p>
            </div>
            <h5>$12</h5>
          </div>
        </div>
      </div>
    </div>
    <div class="payment-info" v-if="bigDisplay == 2">
      <div class="left">
        <h2 class="mt-4 mb-4">Payment Summary</h2>
        <div class="text-contain mt-3 mb-3">
          <h5>Mon 4 Dec, 2pm</h5>
        </div>
        <div class="time-area mt-3">
          <div class="top-text">
            <p>Booking Time</p>
            <h5>7am to 3pm</h5>
          </div>
          <div class="button-area mb-3">

            <div class="change-time col-md-12">


            </div>
            <div class="button"></div>
            <button>Change Time Slot</button>
          </div>
        </div>
        <div class="top-textss mt-3">
          <p>Total</p>
          <h5> $ {{ estimatedPrice }}</h5>
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
                <input type="text" class="form-control" id="Phone Number" placeholder="Phone Number" v-model="packageDetails.phoneNumber">
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
import Footer from '@/layouts/partials/footer.vue';
import TopNav from '@/layouts/partials/topnav.vue'
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'
export default {
  name: 'OnboardDriver',
  components: {
    TopNav,
    Footer

  },

  props: {
    // Define props here
  },
  data() {
    return {
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
        bookingDate: "2024-12-20T19:45:01.655Z",
        pickUp: {
          postcode: "23422",
          name: "Georgia",
          lat: 0.38843,
          lng: 2.32111,
        },
        email: "Kristoffer22@hotmail.com",
        phoneNumber: "413-705-1942",
        hours: 0,
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
        items: [
          
        ],
      },
      activeTab: "bedroom",
      tabs: [
        {
          id: "bedroom",
          name: "Bedrooms",
          items: [
            { name: "Double Beds & Mattress", quantity: 2 },
            { name: "Kingsize Bed & Mattress", quantity: 1 },
            { name: "Single Wardrobe", quantity: 0 },
            { name: "Chest of Drawers", quantity: 0 },
            { name: "Bedside Table", quantity: 0 },
            { name: "Dressing Table", quantity: 0 },
            { name: "Television", quantity: 0 },
          ],
        },
        {
          id: "livingroom",
          name: "Living Rooms",
          items: [
            { name: "Sofa", quantity: 0 },
            { name: "Television", quantity: 0 },
          ],
        },
        {
          id: "dining",
          name: "Dining",
          items: [
            { name: "Dining Chairs", quantity: 0 },
            { name: "Dining Table", quantity: 0 },
          ],
        },
        {
          id: "kitchen",
          name: "Kitchen",
          items: [
            { name: "Pots", quantity: 0 },
            { name: "Cookers", quantity: 0 },
          ],
        },
      ],
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
    bookDate(newValue) {
      if (newValue) {
        const date = new Date(newValue); // Create a Date object from the input string
        const formattedDate = date.toISOString(); // Convert to ISO 8601 format
        this.packageDetails.bookingDate = formattedDate;
      }
    },
  },
  methods: {
    redirectStripes() {
      // You will be redirected to Stripe's secure checkout page
      if (this.stripesUrl) window.location.assign(this.stripesUrl);
    },
    async orderPackaging() {
      console.log(this.bookDriver);
      try {
        const url = "booking/packaging";
        const resp = await postToApi(url, this.packageDetails);
        console.log(resp);
        if (resp.status) {
          this.stripesUrl = resp.data.url;
          this.estimatedPrice = resp.data.estimated_price
          this.paymentView();
          swal({
            text: resp.message,
            icon: "success",
          });
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
    updateRoom(name, type) {
      this.packageDetails.rooms.map((room) => {
        if (room.name == name && type == "increase") {
          room.number += 1;
        } else if (room.name == name && type == "decrease" && room.number > 0) {
          room.number -= 1;
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
  },
  mounted() {

  }

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
</style>