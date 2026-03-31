<script lang="ts">
    // import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
    import "../app.css";
</script>

<svelte:head>
    <link rel="icon" href="/favicon.png" />
    <link rel="image_src" href="http://natewilliams.dev/favicon.png" />
    <title>Nate Williams | Professional Portfolio</title>
    <meta
        name="description"
        content="Data engineer who loves innovative tech, large-scale art and software startups."
    />
    <link rel="canonical" href="https://natewilliams.dev" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://natewilliams.dev/" />
    <meta
        property="og:title"
        content="Nate Williams | Professional Portfolio"
    />
    <meta
        property="og:description"
        content="Data engineer who loves innovative tech, large-scale art and software startups."
    />
    <meta
        property="og:image"
        content="http://natewilliams.dev/static/trekking-in-mountains.png"
    />

    <meta itemprop="name" content="Nate Williams | Professional Portfolio" />
    <meta itemprop="url" content="https://natewilliams.dev/" />
    <meta
        itemprop="description"
        content="Data engineer who loves innovative tech, large-scale art and software startups."
    />
    <meta
        itemprop="thumbnailUrl"
        content="http://natewilliams.dev/favicon.png"
    />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://natewilliams.dev/" />
    <meta
        property="twitter:title"
        content="Nate Williams | Professional Portfolio"
    />
    <meta
        property="twitter:description"
        content="Data engineer who loves innovative tech, large-scale art and software startups."
    />
    <meta
        property="twitter:image"
        content="http://natewilliams.dev/static/trekking-in-mountains.png"
    />

    <meta name="robots" content="index, follow" />
</svelte:head>

{@render children()}
