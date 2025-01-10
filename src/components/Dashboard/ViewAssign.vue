<template>
  <div v-if="!assignedTable" class="profile-container">
    <!-- Header -->
    <div class="header">
      <div class="back-button">
        <button @click="goBack">
          ← Back
        </button>
      </div>
      <div class="view-assigned">
        <button class="btn btn-success btn-sm" @click="viewAssigned">
          View Assigned
        </button>
      </div>
    </div>

    <!-- Profile Section -->
    <div class="profile-section">
      <div class="d-flex justify-content-between align-items-center">
        <div class="profile-info">
          <a href="javascript:void(0);" class="profile-image" @click="handleClick">
            <img v-if="draggedFile" :src="draggedFile" alt="">
            <img v-else :src="AccountDetails.profilePic || profileData.imageUrl" alt="Profile" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-pencil-square position-absolute " viewBox="0 0 16 16" style="left: 100px;">
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
            </svg>
          </a>

          <div class="profile-details">
            <h5>{{ AccountDetails.firstName }} {{ AccountDetails.lastName }}</h5>
            <p>{{ AccountDetails.email }}</p>
          </div>
        </div>
        <div class="profile-actions">
          <button class="btn btn-sm me-2"
            :class="{ 'btn-success': AccountDetails.verificationStatus == 'pending ', 'btn-danger': AccountDetails.verificationStatus != 'pending ' }"
            @click="Activation">
            {{ activationStatus }}
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="handleDelete">
            {{ formAction === 'add' ? 'Cancel' : 'Delete' }}
          </button>
          <button class="btn btn-outline-primary btn-sm ms-2" @click="update">
            <!-- {{ formAction === 'add' ? 'Save' : 'Edit' }} -->
            {{ isEditing ? 'Save' : 'Edit' }}
          </button>
        </div>


      </div>


      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <!-- First Name -->
          <div class="col-md-6 mb-3">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="formData.firstName" placeholder="Placeholder" :disabled="!isEditing" />
          </div>

          <!-- Last Name -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="formData.lastName" placeholder="Placeholder" :disabled="!isEditing" />
          </div>

          <!-- Email -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="formData.email" placeholder="Placeholder" :disabled="!isEditing" />
          </div>

          <!-- Gender -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Gender</label>
            <select class="form-select" v-model="formData.gender" :disabled="!isEditing">
              <option value="">Placeholder</option>
              <option v-for="option in genderOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Country -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Country</label>
            <input type="text" class="form-control" v-model="formData.country" placeholder="Placeholder" :disabled="!isEditing" />
          </div>

          <!-- City -->
          <div class="col-md-6 mb-3">
            <label class="form-label">City</label>
            <input type="text" class="form-control" v-model="formData.city" placeholder="Placeholder" :disabled="!isEditing" />
          </div>

          <!-- Placeholder Field
          <div class="col-md-6 mb-3">
            <label class="form-label">Placeholder</label>
            <input type="text" class="form-control" v-model="formData.placeholder" placeholder="Placeholder" :disabled="!isEditing" />
          </div> -->

          <!-- Language -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Language</label>
            <select class="form-select" v-model="formData.language" :disabled="!isEditing">
              <option value="">Placeholder</option>
              <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </option>
            </select>
          </div>
          <!-- Address -->
          <div v-if="CompType === 'cleaner'" class="col-md-6 mb-3">
            <label class="form-label">Address</label>
            <input type="text" class="form-control" v-model="formData.address" placeholder="Placeholder" :disabled="!isEditing" />
          </div>
        </div>

      </form>

    </div>
  </div>
  <AssignedTable v-if="assignedTable" @close="assignedTable = false" :quotesId="userId" :type="CompType" />

</template>

<script>
import AssignedTable from './AssignedTable.vue';
import loader from '@/components/loader.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'
import Loader from '@/components/loader.vue';

