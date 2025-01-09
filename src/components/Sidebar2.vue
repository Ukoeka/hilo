<template>
  <div class="sidebar">
    <div class="logo">
      Logo
    </div>

    <nav class="nav flex-column">
      <RouterLink to="/myaccount" class="nav-link" :class="{ 'active': $route.path === '/myaccount' }">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.5 4C13.5609 4 14.5783 4.42143 15.3284 5.17157C16.0786 5.92172 16.5 6.93913 16.5 8C16.5 9.06087 16.0786 10.0783 15.3284 10.8284C14.5783 11.5786 13.5609 12 12.5 12C11.4391 12 10.4217 11.5786 9.67157 10.8284C8.92143 10.0783 8.5 9.06087 8.5 8C8.5 6.93913 8.92143 5.92172 9.67157 5.17157C10.4217 4.42143 11.4391 4 12.5 4ZM12.5 14C16.92 14 20.5 15.79 20.5 18V20H4.5V18C4.5 15.79 8.08 14 12.5 14Z"
            fill="white" />
        </svg>
        My Account
      </RouterLink>

      <RouterLink to="/openjobs" class="nav-link" :class="{ 'active': $route.path === '/openjobs' }">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.51 3L21.93 4.42L16.21 10.13C17.28 11.67 17.43 13.52 16.53 14.72L10.21 8.4C11.41 7.5 13.26 7.65 14.8 8.72L20.51 3ZM7.08 17.85C5.07 15.84 3.84 13.44 3.5 11.2L8.38 9.11L15.82 16.55L13.73 21.43C11.49 21.09 9.09 19.86 7.08 17.85Z"
            fill="white" />
        </svg>
        Open Jobs
      </RouterLink>

      <RouterLink to="/bookings" class="nav-link" :class="{ 'active': $route.path === '/bookings' }">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.25 21C6.76875 21 6.35692 20.8337 6.0145 20.501C5.67208 20.1684 5.50058 19.7681 5.5 19.3V5.7C5.5 5.2325 5.6715 4.83243 6.0145 4.4998C6.3575 4.16717 6.76933 4.00057 7.25 4H17.75C18.2312 4 18.6434 4.1666 18.9864 4.4998C19.3294 4.833 19.5006 5.23307 19.5 5.7V19.3C19.5 19.7675 19.3288 20.1678 18.9864 20.501C18.644 20.8342 18.2318 21.0006 17.75 21H7.25ZM11.625 11.65L13.8125 10.375L16 11.65V5.7H11.625V11.65Z"
            fill="white" />
        </svg>
        Bookings
      </RouterLink>

      <RouterLink to="/wallet" class="nav-link" :class="{ 'active': $route.path === '/wallet' }">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.9407 5.66678C19.7891 5.18377 18.6366 5 17.4848 5C13.8282 4.9997 10.1718 6.85072 6.51523 6.85072C5.59819 6.85072 4.68173 6.73434 3.76469 6.44341C3.66167 6.41075 3.55836 6.39531 3.45742 6.39531C2.9465 6.39531 2.5 6.79075 2.5 7.33967V16.7583C2.5 17.1333 2.71464 17.4886 3.05931 17.6329C4.21089 18.1162 5.36336 18.3 6.51523 18.3C10.1718 18.3 13.8285 16.449 17.4851 16.449C18.4021 16.449 19.3186 16.5654 20.2356 16.8563C20.3386 16.889 20.4419 16.9044 20.5429 16.9044C21.0538 16.9044 21.5003 16.509 21.5003 15.96V6.54167C21.5 6.16642 21.2854 5.81136 20.9407 5.66678ZM3.925 7.97528C4.52231 8.12491 5.14575 8.20002 5.787 8.24039C5.61244 9.11291 4.84531 9.77048 3.925 9.77048V7.97528ZM3.925 16.4362V15.0177C4.94536 15.0177 5.77097 15.8273 5.81639 16.8406C5.14753 16.7868 4.52231 16.6532 3.925 16.4362ZM12 14.5C10.6881 14.5 9.625 13.2237 9.625 11.65C9.625 10.076 10.6884 8.8 12 8.8C13.3116 8.8 14.375 10.076 14.375 11.65C14.375 13.2243 13.3113 14.5 12 14.5ZM20.075 15.3247C19.5549 15.1944 19.0149 15.1214 18.4624 15.0742C18.6366 14.2999 19.2788 13.7121 20.075 13.6112V15.3247ZM20.075 8.3152C19.158 8.19912 18.4463 7.43348 18.4181 6.48794C18.9982 6.55236 19.5489 6.67289 20.075 6.86378V8.3152Z" fill="white"/>
</svg>
        Wallet
      </RouterLink>
    </nav>

    <a  class="nav-link logout-btn" @click="logout">
      <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M3 0C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H9C9.79565 20 10.5587 19.6839 11.1213 19.1213C11.6839 18.5587 12 17.7956 12 17V3C12 2.20435 11.6839 1.44129 11.1213 0.87868C10.5587 0.316071 9.79565 0 9 0H3ZM13.293 5.293C13.4805 5.10553 13.7348 5.00021 14 5.00021C14.2652 5.00021 14.5195 5.10553 14.707 5.293L18.707 9.293C18.8945 9.48053 18.9998 9.73484 18.9998 10C18.9998 10.2652 18.8945 10.5195 18.707 10.707L14.707 14.707C14.5184 14.8892 14.2658 14.99 14.0036 14.9877C13.7414 14.9854 13.4906 14.8802 13.3052 14.6948C13.1198 14.5094 13.0146 14.2586 13.0123 13.9964C13.01 13.7342 13.1108 13.4816 13.293 13.293L15.586 11H7C6.73478 11 6.48043 10.8946 6.29289 10.7071C6.10536 10.5196 6 10.2652 6 10C6 9.73478 6.10536 9.48043 6.29289 9.29289C6.48043 9.10536 6.73478 9 7 9H15.586L13.293 6.707C13.1055 6.51947 13.0002 6.26516 13.0002 6C13.0002 5.73484 13.1055 5.48053 13.293 5.293Z"
          fill="white" />
      </svg>
      Logout
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('MVdata');
      sessionStorage.removeItem('MVtoken');
      const accountType = localStorage.getItem('accountType');
      if (accountType === 'cleaning') {
        this.$router.push('/user/cleaner');
      } else {
        this.$router.push('/user/driver');
      }
      localStorage.removeItem('accountType'); 
    },
  },
};
</script>
<style scoped>
.sidebar {
  width: 300px;
  height: 100vh;
  background-color: #0a0a0f;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  /* position: fixed;
    left: 0;
    top: 0; */
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
}

.nav-link {
  color: white !important;
  padding: 20px 25px !important;
  display: flex !important;
  align-items: center;
  gap: 12px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: #4CAF50;
  border-radius: 8px;
  margin: 0 15px;
  padding: 12px 15px !important;
}

.nav-link svg {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.logout-btn {
  margin-top: auto;
  margin-bottom: 20px;
  color: #ff4444 !important;
  border: 1px solid #ff4444 !important;
  margin-left: 15px;
  margin-right: 15px;
  padding: 10px !important;
  border-radius: 8px;
  display: flex !important;
  align-items: center;
  gap: 12px;
}

.logout-btn:hover {
  background-color: rgba(255, 68, 68, 0.1);
}

.nav {
  margin-top: 150px;
}
</style>
