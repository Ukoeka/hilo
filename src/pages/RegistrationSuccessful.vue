<template>
    <div class="hero">
        <TopNav></TopNav>
        
    </div>

    <div class="main-content mt-5 mb-3">
         <div class="centered mt-5">
            <img src="@/assets/icons/success.png" alt="">
            <h1>Registration Submitted Successfully</h1>
            <p>Your application to join us is under review. <br> You will get notification when your application has been approved.</p>
            <a href="/">Go Home</a>
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
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: center;
      position: relative;
      margin-top: 150px;

      .centered{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background: white;
        padding: 50px;

        h1{
            font-family: Poppins;
            font-size: 34px;
            font-weight: 700;
            line-height: 47.6px;
            color: #797979;

        }
        p{
                font-family: Poppins;
                font-size: 16px;
                font-weight: 400;
                color: #797979;

            }

        a{
          width: 50%;
          background: #2E7D32;
          color: white;
          height: 45px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 20px;

        }
      }
     
    }
    </style>