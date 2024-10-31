<template>
  <div class="sidebar d-flex flex-column vh-100 p-3 bg-dark text-white">
    <!-- Logo -->
    <div class="logo mb-4">
      <h4 class="text-center text-white">Logo</h4>
    </div>

    <!-- Menu Items -->
    <ul class="nav flex-column">
      <li
        class="nav-item mb-2"
        v-for="item in menuItems"
        :key="item.name"
      >
        <a
          class="nav-link text-white d-flex align-items-center gap-2"
          :class="{ active: item.active }"
          href="#"
          @click="setActive(item.name)"
        >
          <img v-if="item.iconPath" :src="item.iconPath" alt="icon" class="me-2" />
          {{ item.name }}
        </a>
      </li>
    </ul>

    <!-- Logout Button -->
    <div class="mt-auto">
      <button class="logout w-100" @click="logout">
        <i class="bi bi-box-arrow-right me-2"></i> Logout
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { name: 'Payments', image: 'payments.png', active: true, iconPath: '' },
        { name: 'Moving Quotes', image: 'quotes.png', active: false, iconPath: '' },
        { name: 'Drivers', image: 'drivers.png', active: false, iconPath: '' },
        { name: 'Cleaners', image: 'cleaners.png', active: false, iconPath: '' },
        { name: 'Cleaning Quotes', image: 'bookings.png', active: false, iconPath: '' },
        { name: 'Parameters', image: 'parameters.png', active: false, iconPath: '' },
        { name: 'Admins', image: 'admin.png', active: false, iconPath: '' },
      ],
    };
  },
  methods: {
    setActive(name) {
      this.menuItems.forEach((item) => {
        item.active = item.name === name;
      });
    },
    logout() {
      console.log("User  logged out");
    },
    async getIconPath(icon) {
      try {
        const imagePath = await import(`@/assets/Dashboardicons/${icon}`);
        return imagePath.default;
      } catch (error) {
        console.error(`Failed to load icon: ${icon}`, error);
        return "";
      }
    },
    async loadIcons() {
      for (const item of this.menuItems) {
        item.iconPath = await this.getIconPath(item.image);
      }
    }
  },
  async created() {
    await this.loadIcons();
  }
};
</script>

  
  <style>
  .sidebar {
    width: 15%;
  }
  
  .nav-link.active {
    background-color: rgba(76, 149, 108, 1);
    color: white;
    border-radius: 5px;
  }
  .logout{
    border: 1px solid rgba(255, 0, 0, 0.3);
    color: white;
    background-color: transparent;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }
  .nav{
    margin-top: 150px;
  }

  </style>
  