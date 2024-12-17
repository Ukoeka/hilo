<template>
  <div class="d-flex justify-content-between px-3 py-3 sizing mb-5">
    <h5>{{ title }}</h5>
    <div class="d-flex gap-3 align-items-center profile">
      <img src="../assets/Dashbordicons/3d_avatar_3.png" alt="" class="">
      <span>{{ userName }}</span>
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
  }
}
</script>

<style scoped>
</style>