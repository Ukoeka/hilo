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
          <a href="javascript:void(0);"  class="profile-image" @click="handleClick">
            <img v-if="draggedFile" :src="draggedFile" alt="">
            <img v-else :src="profileData.imageUrl" alt="Profile" />
          </a>
          <div class="profile-details">
            <h5>{{ profileData.name }}</h5>
            <p>{{ profileData.email }}</p>
          </div>
        </div>
        <div class="profile-actions">
          <button class="btn btn-outline-danger btn-sm" @click="handleDelete">
            {{ formaAction === 'add' ? 'Cancel' : 'Delete' }}
          </button>
          <button class="btn btn-outline-primary btn-sm ms-2" @click="addDrivers">
            {{ formaAction === 'add' ? 'Save' : 'Edit' }}
          </button>
        </div>


      </div>


      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <!-- First Name -->
          <div class="col-md-6 mb-3">
            <label class="form-label">First Name</label>
            <input type="text" class="form-control" v-model="formData.firstName" placeholder="Placeholder" />
          </div>

          <!-- Last Name -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Last Name</label>
            <input type="text" class="form-control" v-model="formData.lastName" placeholder="Placeholder" />
          </div>

          <!-- Email -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="formData.email" placeholder="Placeholder" />
          </div>

          <!-- Gender -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Gender</label>
            <select class="form-select" v-model="formData.gender">
              <option value="">Placeholder</option>
              <option v-for="option in genderOptions" :key="option.value" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Country -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Country</label>
            <input type="text" class="form-control" v-model="formData.country" placeholder="Placeholder" />
          </div>

          <!-- City -->
          <div class="col-md-6 mb-3">
            <label class="form-label">City</label>
            <input type="text" class="form-control" v-model="formData.city" placeholder="Placeholder" />
          </div>
          <!-- Language -->
          <div class="col-md-6 mb-3">
            <label class="form-label">Language</label>
            <select class="form-select" v-model="formData.language">
              <option value="">Placeholder</option>
              <option v-for="lang in languageOptions" :key="lang.value" :value="lang.value">
                {{ lang.label }}
              </option>
            </select>
          </div>
        </div>
      </form>
    </div>
  </div>
  <AssignedTable v-if="assignedTable" />

</template>

<script>
import AssignedTable from './AssignedTable.vue';
import { fetchFromApi, postToApi, deleteFromApi, patchToApi } from '@/services/baseApi'

export default {
  name: 'UserProfileForm',
  props: {
    formaAction: String,
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
        name: 'Charlie Brakus',
        email: 'Erin33@hotmail.com',
        imageUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
      },
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        country: '',
        city: '',
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
      driversPagination: {}
    }
  },
  mounted() {
  },
  methods: {
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
    
    async addDrivers() {
      this.Loader = true;

      const url = `/account/drivers`;

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


        const resp = await postToApi(url, formdata, 'multipart/form-data');
        if (resp.status) {
          swal({
            text: "Admin added successfully!",
            icon: "success",
          });
          fetchDrivers(1, 10)
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
