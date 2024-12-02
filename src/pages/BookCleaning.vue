<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
            <h2>Book Cleaning Service</h2>
        </div>
    </div>

    <div class="main-content">
          <div class="left">
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
                    <div class="form-group de-flex mb-3 col-md-8">
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
                        <button @click="showCard1()" type="button" class="btn white-btn">Back</button>
                        <button @click="showCard3()" type="button" class="btn green-btn">Next</button>
                    </div>
                
                </div>
            </form>
          </div>
          
    </div>

    <!-- MODAL -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Documents Required</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h5>Driving License</h5>
        <p>Hilogisticz requires you to have a full valid UK driving license for at least one consecutive year. If you are under 22 years old you will need a a minimum of 3 years driving experience.
        </p>
        <h5>Vehicle Insurance</h5>
        <p>Hilogisticz requires you to supply your commercial van insurance which covers you for the carriage of goods for hire and reward.
        </p>
        <h5>Good In Transit</h5>
        <p>Your Goods in Transit Insurance must be have a minimum cover of £50,000 and be for the purpose of removals.
        </p>
        <h5>Motor Trade Insurance(if applicable)</h5>
        <p>If you are transporting vehicles, AnyVan requires your motor trade insurance. This is a mandatory requirement when transporting any vehicle.
        </p>
      </div>
    </div>
  </div>
</div>
    
    <Footer></Footer>
  </template>
  
  <script>
    import Footer from '@/layouts/partials/footer.vue';
    import TopNav from '@/layouts/partials/topnav.vue'
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
      padding: 5% 20%;
      gap: 30px;
      box-sizing: border-box;

      .left{
        width: 100%;
        background: white;
        padding: 4%;
        border-radius: 10px;

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
   
    </style>