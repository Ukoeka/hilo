<template>
  <div class="container-fluid d-flex">
    <div class="row w-100">
      <!-- Image Section -->
      <div class="col-md-6 d-none d-md-block p-0 img" style="height: 100vh;">
        <img src="../assets/Login/main.svg" alt="Delivery" class="h-100 w-100 object-fit-cover" />
      </div>

      <!-- Login Form Section -->
      <div class="col-md-6 d-flex align-items-center justify-content-center bg-white p-md-5 p-3">
        <div class="login-form-container">
          <div class="text-center mb-5">
            <h2 class="fw-bold">Logo</h2>
          </div>
          <h3 class="fw-bold mb-4">Login</h3>

          <!-- Login Form -->
          <form>
            <div class="mb-4">
              <label for="login" class="form-label fw-medium mb-2">Login</label>
              <input type="text" class="inputs py-3" id="login" placeholder="Email" v-model="Login.email" />
            </div>
            <div class="mb-4">
              <label for="password" class="form-label fw-medium mb-2">Password</label>
              <div class="password-input-container">
                <input :type="visibility" class="inputs py-3" id="password" placeholder="Enter password"
                  v-model="Login.password" />
                <button type="button" class="password-toggle" @click="passwordToggle">
                  <svg v-if="visibility == 'password'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                  <!-- visible -->
                  <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path
                      d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z" />
                    <path
                      d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z" />
                  </svg>
                </button>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-4">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="remember" />
                <label for="remember" class="form-check-label ms-2">Remember me</label>
              </div>
              <a href="#" class="text-decoration-none text-primary fw-medium">Forgot password?</a>
            </div>
            <button type="button" @click="login" class="btn btn-success green w-100 py-3 fw-medium mb-4">
              <span v-if="Loader" class="spinner-border spinner-border-sm"></span>
              <span v-else>Sign in</span>
            </button>
          </form>

          <!-- Divider -->
          <div class="d-none divider mb-4">
            <span class="divider-text">or</span>
          </div> 

          <!-- Google Sign-In Button -->
          <button class="d-none btn btn-outline-dark w-100 py-3 d-flex align-items-center justify-content-center gap-2 mb-4">
            <img src="../assets/Login/google.png" alt="Google Icon" class="google-icon">
            <span class="fw-medium">Sign in with Google</span>
          </button>

          <!-- Sign-Up Link -->
          <!-- <p class="text-center mb-0">
            Don't have an account? <a href="#" class="text-primary fw-medium text-decoration-none">Sign up now</a>
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/loader.vue';
import { fetchFromApi, postToApi } from '@/services/baseApi'
export default {
  name: 'Login',
  data() {
    return {
      Login: {
        email: '',
        password: ''
      },
      Loader: false,
      visibility: 'password',

    };
  },
  methods: {
    passwordToggle() {
      if (this.visibility === 'password') {
        this.visibility = 'text';
      } else {
        this.visibility = 'password';
      }
    },
    async login() {
      try {
        this.Loader = true
        const url = 'auth/login'
        const resp = await postToApi(url, this.Login)
        console.log('login res', resp)

        if (resp.status && resp.token) {
          const token = resp.token
          const data = resp.data

          sessionStorage.setItem('MVtoken', token)
          localStorage.setItem('MVdata', JSON.stringify(data))
          swal({
            title: `Welcome!`,
            text: "You have successfully logged in!",
            icon: "success",
          });
          this.$router.push('/payments')
        } else {
          swal({
            title: "Error",
            text: "Invalid credentials",
            icon: "error"
          });
        }
      } catch (error) {
        console.error('Login error:', error)
        swal({
          title: "Error",
          text: "An error occurred during login",
          icon: "error"
        });
      } finally {
        this.Loader = false
      }
    }
  }
};
</script>

<style scoped>
.container-fluid {
  width: 100%;
  min-height: 100vh;
}

.login-form-container {
  width: 100%;
  max-width: 450px;
  padding: 0 1rem;
}

.password-input-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.password-icon {
  width: 20px;
  height: 20px;
}

.google-icon {
  width: 24px;
  height: 24px;
}

.divider {
  position: relative;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background: #e5e7eb;
}

.divider-text {
  position: relative;
  background: white;
  padding: 0 1rem;
  color: #6b7280;
}

.inputs {
  display: block;
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #1f2937;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  transition: border-color 0.15s ease-in-out;
}

.inputs:focus {
  border-color: #2563eb;
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-check-input:checked {
  background-color: #2563eb;
  border-color: #2563eb;
}

.btn-success {
  background-color: #2563eb;
  border-color: #2563eb;
}

.btn-success:hover {
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

@media (max-width: 768px) {
  .login-form-container {
    padding: 2rem 1rem;
  }
}
</style>
