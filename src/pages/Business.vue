<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
          <h1>Efficient and <br> Affordable Removals & Logistics in the UK</h1>
          <div class="btn-container">
            <button class="service">Order Packaging</button>
            <button class="quote">Get Quote</button>
            
          </div>
        </div>
        <div class="white-shape">
          <p>Join a team that values your skills, offers flexible hours, and provides great opportunities to grow.</p>
        </div>
    </div>

   

    <div class="register-driver">
        <div class="left">
            <h2 class="mt-3">Customized Moving <br> Solutions for <br>
                Your Business Needs</h2>
            <p>Whether your business needs a spotless environment 
              or seamless moving solutions, we bring expertise, quality,
               and efficiency to every service we provide. From routine 
               cleaning to complex relocations, our team is ready to support
                a range of professional spaces and business operations</p>
            <ul class="lists">
                <div class="left-list">
                    <li class="mt-3">Corporate Cleaning</li>
                    <li class="mt-3">Moving Services</li>
                </div>
                <div class="right-list">
                    <li class="mt-3">Retail Space Cleaning</li>
                    <li class="mt-3">Specialized Cleaning</li>
                </div>
            </ul>
            <a href="/book-driver">Book Moving</a>
        </div>
        <div class="right">
          <div class="left-image">
             <img src="@/assets/images/business1.png" alt="">
              <img class="mt-3" src="@/assets/images/business2.png" alt="">
          </div>
          <div class="right-image">
             <img src="@/assets/images/business3.png" alt="">
              <img class="mt-3" src="@/assets/images/business4.png" alt="">
          </div>
        </div>
    </div>
    <div class="tailored">
      <div class="left">
        <img src="@/assets/images/cleaning.png" alt="">
      </div>
      <div class="right">
        <p>Your Trusted Partner in Professional Cleaning and Moving</p>
        <h2>We prioritize quality, efficiency, and <br> flexibility—everything your business <br> needs to maintain a productive, <br> pristine space or transition seamlessly.</h2>
        <a href="/book-cleaning">Book Cleaning</a>
      </div>
    </div>
   
    
    <div class="get-in-touch">
      <div class="left">
        <img src="@/assets/images/sing.png" alt="">
      </div>
      <div class="right">
        <p>Ready for a stress-Free Move?</p>
        <h2>Focus on your move while we handle the packing. Get a personalized quote from Hilogisticz.</h2>
        <div class="btn-contain">
          <button class="quote">Start Your Application</button>
          <button class="contact">Learn More About Opportunities</button>
        </div>
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
      background: url('@/assets/images/business.png');
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

   .register-driver{
    width: 100%;
    display: flex;
    padding: 3% 8%;
    box-sizing: border-box;
    justify-content: space-between;
    gap: 5%;

    .left{
        width: 45%;
        padding: 30px;

        h2{
            font-family: Lato;
            font-size: 35px;
            font-weight: 700;
        }

        p{
            font-family: Lato;
            font-size: 20px;
            font-weight: 300;
            line-height: 30px;
            text-align: left;
            margin-top: 30px;

        }
        .lists{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 50px;
            margin-bottom: 50px;
        }

        a{
            padding: 0px 15px;
            background: #2E7D32;
            color: white;
            border: none;
            border-radius: 10px;
            height: 48px;
            display: flex;
            text-decoration: none;
            width: 200px;
            justify-content: center;
            align-items: center;
        }
    }
    .right{
        width: 50%;
        display: flex;
        box-sizing: border-box;
        gap: 10px;

        .left-image{
          width: 50%;

          img{
            width: 100%;
            border-radius: 20px;
          }
        }
        .right-image{
          width: 50%;
          border-radius: 20px;
          margin-top: 60px;

          img{
            width: 100%;
            border-radius: 20px;
          }
        }

    }

   }

   .tailored{
      width: 90%;
      margin-left: 5%;
      display: flex;
      gap: 10px;

      .left{
        width: 40%;
        padding: 3%;

        img{
            width: 100%;
            border-radius: 15px;
        }

        

      }
      .right{
        width: 60%;
        padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        p{
          font-family: Lato;
          font-size: 20px;
          font-weight: 300;
          line-height: 30px;
          margin-bottom: 25px;
        }

        h2{
          font-family: Lato;
          font-size: 45px;
          font-weight: 700;
          line-height: 67.5px;
          margin-bottom: 50px;

        }

        a{
          padding: 0px 15px;
            background: #2E7D32;
            color: white;
            border: none;
            border-radius: 10px;
            height: 48px;
            display: flex;
            text-decoration: none;
            width: 200px;
            justify-content: center;
            align-items: center;
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