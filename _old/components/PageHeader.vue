<template>
  <!-- Mobile nav -->
  <div v-if="isMobile" class="top-0 left-0 z-40 fixed w-full bg-white">
    <!-- include logo on top nav for all mobile screen pages -->
    <div class="container-inner flex flex-wrap justify-between items-center mx-auto py-8">
      <div >
        <router-link to="/" @click.native="scrollToTop">
          <img src="../assets/nate-williams-logo-180.svg" alt="nate-williams-logo" width="180" />
        </router-link>
      </div>
    </div>
    <!-- burger -->
    <div :class="!isOpen ? 'absolute right-0 top-0 p-8': 'hidden'">
      <button @click="toggleBurger" class="flex items-center">
        <svg class="h-6 w-6 fill-heroblue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <!-- right nav open -->
    <div class="nav-btn-container h-screen w-52 lg:w-60 py-8 bg-gray-800/70"
        :class="isOpen ? 'absolute right-0 top-0': 'hidden'"
    >
      <!-- close (x) -->
      <div class="flex justify-end lg:pb-2 pr-7">
        <button @click="toggleBurger">
          <svg class="h-7 w-7 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <ul>
        <li><router-link to="/" @click="scrollToTop"><div class="nav-btn text-2xl pl-6 py-3 lg:py-4">Home</div></router-link></li>
        <li><router-link to="/work" @click="scrollToTop"><div class="nav-btn text-2xl pl-6 py-3 lg:py-4">Work</div></router-link></li>
        <li><router-link to="/about" @click="scrollToTop"><div class="nav-btn text-2xl pl-6 py-3 lg:py-4">About</div></router-link></li>
      </ul>
    </div>
  </div>
  <!-- non-Mobile nav -->
  <div v-else class="top-0 left-0 z-40 fixed w-full" :class="isBelowHero ? 'bg-black/40': 'bg-transparent'">
    <div>
      <ul class="flex justify-end pr-6">
        <li><router-link to="/" @click="scrollToTop"><div class="nav-btn text-lg px-4 py-6">Home</div></router-link></li>
        <li><router-link to="/work" @click="scrollToTop"><div class="nav-btn text-lg px-4 py-6">Work</div></router-link></li>
        <li><router-link to="/about" @click="scrollToTop"><div class="nav-btn text-lg px-4 py-6">About</div></router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PageHeader',

    props: {
      isMobile: {
          type: Boolean,
          required: true
      },
      isBelowHero: {
          type: Boolean,
          required: true
      }
    },

    data: function() {
      return {
        isOpen: false,
      };
    },

    methods: {
      scrollToTop() {
        this.isOpen = false
        window.scrollTo(0,0);
      },
      closeBurger() {
        this.isOpen = false
        window.scrollTo(0,0);
      },
      toggleBurger() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>

<style scoped>
.nav-btn {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.025em;
  color: theme('colors.white');
}
.nav-btn:hover {
   background-color:rgb(0,0,0,0.3);
}

</style>
