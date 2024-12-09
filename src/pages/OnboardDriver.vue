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
      <form action="">
        <div v-if="display == 1">
          <h2 class="text-center mt-5 mb-4">Driver Details</h2>
          <div class="row mb-3">
            <div class="div-group col-md-6">
              <label for="first_name">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="First Name"
                v-model="driverDetails.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Last Name</label>
              <input type="text" class="form-control" id="last_name" placeholder="Last Name"
                v-model="driverDetails.lastName">
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="text" class="form-control" id="email" placeholder="email" v-model="driverDetails.email">
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Business Name</label>
              <input type="text" class="form-control" id="businessName" placeholder="Business Name"
                v-model="driverDetails.businessName">
            </div>
          </div>



          <div class="form-group mt-5 buttons">
            <button type="submit" disabled class="btn white-btn">Back</button>
            <button type="submit" @click="showCard2()" class="btn green-btn">Next</button>
          </div>

        </div>
        <div v-if="display == 2">
          <h2 class="text-center mt-5 mb-4">Contact Details</h2>
          <div class="row mb-3">
            <div class="form-group col-md-12">
              <label for="first_name">Post Code</label>
              <input type="email" class="form-control" id="email" placeholder="Post Code"
                v-model="driverDetails.postCode">
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-12">
              <label for="inputEmail4">Phone Number</label>
              <vue-tel-input v-model="driverDetails.phoneNumber"></vue-tel-input>
              <!-- <vue-country-code @onSelect="onSelect"></vue-country-code> -->
            </div>
          </div>



          <div class="form-group mt-5 buttons">
            <button @click="showCard1()" type="submit" class="btn white-btn">Back</button>
            <button @click="showCard3()" type="submit" class="btn green-btn">Next</button>
          </div>

        </div>
        <div class="additional" v-if="display == 3">
          <h2 class="text-center mt-5 mb-4">Additional Information</h2>

          <!-- Number of Vehicles -->
          <div class="row radios mb-3">
            <label for="number_of_vehicle">Number of Vehicles</label>
            <div class="form-group de-flex col-md-12">
              <div class="form-check form-check-inline" v-for="(label, index) in vehicleOptions" :key="index">
                <input class="form-check-input" type="radio" name="number_of_vehicle" :id="'vehicle_' + index"
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
                <input class="form-check-input" type="checkbox" name="vehicle_types" :id="'type_' + index"
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
                <input class="form-check-input" type="radio" name="vat_registered" value="yes"
                  v-model="form.additional.vatRegistered">
                <label class="form-check-label">YES</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="vat_registered" value="no"
                  v-model="form.additional.vatRegistered">
                <label class="form-check-label">NO</label>
              </div>
            </div>
          </div>

          <div class="form-group mt-5 buttons">
            <button @click="showCard2()" type="submit" class="btn white-btn">Back</button>
            <button @click="showCard4()" type="submit" class="btn green-btn">Next</button>
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
                <div class="col-md-4" v-for="(document, index) in documents" :key="'identity-' + index">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(index, 'documents')"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInput' + index" @change="handleFileChange($event, index, 'documents')"
                      hidden />
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
                <div class="col-md-4" v-for="(document, index) in documents1" :key="'insurance-' + index">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(index, 'documents1')"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInput' + index"
                      @change="handleFileChange($event, index, 'documents1')" hidden />
                    <p class="file-info browse-link">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Other -->
            <!-- Other Section -->
            <div class="mb-5 w-100 m-auto">
              <h3>Other</h3>
              <div class="row">
                <div class="col-md-4" v-for="(document, index) in document2" :key="'other-' + index">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(index, 'document2')"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInputdocument2' + index"
                      @change="handleFileChange($event, index, 'document2')" hidden />
                    <p class="file-info browse-link">Browse<br />.jpg, .png or .pdf files Accepted</p>
                  </div>
                </div>
              </div>
            </div>

          </div>


          <div class="form-group mt-5 buttons">
            <button @click="showCard3()" type="submit" class="btn white-btn">Back</button>
            <button type="button" @click="addDriver()" class="btn green-btn">submit</button>
          </div>

        </div>
      </form>
    </div>
    <div class="right">
      <div class="heading">
        <h2>Documents Required</h2>
        <a href="javascript:void(0)" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"><img
            src="@/assets/icons/question.png" alt=""></a>
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
      display: 4,
      driverDetails: {
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        postCode: "",
        phoneNumber: "",
        additionalData: "",
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
        { label: "Driving License", file: null, preview: null },
        { label: "Utility Bill 1", file: null, preview: null },
        { label: "Utility Bill 2", file: null, preview: null },
      ],
      documents1: [
        { label: "Vehicle insurance (Hire and Reward)", file: null, preview: null },
        {
          label:
            "Goods in Transit (minimum cover £10,000 for the purpose of removals)",
          file: null,
          preview: null,
        },
        { label: "Public Liability (minimum £1M)", file: null, preview: null },
        { label: "Motor Trade Insurance(where applicable)", file: null, preview: null },
        { label: "CMR (minimum £50,000 where applicable)", file: null, preview: null },
      ],
      document2: [
        { label: "Vat Certificate", file: null, preview: null },
      ]
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

    async addDriver() {
      // Validate driverDetails before performing any action
      // if (!this.isDriverDetailsValid()) {
      //   alert('Please fill in all required fields.');
      //   return;
      // }

      try {
        const formData = new FormData();

        // Append basic fields as per the request body example
        formData.append('firstName', this.driverDetails.firstName);
        formData.append('lastName', this.driverDetails.lastName);
        formData.append('email', this.driverDetails.email);
        formData.append('businessName', this.driverDetails.businessName);
        formData.append('postCode', this.driverDetails.postCode);
        formData.append('phoneNumber', this.driverDetails.phoneNumber);
        formData.append('gender', 'male');
        formData.append('country', 'Nigeria');



        // Stringify and append additionalData
        formData.append('additionalData', JSON.stringify(this.driverDetails.additionalData)); // { "numberOfVehicle": 1 }

        // Append vehicle-related data
        formData.append('vehicleTypes', JSON.stringify(this.form.additional.vehicleTypes)); // Vehicle types as JSON
        formData.append('numberOfVehicle', this.form.additional.numberOfVehicle);
        formData.append('vatRegistered', this.form.additional.vatRegistered);

        // Append documents as per the request body example
        this.appendFilesToFormData(formData, 'documents', this.documents);
        this.appendFilesToFormData(formData, 'documents1', this.documents1);
        this.appendFilesToFormData(formData, 'documents2', this.document2);

        // Send the data via API call
        const response = await postToApi('registration/driver', formData, 'multipart/form-data');
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    // Helper method to append document files to FormData
    appendFilesToFormData(formData, keyPrefix, documentArray) {
      documentArray.forEach((document, index) => {
        if (document.file) {
          // Append the actual file using the correct name pattern
          formData.append(`${keyPrefix}[${index}][file]`, document.file);
        }
        if (document.label) {
          // Append the label (optional)
          formData.append(`${keyPrefix}[${index}][label]`, document.label);
        }
      });
    },

    // Validate driverDetails to ensure all required fields are filled
    isDriverDetailsValid() {
      const { firstName, lastName, email, businessName, postCode, phoneNumber, additionalData } = this.driverDetails;

      // Check for missing or empty fields
      if (!firstName || !lastName || !email || !businessName || !postCode || !phoneNumber || !additionalData) {
        return false;
      }

      // Check for at least one document in each section
      const hasIdentityDocuments = this.documents.some(doc => doc.file);
      const hasInsuranceDocuments = this.documents1.some(doc => doc.file);
      const hasOtherDocuments = this.document2.some(doc => doc.file);

      if (!hasIdentityDocuments || !hasInsuranceDocuments || !hasOtherDocuments) {
        alert('Please upload all required documents.');
        return false;
      }

      return true;
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
