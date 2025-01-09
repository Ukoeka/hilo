<script setup>
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
  <div class="d-flex justify-content-between">
    <Sidebar />
    <!-- Main Content -->
    <div class="flex-grow-1 h-100 overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>
