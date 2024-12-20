<template>
  <div class="hero">
    <TopNav></TopNav>
    <div class="content">
      <h2>Find a perfect quote for your move</h2>
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
          <label class="faded mb-2" for="number_of_vehicle">Vehicle Type and Capacity <img class="question-modal" src="@/assets/icons/question.png" alt=""></label>
          <div class="d-flexe mb-3">
            <div class="form-group radio-btn">
              <input type="radio" id="email" placeholder="Post Code">
              <label class="labelle" for="first_name">Small Van</label>
            </div>
            <div class="form-group radio-btn">
              <input type="radio" id="email" placeholder="Post Code">
              <label class="labelle" for="first_name">Luton Van</label>
            </div>
            <div class="form-group radio-btn">
              <input type="radio" id="email" placeholder="Post Code">
              <label class="labelld" for="first_name">Large Van</label>
            </div>
          </div>

          <div class="form-group mt-3 col-md-12">
            <label class="faded" for="number_of_vehicle">Do you require additional services?<img class="question-modal" src="@/assets/icons/question.png" alt=""></label>
          </div>
        </div>

        <!-- Type of Vehicles -->
        <div class="row radios mt-3">
          <div class="form-group col-md-8">
            <div class="checkers mt-2 mb-3">
              <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="packing_assistance" 
                >
              <label class="form-check-label">Packing Assistance</label>
            </div>
            <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="packing_assistance" 
                >
              <label class="form-check-label">Unpacking Assistance</label>
            </div>
            
            </div>
            <div class="checkers mt-2 mb-3">
              <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="furniture_assembly" 
                >
              <label class="form-check-label">Furniture Assembly</label>
            </div>
            <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="furniture_assembly" 
                >
              <label class="form-check-label">Furniture disassembly</label>
            </div>
            
            </div>
            <div class="checkers mt-2 mb-3">
              <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="loading_assistance" 
                >
              <label class="form-check-label">Loading Assistance</label>
            </div>
            <div class="form-check form-check-inline" >
              <input class="form-check-input" type="checkbox" name="loading_assistance" 
                >
              <label class="form-check-label">Unloading Assistance</label>
            </div>
            
            </div>
          </div>
        </div>

        <div class="form-group mt-3 col-md-12">
            <label class="faded mb-3" for="number_of_vehicle">Do you require additional services?<img class="question-modal" src="@/assets/icons/question.png" alt=""></label>
            <input type="text" class="form-control">
          </div>

        
            </div>
          </div>


          <!--  -->
          


          <div class="form-group mt-5 buttons">
            <button @click="showCard3()" type="submit" class="btn white-btn">Back</button>
            <button type="button" @click="showCard5()" class="btn green-btn">Next</button>
          </div>

        </div>
        <div class="upload col-md-12" v-if="display == 5">
            <h2 class="text-center mt-5 mb-4">Time and Date</h2>
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
          <button type="button" @click="paymentView()" class="view-button mt-3" data-bs-dismiss="modal" aria-label="Close">View Instant Prices</button>
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

  .drive-info{
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
.question-modal{
  width: 20px;
  margin: -5px 10px;
}
.faded{
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #6E7191;
}
.d-flexe{
  display: flex;
  gap: 40px;
}
.radio-btn{
  input{
    width: 25px;
  }
}
.checkers{
  width: 100%;
  display: flex;
  justify-content: space-between;
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
