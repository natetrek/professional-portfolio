<template>

    <!-- Nav control -->
    <PageHeader :isMobile="isMobile" :isBelowHero="isBelowHero" />

    <!-- Hero area -->
    <div id="hero" class="flex items-center text-white bg-heroblue md:h-[450px] w-full" :class="isMobile ? 'pt-24 pb-4': 'py-0'">
      <div class="container-inner flex flex-col sm:flex-row justify-left items-center py-8 mx-auto">
        <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
          <div class="text-3xl xl:text-4xl font-bold uppercase">About me</div>
          <div class="text-2xl leading-10">Some things I like to do when I'm not trekking in the Sierras</div>
        </div>
        <div class="mt-8 sm:mt-0">
          <img src="../assets/trekking-in-mountains.svg" width="275" alt="trekking in the mountains" class="mx-auto sm:mx-0 drop-shadow-xl">
        </div>
      </div>
    </div>

    <!-- Intro -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
        <div class="prose max-w-none space-y-4 my-4">
          <div>Hi, I'm Nate. Thanks for stopping by. I'm a web software entrepreneur, developer and UI/UX designer.</div>
          <div>I've co-founded three enterprise software startups where I led product development and managed all aspects of the product lifecycle. In different ways, all three ventures focused on data preparation, data analysis and creating value with data resources:</div>
          <ul class="space-y-2 pl-8 md:pl-16">
            <li><router-link to="/work#flexio">Flex.io</router-link> was about getting data from the cloud into spreadsheets simply by typing a formula</li>
            <li><router-link to="/work#goldprairie">Gold Prairie</router-link> pinpointed payment errors by analyzing large volumes of corporate financial data</li>
            <li><router-link to="/work#kirix">Kirix</router-link> was a productivity application for data preparation and ad hoc data analysis</li>
          </ul>
        </div>
    </div>

    <!-- Design & Development -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12 border-t border-gray-300">
        <div class="prose max-w-none space-y-4 my-4">
          <div class="text-2xl md:text-3xl text-center pb-4">Design & development</div>
          <div>I love web design and writing code, both professionally and for personal projects. I believe good UI/UX design and good code go hand-in-hand. Crafting <a href="https://uxmastery.com/" target="_blank">thoughtful designs</a> up front often uncovers key issues that can save weeks of development time. In turn, <a href="https://www.refactoringui.com/" target="_blank">well-crafted code</a> creates elegant interfaces.</div>
        </div>
    </div>

    <!-- About this site -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12 border-t border-gray-300">
        <div class="prose max-w-none space-y-4 my-4">
          <div class="text-2xl md:text-3xl text-center pb-4">About this site</div>
            <div>
               I'm a big fan of the <a href="https://jamstack.org/" target="_blank">Jamstack</a>, particularly for getting a new projects off the ground quickly. I built this site using
               <a href="https://vitejs.dev/" target="_blank">Vite</a>,
               <a href="https://vuejs.org/" target="_blank">Vue 3</a>, and
               <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. I used
               <a href="https://www.figma.com/" target="_blank">Figma</a> and
               <a href="https://affinity.serif.com/en-us/" target="_blank">Affinity Designer</a> for the design.
               Below are some other technologies and tools I like to use.
            </div>
        </div>
    </div>

    <!-- Technologies, frameworks & tools -->
    <div class="container-inner mx-2 sm:mx-auto py-16 border-t border-gray-300">
      <div class="text-2xl md:text-3xl text-center pb-8 md:pb-12">Technologies, tools & frameworks</div>
      <div class="grid grid-cols-2 md:grid-cols-4 grid-rows-auto gap-8">
          <div class="flex flex-col items-center" v-for="item in technologies" :key="item.id">
              <img class="w-48 h-48" :src="getImgUrl(item.img)" :alt="item.name">
              <div class="prose prose-sm flex justify-center md:pt-4">{{ item.name }} </div>
          </div>
      </div>
    </div>

    <!-- Get in touch -->
    <div class="text-white bg-stone-500">
      <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-16">
          <div class="space-y-8 md:space-y-10 text-center">
            <div class="text-2xl md:text-3xl">Get in touch</div>
            <div class="mx-2 md:mx-16">Please feel free to reach out. I'm glad to chat about work, trade thoughts, share feedback, or hear about any opportunities you're excited about.</div>
            <button class="cta-btn hover:bg-gray-400 hover:bg-opacity-20 pb-10" @click="btnSendEmail">Contact me</button>
            <SocialMediaLinks :isHome="false" class="flex justify-center" />
          </div>
      </div>
    </div>

    <!-- Page footer centered -->
    <div class="h-16">
      <PageFooter class="flex justify-center items-center h-full mx-auto" />
    </div>

</template>

<script>
import SocialMediaLinks from '../components/SocialMediaLinks.vue'
import PageHeader from '../components/PageHeader.vue'
import PageFooter from '../components/PageFooter.vue'
import json from '../data/about-technologies-data.json'

export default {
  name: "BaseAbout",

  components: {
    SocialMediaLinks,
    PageHeader,
    PageFooter,
  },

  data: function() {
    return {
      technologies: json.technologies,
      isBelowHero: false,
      isMobile: false
    };
  },

  methods : {
      getImgUrl(imgName) {
        return new URL(`../assets/logos/${imgName}`, import.meta.url).href
      },
      // open a mail client to handle sending an email
      btnSendEmail: function() {
          window.open("mailto:nate@natewilliams.dev");
      },
      // update variable used to select mobile display elements
      handleResize() {
        this.isMobile = (window.innerWidth < 725 || window.innerHeight < 650 || (window.innerWidth < 920 && window.innerHeight < 720) );
      },
      // on scroll, check if we need switch the color of the buger icon from white to blue after scrolling past the hero area
      handleScroll() {
        // if hero element is not in the DOM yet, use default of 335
        if (document.getElementById("hero"))
          this.isBelowHero = window.pageYOffset > (document.getElementById("hero").clientHeight - 50)
        else
          this.isBelowHero = window.pageYOffset > 335
      },
  },

  created() {
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('scroll', this.handleScroll)
    this.handleResize()
    this.handleScroll()
  },

  destroyed() {
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handleScroll)
  }

};
</script>

<style scoped>
  .cta-btn {
    text-transform: uppercase;
    font-weight: bold;
    color: theme('colors.white');
    padding: 10px 28px 10px 28px;
    border: 1px solid theme('colors.white');
    border-radius: 25px;
  }
</style>
