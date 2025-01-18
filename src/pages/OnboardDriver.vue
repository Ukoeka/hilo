<template>
  <div class="hero">
    <TopNav></TopNav>
    <div class="content">
      <h2>Become a Driver</h2>
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
      <form>
        <div v-if="display == 1">
          <h2 class="text-center mt-5 mb-4">Driver Details</h2>
          <div class="row mb-3">
            <div class="div-group col-md-6">
              <label for="first_name">First Name</label>
              <input type="text" class="form-control" id="firstName" required placeholder="First Name"
                v-model="driverDetails.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Last Name</label>
              <input type="text" class="form-control" id="last_name" required placeholder="Last Name"
                v-model="driverDetails.lastName">
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" required id="email" placeholder="email"
                v-model="driverDetails.email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Business Name</label>
              <input type="text" class="form-control" required id="businessName" placeholder="Business Name"
                v-model="driverDetails.businessName">
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Password</label>
              <input type="password" class="form-control" required id="password" placeholder="Password"
                v-model="driverDetails.password">
            </div>
          </div>



          <div class="form-group mt-5 buttons">
            <button type="button" disabled class="btn white-btn">Back</button>
            <button type="button" @click="showCard2()" class="btn green-btn">Next</button>
          </div>

        </div>
        <div v-if="display == 2">
          <h2 class="text-center mt-5 mb-4">Contact Details</h2>
          <div class="row mb-3">
            <div class="form-group col-md-12">
              <label for="first_name">Addresss</label>
              <MapboxAddressInput v-model="driverDetails.postCode"
                :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }"
                placeholder="Address" required @addressSelect="(address) => handleAddressSelect('first', address)" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Phone Number</label>
              <vue-tel-input :onlyCountries="['GB']" v-model="driverDetails.phoneNumber" required></vue-tel-input>
              <!-- <vue-country-code @onSelect="onSelect"></vue-country-code> -->
            </div>
          </div>



          <div class="form-group mt-5 buttons">
            <button @click="showCard1()" type="button" class="btn white-btn">Back</button>
            <button @click="showCard3()" type="button" class="btn green-btn">Next</button>
          </div>

        </div>
        <div class="additional" v-if="display == 3">
          <h2 class="text-center mt-5 mb-4">Additional Information</h2>

          <!-- Number of Vehicles -->
          <div class="row radios mb-3">
            <label for="number_of_vehicle">Number of Vehicles</label>
            <div class="form-group de-flex col-md-12">
              <div class="form-check form-check-inline" v-for="(label, index) in vehicleOptions" :key="index">
                <input required class="form-check-input" type="radio" name="number_of_vehicle" :id="'vehicle_' + index"
                  :value="label.value" v-model="form.additional.numberOfVehicle">
                <label class="form-check-label" :for="'vehicle_' + index">{{ label.label }}</label>
              </div>
            </div>
          </div>

          <!-- Type of Vehicles -->
          <div class="row radios mt-3">
            <label for="vehicle_types">Type of Vehicle</label>
            <div class="form-group de-flex col-md-12">
              <div class="form-check form-check-inline" v-for="(label, index) in vehicleTypes" :key="index">
                <input required class="form-check-input" type="checkbox" name="vehicle_types" :id="'type_' + index"
                  :value="label.value" v-model="form.additional.vehicleTypes">
                <label class="form-check-label" :for="'type_' + index">{{ label.label }}</label>
              </div>
            </div>
          </div>

          <!-- VAT Registered -->
          <div class="row mt-3 mb-3">
            <label for="vat_registered">VAT Registered</label>
            <div class="form-group radios col-md-12">
              <div class="form-check form-check-inline">
                <input required class="form-check-input" type="radio" name="vat_registered" value="yes"
                  v-model="form.additional.vatRegistered">
                <label class="form-check-label">YES</label>
              </div>
              <div class="form-check form-check-inline">
                <input required class="form-check-input" type="radio" name="vat_registered" value="no"
                  v-model="form.additional.vatRegistered">
                <label class="form-check-label">NO</label>
              </div>
            </div>
          </div>

          <div class="form-group mt-5 buttons">
            <button @click="showCard2()" type="button" class="btn white-btn">Back</button>
            <button @click="showCard4()" type="button" class="btn green-btn">Next</button>
          </div>
        </div>

        <div class="upload" v-if="display == 4">
          <h2 class="text-center mt-5 mb-4">Upload Documents</h2>
          <div class="row mb-3">
            <div class="form-group col-md-12">
            </div>
          </div>


          <!--  -->
          <div>
            <!-- Identity -->
            <div class="mb-5 w-100 m-auto">
              <h3>Identity</h3>
              <div class="row">
                <div class="col-md-4" v-for="(document, index) in documents.slice(0, 3)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input required type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Insurance -->
            <div class="mb-5 w-100 m-auto">
              <h3>Insurance</h3>
              <div class="row">
                <div class="col-md-4" v-for="(document, index) in documents.slice(3, 8)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input required type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Other -->
            <div class="mb-5 w-100 m-auto">
              <h3>Other</h3>
              <div class="row">
                <div class="col-md-4" v-for="(document, index) in documents.slice(8, 9)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input required type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="form-group mt-5 buttons">
            <button @click="showCard3()" type="button" class="btn white-btn">Back</button>
            <button type="button" @click="addDriver()" class="btn green-btn">
              <span v-if="loader" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
              <span v-else>submit</span>
            </button>
          </div>

        </div>
      </form>
    </div>
    <div class="right">
      <div class="heading">
        <h2>Documents Required</h2>
        <a href="javascript:void(0)" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="@/assets/icons/question.png" alt=""></a>
      </div>
      <h3>Identity</h3>
      <ul>
        <li>Driving License</li>
        <li>2 x Utility Bill</li>
      </ul>
      <h3>Insurance</h3>
      <ul>
        <li>Vehicle insurance (Hire and Reward)</li>
        <li>Goods in Transit (minimum cover £10,000 for the purpose of removals)</li>
        <li>Public Liability (minimum £1M)</li>
        <li>Motor Trade Insurance (where applicable)</li>
        <li>CMR (minimum £50,000 where applicable)</li>
      </ul>
      <h3>Other</h3>
      <ul>
        <li>VAT Certificate</li>
      </ul>
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
import MapboxAddressInput from "@/components/MapBoxAddressInput.vue";
import Footer from '@/layouts/partials/footer.vue';
import TopNav from '@/layouts/partials/topnav.vue'
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'

