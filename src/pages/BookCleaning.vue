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
                <div :class="[this.display  > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
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
                      <label for="first_name">Post Code</label>
                      <input type="text" class="form-control" id="post_code" placeholder="Post Code">
                      </div>
                      
                  </div>
                  
                  

              
                  <div class="form-group mt-5 buttons">
                      <button type="submit" disabled class="btn white-btn">Back</button>
                      <button type="submit" @click="showCard2()" class="btn green-btn">Next</button>
                  </div>
              
              </div>
                <div class="upload col-md-12" v-if="display == 2">
                    <h2 class="text-center mt-5 mb-4">Service Details</h2>
                    <div class="row radios mb-3">

                    <label for="first_name" class="mb-3">Do you have pets?</label>
                    <div class="form-group dee-flex mb-3 col-md-8">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="pets" id="inlineRadio1" value="option1">
                          <label class="form-check-label" for="inlineRadio1">YES</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="pets" id="inlineRadio2" value="option2">
                          <label class="form-check-label" for="inlineRadio2">NO</label>
                        </div>
                    </div>

                    <div class="row mb-3 mt-3">
                      <div class="div-group col-md-8">
                      <label for="first_name">Cleaning Type</label>
                      <select name="" id="" class="form-control">
                        <option value="">Regular Cleaning</option>
                        <option value="">End of tenancy Cleaning</option>
                        <option value="">After Builders Cleaning</option>
                      </select>
                      </div>
                      
                    </div>
                  </div>
                    
                    

                
                    <div class="form-group mt-5 buttons">
                        <button @click="showCard1()" type="button" class="btn white-btn">Back</button>
                        <button @click="showCard3()" type="button" class="btn green-btn">Next</button>
                    </div>
                
                </div>
                <div class="upload col-md-12" v-if="display == 3">
                    <h2 class="text-center mt-5 mb-3">Which rooms would you like us to clean</h2>
                    <div class="row mb-3">
                      <div class="each-row mt-3">
                        <p>Bedroom</p>
                        <div class="right">
                          <button @click="bedroom > 0 ? bedroom-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedroom }}</p>
                          <button @click=" bedroom++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bathroom</p>
                        <div class="right">
                          <button @click="bathroom > 0 ? bathroom-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bathroom }}</p>
                          <button @click="bathroom++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Kitchen</p>
                        <div class="right">
                          <button @click="kitchen > 0 ? kitchen-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kitchen }}</p>
                          <button @click="kitchen++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dining</p>
                        <div class="right">
                          <button @click="dining > 0 ? dining-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dining }}</p>
                          <button @click="dining++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Living room</p>
                        <div class="right">
                          <button @click="livingRoom > 0 ?livingRoom-- : null" type="button" class="red-btn">-</button>
                          <p>{{ livingRoom }}</p>
                          <button @click="livingRoom++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                    </div>
                    
                    

                
                    <div class="form-group mt-5 buttons">
                        <button @click="showCard2()" type="button" class="btn white-btn">Back</button>
                        <button @click="showCard4()" type="button" class="btn green-btn">Next</button>
                    </div>
                
                </div>
                <div class="upload col-md-12" v-if="display == 4">
                    <h2 class="text-center mt-5 mb-4">Book Additional Service</h2>
                    <div class="row mb-3">
                      <div class="form-group de-flex mt- col-md-12">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="additional_service" id="inlineRadio1" value="option1">
                          <label class="form-check-label" for="inlineRadio1">I want ironing done</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="additional_service" id="inlineRadio2" value="option2">
                          <label class="form-check-label" for="inlineRadio2">I want laundry done</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="additional_service" id="inlineRadio3" value="option3">
                          <label class="form-check-label" for="inlineRadio3">I want my carpet(s) cleaned</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="additional_service" id="inlineRadio3" value="option3">
                          <label class="form-check-label" for="inlineRadio3">I want my fridge cleaned</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="checkbox" name="additional_service" id="no_of_vehicle" value="option3">
                          <label class="form-check-label" for="inlineRadio3">I want my oven cleaned</label>
                        </div>
                      </div>
                    
                  </div>
                    
                    

                
                    <div class="form-group mt-5 buttons">
                        <button @click="showCard3()" type="button" class="btn white-btn">Back</button>
                        <button @click="showCard5()" type="button" class="btn green-btn">Next</button>
                    </div>
                
                </div>
                <div class="upload col-md-12" v-if="display == 5">
                    <h2 class="text-center mt-5 mb-4">Book Additional Service</h2>
                    <div class="row mb-3">
                      <VCalendar :attributes="attributes" expanded />
                    
                  </div>
                    
                    

                
                    <div class="form-group mt-5 buttons">
                        <button @click="showCard4()" type="button" class="btn white-btn">Back</button>
                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn green-btn">Next</button>
                    </div>
                
                </div>
            </form>
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
                  <button>Change Time Set</button>
                </div>
              </div>
              <div class="top-textss mt-3">
                <p>Total</p>
                <h5>$91</h5>
              </div>
            </div>
            <div class="right">
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
            </div>
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
              <input type="text" class="form-control" id="email" placeholder="Email">
              </div>
              <div class="form-group col-md-6">
              <label for="last_name">Phone Number</label>
              <input type="text" class="form-control" id="Phone Number" placeholder="Phone Number">
              </div>
          </div>
          <button class="view-button mt-3">View Instant Prices</button>
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
    import { ref } from 'vue';

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
        bigDisplay: 2,
        display: 1,
        bedroom: 1,
        bathroom:1,
        kitchen:1,
        dining:1,
        livingRoom:1,
      };
    },
    methods: {

      showCard1(){
        this.display = 1;
      },
      showCard2(){
        this.display = 2;
      },
      showCard3(){
        this.display = 3;
      },
      showCard4(){
        this.display = 4;
      },
      showCard5(){
        this.display = 5;
      },
      
      handleClick() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      console.log(file);
      // Handle file upload logic here
    }
      
      
    },
    mounted(){
      const attributes = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);
    }
 
  };
  </script>
  
  <style scoped lang="scss">
    .hero{
      width: 99%;
      height: 25vh;
      border-radius: 20px;
      background: url('@/assets/images/getquote.png');
      background-repeat: no-repeat;
      margin: 1% 0.5%;
      position: relative;
      display: flex;
      justify-content: center;

      .content{
        position: relative;
        margin-left: 4%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
        margin-top: 100px;
        h1{
          text-align: left;
          font-family: Lato;
          font-size: 70px;
          font-weight: 700;
          color: white;        
        }
      }
    }
    .give-space{
      margin-top: 150px;
    }

    .main-content{
      width: 100%;
      margin: auto;
      display: flex;
      margin-top: 20px;
      gap: 20px;
      padding: 5% 15%;
      gap: 30px;
      box-sizing: border-box;

      .clean-info{
        width: 90%;
        background: white;
        padding: 4%;
        border-radius: 10px;
        margin: auto;

        .bars{
            width: 100%;
            gap: 2%;
            display: flex;

            .each-bar{
            height: 7px;
            width: 50%;
            background: #D9D9D9;
            border-radius: 8px;
            }
            .active-bar{
              background: #2E7D32;
            }
        }
        

        .buttons{
            width: 100%;
            display: flex;
            justify-content: space-between;

            .white-btn{
                border: 1px solid #2E7D32;
                color: #2E7D32;
                width: 170px;
            }
            .green-btn{
                background: #2E7D32;
                color: white;
                width: 170px;
            }
        }
        .additional{
          .de-flex{
            width: 70%;
            display: flex;
            justify-content: space-between;
          }
        }
        .browse-link {
          color: rgba(76, 149, 108, 1);
          text-align: center;
        }
        .cursor{
          cursor: pointer;
        }
      }
    }
    .each-row{
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid rgb(196, 196, 196);

      .right{
        display: flex;
        gap: 10px;

        button{
          width: 22px;
          height: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          border: none;
          border-radius: 5px;
        }
        .red-btn{
          background: #FF2222;
        }
        .green-btn{
          background: #2E7D32;
        }
      }
    }
    .de-flex{
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 80%;
      margin: auto;
      font-size: 30px;
    }
    .view-button{
      background: #2E7D32;
        color: white;
        width: 100%;
        height: 48px;
        border: none;
        border-radius: 10px;
    }
   .payment-info{
        width: 100%;
        background: white;
        padding: 4% 2%;
        border-radius: 15px;
        display: flex;
        gap: 5%;

        .left{
          width: 55%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          .text-contain{
            background: #DFEEFF;
            display: flex;
            justify-content: center;
            padding: 15px 20px;
            border-radius: 10px;
          }
          .time-area{
            background: #F0F5F3;
            width: 80%;
            border-radius: 10px;
            box-shadow: 0px 10px 24px 0px #058DB840;

            .top-text{
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 15px;
            }
            .button-area{
              display: flex;
              justify-content: center;
              button{
              width: 80%;
              background: #F0F2F5;
              color: #2E7D32;
              height: 48px;
              border: 1px solid #2E7D32;
              border-radius: 15px;
              margin: auto;
            }
            }
          }
          .top-textss{
            width: 80%;
            display: flex;
            justify-content: space-between;
            padding: 15px;
          }
        }
        .right{
          width: 40%;
          border: 0.3px solid rgb(212, 212, 212);
          border-radius: 10px;
          padding: 35px;

          .big-card{
            border: 0.3px solid rgb(212, 212, 212);
            border-radius: 10px;
            padding: 18px;

            .card-head{
              border: 0.3px solid rgb(212, 212, 212);
              border-radius: 10px;
              padding: 18px;
              display: flex;
              gap: 15px;
              align-items: center;

              h4{
                margin: 0px;
              }
            }
            button{
              background: #2E7D32;
              color: white;
              width: 100%;
              height: 48px;
              border: none;
              border-radius: 10px;
            }
            
          }
        }
        .small-card{
          border: 0.3px solid rgb(212, 212, 212);
          border-radius: 10px;
          padding: 6px 18px;
          display: flex;
          gap: 15px;
          align-items: center;
        }
   }
    </style>