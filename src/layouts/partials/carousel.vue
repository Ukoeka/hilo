<template>
    <div id="testimonials">
        <p>Client Testimonials</p>
        <h2>We pride ourselves on delivering exceptional service and results.</h2>
        <div>
          <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial-container">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Matthew Bubble Nogles</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Massa tincidunt nulla nulla tristique varius phasellus maecenas ut varius. <br> Duis ipsum id dolor velit mauris nam. Enim donec.</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
             <div class="testimonial-container mt-5">
                <div class="top d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Matthew Bubble Nogles</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Massa tincidunt nulla nulla tristique varius phasellus maecenas ut varius. <br> Duis ipsum id dolor velit mauris nam. Enim donec.</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
             <div class="testimonial-container">
                <div class="top d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Matthew Bubble Nogles</h5>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur. Massa tincidunt nulla nulla tristique varius phasellus maecenas ut varius. Duis ipsum id dolor velit mauris nam. Enim donec.</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        </div>
              
          </div>
  </template>
  
  <script>  
  export default {
    name: 'Carousel',
    
    props: {
      // Define props here
    },
    components: {
      // Carousel,
      // Slide
    },
    data() {
      return {
        
      };
    },
    methods: {
      
    },
 
  };
  </script>
  
  <style scoped lang="scss">
    #testimonials{
        margin-top: 100px;
        width: 85%;
        margin: auto;
        background: #F3F3F3;
        margin-left: 7.5%;
        padding: 50px;
    }
    .testimonial-container{
      box-shadow: 0px 6px 12px 0px #00000014;
      padding: 30px;
      border-radius: 20px;
      border: 1px solid #2E7D3266;
      width: 50%;
      margin: auto;
      margin-top: 50px;

    }
    .top-carou{
      align-items: center;
    }
    .carousel-control-prev{
      background: rgb(247, 253, 247) !important;
    }
    .carousel-control-prev-icon{
      color: #2E7D3266;
    }
  </style>