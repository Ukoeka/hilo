<template>
  <UserLayout>
    <div class="vh-100 w-100 bg d-flex flex-column ">

      <div class=" flex-grow-1 h-100  position-relative pt-2 px-5" v-show="!selectedTab">
        <Nav title="My Account" />
        <div class="bg-white mb-5 rounded-4">
          <div class="rounded-4 mb-5 w-100">
            <div class="d-flex justify-content-end align-items-center p-2 rounded-top"
              style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
              <!-- <button class="rounded-circle border bg-white" style="height: 50px; width: 50px;"><img
                  src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button> -->
              <div class="d-flex justify-content-between align-items-center p-2 gap-2 rounded-2 bg-white"
                style="width: 20%;">
                <p class="m-0" :class="{ 'active': activeSection === 'profile' }" @click="setActiveSection('profile')"
                  style="cursor: pointer; color: rgba(160, 163, 189, 1);">My Profile</p>
                <p class="m-0" :class="{ 'active': activeSection === 'documents' }"
                  @click="setActiveSection('documents')" style="cursor: pointer; color:rgba(160, 163, 189, 1) ;">My
                  Documents</p>
              </div>
            </div>
          </div>
          <div class="row px-4 pb-5">
            <div class="col-md-2 text-center">

              <a href="javascript:void(0);" class="profile-image" @click="handleClick">
            <img v-if="draggedFile" :src="draggedFile" alt="Profile" class="rounded-circle img-fluid" width="120" />
            <img v-else :src="user.profilePic" alt="Profile" class="rounded-circle img-fluid" width="120" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-pencil-square position-absolute " viewBox="0 0 16 16" style="left: 100px;">
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
            </svg>
          </a>
              
            </div>
            <div class="col-md-10">
              <div class="row">
                <div class="col-12 mb-2">
                  <div class="row">
                    <div class="col-6">
                      <h5 class="">{{ user.firstName }} {{ user.lastName }}</h5>
                      <p>{{ user.email }}</p>
                    </div>
                    <div class="col-6 d-flex gap-2 align-items-center justify-content-end">
                      <button v-if="!isEditing" class="btn btn-outline-success btn-outline-green p-2 col-3 "
                        @click="startEditing">Edit</button>
                      <button v-else class="btn btn-outline-danger btn-outline-red p-2 col-3 "
                        @click="cancelEditing">Cancel</button>
                      <button v-if="isEditing" class="btn btn-success btn-green p-2 col-3 "
                        @click="saveChanges">Save</button>
                    </div>
                  </div>
                </div>
                <div class="inputs-container">
                  <form>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="firstName" class="mb-2 label">First Name</label>
                        <input id="firstName" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.firstName" disabled />
                        <input id="firstName" v-else type="text" class="form-control inputs" v-model="user.firstName"
                          placeholder="Enter first name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="lastName" class="mb-2 label">Last Name</label>
                        <input id="lastName" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.lastName" disabled />
                        <input id="lastName" v-else type="text" class="form-control inputs" v-model="user.lastName"
                          placeholder="Enter last name" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="email" class="mb-2 label">Email</label>
                        <input id="email" v-if="!isEditing" type="email" class="form-control inputs" :value="user.email"
                          disabled />
                        <input id="email" v-else type="email" class="form-control inputs" v-model="user.email"
                          placeholder="Enter email" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="gender" class="mb-2 label">Gender</label>
                        <input id="gender" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.gender" disabled />
                        <input id="gender" v-else type="text" class="form-control inputs" v-model="user.gender"
                          placeholder="Enter gender" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="country" class="mb-2 label">Country</label>
                        <input id="country" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.country" disabled />
                        <input id="country" v-else type="text" class="form-control inputs" v-model="user.country"
                          placeholder="Enter country" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="city" class="mb-2 label">City</label>
                        <input id="city" v-if="!isEditing" type="text" class="form-control inputs" :value="user.city"
                          disabled />
                        <input id="city" v-else type="text" class="form-control inputs" v-model="user.city"
                          placeholder="Enter city" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="address" class="mb-2 label">Address</label>
                        <input id="address" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.address" disabled />
                        <input id="address" v-else type="text" class="form-control inputs" v-model="user.address"
                          placeholder="Enter address" />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="language" class="mb-2 label">Language</label>
                        <input id="language" v-if="!isEditing" type="text" class="form-control inputs"
                          :value="user.language" disabled />
                        <input id="language" v-else type="text" class="form-control inputs" v-model="user.language"
                          placeholder="Enter language" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="selectedTab" class=" flex-grow-1 h-100 position-relative pt-2 px-5">
        <Nav title="My Account" />
        <div class="bg-white mb-5 rounded-4 pb-4">
          <div class="rounded-4 mb-5 w-100">
            <div class="d-flex justify-content-between align-items-center p-2 rounded-top"
              style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
              <button class="rounded-circle border bg-white" style="height: 50px; width: 50px;" @click="toggleDisplay"><img
                  src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
              <div class="d-flex justify-content-between align-items-center p-2 gap-2 rounded-2 bg-white"
                style="width: 20%;">
                <p class="m-0" :class="{ 'active': activeSection === 'profile' }" @click="setActiveSection('profile')"
                  style="cursor: pointer; color: rgba(160, 163, 189, 1);">My Profile</p>
                <p class="m-0" :class="{ 'active': activeSection === 'documents' }"
                  @click="setActiveSection('documents')" style="cursor: pointer; color:rgba(160, 163, 189, 1) ;">My
                  Documents</p>
              </div>
            </div>
          </div>
          <div class="p-5 w-75 mx-auto">
            <!-- Identity -->
            <div class="mb-5 w-100 m-auto">
              <h3>Identity</h3>
              <div class="row mt-5 align-items-center">
                <div class="col-md-3" v-for="(document, index) in documents.slice(0, 3)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link w-fit mx-auto">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 w-100 m-auto">
              <h3>Insurance</h3>
              <div class="row mt-5 align-items-center">
                <div class="col-md-3" v-for="(document, index) in documents.slice(3, 8)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link w-fit mx-auto">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-5 w-100 m-auto">
              <h3>Other</h3>
              <div class="row mt-5 align-items-center">
                <div class="col-md-3" v-for="(document, index) in documents.slice(8,9)"
                  :key="'identity-' + document.id">
                  <p class="txt mb-3">{{ document.label }}</p>
                  <div class="card d-flex py-4 mb-5 cursor" @click="triggerFileInput(document.id, `documents`)"
                    style="background-color: rgba(240, 245, 243, 1);">
                    <img v-if="document.preview" :src="document.preview" alt="Document Preview"
                      class="m-auto mb-3 preview-img" width="60" height="60" />
                    <img v-else src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60" />
                    <input type="file" :ref="'fileInput' + document.id"
                      @change="handleFileChange($event, document.id, 'documents')" hidden />
                    <p class="file-info browse-link w-fit mx-auto">
                      Browse<br />.jpg, .png or .pdf files Accepted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UserLayout>

