<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
          <h1>Our Story: <br> Dedicated to <br> Excellence in <br> Cleaning & Logistics</h1>
          <div class="btn-container">
            
          </div>
        </div>
        <div class="white-shape">
          <p>Discover how our team delivers top-quality services tailored to meet your unique needs. </p>
        </div>
    </div>
    <h2 class="text-center give-space">Who We Are</h2>
    <div class="whoweare">
      <div class="left-image">
        <img src="@/assets/images/femaleavatar.png" alt="">
        <div class="small-text">
          <p>Jane Doe</p>
        </div>
      </div>
      <div class="text">
        <p>At Hilogisticz, we’re more than just a cleaning and logistics company. We’re a team of passionate professionals dedicated to providing exceptional service with a personal touch. Our expertise spans across residential and commercial spaces, ensuring that every client receives reliable, timely, and high-quality support. We prioritize customer satisfaction, going above and beyond to make each experience smooth and stress-free.</p>
      </div>
      <div class="right-image">
        <img src="@/assets/images/maleavatar.png" alt="">
        <div class="small-text">
          <p>John Doe</p>
        </div>
      </div>
    </div>

    <div class="ourmission">
      <div class="left">
        <button>Our Mission</button>
        <p>Our mission is simple – to elevate spaces and simplify moves.</p>
      </div>
      <div class="right">
        <div class="circle-container">
          <div class="center-image">
            <img src="@/assets/images/logo/logo-white.png" alt="">
          </div>
          <div class="circle-images">
            <div class="image-1">
              <img src="@/assets/images/avatar1.png" alt="Image 1">
            </div>
            <div class="image-2">
              <img src="@/assets/images/avatar2.png" alt="Image 2">
            </div>
            <div class="image-3">
              <img src="@/assets/images/avatar3.png" alt="Image 3">
            </div>
            <div class="image-4">
              <img src="@/assets/images/avatar4.png" alt="Image 4">
            </div>
            <div class="image-5">
              <img src="@/assets/images/avatar5.png" alt="Image 5">
            </div>
            <div class="image-6">
              <img src="@/assets/images/avatar6.png" alt="Image 6">
            </div>
          </div>
