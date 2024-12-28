<template>
    <div id="testimonials">
        <p>Client Testimonials</p>
        <h2>Your story could be our next five-star success!</h2>
        <div>
          <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="testimonial-container">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Karen Thompson</h5>
                </div>
                <p class="mt-3">Hilogistics has helped us reduce our shipping costs significantly. Their cost-effective solutions and flexible pricing options have been a game-changer for our business. We've been able to pass the savings on to our customers, which has helped us stay competitive in the market</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
              <div class="testimonial-container">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Rachel Lee</h5>
                </div>
                <p class="mt-3">I've been using Hilogistics for all my shipping needs, and I've never been disappointed. Their team is professional, efficient, and always goes the extra mile to ensure timely delivery.</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
             <div class="testimonial-container mt-5">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Emily Chen</h5>
                </div>
                <p class="mt-3">Hilogistics has been our go-to logistics partner for years. Their reliability, efficiency, and attention to detail have helped us streamline our operations and improve our bottom line. We've been able to reduce our transit times and increase our delivery accuracy, thanks to their expertise and technology</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
             <div class="testimonial-container">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>Matthew Bubble Nogles</h5>
                </div>
                <p class="mt-3">Hilogistics made our international shipping process seamless and hassle-free. Their expertise, knowledge, and communication skills are unparalleled. They handled all the complexities of customs clearance and delivery, allowing us to focus on our core business.</p>
                <img src="@/assets/icons/Star.png" alt="">
              </div>
            </div>
            <div class="carousel-item">
             <div class="testimonial-container">
                <div class="top-carou d-flex">
                  <img src="@/assets/images/testimonial-pic.png" alt="">
                  <h5>David Patel</h5>
                </div>
                <p class="mt-3">I was blown away by the personalized service I received from XYZ Logistics. They took the time to understand my unique shipping needs and provided customized solutions that exceeded my expectations. Their team is knowledgeable, friendly, and always available to answer my questions</p>
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
      
      p{
        font-size: large;
      }

    }
    .top-carou{
      align-items: center;
      gap: 20px;
    }
    .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e") ;
}
    .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e") ;
}
  </style>