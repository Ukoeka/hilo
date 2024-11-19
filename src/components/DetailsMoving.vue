<template>

<div class="container flex-grow-1 h-100 overflow-auto p-5" v-show="showDetails">
      <div class="d-flex justify-content-between px-3 sizing mb-5">
        <h6>Details Moving</h6>
        <div class="d-flex gap-3 align-items-center profile">
          <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
          <span>Favour Udoh</span>
        </div>
      </div>
      <div class="bg-white">
        <div class="rounded-4">
          <div class="d-flex justify-content-between align-items-center p-2 rounded-top"
            style="background: linear-gradient(rgba(183, 241, 255, 1),rgba(241, 255, 211, 1));">
            <button class=" rounded-circle border bg-white" @click="showDetail" style="height: 50px; width: 50px;"><img
                src="../assets/Payment_Sales/ArrowLeft.png" alt=""></button>
            <div class="d-flex jusify-content-between align-items-center p-2 gap-2">
              <p class="m-0">Assigned Driver</p>
              <span class="badge bg-light text-dark px-3 py-2 me-2">Charlie Brakus</span>
              <button class="btn btn-success">Driver Profile</button>
            </div>
          </div>

          <!-- body -->

          <div class="row justify-content-between px-4 py-3">

            <div class="col-lg-6">
              <div class="row justify-content-between">
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Client Name</p>
                  <p class="description">Charlie Brakus</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Phone Number</p>
                  <p class="description">+44 012 9904 9944</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Post Code</p>
                  <p class="description">B455AT</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Booking Date</p>
                  <p class="description">1/1/2001</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Location</p>
                  <p class="description">Birmingham</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Delivery Location</p>
                  <p class="description">10:00 AM</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Property Type</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Delivery Property Type</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Pickup Property Floor</p>
                  <p class="description">House</p>
                </div>
                <div class="col-md-5 rounded-2 mb-3 py-2" style="background: rgba(245, 249, 251, 1);">
                  <p class="title">Email</p>
                  <p class="description">Phamo@gmail.com</p>
                </div>
                <div class="col-12 rounded-2 py-2" style="background: rgba(245, 249, 251, 1); height: 100px;">
                  <p class="title">Additional Information</p>
                  <p class="description">Placeholder</p>
                </div>
              </div>
            </div>

            <div class="col-lg-5 px-4 pt-2 rounded-2" style="background: rgba(245, 249, 251, 1)">
              <p class="title">Recent Deliveries</p>
              <ul class="list-unstyled">
                <li class="description">2 beds</li>
                <li class="description">4 couches</li>
                <li class="description">8 chairs</li>
                <li class="description">1 kitchen cabinet</li>
                <li class="description">1 small box</li>
                <li class="description">1 small bed</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>
