<template>
    <div class="tops">
      <div class="left">
        <RouterLink to="/">
          <img class="logo" src="@/assets/images/logo/logo-small.png" alt="">
        </RouterLink>
       
        <a href="/cleaning">Cleaning</a>
        <a href="/business">Businesses</a>
        <a href="/packaging">Packaging</a>
      </div>
      <div class="right">
        <a href="/gethired">Get Hired</a>
        <a class="green-btn" href="/getquote">Get Quote</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopNav',
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
    .tops{
      width: 80%;
      padding: 0px 25px;
      background: white;
      height: 70px;
      border-radius: 15px;
      position: fixed;
      z-index: 1000;
      top: 30px;
      margin-left: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 0.35px solid rgb(194, 191, 191);

      a{
          text-decoration: none;
          color: #808080;
          font-size: 16px;
          font-weight: 400;
        }

      .left{
        display: flex;
        gap: 20px;
        align-items: center;

        .logo{
          width: 120px;
        }
      }

      .right{
        display: flex;
        gap: 15px;
        align-items: center;

        .green-btn{
          width: 100px;
          height: 34px;
          background: #2E7D32;
          color: white;
          border-radius: 8px;
          border: none;
          font-family: Lato;
          font-size: 18px;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  </style>
