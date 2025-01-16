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
        <div :class="[this.display > 0 ? 'active-bar each-bar' : 'each-bar']"></div>
        <div :class="[this.display > 1 ? 'active-bar each-bar' : 'each-bar']"></div>

      </div>
      <form action="">
        <div v-if="display == 1">
          <h2 class="text-center mt-5 mb-4">Cleaner Details</h2>

          <div class="row mb-3">
            <div class="div-group col-md-6">
              <label for="first_name">First Name</label>
              <input required type="text" class="form-control" id="first_name" placeholder="First Name"
                v-model="cleanerDetails.firstName">
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Last Name</label>
              <input required type="text" class="form-control" id="last_name" placeholder="Last Name"
                v-model="cleanerDetails.lastName">
            </div>
          </div>
          <div class="row mb-3">
            <div class="div-group col-md-6">
              <label for="first_name">Email</label>
              <input required type="email" class="form-control" id="email" placeholder="Email"
                v-model="cleanerDetails.email">
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Gender</label>
              <select required name="" class="form-control" id="" v-model="cleanerDetails.gender">
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <div class="div-group col-md-6">
              <label for="first_name">Address</label>
              <MapboxAddressInput v-model="cleanerDetails.address"
                :mapboxOptions="{ access_token: 'pk.eyJ1IjoiaGlsb2dpc3RpY3oiLCJhIjoiY20xcnI2dnQ4MGNtdTJqc2VxYjdkOG0yZCJ9.OEdEvlatiPYNU48wPWcvoQ' }"
                placeholder="Address" required @addressSelect="(address) => handleAddressSelect('first', address)" />
            </div>
            <div class="form-group col-md-6">
              <label for="last_name">Language</label>
              <input required type="text" class="form-control" id="language" placeholder="Language"
                v-model="cleanerDetails.language">
            </div>
          </div>
          <div class="row mb-3">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Phone Number</label>
              <vue-tel-input :onlyCountries="['GB']" v-model="cleanerDetails.phoneNumber" required>
              </vue-tel-input>
              <!-- <vue-country-code @onSelect="onSelect"></vue-country-code> -->
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail4">Password</label>
              <input required type="password" class="form-control" id="password" placeholder="Password"
                v-model="cleanerDetails.password">
            </div>
          </div>



          <div class="form-group mt-5 buttons justify-content-end">
            <!-- <button type="button" disabled class="btn white-btn">Back</button> -->
            <button type="button" @click="showCard2()" class="btn green-btn ms-auto">Next</button>
          </div>

        </div>
        <div class="upload" v-if="display === 2">
          <h2 class="text-center mt-5 mb-4">Upload Documents</h2>
          <div class="mb-5 w-100 m-auto">
            <h3 class="">Identity</h3>
            <div class="row">
              <!-- Driving License -->
              <div class="col-md-4" v-for="(document, index) in documents" :key="index">
                <p class="txt mb-3">{{ document.label }}</p>
                <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(index)"
                  style="background-color: rgba(240, 245, 243, 1);">
                  <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                    class="m-auto mb-3 preview-img" width="60" height="60" />
                  <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                  <input required type="file" ref="fileInputs" @change="handleFileChange($event, index)" hidden />
                  <p class="file-info browse-link">Browse<br />.jpg, .png or .pdf files Accepted</p>
                </div>
              </div>
            </div>
          </div>

          <div class="form-group mt-5 buttons">
            <button @click="showCard1" type="button" class="btn white-btn">Back</button>
            <button type="button" @click="addCleaner" class="btn green-btn">
              <span v-if="Loader" class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true" />
              <span v-else>Register Now</span>
            </button>
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
import Loader from "@/components/loader.vue";
import MapboxAddressInput from "@/components/MapBoxAddressInput.vue";
import Footer from '@/layouts/partials/footer.vue';
import TopNav from '@/layouts/partials/topnav.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi';

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
      display: 1,
      cleanerDetails: {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        address: "",
        phoneNumber: "",
        language: "",
        password: "",
      },
      documents: [
        { label: "Driving License", file: null, preview: null },
        { label: "Utility Bill 1", file: null, preview: null },
        { label: "Utility Bill 2", file: null, preview: null },
      ],
      Loader: false
    };
  },
  methods: {

    handleAddressSelect(field, address) {
      if (field === 'first') {
        this.cleanerDetails.address = address;
      } else if (field === 'second') {
        this.bookDriver.dropOff.name = address;
      }
    },


    triggerFileInput(index) {
      const fileInput = this.$refs.fileInputs[index];
      fileInput.click();
    },
    handleFileChange(event, index) {
      const file = event.target.files[0];
      if (file) {
        this.documents[index].file = file;

        // Generate preview if the file is an image
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.documents[index].preview = e.target.result;
          };
          reader.readAsDataURL(file);
        } else {
          this.documents[index].preview = null; // Reset preview for non-image files
        }
      }
    },
    showCard1() {
      this.display = 1;
    },
    showCard2() {
      if(!this.validateCleanersDetails()) {
        swal({
          text: "All cleaner details are required to proceed.",
          icon: "error",
        });
        return
      }
      this.display = 2;
    },
    validateCleanersDetails() {
      const isDetailsValid = Object.values(this.cleanerDetails).every((value) => value != '');
      const isDocumentFilesValid = this.documents.every((doc) => doc.file);
      if(this.display == 1) {
        return isDetailsValid
      }
      if(this.display == 2) {
        return isDocumentFilesValid 
      }
    },
    async addCleaner() {
      // Check if cleanerDetails is valid
      if (this.display == 2 && !this.validateCleanersDetails()) {
        console.error("Cleaner details are missing or incomplete.");
        swal({
          text: "all cleaner details are required to proceed.",
          icon: "error",
        });
        return;
      }

      this.Loader = true;
      const formdata = new FormData();

      // Append documents
      this.documents.forEach((doc, i) => {
        if (doc.file) formdata.append(`documents[${i}]`, doc.file);
      });

      // Append cleaner details
      Object.entries(this.cleanerDetails).forEach(([key, value]) => {
        formdata.append(key, value || ""); // Default empty string for undefined/null
      });

      console.log(this.cleanerDetails);

      const url = 'registration/cleaner';

      try {
        const payload = { language: "spanish" }
        const response = await postToApi(url, formdata, 'multipart/form-data');
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
        console.error('API call failed:', error);
      } finally {
        this.Loader = false;
      }
    }

  },
  mounted() {

  }

};
</script>

<style scoped lang="scss">
.preview-img {
  max-width: 100%;
  max-height: 60px;
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
  padding: 5% 20%;
  gap: 30px;
  box-sizing: border-box;

  .left {
    width: 100%;
    background: white;
    padding: 4%;
    border-radius: 10px;

    .bars {
      width: 100%;
      gap: 2%;
      display: flex;

      .each-bar {
        height: 7px;
        width: 50%;
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
}
</style>
