<template>
    <div class="hero">
        <TopNav></TopNav>
        
    </div>

    <div class="main-content">
          <div href="/cleaner-recruitment" class="left">
            <form>
              <h2 class="mb-3">Contact Us</h2>
              <p class="mb-3">We’re Here to Help with Your Questions, Feedback, and Support Needs—Reach Out Anytime!</p>
                <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
                </div>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Message</label>
                <textarea class="form-control" name="" id="" cols="30" rows="5"></textarea>
                </div>

                <button type="submit" class="btn mt-3 mb-3">Send Message</button>
                </form>
            </div>
          <div href="/driver-recruitment" class="right">
            <img src="@/assets/images/contact.png" alt="">
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
      margin-top: -100px;
      position: relative;
      z-index: 10;
      gap: 50px;

      .left{
        width: 50%;
        background-color: white;
        box-shadow: 0px 10px 91px 14px #2A2C2B17;
        padding: 20px;
        border-radius: 20px;
        position: relative;
        text-decoration: none;
        color: black;

        p{
          font-family: Lato;
          font-size: 18px;
          font-weight: 400;
          line-height: 25.2px;

          
        }
        h2{
          font-family: Lato;
          font-size: 35px;
          font-weight: 700;
          line-height: 52.5px;
        }
        button{
          width: 100%;
          background: var(--Primary, #008751);
          color: white;
          height: 45px;
        }
      }

      .right{
        width: 50%;
        box-shadow: 12px 4px 24px 0px #0000000F;
        border-radius: 20px;

        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    </style>