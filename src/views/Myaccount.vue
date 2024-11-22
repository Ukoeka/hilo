<template>
  <div class="d-flex vh-100">
    <Sidebar2 class="flex-grow-1 overflow-auto" />
    <div class="container flex-grow-1 h-100 overflow-auto position-relative pt-2 px-5" v-show="!selectedTab">
      <Nav title="My Account" />
      <div class="bg-white mb-5 rounded-4">
        <div class="rounded-4 mb-5 w-100">
          <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
            <button class="rounded-circle border bg-white" style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
            <div class="d-flex justify-content-between align-items-center p-2 gap-2 rounded-2 bg-white" style="width: 20%;">
              <p class="m-0" :class="{'active': activeSection === 'profile'}" @click="setActiveSection('profile')" style="cursor: pointer; color: rgba(160, 163, 189, 1);">My Profile</p>
              <p class="m-0" :class="{'active': activeSection === 'documents'}" @click="setActiveSection('documents')" style="cursor: pointer; color:rgba(160, 163, 189, 1) ;">My Documents</p>
            </div>
          </div>
        </div>
        <div class="row px-4 pb-5">
          <div class="col-md-2 text-center">
            <img src="../assets/Drivers/Ellipse11.png" alt="Profile" class="rounded-circle img-fluid" width="120" />
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-12 mb-2">
                <div class="row">
                  <div class="col-6">
                    <h5 class="">Yelvin Johnson</h5>
                    <p>YelvinJohnson@hotmail.com</p>
                  </div>
                  <div class="col-6 d-flex gap-2 align-items-center justify-content-end">
                    <button v-if="!isEditing" class="btn btn-outline-success btn-outline-green p-2 col-3 " @click="startEditing">Edit</button>
                    <button v-else class="btn btn-outline-danger btn-outline-red p-2 col-3 " @click="cancelEditing">Cancel</button>
                    <button v-if="isEditing" class="btn btn-success btn-green p-2 col-3 " @click="saveChanges">Save</button>
                  </div>
                </div>
              </div>
              <div class="">
                <form>
                  <div class="row">
                    <div class="col-md-6  mb-3">
                      <label class="mb-2 label">First Name</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.firstName" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.firstName" placeholder="Enter first name" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Last Name</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.lastName" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.lastName" placeholder="Enter last name" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Email</label>
                      <input v-if="!isEditing" type="email" class="inputs p-2" :value="user.email" disabled />
                      <input v-else type="email" class="inputs p-2" v-model="user.email" placeholder="Enter email" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Gender</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.gender" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.gender" placeholder="Enter gender" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Country</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.country" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.country" placeholder="Enter country" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">City</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.city" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.city" placeholder="Enter city" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Address</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.address" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.address" placeholder="Enter address" />
                    </div>
                    <div class="col-md-6   mb-3">
                      <label class="mb-2 label">Language</label>
                      <input v-if="!isEditing" type="text" class="inputs p-2" :value="user.language" disabled />
                      <input v-else type="text" class="inputs p-2" v-model="user.language" placeholder="Enter language" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
   <div v-show="selectedTab" class="container flex-grow-1 h-100 overflow-auto position-relative pt-2 px-5">
      <Nav title="My Account" />
      <div class="bg-white mb-5 rounded-4 pb-4">
        <div class="rounded-4 mb-5 w-100">
          <div class="d-flex justify-content-between align-items-center p-2 rounded-top" style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
            <button class="rounded-circle border bg-white" style="height: 50px; width: 50px;"><img src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
            <div class="d-flex justify-content-between align-items-center p-2 gap-2 rounded-2 bg-white" style="width: 20%;">
              <p class="m-0" :class="{'active': activeSection === 'profile'}" @click="setActiveSection('profile')" style="cursor: pointer; color: rgba(160, 163, 189, 1);">My Profile</p>
              <p class="m-0" :class="{'active': activeSection === 'documents'}" @click="setActiveSection('documents')" style="cursor: pointer; color:rgba(160, 163, 189, 1) ;">My Documents</p>
            </div>
          </div>
        </div>
        <div class="mb-5 w-75 m-auto" v-for="(category, index) in categories" :key="index">
          <h3 class="">{{ category.name }}</h3>
          <div class="row">
            <div class="col-md-4" v-for="(document, index) in category.documents" :key="index">
              <p class="txt mb-3">{{ document.name }}<span style="font-size: 12px;">{{ document.span }}</span></p>
              <div class="card d-flex py-4 mb-5" style="background-color: rgba(240, 245, 243, 1);">
                <img src="../assets/Drivers/Vector.png" class="m-auto mb-3" alt="" width="60" height="60">
                <p class="file-info m-auto">Drag and drop or <span class="browse-link">Browse</span><br />.jpg, .png or .pdf files Accepted</p>
                <!-- <img v-if="document.preview" :src="document.preview" alt="Document Preview" class="preview-img" /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Sidebar2 from './Sidebar2.vue'; 
export default {
  components: {
    Sidebar2,
    Nav
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
      categories: [
        {
          name: 'Identity',
          documents: [
            { span:'', name: 'Driving Licence', preview: null },
            { span:'', name: 'Utility Bill', preview: null },
            { span:'', name: 'Utility Bill', preview: '' },
          ],
        },
        {
          name: 'Insurance',
          documents: [
            { span:'(Hire and Reward)', name: 'Vehicle insurance', preview: null },
            { span:'(minimum cover £10,000 for the purpose of removals)', name: 'Goods in Transit', preview: null },
            { span:' (minimum £50,000 where applicable)', name: 'Public Liability', preview: null },
            { span:'(minimum £1M)', name: 'Motor Trade Insurance ', preview: null },
            { span:'(where applicable)', name: 'CMR', preview: null },
          ],
        },
        {
          name: 'Other',
          documents: [
            { span:'', name: 'VAT Certificate', preview: null },
          ],
        },
      ],
    };
  },
  methods: {
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
    }
  },
}
</script>
<style scoped>
.active {
  border-bottom:2px solid rgba(76, 149, 108, 1);
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