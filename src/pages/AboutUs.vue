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
    <h2 class="text-center give-space">Who We Are</h2>
    <div class="whoweare">
      <div class="left-image">
        <img src="@/assets/images/femaleavatar.png" alt="">
        <div class="small-text">
          <p>Jane Doe</p>
        </div>
      </div>
      <div class="text">
        <p>Lorem ipsum dolor sit amet consectetur. Ac vitae aliquam gravida fringilla placerat aliquet. Donec maecenas ipsum blandit nunc id pretium. Facilisi ut in vel semper aliquam. Felis purus molestie lectus nulla sed amet mi cursus. Amet facilisi pellentesque habitant nec in aliquet proin ullamcorper auctor. In dignissim sollicitudin orci neque dis morbi. Auctor sagittis in odio volutpat enim gravida integer. Imperdiet vel vel hendrerit massa adipiscing. Non consectetur nulla in pulvinar ultrices purus egestas. Sed nec viverra sem platea leo tristique ut ac.</p>
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
        <p>Lorem ipsum dolor sit amet consectetur. Pharetra a eu condimentum quis.</p>
      </div>
      <div class="right">
        <div class="circle-container">
          <div class="center-image">
            <h2>LOGO</h2>
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
          <img src="@/assets/images/truck.png" alt="">
        </div>
        <div class="bottom">
          <img class="img-60" src="@/assets/images/truck1.png" alt="">
          <img class="img-40" src="@/assets/images/truck2.png" alt="">
        </div>
      </div>
    </div>
   
    
    <div class="get-in-touch">
      <div class="right">
        <p>Ready for a stress-Free Move?</p>
        <h2>Focus on your move while we handle the packing. Get a personalized quote from Hilogisticz.</h2>
        <div class="btn-contain">
          <button class="quote">Start Your Application</button>
          <button class="contact">Learn More About Opportunities</button>
        </div>
      </div>
      <div class="left">
        <p>Lorem ipsum dolor sit amet consectetur. Malesuada tellus id tempus et turpis maecenas pellentesque nam. Dolor faucibus curabitur libero a.</p>
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
          border-radius: 50%;
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
        }

        .image-2 {
          top: 20%;
          left: 65%;
          transform: rotate(120deg);
        }

        .image-3 {
          top: 50%;
          left: 80%;
          transform: rotate(180deg);
        }

        .image-4 {
          top: 80%;
          left: 65%;
          transform: rotate(240deg);
        }

        .image-5 {
          top: 80%;
          left: 35%;
          transform: rotate(300deg);
        }

        .image-6 {
          top: 50%;
          left: 20%;
          transform: rotate(360deg);
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
      border-radius: 25px;
      gap: 4%;

      .left{
        width: 28%;
        border: 0.5px solid rgb(105, 103, 103);
        padding: 20px;

        img{
          width: 100%;
          border-radius: 20px;
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
  </style>