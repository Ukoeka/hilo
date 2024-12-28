<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
            <h2>Get Your Quote</h2>
            <p>Choose the service you need to get a tailored quote.</p>
        </div>
    </div>

    <div class="main-content">
          <a href="/book-cleaning" class="left">
            <img class="mb-3" src="@/assets/icons/broom.png" alt="">
            <p>Book a Cleaner</p>
            <h2>Need professional cleaning? Click here to get a quote for our expert cleaning services.</h2>
            <img class="img-down" src="@/assets/icons/black-arrow.png" alt="">
          </a>
          <a href="/book-driver" class="right">
            <img class="mb-3" src="@/assets/icons/steering.png" alt="">
            <p>Book a Driver</p>
            <h2>Get a quote for our moving services today.</h2>
            <img class="img-down" src="@/assets/icons/black-arrow.png" alt="">
          </a>
        </div>

        <div class="get-in-touch">
        <div class="left">
          <img src="@/assets/images/guys-lift.png" alt="">
        </div>
        <div class="right">
          <p>Get started with a quote for your cleaning or moving needs.</p>
          <h2>Find the Perfect Service.</h2>
          <div class="btn-contain">
            <button class="quote">Get Cleaner Quote</button>
            <button class="contact">Get Driver Quote</button>
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
        text-decoration: none;
        cursor: pointer;
        color: black;

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
        text-decoration: none;
        cursor: pointer;
        color: black;

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