<template>
    <div class="main-footer">
      <div class="top">
        <div class="left">
        <img class="footer-img" src="@/assets/images/logo/logo-white.png" alt="">
        <div class="detail">
          <img src="@/assets/icons/location.png" alt="">
          <p>123 Security Lane, Secure City, ST 45678</p>
        </div>
        <div class="detail">
          <img src="@/assets/icons/phone.png" alt="">
          <p>(123) 456-7890</p>
        </div>
        <div class="detail">
          <img src="@/assets/icons/mail.png" alt="">
          <p> info@accessworks.com</p>
        </div>
      </div>
      <div class="middle">
        <div class="navigation">
          <h3>Navigation</h3>
          <div class="links">
          <a href="/">Home</a>
          <a href="/packaging">Packaging</a>
          <a href="/business">Business</a>
          <a href="/cleaning">Cleaning</a>
          <a href="/about">About Us</a>
          </div>
        </div>
        <div class="solutions">
          <h3>Solutions</h3>
          <div class="links">
            <a href="/gethired">Join Us</a>
          <a href="/getquote">Get Quote</a>
          <a href="/book-driver">Book a Move</a>
          </div>
        </div>
      </div>
      </div>
      <div class="bottom">
        <p>Copyright © 2022 GridUp. All rights reserved.</p>
        <div class="icons">
          <img src="@/assets/icons/twitter.png" alt="">
          <img src="@/assets/icons/linkedin.png" alt="">
          <img src="@/assets/icons/instagram.png" alt="">
          <img src="@/assets/icons/youtube.png" alt="">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    props: {
      // Define props here
    },
    data() {
      return {
        
      };
    },
    methods: {
      // Methods
    },
 
  };
  </script>
  
  <style scoped lang="scss">
    .main-footer{
      background: url('@/assets/images/footer.png');
      width: 100%;
      background-repeat: no-repeat;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      background-size: 100%;
      margin-top: 100px;
      padding: 50px 50px;
      color: white;
      box-sizing: border-box;

      h2, h3{
        margin-bottom: 30px;
      }
      
      .top{
        display: flex;
        gap: 10%;

        .left{

      .detail{
        display: flex;
        gap: 15px;
        align-items: center;
        margin-top: 15px;

        p{
          margin: 0px;
        }
      }
      }
      .middle{
      display: flex;
      gap: 100px;

      .links{
        display: flex;
        flex-direction: column;
        gap: 15px;

        a{
          text-decoration: none;
          color: white;
        }
      }
      }
      }
      .bottom{
        display: flex;
        gap: 50%;
        margin-top: 80px;

        .icons{
          display: flex;
          gap: 10px;
        }

        p{
          margin: 0px;
        }
        
      }
    }

    .footer-img{
      width: 100px;
    }
  </style>
  