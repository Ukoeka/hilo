<template>
    <div class="container-fluid d-flex">
      <div class="row w-100">
        <!-- Image Section -->
        <div class="col-md-6 d-none d-md-block p-0 img" style="height: 100% ;">
          <img src="../assets/Login/main.svg" alt="Delivery" class="h-100 w-100" />
        </div>
        
        <!-- Login Form Section -->
        <div class="col-md-6 d-flex align-items-center justify-content-center bg-white p-5">
          <div class="w-75">
            <div class="text-center mb-4">
              <h2 class="fw-bold">Logo</h2>
            </div>
            <h3 class="mb-3">Login</h3>
            
            <!-- Login Form -->
            <form>
              <div class="mb-3">
                <label for="login" class="form-label">Login</label>
                <input type="text" class="inputs" id="login" placeholder="Email or phone number" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <div class="d-flex position-relative">
                  <input type="password" class="inputs" id="password" placeholder="Enter password" />
                  <span class="position-absolute top-50 start-100 translate-middle" style="">
                    <img src="../assets/Login/password.png" alt="">
                  </span>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <input type="checkbox" id="remember" />
                  <label for="remember" class="form-check-label ms-1">Remember me</label>
                </div>
                <a href="#" class="text-decoration-none">Forgot password?</a>
              </div>
              <button type="submit" class="btn btn-success w-100 mb-3">Sign in</button>
            </form>
            
            <!-- Divider -->
            <div class="">
              <hr>
            </div>
            
            <!-- Google Sign-In Button -->
            <button class="btn btn-dark w-100 d-flex align-items-center justify-content-center">
              <img src="../assets/Login/google.png" alt="" class="mr-5">
              Sign in with Google
            </button>
            
            <!-- Sign-Up Link -->
            <p class="text-center mt-4">
              Don’t have an account? <a href="#" class="text-primary text-decoration-none">Sign up now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Login',
  };
  </script>
  
  <style scoped>
  .container-fluid {
    width: 80%;
    /* background-color: #f8f9fa; */
    height:100vh;
  }
  
  .row {
    /* max-width: 1200px; */
    height: 100% !important;
  }
  
  img {
    object-fit: contain;
    object-position: center;
    height: 100%;
    
  }
  /* .img{
    background-image: url('../assets/Login/main.svg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 50%;
  } */
  .inputs{
      display: block;
      width: 100%;
      padding: .375rem .75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--bs-body-color);
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 5px;
      border: 1px solid rgba(208, 213, 221, 1);
      outline: none;
    }
  </style>
  