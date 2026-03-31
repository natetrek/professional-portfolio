<script>
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";

    let { isMobile = $bindable(false), isBelowHero = $bindable(false) } =
        $props();

    let isOpen = $state(false);

    function scrollToTop() {
        isOpen = false;
        if (browser) {
            window.scrollTo(0, 0);
        }
    }

    function handleNav(e, path) {
        e.preventDefault();
        scrollToTop();
        goto(path);
    }

    function toggleBurger() {
        isOpen = !isOpen;
    }
</script>

{#if isMobile}
    <!-- Mobile nav -->
    <div class="top-0 left-0 z-40 fixed w-full bg-white">
        <!-- include logo on top nav for all mobile screen pages -->
        <div
            class="container-inner flex flex-wrap justify-between items-center mx-auto py-8"
        >
            <div>
                <a href="/" onclick={(e) => handleNav(e, "/")}>
                    <img
                        src="/img/nate-williams-logo-180.svg"
                        alt="nate-williams-logo"
                        width="180"
                    />
                </a>
            </div>
        </div>
        <!-- burger -->
        <div class={!isOpen ? "absolute right-0 top-0 p-8" : "hidden"}>
            <button
                type="button"
                onclick={toggleBurger}
                class="flex items-center"
                aria-label="Open navigation menu"
            >
                <svg
                    class="h-6 w-6 fill-heroblue"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <!-- right nav open -->
        <div
            class="nav-btn-container h-screen w-52 lg:w-60 py-8 bg-gray-800/70"
            class:hidden={!isOpen}
            class:absolute={isOpen}
            class:right-0={isOpen}
            class:top-0={isOpen}
        >
            <!-- close (x) -->
            <div class="flex justify-end lg:pb-2 pr-7">
                <button
                    type="button"
                    onclick={toggleBurger}
                    aria-label="Close navigation menu"
                >
                    <svg
                        class="h-7 w-7 fill-white"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                        />
                    </svg>
                </button>
            </div>
            <ul>
                <li>
                    <a href="/" onclick={(e) => handleNav(e, "/")}>
                        <div class="nav-btn text-2xl pl-6 py-3 lg:py-4">
                            Home
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/work" onclick={(e) => handleNav(e, "/work")}>
                        <div class="nav-btn text-2xl pl-6 py-3 lg:py-4">
                            Work
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/about" onclick={(e) => handleNav(e, "/about")}>
                        <div class="nav-btn text-2xl pl-6 py-3 lg:py-4">
                            About
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
{:else}
    <!-- non-Mobile nav -->
    <div
        class="top-0 left-0 z-40 fixed w-full nav-header"
        class:nav-below-hero={isBelowHero}
    >
        <div>
            <ul class="flex justify-end pr-6">
                <li>
                    <a href="/" onclick={(e) => handleNav(e, "/")}>
                        <div class="nav-btn text-lg px-4 py-6">Home</div>
                    </a>
                </li>
                <li>
                    <a href="/work" onclick={(e) => handleNav(e, "/work")}>
                        <div class="nav-btn text-lg px-4 py-6">Work</div>
                    </a>
                </li>
                <li>
                    <a href="/about" onclick={(e) => handleNav(e, "/about")}>
                        <div class="nav-btn text-lg px-4 py-6">About</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
{/if}

<style>
    .nav-btn {
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.025em;
        color: white;
    }
    .nav-btn:hover {
        background-color: rgb(0, 0, 0, 0.3);
    }

    .nav-header {
        background-color: transparent;
    }

    .nav-header.nav-below-hero {
        background-color: rgba(0, 0, 0, 0.4);
    }
</style>
