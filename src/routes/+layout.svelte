<div>
    <slot />
</div>

<svelte:head>
    <meta property="og:image" content="https://syrkis.ams3.digitaloceanspaces.com/files-bucket/AC9B4A56-406D-4630-BDC1-FB24EF006A7E.png" />
    <meta property="og:title" content="THOR TAO HANSEN" />
    <meta property="og:url" content="https://thortaohansen.com" />
</svelte:head>

<style>

    :global(body) {
        letter-spacing: 0.02em;
        font-size: 1em;
        font-family: 'Times New Roman';
        line-height: 1.5em;
    }

    :global(a) { text-decoration: none; color: black; line-height: 2.5em; }
    :global(h1) { padding-bottom: 40px; }
    :global(h1, h2, h3) { font-weight: normal }
    :global(h2, h3) { padding-left: 20px; }
    :global(h2) { font-size: 1.2em; }
    :global(h3) { padding-left: 40px; }
    :global(img) { max-width: 90%; max-height: 100%; height: auto; margin: auto; display: block; }
    :global(.wrapper) { height: 110vh; padding: 100px 0 50px 0; }
    :global(.list) { right: 100px; }

</style>
