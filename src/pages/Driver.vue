<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
          <h1>Drive with Purpose, Earn with Ease</h1>
          <div class="btn-container">
            <a href="/onboard-driver" class="service">Get Started</a>  
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
          <p>Join a team that values your skills, offers flexible hours, and provides great opportunities to grow.</p>
        </div>
    </div>

    <div class="expertise">
      <div class="right">
        <h2>Why partner with us?</h2>
        <p>We’re here to make every mile profitable and every trip worthwhile. At Hilogisticz, we offer a smart, efficient way to keep you on the road and earning—flexibly and sustainably.</p>
        
      </div>
      <div class="left">
        <div class="card">
          <img src="@/assets/icons/black-tick.png" alt="">
          <h3>Earn on Every Mile</h3>
          <p>Maximize your income by filling unused space on every journey, transforming empty miles into additional revenue while reducing your carbon footprint.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/high-quality.png" alt="">
          <h3>Seamless Onboarding</h3>
          <p>Get started fast with our easy registration process. Simply sign up, find jobs that match your needs, and start driving in no time.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/tailored.png" alt="">
          <h3>Tailored Services</h3>
          <p>Choose from full, partial, or specialty packing options to fit your specific needs and preferences.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/peace.png" alt="">
          <h3>Peace of Mind</h3>
          <p>Enjoy a stress-free moving experience with our professional and reliable packing services, designed to simplify your relocation.</p>
        </div>
      </div>
    </div>

    <div class="register-driver">
        <div class="left">
            <h2>What You Need to Join Our Team</h2>
            <p>Meeting these essential criteria ensures you're ready to hit the road with confidence and join our professional driving community.</p>
            <a href="/onboard-driver">Register Now</a>
        </div>
        <div class="right">
            <img src="@/assets/images/tunnel.png" alt="">
        </div>
    </div>
    <div class="tailored">
      <div class="left">
        <img src="@/assets/images/driver-deliver.png" alt="">
      </div>
      <div class="right">
        <div class="details">
          <div class="each-detail">
            <img src="@/assets/icons/furniture.png" alt="">
            <h4>Valid Driver's License</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/packing.png" alt="">
            <h4>Clean Driving Record</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/disposal.png" alt="">
            <h4>Physical Ability</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/disposal.png" alt="">
            <h4>Customer Service Skills</h4>
          </div>
        </div>
      </div>
    </div>
    <Carousel></Carousel>
   
    
    <div class="get-in-touch">
      <div class="left">
        <img src="@/assets/images/guys-lift.png" alt="">
      </div>
      <div class="right">
        <p>Take the next step towards a rewarding career with us</p>
        <h2>Ready to hit the road with Us?</h2>
        <div class="btn-contain">
          <a href="" class="quote">Get Started</a>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </template>
  
  <script>
    import Footer from '@/layouts/partials/footer.vue';
    import TopNav from '@/layouts/partials/topnav.vue'
    import Carousel from '@/layouts/partials/carousel.vue';
  export default {
    name: 'Home',
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
      height: 97vh;
      border-radius: 15px;
      background: url('@/assets/images/driver.png');
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

    .expertise{
    background: white;
    width: 100%;
    padding: 4% 4%;
    display: flex;
    gap: 30px;
    margin-bottom: 50px;
    justify-content: space-around;

      .left{
        width: 50%;
        display: flex;
        gap: 12px;
        border-radius: 10px;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2% 2%;
        margin-right: 0px;


        .card{
          border-radius: 10px;
          padding: 30px 15px;
          width: 48%;
          background-color: black;
          color: white;

          img{
            width: 32px;
            height: 32px;
          }
          h3{
            font-family: Lato;
            font-size: 20px;
            font-weight: 700;
            margin: 10px 0px;
            margin-bottom: 20px;


          }
          p{
            font-size: 16px;
            font-weight: 300;
            line-height: 24px;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        padding: 50px;
        background-image: url('@/assets/images/pack-needs.png');
        padding: 2% 2%;
        border-radius: 20px;
        background-repeat: no-repeat;
        background-size: 100%;
        justify-content: center;
        color: white;

        h2{
            font-family: Lato;
            font-size: 35px;
            font-weight: 700;
            line-height: 49px;
            text-align: left;

        }


        
      }
    }

   .register-driver{
    width: 100%;
    display: flex;
    padding: 3%;
    justify-content: space-between;

    .left{
        width: 47%;
        line-break: normal;
        padding: 30px;

        h2{
            font-family: Lato;
            font-size: 35px;
            font-weight: 700;
            text-align: left;
        }

        p{
            font-family: Lato;
            font-size: 20px;
            font-weight: 300;
            line-height: 30px;
            text-align: left;

        }

        a{
            padding: 0px 15px;
            background: #2E7D32;
            color: white;
            border: none;
            border-radius: 10px;
            height: 48px;
            text-decoration: none;
            display: flex;
            width: 200px;
            justify-content: center;
            align-items: center;
        }
    }
    .right{
        width: 47%;
        
        img{
            width: 90%;
            border-radius: 20px;
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
      background: url("@/assets/images/greenback.png");
      border-radius: 25px;
      gap: 4%;

      .left{
        width: 38%;

        img{
          width: 100%;
          border-radius: 20px;
        }
      }
      .right{
          width: 58%;
          color: white;
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
              padding: 0px 18px;
              font-family: Lato;
              font-size: 20px;
              font-weight: 700;
              text-decoration: none;
              display: flex;
              align-items: center;

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