export default {
  name: 'UserProfileForm',
  props: {
    formAction: {
      type: String,
    },
    CompType: {
      type: String,
    },
    userId: {
      type: String,
    }
  },
  computed: {
  },
  components: {
    AssignedTable
  },
  data() {
    return {
      assignedTable: false,
      isEditing: false,
      isDeleting: false,
      profileData: {
        name: 'add name',
        email: 'add email',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        country: '',
        city: '',
        placeholder: '',
        language: ''
      },
      genderOptions: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' }
      ],
      languageOptions: [
        { value: 'en', label: 'English' },
        { value: 'es', label: 'Spanish' },
        { value: 'fr', label: 'French' }
      ],
      draggedFile: null,
      Image: null,
      Loader: false,
      drivers: [],
      driversPagination: {},
      AccountDetails: {},
      activationStatus: 'loading...',
    }
  },
  mounted() {
    if (this.formAction === 'view') {
      this.fetchDetails()
    }
  },

  methods: {

    handleDelete() {
      if (this.formAction === 'add') {
        this.goBack();
      }
      // Implement delete logic
      console.log('Deleting profile')
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
    async Activation() {
      const url = `account/${this.userId}/verify`
      try {

        const resp = await postToApi(url);
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          })
          this.fetchDetails()
          this.activationStatus = resp.status
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },
    async deleteAccount() {
      const url = `account/${this.userId}`
      try {

        const resp = await deleteFromApi(url);
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          })
          setTimeout(() => {
            window.location.reload()
          }, 2000);

        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      }
    },

    async fetchDetails() {
      this.AccountLoader = true;
      const url = `account/${this.userId}`
      try {

        const resp = await fetchFromApi(url);
        if (resp.status) {
          this.AccountDetails = resp.data
          this.activationStatus = resp.data.verificationStatus === 'pending' ? 'Activate' : 'Deactivate';
          const data = Object.keys(resp.data)
          data.forEach((key) => {
            this.formData[key] = key
            console.log(key)
            this.formData[key] = resp.data[key]
          })
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.AccountLoader = false;

      }
    },
    update(){
      if(this.isEditing){
        this.handleDrivers()
      }
      this.isEditing = !this.isEditing
    },
    async handleDrivers() {
      if(!this.isEditing) return

      this.Loader = true;
      const driverUrl = `account/drivers`;
      const cleanerUrl = `account/cleaners`;

      const addUrl = this.CompType === 'driver' ? driverUrl : cleanerUrl
      const updateUrl = `${addUrl}/${this.userId}`
      try {
        const formdata = new FormData();
        formdata.append('firstName', this.formData.firstName);
        formdata.append('lastName', this.formData.lastName);
        formdata.append('email', this.formData.email);
        formdata.append('gender', this.formData.gender);
        formdata.append('country', this.formData.country);
        formdata.append('city', this.formData.city);
        formdata.append('language', this.formData.language);
        formdata.append('profilePic', this.Image);
        if (this.CompType === 'cleaner') {
          formdata.append('address', this.formData.address);

        }


        const resp = this.formAction === 'add' ? await postToApi(addUrl, formdata, 'multipart/form-data') : await patchToApi(updateUrl, formdata, 'multipart/form-data');
        if (resp.status) {
          swal({
            text: resp.message,
            icon: "success",
          });
          if (this.formAction === 'view') {
            this.fetchDetails()
            fetchDrivers(1, 10)
          }
        } else {
          swal({
            text: resp.message,
            icon: "error",
          });
        }
        console.log('admin Response:', resp);
      } catch (error) {
        console.error('API call failed:', error);
      } finally {
        this.Loader = false;
      }
    },
    goBack() {
      this.$emit('close')
      // Implement navigation logic
      console.log('Going back')
    },

    viewAssigned() {
      this.assignedTable = !this.assignedTable
      // Implement view assigned logic
      console.log('Viewing assigned')
    },

    handleDelete() {
      this.deleteAccount()
      // Implement delete logic
      console.log('Deleting profile')
    },

    handleEdit() {
      // Implement edit logic
      console.log('Editing profile')
    },

    handleSubmit() {
      // Implement form submission logic
      console.log('Form submitted', this.formData)
    }
  }
}
</script>

<style scoped>
.profile-container {
  max-width: 80%;
  margin: 2rem auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #98FB98, #87CEEB);
  padding: 1rem;
  border-radius: 8px 8px 0 0;
}

.back-button button {
  background: none;
  border: none;
  font-size: 1.2rem;
}

.profile-section {
  padding: 2rem;
}


.profile-info {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-image img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.profile-details h5 {
  margin: 0;
  color: #333;
}

.profile-details p {
  margin: 0;
  color: #666;
}

.form-control,
.form-select {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
}

.form-control:focus,
.form-select:focus {
  box-shadow: none;
  border-color: #80bdff;
}
</style>