</template>

<script>
import Nav from '@/components/Nav.vue';
import UserLayout from '@/layouts/UserLayout.vue';
import { fetchFromApi, postToApi, patchToApi } from '@/services/baseApi'


export default {
  components: {
    Nav,
    UserLayout
  },
  data() {
    return {
      toggleShow: true,
      selectedTab: false,
      activeSection: 'profile',
      isEditing: false,
      user: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        country: '',
        city: '',
        address: '',
        language: ''
      },
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
      draggedFile: null,
      Image: null,
    };
  },
  mounted() {
    this.fetchUser()
  },
  methods: {
    toggleDisplay() {
      console.log('works')
      this.selectedTab = !this.selectedTab
    },
    handleClick() {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = ''
      input.onchange = (e) => {
        const file = (e.target).files?.[0]
        if (file) {
          this.Image = file
          const imgUrl = URL.createObjectURL(file)
          this.draggedFile = imgUrl
        }
      }
      input.click()
    },
    async updateUser() {
      const formData = new FormData()
      formData.append('firstName', this.user.firstName)
      formData.append('lastName', this.user.lastName) 
      formData.append('email', this.user.email)
      formData.append('gender', this.user.gender)
      formData.append('country', this.user.country)
      formData.append('city', this.user.city)
      formData.append('address', this.user.address)
      formData.append('language', this.user.language)
      formData.append('profilePic', this.Image)
      console.log(formData)
      try {
        const url = `profile`;
        const resp = await patchToApi(url, formData, 'multipart/form-data');
        console.log('Response:', resp)
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          })
          this.fetchUser()
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
    async fetchUser() {
      try {
        const url = `profile`;
        const resp = await fetchFromApi(url);
        console.log('Response:', resp)
        if (resp.status) {
          // swal({
          //   text: resp.message,
          //   icon: "success",
          // })
          this.user = resp.data
          resp.data.documents.forEach((doc, index) => {
            this.documents[index].preview = doc.url
          })
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
    setActiveSection(section) {
      this.activeSection = section;
      this.selectedTab = !this.selectedTab;
    },
    startEditing() {
      this.isEditing = true;
    },
    cancelEditing() {
      this.isEditing = false;
    },
    saveChanges() {
      this.isEditing = false;

      // Add logic to save changes
      this.updateUser()
    }
  },
}
</script>
<style scoped>
.active {
  border-bottom: 2px solid rgba(76, 149, 108, 1);
  padding-bottom: 5px;
  color: rgba(76, 149, 108, 1);

}

.file-info {
  font-size: 0.875rem;
  color: rgba(110, 113, 145, 1);
}

.browse-link {
  color: rgba(76, 149, 108, 1);
  cursor: pointer;
}
</style>
