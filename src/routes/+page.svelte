<script>
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import SocialMediaLinks from '$lib/components/SocialMediaLinks.svelte';
  import ImageCarousel from '$lib/components/ImageCarousel.svelte';
  import PageHeader from '$lib/components/PageHeader.svelte';
  import PageFooter from '$lib/components/PageFooter.svelte';
  import carouselData from '../data/home-carousel-data.json';
  
  let isMobile = $state(false);
  
  function btnSendEmail() {
    if (browser) {
      window.open('mailto:nate@natewilliams.dev');
    }
  }
  
  function handleResize() {
    if (browser) {
      isMobile = (window.innerWidth < 725 || window.innerHeight < 650 || (window.innerWidth < 920 && window.innerHeight < 720));
    }
  }
  
  onMount(() => {
    if (browser) {
      window.addEventListener('resize', handleResize);
      handleResize();
    }
  });
  
  onDestroy(() => {
    if (browser) {
      window.removeEventListener('resize', handleResize);
    }
  });
</script>

{#if !isMobile}
  <!-- Non-mobile display -->
  <div class="flex">
    <PageHeader bind:isMobile isBelowHero={false} />
    <div class="flex flex-col basis-2/5 h-screen px-4 pt-12 pb-20">
      <div class="container-inner flex flex-col grow mx-auto">
        <div class="basis-1/5 pb-8 lg:pb-12">
          <img src="/img/nate-williams-logo-200.svg" alt="nate-williams-logo" width="200" />
        </div>
        <div class="basis-4/5">
          <div class="text-3xl xl:text-4xl font-bold uppercase text-textblue space-y-4 pb-10">
            <p>Startup founder</p>
            <p>Developer &</p>
            <p>Designer</p>
          </div>
          <div class="prose pb-10">
            Web software entrepreneur who loves innovative tech, large-scale art and backcountry treks.
            Formerly Co-founder & CEO at <a href="https://flexio.natewilliams.dev" target="_blank">Flex.io</a>
            and <a href="https://goldprairie.natewilliams.dev" target="_blank">Gold Prairie</a>. Passionate about community, conservation, and code.
          </div>
          <SocialMediaLinks isHome={true} class="pb-12" />
          <button class="section-btn-lg hover:bg-blue-400 hover:bg-opacity-20 pb-10" onclick={btnSendEmail}>Get in touch</button>
          <div class="footer-container">
            <PageFooter class="absolute flex bottom-0 mb-4" />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col basis-3/5">
      <ImageCarousel images={carouselData.images} content={carouselData.content} bind:isMobile={isMobile} />
    </div>
  </div>
{:else}
  <!-- Mobile display -->
  <div>
    <PageHeader bind:isMobile isBelowHero={false} />
    <div class="container-inner mx-auto py-8">
      <div>
        <div class="text-3xl sm:text-4xl font-bold uppercase text-textblue space-y-4 pt-20 pb-10">
          <p>Startup founder</p>
          <p>Developer &</p>
          <p>Designer</p>
        </div>
        <div class="prose pb-8">
          Web software entrepreneur who loves innovative tech, large-scale art and backcountry treks.
          Formerly Co-founder & CEO at <a href="https://flexio.natewilliams.dev" target="_blank">Flex.io</a>
          and <a href="https://goldprairie.natewilliams.dev" target="_blank">Gold Prairie</a>. Passionate about community, conservation, and code.
        </div>
        <div class="flex justify-center">
          <SocialMediaLinks isHome={true} class="pb-10" />
        </div>
        <div class="flex justify-center">
          <button class="section-btn-sm hover:bg-blue-400 hover:bg-opacity-20 pb-8" onclick={btnSendEmail}>Get in touch</button>
        </div>
      </div>
    </div>
    <div>
      <ImageCarousel images={carouselData.images} content={carouselData.content} bind:isMobile={isMobile} />
    </div>
    <div class="h-16">
      <PageFooter class="flex justify-center items-center h-full mx-auto" />
    </div>
  </div>
{/if}

<style>
  .section-btn-lg {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--color-textblue);
    padding: 10px 28px 10px 28px;
    border: 1px solid var(--color-textblue);
    border-radius: 25px;
  }
  .section-btn-sm {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: var(--color-textblue);
    padding: 10px 28px 10px 28px;
    border: 1px solid var(--color-textblue);
    border-radius: 25px;
  }

  .footer-container {
    display: none;
  }

  @media (min-height: 720px) {
    .footer-container {
      display: flex;
    }
  }
</style>
