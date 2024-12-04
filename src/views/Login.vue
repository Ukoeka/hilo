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
                <input type="password" class="inputs py-3" id="password" placeholder="Enter password"
                  v-model="Login.password" />
                <button type="button" class="password-toggle">
                  <img src="../assets/Login/password.png" alt="Toggle password" class="password-icon">
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
            <button type="button" @click="login" class="btn btn-success w-100 py-3 fw-medium mb-4">Sign in</button>
          </form>

          <!-- Divider -->
          <div class="divider mb-4">
            <span class="divider-text">or</span>
          </div>

          <!-- Google Sign-In Button -->
          <button class="btn btn-outline-dark w-100 py-3 d-flex align-items-center justify-content-center gap-2 mb-4">
            <img src="../assets/Login/google.png" alt="Google Icon" class="google-icon">
            <span class="fw-medium">Sign in with Google</span>
          </button>

          <!-- Sign-Up Link -->
          <p class="text-center mb-0">
            Don't have an account? <a href="#" class="text-primary fw-medium text-decoration-none">Sign up now</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchFromApi, postToApi } from '@/services/baseApi'
export default {
  name: 'Login',
  data() {
    return {
      Login: {
        email: '',
        password: ''
      },

    };
  },
  methods: {
    async login() {
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
