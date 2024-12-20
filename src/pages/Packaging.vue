<template>
    <div class="hero">
        <TopNav></TopNav>
        <div class="content">
          <h1>Pack Like a Pro - <br> Everything You Need for a Safe Move!</h1>
          <div class="btn-container">
            <button class="quote">Get Quote</button>
            
          </div>
        </div>
        <div class="white-shape">
          <p>(Planning your move? Proper packing is essential to protect your belongings. ) Export packing…</p>
        </div>
    </div>
    <div class="why-chose">
      <h1>Our Packaging Services</h1>
        <div class="cards">
          <div class="card">
          <img src="@/assets/images/full-packing.png" alt="">
          <h3>Full Packing Service</h3>
          <p>Our expert team takes the stress out of moving by handling every part of the packing process. From fragile heirlooms to everyday essentials, we use high-grade materials to carefully protect all your belongings. We cover everything, including:</p>
          <ul>
            <li>Books</li>
            <li>Wardrobe items</li>
            <li>Kitchenware</li>
            <li>Electronics</li>
            <li>Furniture pieces</li>
          </ul>
        </div>
        <div class="card">
          <img src="@/assets/images/half-packing.png" alt="">
          <h3>Partial Packing Service</h3>
          <p>Tailor your packing needs with our Partial Packing option. Ideal for customers who want help with specific rooms or items</p>
          <ul>
            <li>Full Kitchen Sets</li>
            <li>Art Pieces</li>
            <li>Specialized Collections</li>
          </ul>
        </div>
        <div class="card">
          <img src="@/assets/images/special-packing.png" alt="">
          <h3>Special Item Packing</h3>
          <p>For items that require extra care, like pianos or rare antiques, our team offers custom packing solutions. You decide which items we handle, ensuring they’re transported safely and securely. Perfect for:</p>
          <ul>
            <li>Sculptures</li>
            <li>Custom Furniture</li>
          </ul>
        </div>
        <div class="card">
          <img src="@/assets/images/packing-material.png" alt="">
          <h3>Packing Materials Delivery</h3>
          <p>Need supplies? We offer delivery of all essential packing materials. With eco-friendly boxes in every size, bubble wrap, and specialized tape, we have everything you need to pack safely for your next move.</p>
        </div>
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

    <div class="process">
        <div class="cards">
            <div class="card card1">
                <p>Packaging Process: How We Safely Prepare Your Belongings for the Move</p>
            </div>
            <div class="two-card">
                <div class="top-card">
                    <div class="top-texts">
                        <h3>consultation and Assessment</h3>
                        <p>01</p>
                    </div>
                    <p>We begin with a thorough consultation to evaluate your items and specific needs, ensuring a personalized packing strategy</p>
                </div>
            <div class="bottom-card">
                <div class="top-texts">
                    <h3>consultation and Assessment</h3>
                    <p>01</p>
                </div>
                <p>Experienced movers carefully pack your belongings, utilizing proper techniques and labeling boxes for easy identification during unpacking.</p>
                
            </div>
            </div>
            <div class="card slant">  
                <div class="top-texts">
                    <h3>consultation and Assessment</h3>
                    <p>01</p>
                </div>
                <p>Experienced movers carefully pack your belongings, utilizing proper techniques and labeling boxes for easy identification during unpacking.</p>
        
            </div>
            <div class="card last-card">
            <h3>Packing Materials Delivery</h3>
            <p>Need supplies? We offer delivery of all essential packing materials. With eco-friendly boxes in every size, bubble wrap, and specialized tape, we have everything you need to pack safely for your next move.</p>
            </div>
        </div>
    </div>
   
    
    <div class="get-in-touch">
      <div class="left">
        <img src="@/assets/images/focus.png" alt="">
      </div>
      <div class="right">
        <p>Ready for a stress-Free Move?</p>
        <h2>Focus on your move while we handle the packing. Get a personalized quote from Hilogisticz.</h2>
        <div class="btn-contain">
          <button class="quote">Order Packaging</button>
          <button class="contact">Contact us for More Information</button>
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
      background: url('@/assets/images/packaging.png');
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
    .why-chose{
      margin-bottom: 80px;

      h1{
        margin-bottom: 50px;
        text-align: center;
      }
      width: 92%;
      margin-left: 4%;
      padding: 1.5%;
      border-radius: 15px;
      margin-top: 80px;
     
      .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: center;
      }

   


        .card{
          border-radius: 10px;
          width: 23%;
          border: none;

          img{
            width: 100%;
            border-radius: 15px;
          }
          h3{
            font-family: Lato;
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            margin: 10px 0px;
            margin-top: 20px;


          }
          p{
            font-size: 16px;
            font-weight: 300;
            font-family: Lato;
            margin: 0px 10px;
          }
          ul{
            margin-top: 15px;
          }
          li{
            font-family: Lato;
            font-size: 16px;
            font-weight: 300;

          }
      }
    }

    .expertise{
    background: black;
    width: 100%;
    padding: 4% 4%;
    margin-top: 80px;
    display: flex;
    gap: 30px;
    margin-bottom: 100px;
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

    .process{
      margin-bottom: 80px;
      width: 90%;
      margin-left: 5%;
      border-radius: 15px;
      margin-top: 80px;
      box-sizing: border-box;
      justify-content: space-evenly;
     
      .cards{
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        width: 100%;
        justify-content: space-between;
      }

   
        .card1{
            background: url('@/assets/images/pack-needs.png');
            background-size: 100%;
            background-repeat: no-repeat;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;

            p{
            font-family: Lato;
            font-size: 28px;
            font-weight: 700;
            }
            

        }

        .two-card{
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 22%;
            
            
            .top-card{
                padding: 20px;
                border: 0.1px solid rgb(230, 227, 227);
                border-radius: 10px;

                .top-texts{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 100px;
                }
            }

            .bottom-card{
                padding: 20px;
                border: 0.1px solid rgb(230, 227, 227);
                border-radius: 10px;

                .top-texts{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }
            }
        }
        
        .slant{
            background: #E2F5EE;
            padding: 20px;

            .top-texts{
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 20px;
                }

        }

        .last-card{
            margin-top: 150px;
            padding: 20px;
        }
        .card{
          border-radius: 10px;
          width: 22%;
          height: 300px;

          h3{
            font-family: Lato;
            font-size: 18px;
            font-weight: 700;
            line-height: 27px;
            margin: 10px 0px;
            margin-top: 20px;


          }
          p{
            font-size: 16px;
            font-weight: 300;
            font-family: Lato;
            margin: 0px 10px;
          }
          ul{
            margin-top: 15px;
          }
          li{
            font-family: Lato;
            font-size: 16px;
            font-weight: 300;

          }
      }
    }

   
 
    .get-in-touch{
      width: 94%;
      margin-left: 3%;
      padding: 3%;
      display: flex;
      background: black;
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