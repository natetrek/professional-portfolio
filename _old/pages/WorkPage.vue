<template>

    <!-- Nav control -->
    <PageHeader :isMobile="isMobile" :isBelowHero="isBelowHero" />

    <!-- Hero area -->
    <div id="hero" class="flex items-center text-white bg-[#6facf2] w-full md:h-[450px]" :class="isMobile ? 'pt-24 pb-4': 'py-0'">
      <div class="container-inner flex flex-col sm:flex-row justify-left items-center py-8 mx-auto">
        <div class="w-full sm:w-3/5 text-center sm:text-left self-center space-y-8 sm:pr-8">
          <div class="text-3xl lg:text-4xl font-bold uppercase">Work</div>
          <div class="text-2xl leading-10">Highlights from the enterprise software startups I helped build</div>
        </div>
        <div class="mt-8 sm:mt-0">
          <img src="../assets/rocket-in-clouds.svg" width="275" alt="rocket taking off through the clouds" class="mx-auto sm:mx-0 drop-shadow-xl">
        </div>
      </div>
    </div>

    <!-- Intro -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-12">
        <div class="prose max-w-none space-y-4 pt-4">
          <div>Welcome to a brief tour of my startup experience.</div>
          <div>
            I led product development and kept customers happy at three enterprise software startups:
            <router-link to="/work#flexio">Flex.io</router-link>,
            <router-link to="/work#goldprairie">Gold Prairie</router-link>, and
            <router-link to="/work#kirix">Kirix</router-link>.
          </div>
          <div>Some say building a startup is like trying to assemble an airplane while you're flying it, but I think it's more like shooting the rapids on a surfboard. Here are some highlights from this journey.</div>
        </div>
    </div>

    <!-- Flex.io summary -->
    <div id="flexio"></div>
    <div class="container-inner flex flex-col md:flex-row mx-auto py-8 bg-stone-100">
      <div class="basis-1/3 flex justify-center items-center pb-6 md:pb-0">
        <a href="https://flexio.natewilliams.dev/" target="_blank">
          <img src="../assets/flexio-logo.png" alt="Flex.io logo" class="w-4/5 md:w-full mx-auto">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Flex.io</div>
          <div>#NoCode platform for delivering data from cloud apps to spreadsheets.</div>
          <div>Launched at PyCon Startup Row in 2017 and operated through 2020.</div>
        </div>
      </div>
    </div>

    <!-- Flex.io details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://flexio.natewilliams.dev/" target="_blank">
          <img  src="../assets/flexio-work-01.png" alt="Flex.io website (archive)" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-12">Flex.io website (archive)</div>
        <a href="https://youtu.be/y9PYtsVnpHk" target="_blank">
          <img  src="../assets/flexio-work-02.png" alt="Flex.io product demo video" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm">Product demo video</div>
      </div>
      <div class="basis-1/2 mx-2 pb-8">
        <div class="prose max-w-none space-y-4">
          <div class="font-bold">What I did at Flex.io</div>
          <div>Flex.io was a cloud service for integrating data from Web apps directly into Microsoft Excel and Google Sheets. It gave spreadsheet users a way to get live, refreshable data from the cloud without having to write code or go through an IT project.</div>
          <div>I led the product development team, focusing on user experience (UX) and product-market fit.</div>
          <div>With the team, I also built a <a href="https://flexio.natewilliams.dev/explore/" target="_blank">product showcase</a> and <a href="https://flexio.natewilliams.dev/integrations/" target="_blank">spreadsheet template portal</a> for key cloud integrations, including BigCommerce, Crunchbase, HubSpot, Intercom, and Shopify.</div>
          <div class="font-bold pt-4">Highlights</div>
          <div>Flex.io combined a number of technologies that were completely new at the time, from serverless, API-driven data feeds to new features in Excel. This provided some memorable moments:</div>
          <ul class="space-y-4 pl-8">
            <li>Demoing an early version with serverless data feeds and a CLI at <a href="https://us.pycon.org/2017/events/startup_row/" target="_blank">PyCon Startup Row</a></li>
            <li>Working as an early test partner with the Microsoft Office product team to leverage their new <a href="https://techcommunity.microsoft.com/t5/excel-blog/preview-of-dynamic-arrays-in-excel/ba-p/252944" target="_blank">Dynamic Arrays feature</a> in Excel</li>
            <li>Collaborating on creating new services with forward-thinking customers, like <a href="https://flexio.natewilliams.dev/crunchbase/" target="_blank">Crunchbase</a></li>
          </ul>
        </div>
      </div>
      <!-- Display images at bottom on mobile -->
      <div v-if="isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://flexio.natewilliams.dev/" target="_blank">
          <img  src="../assets/flexio-work-01.png" alt="Flex.io website (archive)" class="w-5/6 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-10">Flex.io website (archive)</div>
        <a href="https://youtu.be/y9PYtsVnpHk" target="_blank">
          <img  src="../assets/flexio-work-02.png" alt="Flex.io product demo video" class="w-5/6 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-10">Product demo video</div>
      </div>
    </div>

    <!-- Gold Prairie summary -->
    <div id="goldprairie" class="container-inner flex flex-col md:flex-row mx-auto py-8 bg-stone-100">
      <div class="basis-1/3 flex justify-center items-center pb-6 md:pb-0">
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">
          <img  src="../assets/gp-logo.png" alt="Gold Prairie logo" class="w-3/5 md:w-3/4 mx-auto">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Gold Prairie</div>
          <div>Enterprise SaaS solution for identifying and preventing payment errors.</div>
          <div>Exited in 2019 via a private sale.</div>
        </div>
      </div>
    </div>

    <!-- Gold Prairie details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">
          <img  src="../assets/gp-work-01.png" alt="Gold Prairie home page (archive)" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-12">Gold Prairie home page (archive)</div>
        <a href="https://www.crunchbase.com/organization/gold-prairie" target="_blank">
          <img  src="../assets/gp-work-02.png" alt="Gold Prairie company profile on Crunchbase" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-12">Company profile on Crunchbase</div>
      </div>
      <div class="basis-1/2 mx-2 pb-8">
        <div class="prose max-w-none space-y-4">
          <div class="font-bold">What I did at Gold Prairie</div>
          <div>Gold Prairie was a <a href="https://www.investopedia.com/terms/f/fintech.asp" target="_blank">Fintech solution</a> for identifying and preventing payment errors, such as duplicate payments and missed discounts. It operated as an automated, internal financial control for accounting staff at large organizations.</div>
          <div>I led product development and managed all aspects of the product lifecycle from initial market validation to delivering the solution and building customer relationships.</div>
          <div>After 10+ years of growing the company, including raising a small investment round, we successfully exited via a private sale in 2019.</div>
          <div class="font-bold pt-4">Highlights</div>
          <div>Gold Prairie delivered great results and this led to many long-term relationships with our customers (5+ years). Additional things I'm proud of include:</div>
          <ul class="space-y-4 pl-8">
            <li>Deploying the solution at 40+ enterprise customers, including
              <a href="https://www.astellas.com/en/" target="_blank">Astellas Pharma</a>,
              <a href="https://www.redcross.org/" target="_blank">American Red Cross</a>,
              <a href="https://www.condenast.com/" target="_blank">Condé Nast</a>,
              <a href="https://www.jcpenney.com/" target="_blank">JC Penney</a>, and
             <a href="https://www.medline.com/" target="_blank">Medline Industries</a></li>
            <li>Cutting the timeframe for recovering funds from 1-2 years to less than a month</li>
            <li>Generating an average of $2 million annual savings per customer</li>
          </ul>
        </div>
      </div>
      <!-- Display images at bottom on mobile -->
      <div v-if="isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://goldprairie.natewilliams.dev/" target="_blank">
          <img  src="../assets/gp-work-01.png" alt="Gold Prairie home page (archive)" class="w-5/6 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-10">Gold Prairie home page (archive)</div>
        <a href="https://www.crunchbase.com/organization/gold-prairie" target="_blank">
          <img  src="../assets/gp-work-02.png" alt="Gold Prairie company profile on Crunchbase" class="w-5/6 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-10">Company profile on Crunchbase</div>
      </div>
    </div>


    <!-- Kirix summary -->
    <div id="kirix" class="container-inner flex flex-col md:flex-row mx-auto py-8 bg-stone-100">
      <div class="basis-1/3 flex justify-center items-center pb-6 md:pb-0">
        <a href="https://www.kirix.com/" target="_blank">
          <img  src="../assets/kirix-logo.png" alt="Kirix logo" class="w-3/5 md:w-3/4 mx-auto">
        </a>
      </div>
      <div class="basis-2/3">
        <div class="space-y-2">
          <div class="text-xl font-bold">Kirix</div>
          <div>Productivity application for data preparation and ad hoc data analysis.</div>
          <div>Awarded “Best Productivity Application” at LinuxWorld Boston 2005.</div>
        </div>
      </div>
    </div>

    <!-- Kirix details -->
    <div class="container-inner flex flex-col md:flex-row mx-2 md:mx-auto py-8 md:py-12">
      <div v-if="!isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://youtu.be/3pA-W63oJYU" target="_blank">
          <img  src="../assets/kirix-work-01.png" alt="Kirix product demo video" class="w-4/5 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-8">Product demo video</div>
      </div>
      <div class="basis-1/2 mx-2 pb-8">
        <div class="prose max-w-none space-y-4">
          <div class="font-bold">What I did at Kirix</div>
          <div>Kirix was an <a href="https://en.wikipedia.org/wiki/Kirix_Strata" target="_blank">award-winning productivity tool</a> for transforming, cleaning, and analyzing data. It also incorporated a built-in web browser for opening and working with CSV files on the web.</div>
          <div>Kirix was a team effort by a small group of founders. I focused primarily on product strategy, product development, and marketing.</div>
          <div class="font-bold pt-4">Highlights</div>
          <div>Kirix garnered media attention and impressed a lot of people, but in many ways it was ahead of its time. We were pioneering data preparation before that became its own product category. Some highlights include:</div>
          <ul class="space-y-4 pl-8">
            <li><a href="https://www.idg.co.uk/news/winners-of-product-excellence-awards-announced-at-linuxworld-conference-idg-world-expo-and-linuxworld-magazine-reward-product-and-service-innovation/" target="_blank">Winning the Product Excellence Award</a> at LinuxWorld Boston 2005 for the “Best Desktop-Productivity-Business Application,” beating Sun Microsystems’s StarOffice</li>
            <li>Generating media coverage from
              <a href="https://www.infoworld.com/article/2643790/kirix-data-base-app-debuts.html" target="_blank">InfoWorld</a>,
              <a href="https://www.theregister.com/2007/08/07/kirix_browser_database/" target="_blank">The Register</a>,
              <a href="https://web.archive.org/web/20110522081406/http://blogs.computerworld.com/kirix_data_browser?rec=1" target="_blank">Computerworld</a>,
              and other tech news sources</li>
            <li>Delivering a unique, innovative data analytic feature set, including dynamic calculations across 100+ million records, linking data sets, and browsing Web-based data</li>
          </ul>
        </div>
      </div>
      <!-- Display images at bottom on mobile -->
      <div v-if="isMobile" class="basis-1/2 space-y-6 text-center mx-4">
        <a href="https://youtu.be/3pA-W63oJYU" target="_blank">
          <img  src="../assets/kirix-work-01.png" alt="Kirix product demo video" class="w-5/6 mx-auto border border-gray-300 shadow-lg hover:scale-105">
        </a>
        <div class="text-sm pb-10">Product demo video</div>
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

export default {
  name: "BaseAbout",

  components: {
    SocialMediaLinks,
    PageHeader,
    PageFooter,
  },

  data: function() {
    return {
      isBelowHero: false,
      isMobile: false,
    };
  },

  methods : {
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

