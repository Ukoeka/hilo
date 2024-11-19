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

    <div class="expertise">
      <div class="right">
        <h2>Why Choose Hilogisticz for Your Packing Needs?</h2>
        <p>Experience expert packing, premium materials, and a truly stress-free moving experience with Hilogisticz.</p>
        
      </div>
      <div class="left">
        <div class="card">
          <img src="@/assets/icons/black-tick.png" alt="">
          <h3>Expertise You Can Trust</h3>
          <p>Our skilled team is trained to handle all types of items, ensuring safe and efficient packing.</p>
        </div>
        <div class="card">
          <img src="@/assets/icons/high-quality.png" alt="">
          <h3>High Quality Materials</h3>
          <p>We provide premium, eco-friendly packing supplies tailored to protect your belongings during transit.</p>
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

    <div class="cleaner-requirement">
      <div class="left">
        <h2>Cleaner Requirements: What <br> You Need to Join Our Team</h2>
        <p>Meeting these essential criteria ensures you're ready <br> to work with us and join our professional cleaning community.</p>
        <button>Register Now</button>
        <div class="details">
          <div class="each-detail">
            <img src="@/assets/icons/furniture.png" alt="">
            <h4>Furniture Assembly & Disassembly</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/packing.png" alt="">
            <h4>Packing and Unpacking</h4>
          </div>
          <div class="each-detail">
            <img src="@/assets/icons/disposal.png" alt="">
            <h4>Clearance and Disposal</h4>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="top">
          <img src="@/assets/images/cleanwindow.png" alt="">
        </div>
        <div class="bottom">
          <img class="img-60" src="@/assets/images/black-girl.png" alt="">
          <img class="img-40" src="@/assets/images/threemen.png" alt="">
        </div>
      </div>
    </div>
   
    
    <div class="get-in-touch">
      <div class="left">
        <img src="@/assets/images/guys-lift.png" alt="">
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
      background: url('@/assets/images/cleaner.png');
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

    .expertise{
    background: white;
    width: 100%;
    padding: 4% 4%;
    margin-top: 80px;
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
      width: 45%;

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