<template>
    <div class="card-section">
      <div class="content">
        <slot name="text-content">
          <h6>{{ title }}</h6>
          <p class="mb-0">{{ value }}</p>
        </slot>
        <div class="icon" :class="bgClass">
          <slot name="icon">
            <img :src="icon" alt="icon" />
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      bgClass: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        required: true
      }
    }
  };
  </script>
  
<style scoped>
  .card-section {
    width: 300px;
    padding: 1rem;
    background-color: black;
  }
  
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .icon {
    height: 50px;
    padding: 1rem;
    border-radius: 0.5rem;
  }
  
  .bg-blue {
    background-color: rgba(94, 166, 244, 0.1);
  }
  
  .bg-red {
    background-color: rgba(244, 94, 94, 0.1);
  }
</style>
  