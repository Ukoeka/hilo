<template>
    <div class="tops">
      <div class="left">
        <RouterLink to="/payments">
          <h3>Logo</h3>
        </RouterLink>
       
        <a href="">Removals</a>
        <a href="/cleaning">Cleaning</a>
        <a href="">Businesses</a>
      </div>
      <div class="right">
        <a href="">Get Hired</a>
        <button>Get Quote</button>
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
      padding: 0px 15px;
      background: white;
      height: 64px;
      border-radius: 15px;
      position: absolute;
      top: 30px;
      margin-left: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a{
          text-decoration: none;
          color: #808080;
          font-size: 16px;
          font-weight: 400;
        }

      .left{
        display: flex;
        gap: 15px;
        align-items: center;
      }

      .right{
        display: flex;
        gap: 15px;
        align-items: center;

        button{
          width: 100px;
          height: 34px;
          background: #2E7D32;
          color: white;
          border-radius: 8px;
          border: none;
          font-family: Lato;
          font-size: 18px;
          font-weight: 700;

        }
      }
    }
  </style>
