<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
            <h2>Work and Earn With Us</h2>
            <p>Start your Career at Hilogistics</p>
        </div>
    </div>

    <div class="main-content">
          <div class="left">
            <img class="mb-3" src="@/assets/icons/broom.png" alt="">
            <p>Become a Cleaner</p>
            <h2>Are you passionate about delivering top-notch cleaning services? Apply now to join our team of cleaning professionals.</h2>
            <img class="img-down" src="@/assets/icons/black-arrow.png" alt="">
          </div>
          <div class="right">
            <img class="mb-3" src="@/assets/icons/steering.png" alt="">
            <p>Become a Driver</p>
            <h2>Looking for flexible work as a driver? Join us and help clients with their moving and transportation needs.</h2>
            <img class="img-down" src="@/assets/icons/black-arrow.png" alt="">
          </div>
        </div>

        <div class="get-in-touch">
        <div class="left">
          <img src="@/assets/images/guys-lift.png" alt="">
        </div>
        <div class="right">
          <p>Click to apply for a position as a cleaner or driver and take the next step in your career.</p>
          <h2>Start Your Career with Us</h2>
          <div class="btn-contain">
            <button class="quote">Apply as a Cleaner</button>
            <button class="contact">Apply as a Driver</button>
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
      height: 25vh;
      border-radius: 20px;
      background: url('@/assets/images/getquote.png');
      background-repeat: no-repeat;
      margin: 1% 0.5%;
      position: relative;
      display: flex;
      justify-content: center;

      .content{
        position: relative;
        margin-left: 4%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
        margin-top: 100px;
        h1{
          text-align: left;
          font-family: Lato;
          font-size: 70px;
          font-weight: 700;
          color: white;        
        }
      }
    }
    .give-space{
      margin-top: 150px;
    }

    .main-content{
      width: 60%;
      margin: auto;
      display: flex;
      margin-top: 50px;
      gap: 20px;

      .left{
        width: 50%;
        box-shadow: 12px 4px 24px 0px #0000000F;
        padding: 30px;
        border: 1px solid #2E7D324D;
        border-radius: 20px;
        position: relative;
        height: 70vh;

        p{
          font-family: Lato;
          font-size: 20px;
          font-weight: 300;
          line-height: 30px;
        }
        h2{
          font-family: Lato;
          font-size: 35px;
          font-weight: 700;
          line-height: 52.5px;
        }
        .img-down{
          position: absolute;
          bottom: 30px;
          right: 30px;
        }
      }

      .right{
        width: 50%;
        box-shadow: 12px 4px 24px 0px #0000000F;
        padding: 5%;
        border: 1px solid #2E7D324D;
        border-radius: 20px;
        position: relative;

        p{
          font-family: Lato;
          font-size: 20px;
          font-weight: 300;
          line-height: 30px;
        }
        h2{
          font-family: Lato;
          font-size: 35px;
          font-weight: 700;
          line-height: 52.5px;
        }
        .img-down{
          position: absolute;
          bottom: 30px;
          right: 30px;
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
      margin-top: 100px;

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