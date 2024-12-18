<template>
    <div class="hero">
      <TopNav></TopNav>
      <div class="content">
        <h2>Find a perfect quote for your move</h2>
      </div>
    </div>
  
    <div class="main-content">
      <div class="left">
        <div class="bars mb-3">
          <div :class="[this.display > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display > 2 ? 'active-bar each-bar' : 'each-bar']"></div>
          <div :class="[this.display == 4 ? 'active-bar each-bar' : 'each-bar']"></div>
        </div>
        <form action="">
          <div v-if="display == 1">
            <h2 class="text-center mt-5 mb-4">Address Details</h2>
            <div class="row mb-3">
              <div class="div-group col-md-6">
                <label for="first_name">Pick-up Address</label>
                <input type="text" class="form-control" id="pickupAddress" placeholder="Pick-up Address"
                  >
              </div>
              <div class="form-group col-md-6">
                <label for="last_name">Drop-off Address</label>
                <input type="text" class="form-control" id="" placeholder="Drop-off Address"
                 >
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Property Type</label>
                <input type="text" class="form-control" id="" placeholder="Property Type" >
              </div>
              <div class="form-group col-md-6">
                <label for="inputEmail4">Property Type</label>
                <input type="text" class="form-control" id="" placeholder="Property Type"
                  >
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Floor</label>
                <input type="text" class="form-control" id="" placeholder="Property Type" >
              </div>
            </div>
  
  
  
            <div class="form-group mt-5 buttons">
              <button type="submit" disabled class="btn white-btn">Back</button>
              <button type="submit" @click="showCard2()" class="btn green-btn">Next</button>
            </div>
  
          </div>
          <div v-if="display == 2">
            <h2 class="text-center mt-5 mb-4">Select Property Type</h2>
            <div class="row mb-3">
              <div class="form-group d-flex give-gap col-md-12">
                <input type="radio" id="email" placeholder="Post Code">
                <label class="labelled" for="first_name">Small to Mid Size Property <br> <span>Ideal for this booking type</span></label>
              </div>
            </div>
            <div class="row mb-3">
              <div class="form-group d-flex give-gap col-md-12">
                <input type="radio" id="email" placeholder="Post Code">
                <label class="labelled" for="first_name">Large Property <br> <span>You need to book, no obligation property survey to be able to get a precise quote</span></label>
              </div>
            </div>
  
  
  
            <div class="form-group mt-5 buttons">
              <button @click="showCard1()" type="submit" class="btn white-btn">Back</button>
              <button @click="showCard3()" type="submit" class="btn green-btn">Next</button>
            </div>
  
          </div>
          <div class="additional" v-if="display == 3">
            <h2 class="text-center mt-5 mb-4">What are You Moving?</h2>
  
            <!-- Number of Vehicles -->
            <nav class="big-tabs">
              <div class="nav nav-tabs tabs-container" id="nav-tab" role="tablist">
                <div class="nav-lin active" id="nav-bedroom-tab" data-bs-toggle="tab" data-bs-target="#nav-bedroom" type="div" role="tab" aria-controls="nav-bedroom" aria-selected="true">Bedrooms</div>
                <div class="nav-lin" id="nav-livingroom-tab" data-bs-toggle="tab" data-bs-target="#nav-livingroom" type="div" role="tab" aria-controls="nav-livingroom" aria-selected="false">Living Rooms</div>
                <div class="nav-lin" id="nav-dining-tab" data-bs-toggle="tab" data-bs-target="#nav-dining" type="div" role="tab" aria-controls="nav-dining" aria-selected="false">Dining</div>
                <div class="nav-lin" id="nav-kitchen-tab" data-bs-toggle="tab" data-bs-target="#nav-kitchen" type="div" role="tab" aria-controls="nav-kitchen" aria-selected="false">Kitchen</div>
                <div class="nav-lin" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-bathroom" type="div" role="tab" aria-controls="nav-bathroom" aria-selected="false">Bathrooms</div>
                <div class="nav-lin" id="nav-boxes-tab" data-bs-toggle="tab" data-bs-target="#nav-boxes" type="div" role="tab" aria-controls="nav-boxes" aria-selected="false">Boxes and Packaging</div>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-bedroom" role="tabpanel" aria-labelledby="nav-bedroom-tab">
                <div class="row each-tab mb-3">
                      <div class="each-row mt-3">
                        <p>Double Beds & Mattress</p>
                        <div class="rights">
                          <button @click="doubleBed > 0 ? doubleBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ doubleBed }}</p>
                          <button @click=" doubleBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Kingsize Bed & Mattress</p>
                        <div class="rights">
                          <button @click="kingBed > 0 ? kingBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kingBed }}</p>
                          <button @click="kingBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Single Wardrobe</p>
                        <div class="rights">
                          <button @click="wardrobe > 0 ? wardrobe-- : null" type="button" class="red-btn">-</button>
                          <p>{{ wardrobe }}</p>
                          <button @click="wardrobe++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Chest of Drawers</p>
                        <div class="rights">
                          <button @click="drawers > 0 ? drawers-- : null" type="button" class="red-btn">-</button>
                          <p>{{ drawers }}</p>
                          <button @click="drawers++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bedside Table</p>
                        <div class="rights">
                          <button @click="bedSideTable > 0 ?bedSideTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedSideTable }}</p>
                          <button @click="bedSideTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dressing Table</p>
                        <div class="rights">
                          <button @click="dressingTable > 0 ?dressingTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dressingTable }}</p>
                          <button @click="dressingTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="television > 0 ?television-- : null" type="button" class="red-btn">-</button>
                          <p>{{ television }}</p>
                          <button @click="television++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="tab-pane fade" id="nav-livingroom" role="tabpanel" aria-labelledby="nav-livingroom-tab">
                <div class="row each-tab mb-3">
                      <div class="each-row mt-3">
                        <p>Sofa</p>
                        <div class="rights">
                          <button @click="doubleBed > 0 ? doubleBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ doubleBed }}</p>
                          <button @click=" doubleBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="kingBed > 0 ? kingBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kingBed }}</p>
                          <button @click="kingBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Single Wardrobe</p>
                        <div class="rights">
                          <button @click="wardrobe > 0 ? wardrobe-- : null" type="button" class="red-btn">-</button>
                          <p>{{ wardrobe }}</p>
                          <button @click="wardrobe++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Chest of Drawers</p>
                        <div class="rights">
                          <button @click="drawers > 0 ? drawers-- : null" type="button" class="red-btn">-</button>
                          <p>{{ drawers }}</p>
                          <button @click="drawers++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bedside Table</p>
                        <div class="rights">
                          <button @click="bedSideTable > 0 ?bedSideTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedSideTable }}</p>
                          <button @click="bedSideTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dressing Table</p>
                        <div class="rights">
                          <button @click="dressingTable > 0 ?dressingTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dressingTable }}</p>
                          <button @click="dressingTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="television > 0 ?television-- : null" type="button" class="red-btn">-</button>
                          <p>{{ television }}</p>
                          <button @click="television++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="tab-pane fade" id="nav-dining" role="tabpanel" aria-labelledby="nav-dining-tab">
                <div class="row each-tab mb-3">
                      <div class="each-row mt-3">
                        <p>Dining Chairs</p>
                        <div class="rights">
                          <button @click="doubleBed > 0 ? doubleBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ doubleBed }}</p>
                          <button @click=" doubleBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dining Table</p>
                        <div class="rights">
                          <button @click="kingBed > 0 ? kingBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kingBed }}</p>
                          <button @click="kingBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Single Wardrobe</p>
                        <div class="rights">
                          <button @click="wardrobe > 0 ? wardrobe-- : null" type="button" class="red-btn">-</button>
                          <p>{{ wardrobe }}</p>
                          <button @click="wardrobe++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Chest of Drawers</p>
                        <div class="rights">
                          <button @click="drawers > 0 ? drawers-- : null" type="button" class="red-btn">-</button>
                          <p>{{ drawers }}</p>
                          <button @click="drawers++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bedside Table</p>
                        <div class="rights">
                          <button @click="bedSideTable > 0 ?bedSideTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedSideTable }}</p>
                          <button @click="bedSideTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dressing Table</p>
                        <div class="rights">
                          <button @click="dressingTable > 0 ?dressingTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dressingTable }}</p>
                          <button @click="dressingTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="television > 0 ?television-- : null" type="button" class="red-btn">-</button>
                          <p>{{ television }}</p>
                          <button @click="television++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="tab-pane fade" id="nav-kitchen" role="tabpanel" aria-labelledby="nav-kitchen-tab">
                <div class="row each-tab mb-3">
                      <div class="each-row mt-3">
                        <p>Pots</p>
                        <div class="rights">
                          <button @click="doubleBed > 0 ? doubleBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ doubleBed }}</p>
                          <button @click=" doubleBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Cookers</p>
                        <div class="rights">
                          <button @click="kingBed > 0 ? kingBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kingBed }}</p>
                          <button @click="kingBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Single Wardrobe</p>
                        <div class="rights">
                          <button @click="wardrobe > 0 ? wardrobe-- : null" type="button" class="red-btn">-</button>
                          <p>{{ wardrobe }}</p>
                          <button @click="wardrobe++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Chest of Drawers</p>
                        <div class="rights">
                          <button @click="drawers > 0 ? drawers-- : null" type="button" class="red-btn">-</button>
                          <p>{{ drawers }}</p>
                          <button @click="drawers++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bedside Table</p>
                        <div class="rights">
                          <button @click="bedSideTable > 0 ?bedSideTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedSideTable }}</p>
                          <button @click="bedSideTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dressing Table</p>
                        <div class="rights">
                          <button @click="dressingTable > 0 ?dressingTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dressingTable }}</p>
                          <button @click="dressingTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="television > 0 ?television-- : null" type="button" class="red-btn">-</button>
                          <p>{{ television }}</p>
                          <button @click="television++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="tab-pane fade" id="nav-dining" role="tabpanel" aria-labelledby="nav-dining-tab">
                <div class="row each-tab mb-3">
                      <div class="each-row mt-3">
                        <p>Dining Chairs</p>
                        <div class="rights">
                          <button @click="doubleBed > 0 ? doubleBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ doubleBed }}</p>
                          <button @click=" doubleBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dining Table</p>
                        <div class="rights">
                          <button @click="kingBed > 0 ? kingBed-- : null" type="button" class="red-btn">-</button>
                          <p>{{ kingBed }}</p>
                          <button @click="kingBed++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Single Wardrobe</p>
                        <div class="rights">
                          <button @click="wardrobe > 0 ? wardrobe-- : null" type="button" class="red-btn">-</button>
                          <p>{{ wardrobe }}</p>
                          <button @click="wardrobe++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Chest of Drawers</p>
                        <div class="rights">
                          <button @click="drawers > 0 ? drawers-- : null" type="button" class="red-btn">-</button>
                          <p>{{ drawers }}</p>
                          <button @click="drawers++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Bedside Table</p>
                        <div class="rights">
                          <button @click="bedSideTable > 0 ?bedSideTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ bedSideTable }}</p>
                          <button @click="bedSideTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Dressing Table</p>
                        <div class="rights">
                          <button @click="dressingTable > 0 ?dressingTable-- : null" type="button" class="red-btn">-</button>
                          <p>{{ dressingTable }}</p>
                          <button @click="dressingTable++" type="button" class="green-btn">+</button>
                        </div>
                      </div>
                      <div class="each-row mt-3">
                        <p>Television</p>
                        <div class="rights">
                          <button @click="television > 0 ?television-- : null" type="button" class="red-btn">-</button>
                          <p>{{ television }}</p>
                          <button @click="television++" type="button" class="green-btn">+</button>
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
            <h2 class="text-center mt-5 mb-4">Service Details</h2>
            <div class="row mb-3">
              <div class="form-group col-md-12">
                <div class="row radios mb-3">
            <label for="number_of_vehicle">Number of Vehicles</label>
            <div class="form-group de-flex col-md-12">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="number_of_vehicle" :id="'vehicle_' + index"
                  >
                <label class="form-check-label" >jjj</label>
              </div>
            </div>
          </div>

          <!-- Type of Vehicles -->
          <div class="row radios mt-3">
            <label for="vehicle_types">Type of Vehicle</label>
            <div class="form-group de-flex col-md-12">
              <div class="form-check form-check-inline" >
                <input class="form-check-input" type="checkbox" name="vehicle_types" 
                  >
                <label class="form-check-label">hello</label>
              </div>
            </div>
          </div>

          <!-- VAT Registered -->
          <div class="row mt-3 mb-3">
            <label for="vat_registered">VAT Registered</label>
            <div class="form-group radios col-md-12">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="vat_registered" value="yes"
                  >
                <label class="form-check-label">YES</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="vat_registered" value="no"
                  >
                <label class="form-check-label">NO</label>
              </div>
            </div>
          </div>
              </div>
            </div>
  
  
            <!--  -->
            <div>
              <!-- Identity -->
              
  
            </div>
  
  
            <div class="form-group mt-5 buttons">
              <button @click="showCard3()" type="submit" class="btn white-btn">Back</button>
              <button type="button" @click="addDriver()" class="btn green-btn">submit</button>
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
            <p>Hilogisticz requires you to have a full valid UK driving license for at least one consecutive year. If you
              are under 22 years old you will need a a minimum of 3 years driving experience.
            </p>
            <h5>Vehicle Insurance</h5>
            <p>Hilogisticz requires you to supply your commercial van insurance which covers you for the carriage of goods
              for hire and reward.
            </p>
            <h5>Good In Transit</h5>
            <p>Your Goods in Transit Insurance must be have a minimum cover of £50,000 and be for the purpose of removals.
            </p>
            <h5>Motor Trade Insurance(if applicable)</h5>
            <p>If you are transporting vehicles, AnyVan requires your motor trade insurance. This is a mandatory
              requirement when transporting any vehicle.
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
        display: 1,
        doubleBed: 1,
        kingBed:1,
        wardrobe:1,
        drawers:1,
        bedSideTable:1,
        dressingTable:1,
        television:1,
        driverDetails: {
          firstName: "",
          lastName: "",
          email: "",
          businessName: "",
          postCode: "",
          phoneNumber: "",
          additionalData: "",
        },
      };
    },
    methods: {
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
    gap: 20px;
    padding: 5%;
    gap: 30px;
    box-sizing: border-box;
  
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

      img{
        width: 100%;
      }
      .each-details{
        display: flex;
        justify-content: space-between;
        padding: 0px 12px;
      }
      .each-detail{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .left{
          display: flex;
          align-items: center;
          gap: 5px;

          h4, p{
            margin: 0px !important;
          }
        }

        img{
          width: 12px;
          height: 12px;
        }
      }
      h2{
        color: var(--Primarryyy, #4C956C);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;

      }
  
      
    }
  }
  .give-gap{
    gap: 10px;
    
    label{
      font-family: Lato;
      font-size: 18.33px;
      font-weight: 700;
      line-height: 27.5px;

    }
  }
  .each-tab{


  .each-row{
      display: flex;
      justify-content: space-between;
      border-bottom: 0.5px solid rgb(196, 196, 196);

      .rights{
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
  }
  .big-tabs{
    width: 100%;
    
    .tabs-container{
      width: 100%;
      display: flex;

      .nav-lin{
        flex-grow: 1;
        border: none;
        height: 60px;
        text-align: center;
      }
    }
  }
  </style>
  