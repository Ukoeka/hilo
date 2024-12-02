<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
            <h2>Become a Cleaner</h2>
        </div>
    </div>

    <div class="main-content">
          <div class="left">
            <div class="bars mb-3">
                <div :class="[this.display  > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
                <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>
               
            </div>
            <form action="">
              <div v-if="display == 1">
                  <h2 class="text-center mt-5 mb-4">Cleaner Details</h2>
                  
                  <div class="row mb-3">
                      <div class="div-group col-md-6">
                      <label for="first_name">First Name</label>
                      <input type="text" class="form-control" id="first_name" placeholder="First Name">
                      </div>
                      <div class="form-group col-md-6">
                      <label for="last_name">Last Name</label>
                      <input type="text" class="form-control" id="last_name" placeholder="Last Name">
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="div-group col-md-6">
                      <label for="first_name">Email</label>
                      <input type="text" class="form-control" id="first_name" placeholder="First Name">
                      </div>
                      <div class="form-group col-md-6">
                      <label for="last_name">Gender</label>
                      <select name="" class="form-control" id="">
                        <option value="">Male</option>
                        <option value="">Female</option>
                      </select>
                      </div>
                  </div>
                  <div class="row mb-3">
                      <div class="div-group col-md-6">
                      <label for="first_name">Post Code</label>
                      <input type="text" class="form-control" id="first_name" placeholder="First Name">
                      </div>
                      <div class="form-group col-md-6">
                      <label for="last_name">Language</label>
                      <input type="text" class="form-control" id="last_name" placeholder="Last Name">
                      </div>
                  </div>
                  
                  

              
                  <div class="form-group mt-5 buttons">
                      <button type="submit" disabled class="btn white-btn">Back</button>
                      <button type="submit" @click="showCard2()" class="btn green-btn">Next</button>
                  </div>
              
              </div>
                <div class="upload" v-if="display == 2">
                    <h2 class="text-center mt-5 mb-4">Upload Documents</h2>
                    <div class="row mb-3">
                        <div class="form-group col-md-12">                      
                      </div>
                    </div>
                    <div class="mb-5 w-100 m-auto" >
                      <h3 class="">Identity</h3>
                      <div class="row">
                        <div class="col-md-4">
                          <p class="txt mb-3">Driving License</p>
                          <div class="card d-flex py-4 mb-5 cursor" @click="handleClick()" style="background-color: rgba(240, 245, 243, 1);">
                            <img src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60">
                            <input type="file" ref="fileInput" @change="handleFileChange()" hidden>
                            <p class="file-info browse-link">Browse<br />.jpg, .png
                              or .pdf files Accepted</p>
                            <!-- <img v-if="document.preview" :src="document.preview" alt="Document Preview" class="preview-img" /> -->
                          </div>
                        </div>
                        <div class="col-md-4">
                          <p class="txt mb-3">Utility Bill</p>
                          <div class="card d-flex py-4 mb-5 cursor" style="background-color: rgba(240, 245, 243, 1);">
                            <img src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60">
                            <input type="file" hidden>
                            <p class="file-info browse-link">Browse<br />.jpg, .png
                              or .pdf files Accepted</p>
                            <!-- <img v-if="document.preview" :src="document.preview" alt="Document Preview" class="preview-img" /> -->
                          </div>
                        </div>
                        <div class="col-md-4">
                          <p class="txt mb-3">Utility Bill</p>
                          <div class="card d-flex py-4 mb-5 cursor" style="background-color: rgba(240, 245, 243, 1);">
                            <img src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60">
                            <input type="file" hidden>
                            <p class="file-info browse-link">Browse<br />.jpg, .png
                              or .pdf files Accepted</p>
                            <!-- <img v-if="document.preview" :src="document.preview" alt="Document Preview" class="preview-img" /> -->
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    

                
                    <div class="form-group mt-5 buttons">
                        <button @click="showCard1()" type="submit" class="btn white-btn">Back</button>
                        <button type="submit" class="btn green-btn">submit</button>
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
      };
    },
    methods: {
      showCard1(){
        this.display = 1;
      },
      showCard2(){
        this.display = 2;
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
   
    </style>