</div>
      </div>
    </div>

    <div class="cleaner-requirement">
      <div class="left">
        <h2 class="mt-5">Our Core Values: Driving <br> Excellence Every Day</h2>
        <p>At the heart of Hilogisticz, we believe in principles that drive outstanding results <br>
           for our clients and our team. Explore the values that fuel our commitment <br> to delivering top-tier cleaning and logistics services.</p>
        <a href="/driver-recruitment" class="quoter">Register Now</a>
        <div class="details">
          <div class="each-detail">
            <img src="@/assets/icons/furniture.png" alt="">
            <h4>Quality and Reliability</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/packing.png" alt="">
            <h4>Customer-Centric Service</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/disposal.png" alt="">
            <h4>Sustainability</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/disposal.png" alt="">
            <h4>Teamwork and Growth</h4>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <img height="800px" src="@/assets/images/truck.png" alt="">
        </div>
        <div class="bottom">
          <img class="img-60" src="@/assets/images/truck1.png" alt="">
          <img class="img-40" src="@/assets/images/truck2.png" alt="">
        </div>
      </div>
    </div>
   
    
    <div class="get-in-touch">
      <div class="right">
        <p>Ready to work with us?</p>
        <h2>Whether you're looking for dependable cleaning and logistics services or seeking to become part of a growing, dedicated team, we’re here to support you. Take the next step toward excellence—connect with us today</h2>
        <div class="btn-contain">
          <a href="/gethired" class="quote">Get Started Today</a>
        </div>
      </div>
      <div class="left">
        <img src="@/assets/icons/quote.png" alt="">
        <p class="quote-text">I partnered with Hilogisticz for our logistics needs, and they exceeded every expectation. Their dedication to customer satisfaction and reliable service has been invaluable to our operations.</p>

        <h3>Anna D. Dragon, </h3>
          <p>Director, UK</p>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
    import Footer from '@/layouts/partials/footer.vue';
    import TopNav from '@/layouts/partials/topnav.vue'
  export default {
    name: 'Home',
    components: {
    TopNav,
    Footer

  },
    props: {
      // Define props here
    },
    data() {
      return {
        // Local component data
      };
    },
    methods: {
      // Methods
    },
 
  };
  </script>
  
  <style scoped lang="scss">
    .hero{
      width: 99%;
      height: 97vh;
      border-radius: 15px;
      background: url('@/assets/images/about.png');
      background-size:100%;
      background-repeat: no-repeat;
      margin: 1% 0.5%;
      position: relative;
      padding-top:15%;

      .white-shape{
      position: absolute;
      bottom: 0;
      right: 0;
      width: 15%; /* Width of the notch */
      height: 15%; /* Height of the notch */
      background-color: white; /* Same color as the background to make it look transparent */
      border-radius: 25px 10px 0 0px;
      padding: 25px 25px;
      padding-top: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      }

      .content{
        position: relative;
        margin-left: 4%;
        width: 40%;
        h1{
          text-align: left;
          font-family: Lato;
          font-size: 70px;
          font-weight: 700;
          color: white;        
        }
        .btn-container{
          display: flex;
          gap: 13px;
          margin-top: 20px;
          button{
          height: 47px;
          color: white;
          border-radius: 8px;
          border: none;
          font-family: Lato;
          font-size: 18px;
          font-weight: 700;
          padding: 0px 20px;
          }

          .service{
            background: #2E7D32;
          }
          .quote{
            background: #000000;
            border: 1px solid #2E7D32;
          }
        }
      }
    }
    .give-space{
      margin-top: 150px;
    }

   .whoweare{
    padding: 3% 20%;
    display: flex;
    text-align: center;

    .left-image{
      margin-top: 12%;
      margin-right: -10%;

      .small-text{
        background: #2E7D32;
        width: 150px;
        color: white;
        padding: 10px 5px;
        border-radius: 5px;
        margin-top: -30px;
        z-index: 10;
        position: relative;
        
        p{
          margin: 0px;
        }
      }
    }
    .text{
      text-align: center;
      
      p{
        font-family: Lato;
        font-size: 18px;
        font-weight: 300;
        line-height: 21.6px;

      }
    }
    .right-image{
      margin-top: -18%;
      margin-right: 0%;

      .small-text{
        background: #3380DC;
        width: 150px;
        color: white;
        padding: 10px 5px;
        border-radius: 5px;
        margin-top: -30px;
        z-index: 10;
        position: relative;
        margin-left: 50%;
        
        p{
          margin: 0px;
        }
      }
    }
   }

   .ourmission{
    width: 80%;
    margin-left: 10%;
    display: flex;
    margin-bottom: 100px;
    gap: 20px;
    .left{
      width: 50%;
      background: url("@/assets/images/mission.png");
      background-repeat: no-repeat;
      padding: 5%;
      border-radius: 20px;
      text-align: center;
      color: white;
      
      button{
        background: white;
        border-radius: 10px;
        border: none;
        padding: 10px 10px;
      }
      p{
        font-family: Lato;
        font-size: 30px;
        font-weight: 700;
        line-height: 42px;
        margin-top: 40px;

      }

    }
    .right{
      width: 50%;
      background: #000000;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;

      .circle-container {
          position: relative;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          overflow: hidden;
        }

        .center-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .center-image img {
          width: 100px;
          height: 100px;
          margin-left: 30px;
        }

        .circle-images {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .circle-images div {
          position: absolute;
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .circle-images div img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .image-1 {
          top: 20%;
          left: 35%;
          transform: rotate(60deg);

          img{
            transform: rotate(-60deg);
          }
        }

        .image-2 {
          top: 20%;
          left: 65%;
          transform: rotate(120deg);


          img{
            transform: rotate(-120deg);
          }
        }

        .image-3 {
          top: 50%;
          left: 80%;
          transform: rotate(180deg);

          img{
            transform: rotate(-180deg);
          }
        }

        .image-4 {
          top: 80%;
          left: 65%;
          transform: rotate(240deg);

          img{
            transform: rotate(-240deg);
          }
        }

        .image-5 {
          top: 80%;
          left: 35%;
          transform: rotate(300deg);

          img{
            transform: rotate(-300deg);
          }
        }

        .image-6 {
          top: 50%;
          left: 20%;
          transform: rotate(360deg);

          img{
            transform: rotate(-360deg);
          }
        }
    }
   }

   .cleaner-requirement{
    width: 92%;
    margin-left: 4%;
    background-color: #000000;
    display: flex;
    border-radius: 20px;
    padding: 3%;
    justify-content: space-between;
    margin-bottom: 50px;

    .left{
      width: 55%;
      padding-left: 2%;
      color: white;

      h2{
        font-family: Lato;
        font-size: 35px;
        font-weight: 700;
        line-height: 52.5px;
      }

      p{
        font-family: Lato;
        font-size: 20px;
        font-weight: 300;
        line-height: 30px
      }
      
      button{
        padding: 0px 15px;
        background-color: #2E7D32;
        color: white;
        border: none;
        border-radius: 10px;
        height: 48px;
        margin-bottom: 30px;
      }
      .each-detail{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 15px;
      }
    }
    .right{
      width: 38%;

      .top{
        width: 100%;

        img{
          width: 100%;
          border-radius: 20px;
          height: 60vh;
        }
      }
      .bottom{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;

        .img-60{
          width: 58%;
          border-radius: 20px;
        }
        .img-40{
          width: 39%;
          border-radius: 20px;
        }
      }
    }
   }

   .tailored{
      width: 92%;
      margin-left: 4%;
      margin-top: 40px;
      display: flex;
      gap: 10px;

      .left{
        width: 50%;
        padding: 3%;

        img{
            width: 100%;
            border-radius: 15px;
        }

        

      }
      .right{
        width: 45%;

        .details{
          margin-top: 100px;

          .each-detail{
            display: flex;
            gap: 14px;
            align-items: center;
            margin-top: 40px;
            
            img{
                widows: 35px;
            }
        }
        }
      }
    }

   
 
    .get-in-touch{
      width: 94%;
      margin-left: 3%;
      padding: 3%;
      display: flex;
      border-radius: 25px;
      gap: 4%;

      .left{
        width: 28%;
        border: 0.5px solid rgb(105, 103, 103);
        padding: 40px;
        padding-top: 100px;

        img{
          width: 40px;
        }
        .quote-text{
          font-family: Lato;
          font-size: 20px;
          font-weight: 300;
          line-height: 30px;
          margin-top: 100px;
          margin-bottom: 50px;

        }
      }
      .right{
          width: 68%;
          color: black;
          padding: 3%;

          p{
            font-family: Lato;
            font-size: 20px;
            font-weight: 400;
            margin-top: 30px;
          }
          h2{
            font-family: Lato;
            font-size: 55px;
            font-weight: 800;
            line-height: 52px;
            color: black;

          }
          .btn-contain{
            margin-top: 40px;
            display: flex;
            gap: 30px;

            .quote{
              border: none;
              height: 54px;
              border-radius: 10px;
              color: black;
              background-color: #2E7D32;
              color: white;
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;

            }
            .contact{
              border: 1px solid black;
              height: 54px;
              border-radius: 10px;
              color: black;
              background-color: transparent;
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;

            }
          }
        }
    }
    .quoter{
              border: none;
              height: 54px;
              border-radius: 10px;
              color: black;
              background-color: #2E7D32;
              color: white;
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              width: 200px;
              margin: 40px 0px;

            }
  </style>