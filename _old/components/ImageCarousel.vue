<template>
  <!-- Non-mobile display -->
  <div v-if="!isMobile" id="carousel-container" class="carousel-image-container relative flex justify-center items-center h-screen">
    <div class="absolute">
      <!-- Carousel image -->
      <div><a :href="content[contentIdx].link" target="_blank"><img id="carousel-img-id" class="carousel-img shadow-xl" :width="imgWidth" :src="getImgUrl(imgIndex)" :alt="content[contentIdx].alt"></a></div>
      <!-- Content -->
      <div id="carousel-content" class="mx-auto mt-8">
          <div class="carousel-text">{{ content[contentIdx].headings[0] }}</div>
          <div class="carousel-text">{{ content[contentIdx].headings[1] }}</div>
      </div>
    </div>
    <!-- Carousel prev & next buttons-->
    <div id="carousel-nav-btns" class="absolute left-0 top-1/2 transform -translate-y-1/2"> <!-- Prev button-->
      <button @click="btnPrev()" class="carousel-nav">
        <svg class="fill-white h-16 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
    </div>
    <div id="carousel-nav-btns" @click="btnNext()" class="absolute right-0 top-1/2 transform -translate-y-1/2"> <!-- Next button-->
      <button class="carousel-nav">
        <svg class="fill-white h-16 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </button>
    </div>
    <!-- Carousel image selectors-->
    <div id="carousel-selectors" class="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <div v-for="(item,idx) in new Array(4)" :key="idx">
        <button v-if="this.imgIndex==(idx+1)" @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-white"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
        </button>
        <button v-else @click="btnUpdateCarousel(idx)" v-bind:value="contentIdx" class="px-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" height="14px" width="14px" viewBox="0 0 24 24" class="fill-slate-300"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>
        </button>
      </div>
    </div>
  </div>
  <!-- Mobile display -->
  <div v-else class="flex justify-center items-center h-550" v-for="item in content" :key="item.id" :style="{'background-color': item.background}">
      <div class="flex flex-col">
        <div><a :href="item.link" target="_blank"><img class="pt-6 shadow-xl" :width="imgWidth" :src="getImgUrl(item.id)" :alt="item.alt"></a></div>
        <div class="justify-left mt-6">
            <div class="carousel-text">{{ item.headings[0] }}</div>
            <div class="carousel-text">{{ item.headings[1] }}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
    props: {
      images: {
          type: Object,
          required: true
      },
      content: {
          type: Object,
          required: true
      },
      isMobile: {
          type: Boolean,
          required: true
      }
    },

    data: function() {
      return {
          contentIdx: 0,
          imgIndex: 1,
          imgWidth: 300,
          carouselKey: 0,
          rotateImg: null,
        };
    },

    methods: {
        // get image URL for the carousel images
        getImgUrl(idx) {

          // Filter images by index; then find image with the current width and get its name
          const imgIndex = this.images.filter(obj => { return (obj.index === idx); });
          const imgName = imgIndex.find(obj => { return (obj.width === this.imgWidth); }).name;

          return new URL(`../assets/${imgName}`, import.meta.url).href
        },

        // calc the image width based on size of the carousel container; scale up as size increases
        getImgWidth(curWidth, curHeight) {
          let calcWidth = 300
          if (curWidth >  600 && curHeight >  700) calcWidth = 400
          if (curWidth >  800 && curHeight >  800) calcWidth = 500
          if (curWidth > 1100 && curHeight > 1000) calcWidth = 600
          if (curWidth > 1200 && curHeight > 1100) calcWidth = 700
          if (curWidth > 1400 && curHeight > 1200) calcWidth = 800
          return calcWidth
        },

        // update the carousel image when user clicks a carousel button
        btnUpdateCarousel(idx) {
          this.imgIndex = idx+1
          this.contentIdx = idx
          this.refreshCarousel()
        },

        // update the carousel image when user clicks the previous nav button
        btnPrev() {
        this.imgIndex = this.imgIndex <= 1 ? 4 : this.imgIndex - 1
        this.contentIdx = (this.imgIndex-1)
        this.refreshCarousel()
        },

        // update the carousel image when user clicks the next nav button
        btnNext() {
        this.imgIndex = this.imgIndex >= 4 ? 1 : this.imgIndex + 1
        this.contentIdx = (this.imgIndex-1)
        this.refreshCarousel()
        },

        // update the source & width of the carousel image based on image selected & screen size
        // carousel container is not displayed on mobile screens
        refreshCarousel() {
          if (document.getElementById("carousel-container")) {
            let carouselWidth = document.getElementById("carousel-container").offsetWidth
            let carouselHeight = document.getElementById("carousel-container").offsetHeight
            this.imgWidth = this.getImgWidth(carouselWidth, carouselHeight)

            //update carousel background color
            document.getElementById("carousel-container").style.backgroundColor = this.content[this.contentIdx].background
            //update carousel image
            document.getElementById("carousel-img-id").src = this.getImgUrl(this.imgIndex)
          }
        },

        rotateCarousel: function () {
          var carousel = this;
          const rotateImg = setInterval(function () {
            if (!this.isMobile) {
              carousel.imgIndex = (carousel.imgIndex < 4) ? carousel.imgIndex+1 : 1
              carousel.contentIdx = carousel.imgIndex - 1
              carousel.refreshCarousel()
            }
          }, 20000);
          this.rotateImg = rotateImg
        }

    },

    created() {
      // add an event listener to the window so we can switch carousel image sizes
      window.addEventListener('resize', this.refreshCarousel)
    },

    destroyed() {
        window.removeEventListener('resize', this.refreshCarousel)
    },

    mounted () {
      this.refreshCarousel()
      this.rotateCarousel()
    },

    unmounted () {
        clearInterval(this.rotateImg)
    }

}
</script>


<style scoped>

  .carousel-image-container:hover #carousel-nav-btns {
      display: flex;
  }

  /* only show the carousel buttons on hover */
  .carousel-image-container #carousel-nav-btns {
    display: none;
  }

  .carousel-img:hover {
    transform: scale(1.01);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }

  .carousel-text {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding-bottom: 8px;
    color: theme('colors.white');
  }

  /* styling for previous and next buttons in the hero image */
  .carousel-nav {
    background-color: rgba(0, 0, 0, 0.3);
    border: none;
  }
  .carousel-nav:hover {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    .carousel-text {
      color: theme('colors.white');
    }
  }

  svg {
    filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.3));
  }

</style>
