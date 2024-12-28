<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
          <h1>Your Space, Elevated Beyond Expectations – Cleaned to Perfection</h1>
          <div class="btn-container">
            <a href="/getquote" class="quote">Get Quote</a>
          </div>
          <div class="btn-container">
            <img class="men" src="@/assets/icons/Men.png" alt="">
            <div class="star-container">
              <span>5.0 <img src="@/assets/icons/Star.png" alt=""></span>
              <p>18k Satisfied Customers</p>
            </div>
          </div>
        </div>
        <div class="white-shape">
          <p>Professional, eco-friendly cleaning tailored to your home or business. We deliver spotless results.</p>
        </div>
    </div>
  
    <div class="why-chose">
      <h1>From clutter to clear at your fingertips…</h1>
        <div class="cards">
          <div class="card">
          <img src="@/assets/icons/tick.png" alt="">
          <h3>Trained Professionals</h3>
          <p>Highly Skilled Experts Dedicated to Delivering Quality Service Every Time</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/clock.png" alt="">
          <h3>Flexible Scheduling</h3>
          <p>Tailored Appointment Times Designed to Work Around Your Busy Schedule.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/leaf.png" alt="">
          <h3>Eco-friendly Products</h3>
          <p>Committed to Using Sustainable and Environmentally Friendly Products for a Greener Future.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/thumb-up.png" alt="">
          <h3>100% Guaranteed Satisfaction</h3>
          <p>We Stand Behind Our Work with a Promise to Ensure Complete Customer Satisfaction.</p>
        </div>
        </div>
    </div>
    <h1 class="text-center">Our Cleaning Services</h1>
    <div class="images">
      <div class="card card1">
        <div class="content">
          <h2>Residential Cleaning</h2>
          <img src="@/assets/icons/arrow-down.png" alt="">
        </div>
      </div>
      <div class="card card2">
        <div class="content">
          <h2>Commercial Cleaning</h2>
          <img src="@/assets/icons/arrow-down.png" alt="">
        </div>
      </div>
      <div class="card card3">
        <div class="content">
          <h2>End of Tenancy</h2>
          <img src="@/assets/icons/arrow-down.png" alt="">
        </div>
      </div>
    </div>
    <div class="tailored">
      <div class="right">
        <img src="@/assets/images/cleaning.png" alt="">
      </div>
      <div class="left">
        <h2>Tailored cleaning solutions for every space.</h2>
        <p>Professional, reliable, and efficient services designed to make your move seamless.</p>
        <div class="details">
          <div class="each-detail">
            <img src="@/assets/icons/deep.png" alt="">
            <h4>Deep Cleaning</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/carpet.png" alt="">
            <h4>Carpet & Upholstery Cleaning</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/move-in.png" alt="">
            <h4>Move-In/Move-Out <br> Cleaning</h4>
          </div>
        </div>
      </div>
    </div>

    <Carousel></Carousel>
    
    <div class="get-in-touch">
      <div class="left">
        <img src="@/assets/images/ready.png" alt="">
      </div>
      <div class="right">
        <p>Ready To Experience Marvelous Cleaning At It’s Peak?</p>
        <h2>Get the best deal for your space today</h2>
        <div class="btn-contain">
          <a href="/book-cleaning" class="quote">Let's Get Started</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
    import Footer from '@/layouts/partials/footer.vue';
    import TopNav from '@/layouts/partials/topnav.vue';
    import Carousel from '@/layouts/partials/carousel.vue';
  export default {
    name: 'Cleaning',
    components: {
    TopNav,
    Footer,
    Carousel

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
      height: 100vh;
      border-radius: 15px;
      background: url('@/assets/images/cleaning-hero.png');
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
          font-size: 60px;
          font-weight: 700;
          color: white;        
        }
        .btn-container{
          display: flex;
          gap: 13px;
          margin-top: 20px;
          color: white;

          span{
            font-family: Outfit;
            font-size: 21.32px;
            font-weight: 600;
            line-height: 29.84px;
            color: #30EB3A;

          }

          .men{
            width: 150px;
            height: 50px;
          }

          a{
          height: 47px;
          color: white;
          border-radius: 8px;
          border: none;
          font-family: Lato;
          font-size: 18px;
          font-weight: 700;
          padding: 0px 20px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
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
 
    .why-chose{
      margin-bottom: 80px;

      h1{
        margin-bottom: 50px;
        text-align: center;
      }
      width: 92%;
      margin-left: 4%;
      padding: 1.5%;
      border-radius: 15px;
      margin-top: 80px;
     
      .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
      }

   


        .card{
          border-radius: 10px;
          padding: 35px 25px;
          width: 23%;
          cursor: pointer;

          img{
            width: 32px;
            height: 32px;
          }
          h3{
            font-family: Lato;
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            margin: 10px 0px;
            color: #2E7D32;
            margin-top: 20px;


          }
          p{
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
          }
      }
    }
    .images{
      width: 92%;
      margin-left: 4%;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      box-sizing: border-box;
      justify-content: space-between;
      margin-top: 60px;

      .card{
        width: 32%;
        border-radius: 20px;
        display: flex;
        height: 700px;
        display: flex;
        justify-content: flex-end;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        
        .content{
          width: 100%;
          display: flex;
          justify-content:space-between;
          background-color: rgba(0, 0, 0, 0.3);
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 15px;
          padding:10px;
          box-sizing: border-box;


          h2{
            font-family: Lato;
            font-size: 30px;
            font-weight: 700;
            line-height: 45px;
            color: white;

          }
        }

        img{
          width: 35px;
          height: 35px;
        }
      }
      .card:hover{
        transform: scale(1.1);
      }
      .card1{
          background-image: url('@/assets/images/residential.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
        .card2{
          background-image: url('@/assets/images/commercial.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
      .card3{
          background-image: url('@/assets/images/window.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
    }
    .tailored{
      width: 92%;
      margin-left: 4%;
      margin-top: 100px;
      display: flex;
      gap: 5%;
      margin-bottom: 70px;

      .left{
        width: 60%;
        padding-top: 30px;

        h2{
          font-family: Lato;
          font-size: 55px;
          font-weight: 700;
        }
        p{
          font-family: Lato;
          font-size: 20px;
          font-weight: 300;
        }

        .details{
          margin-top: 100px;

          .each-detail{
            display: flex;
            gap: 14px;
            align-items: center;
            margin-top: 40px;
        }
        }

      }
      .right{
        width: 35%;

        img{
          width: 100%;
          border-radius: 30px;
        }
      }
    }
    .get-in-touch{
      width: 94%;
      margin-left: 3%;
      padding: 3%;
      display: flex;
      background: black;
      border-radius: 25px;
      gap: 4%;
      margin-top: 100px;

      .left{
        width: 38%;

        img{
          width: 100%;
          border-radius: 25px;
        }
      }
      .right{
          width: 58%;
          color: white;
          padding: 3%;
          display: flex;
          flex-direction: column;
          justify-content: center;

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
            color: white;

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
              background-color: white;
              text-decoration: none;
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;

            }
            .contact{
              border: 1px solid white;
              height: 54px;
              border-radius: 10px;
              color: white;
              background-color: transparent;
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;

            }
          }
        }
    }
  </style>