export default {
  name: 'OnboardDriver',
  components: {
    TopNav,
    Footer,
    MapboxAddressInput

  },

  props: {
    // Define props here
  },
  data() {
    return {
      loader: false,
      display: 1,
      driverDetails: {
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        postCode: "",
        phoneNumber: "",
        additionalData: "",
        password: "",
      },
      form: {
        additional: {
          numberOfVehicle: "",
          vehicleTypes: [],
          vatRegistered: "",
        },
      },
      vehicleOptions: [
        { label: "1", value: "1" },
        { label: "2-5", value: "2-5" },
        { label: "6-10", value: "6-10" },
        { label: "11+", value: "11+" },
        { label: "No vehicle", value: "none" },
      ],
      vehicleTypes: [
        { label: "Car", value: "car" },
        { label: "Van", value: "van" },
        { label: "Truck", value: "truck" },
        { label: "Bike", value: "bike" },
      ],
      documents: [
        { label: "Driving License", file: null, preview: null, id: 1 },
        { label: "Utility Bill 1", file: null, preview: null, id: 2 },
        { label: "Utility Bill 2", file: null, preview: null, id: 3 },
        { label: "Vehicle insurance (Hire and Reward)", file: null, preview: null, id: 4 },
        {
          label:
            "Goods in Transit (minimum cover £10,000 for the purpose of removals)",
          file: null,
          preview: null,
          id: 5
        },
        { label: "Public Liability (minimum £1M)", file: null, preview: null, id: 6 },
        { label: "Motor Trade Insurance(where applicable)", file: null, preview: null, id: 7 },
        { label: "CMR (minimum £50,000 where applicable)", file: null, preview: null, id: 8 },
        { label: "Vat Certificate", file: null, preview: null, id: 9 },
      ],
    };
  },
  watch: {
    form: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.driverDetails.additionalData = newVal.additional
        }
      },
      deep: true,
      // immediate: true
    }
  },
  methods: {
    handleAddressSelect(field, address) {
      if (field === 'first') {
        this.driverDetails.postCode = address;
      } else if (field === 'second') {
        this.bookDriver.dropOff.name = address;
      }
    },
    triggerFileInput(index, listName) {
      event.stopPropagation(); // Prevents the click event from propagating further
      // Trigger the file input programmatically
      this.$refs['fileInput' + index][0].click();

    },
    handleFileChange(event, index, listName) {
      console.log(index, listName);

      const file = event.target.files[0];
      if (file) {

        const reader = new FileReader();
        reader.onload = (e) => {
          // Ensure the preview URL is correctly set
          this.documents.forEach((doc) => {
            console.log(doc)
            if (doc.id === index) {
              doc.preview = e.target.result
              doc.file = file
            }
          })
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
      if (!this.isDriverDetailsValid()) { // Changed condition
        swal({
          text: "All driver details are required to proceed.",
          icon: "error",
        });
        return;
      }
      this.display = 2;
    },

    showCard3() {
      if (!this.isDriverDetailsValid()) { // Changed condition
        swal({
          text: "All driver details are required to proceed.",
          icon: "error",
        });
        return;
      }
      this.display = 3;
    },

    showCard4() {
      if (!this.isDriverDetailsValid()) { // Changed condition
        swal({
          text: "All driver details are required to proceed.",
          icon: "error",
        });
        return;
      }
      this.display = 4;
    },
    async addDriver() {
      this.loader = true;
      const isDocFilled = this.documents.every(doc => doc.file);
      if (!isDocFilled) {
        swal({
          title: "Error",
          text: "Please upload all documents",
          icon: "error",
          button: "Ok",
        })
        return;
      }
      try {
        const formData = new FormData();
        // Append basic fields as per the request body example
        formData.append('firstName', this.driverDetails.firstName);
        formData.append('lastName', this.driverDetails.lastName);
        formData.append('email', this.driverDetails.email);
        formData.append('businessName', this.driverDetails.businessName);
        formData.append('postCode', this.driverDetails.postCode);
        formData.append('phoneNumber', this.driverDetails.phoneNumber);
        formData.append('additionalData', JSON.stringify(this.additional)); // { "numberOfVehicle": 1 }
        formData.append('password', this.driverDetails.password);

        // Append documents as per the request body mmeyene
        this.appendFilesToFormData(formData, 'documents', this.documents);

        // Send the data via API call
        const response = await postToApi('registration/driver', formData, 'multipart/form-data');
        console.log(response);
        if (response.status) {
          swal({
            title: "Success",
            text: "Registration Successful",
            icon: "success",
            button: "Ok",
          });
          setTimeout(() => {
            this.$router.push('/registration-successful'); // Replace '/new-page' with your desired route
          }, 2000);
        } else {
          swal({
            title: "Error",
            text: response.message,
            icon: "error",
            button: "Ok",
          })
        }
      } catch (error) {
        console.error(error);
      }
      finally {
        this.loader = false
      }
    },

    // Helper method to append document files to FormData
    appendFilesToFormData(formData, keyPrefix, documentArray) {
      documentArray.forEach((document, index) => {
        if (document.file) {
          // Append the actual file using the correct name pattern
          formData.append(`${keyPrefix}[${index}][file]`, document.file);
        }
      });
    },

    // Validate driverDetails to ensure all required fields are filled
    isDriverDetailsValid() {
      const {
        firstName,
        lastName,
        email,
        postCode,
        businessName,
        phoneNumber,
        password
      } = this.driverDetails;

      // For display 1 - Driver Details
      if (this.display === 1) {
        return firstName && lastName && email && password; // Return true if all fields are filled
      }

      // For display 2 - Contact Details
      if (this.display === 2) {
        return phoneNumber && postCode && businessName; // Return true if all fields are filled
      }

      // For display 3 - Additional Information
      if (this.display === 3) {
        return this.form.additional.numberOfVehicle &&
          this.form.additional.vehicleTypes.length > 0 &&
          this.form.additional.vatRegistered;
      }

      return true; // Default case
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
  padding: 5%;
  gap: 30px;
  box-sizing: border-box;

  .left {
    width: 60%;
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
    width: 40%;
    background: white;
    padding: 30px;
    border-radius: 20px;

    h2 {
      font-family: Lato;
      font-size: 18px;
      font-weight: 700;
      line-height: 21.96px;

    }

    h3 {
      font-family: Lato;
      font-size: 14px;
      font-weight: 700;
      line-height: 17.08px;

    }

    .heading {
      display: flex;
      justify-content: space-between;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
