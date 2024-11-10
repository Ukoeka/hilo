<script setup>
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
  <div class="d-flex ">
    <Sidebar />
    <slot></slot>
  </div>

</template>
