<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    let { images, content, isMobile = $bindable(false) } = $props();

    let contentIdx = $state(0);
    let imgIndex = $state(1);
    let imgWidth = $state(300);
    let rotateImg = $state(null);

    function getImgUrl(idx) {
        const imgIndex = images.filter((obj) => obj.index === idx);
        const imgName = imgIndex.find((obj) => obj.width === imgWidth)?.name;
        return `/img/${imgName}`;
    }

    function getImgWidth(curWidth, curHeight) {
        let calcWidth = 300;
        if (curWidth > 600 && curHeight > 700) calcWidth = 400;
        if (curWidth > 800 && curHeight > 800) calcWidth = 500;
        if (curWidth > 1100 && curHeight > 1000) calcWidth = 600;
        if (curWidth > 1200 && curHeight > 1100) calcWidth = 700;
        if (curWidth > 1400 && curHeight > 1200) calcWidth = 800;
        return calcWidth;
    }

    function btnUpdateCarousel(idx) {
        imgIndex = idx + 1;
        contentIdx = idx;
        refreshCarousel();
    }

    function btnPrev() {
        imgIndex = imgIndex <= 1 ? 4 : imgIndex - 1;
        contentIdx = imgIndex - 1;
        refreshCarousel();
    }

    function btnNext() {
        imgIndex = imgIndex >= 4 ? 1 : imgIndex + 1;
        contentIdx = imgIndex - 1;
        refreshCarousel();
    }

    function refreshCarousel() {
        if (!browser) return;
        const container = document.getElementById("carousel-container");
        if (container) {
            let carouselWidth = container.offsetWidth;
            let carouselHeight = container.offsetHeight;
            imgWidth = getImgWidth(carouselWidth, carouselHeight);

            // update carousel background color
            container.style.backgroundColor = content[contentIdx].background;
            // update carousel image
            const img = document.getElementById("carousel-img-id");
            if (img) {
                img.src = getImgUrl(imgIndex);
            }
        }
    }

    function rotateCarousel() {
        if (!browser) return;
        rotateImg = setInterval(() => {
            if (!isMobile) {
                imgIndex = imgIndex < 4 ? imgIndex + 1 : 1;
                contentIdx = imgIndex - 1;
                refreshCarousel();
            }
        }, 20000);
    }

    onMount(() => {
        if (browser) {
            window.addEventListener("resize", refreshCarousel);
            refreshCarousel();
            rotateCarousel();
        }
    });

    onDestroy(() => {
        if (browser) {
            window.removeEventListener("resize", refreshCarousel);
            if (rotateImg) {
                clearInterval(rotateImg);
            }
        }
    });
</script>

{#if !isMobile}
    <!-- Non-mobile display -->
    <div
        id="carousel-container"
        class="carousel-image-container relative flex justify-center items-center h-screen"
    >
        <div class="absolute">
            <!-- Carousel image -->
            <div>
                <a
                    href={content[contentIdx].link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        id="carousel-img-id"
                        class="carousel-img shadow-xl"
                        width={imgWidth}
                        src={getImgUrl(imgIndex)}
                        alt={content[contentIdx].alt}
                    />
                </a>
            </div>
            <!-- Content -->
            <div id="carousel-content" class="mx-auto mt-8">
                <div class="carousel-text">
                    {content[contentIdx].headings[0]}
                </div>
                <div class="carousel-text">
                    {content[contentIdx].headings[1]}
                </div>
            </div>
        </div>
        <!-- Carousel prev & next buttons-->
        <div
            class="carousel-nav-btns absolute left-0 top-1/2 transform -translate-y-1/2"
        >
            <!-- Prev button-->
            <button
                type="button"
                onclick={btnPrev}
                class="carousel-nav"
                aria-label="Previous slide"
            >
                <svg
                    class="fill-white h-16 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
            </button>
        </div>
        <div
            class="carousel-nav-btns absolute right-0 top-1/2 transform -translate-y-1/2"
        >
            <!-- Next button-->
            <button
                type="button"
                onclick={btnNext}
                class="carousel-nav"
                aria-label="Next slide"
            >
                <svg
                    class="fill-white h-16 w-12"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
            </button>
        </div>
        <!-- Carousel image selectors-->
        <div
            id="carousel-selectors"
            class="absolute flex bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
        >
            {#each Array(4) as _, idx}
                {#if imgIndex === idx + 1}
                    <button
                        type="button"
                        onclick={() => btnUpdateCarousel(idx)}
                        class="px-1.5"
                        aria-label="Slide {idx + 1} of 4, current slide"
                        aria-current="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14px"
                            width="14px"
                            viewBox="0 0 24 24"
                            class="fill-white"
                        >
                            <path
                                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
                            />
                        </svg>
                    </button>
                {:else}
                    <button
                        type="button"
                        onclick={() => btnUpdateCarousel(idx)}
                        class="px-1.5"
                        aria-label="Go to slide {idx + 1} of 4"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="14px"
                            width="14px"
                            viewBox="0 0 24 24"
                            class="fill-slate-300"
                        >
                            <path
                                d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"
                            />
                        </svg>
                    </button>
                {/if}
            {/each}
        </div>
    </div>
{:else}
    <!-- Mobile display -->
    {#each content as item}
        <div
            class="flex justify-center items-center h-550"
            style="background-color: {item.background}"
        >
            <div class="flex flex-col">
                <div>
                    <a href={item.link} target="_blank">
                        <img
                            class="pt-6 shadow-xl"
                            width={imgWidth}
                            src={getImgUrl(item.id)}
                            alt={item.alt}
                        />
                    </a>
                </div>
                <div class="justify-left mt-6">
                    <div class="carousel-text">{item.headings[0]}</div>
                    <div class="carousel-text">{item.headings[1]}</div>
                </div>
            </div>
        </div>
    {/each}
{/if}

<style>
    .carousel-image-container:hover .carousel-nav-btns {
        display: flex;
    }

    /* only show the carousel buttons on hover */
    .carousel-image-container .carousel-nav-btns {
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
        color: white;
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
            color: white;
        }
    }

    svg {
        filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.3));
    }
</style>
