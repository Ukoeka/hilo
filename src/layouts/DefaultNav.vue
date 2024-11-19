<template>
    <TopHeader></TopHeader>
        <slot />
    <Footer></Footer>
  </template>
  
  <script>
  import TopHeader from "@/layouts/partials/topnav.vue";
  import Footer from "@/layouts/partials/footer.vue";

  export default {
    name: 'TopNav',
    components: {
    TopHeader,
    Footer,
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
  
  <style scoped>

 
  </style>
  