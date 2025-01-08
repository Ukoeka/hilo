<template>
  <div class="d-flex justify-content-between px-5 py-4 sizing mb-5 top_nav">
    <h5>{{ title }}</h5>
    <div class="d-flex gap-3 align-items-center profile">
      <img :src="user?.profilePic" :alt="user?.firstName" class="">
      <span class="userName">{{ user?.firstName }} {{ user?.lastName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    title: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      default: 'Favour Udoh'
    }
  },
  data() {
    return {
      user: null,
    }
  },
  mounted() {
    const user = localStorage.getItem('MVdata');
    this.user = JSON.parse(user);
  }
}
</script>

<style scoped>
/* Add any custom styles here */
.top_nav {
  font-size: 20px;
}
img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 2px solid #4C956C;
}
.userName {
  font-size: 16px;
}
</style>
