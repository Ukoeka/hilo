<script>
export default {
  name: "OverView",
  props: {
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    iconBg: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="card p-4 payment-description">
    <div class="w-100 h-100 d-flex align-items-center justify-content-between">
      <span>
        <h6 class="text-grayed">{{ title }}</h6>
        <p class="mb-0"><span v-text="title == 'Payments value' ? '£' : ''"></span>{{ value }}</p>
      </span>
      <span class="icon-background" :style="{ background: iconBg }">
        <img :src="icon" alt="" />
      </span>
    </div>
  </div>
</template>

<style scoped>
.icon-background {
  height: 50px;
  width: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.payment-description {
  width: 300px;
}
.card {
  border: 1px solid white !important;
  border-radius: 10px !important;
}
</style>
