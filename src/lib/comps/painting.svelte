<script lang="ts">
    export let data;

    let image = data.works[0].image;
    /** image title should be title from last slasg (filename, not path). Keep format) */
    function getImagePath(image) {
        let imageFile = image.substring(image.lastIndexOf('/') + 1);
        let imagePath = `/images/${imageFile}`;
        return imagePath;
    }
</script>

<div>
    {#each data.works as work}
        <img src={getImagePath(work.image)} alt={work.title}/>
        {#if work.title}
            {work.title}<br/>
        {/if}
        {#if work.year}
            {work.year}<br/>
        {/if}
        {#if work.dimensions}
            {work.dimensions}<br/>
        {/if}
        {#if work.materials}
            {work.materials}
        {/if}
    {/each}
</div>

<style>
    img {
        max-height: 120vh;
        max-width: 90vh;
        height: 100%;
        width: 100%;
        object-fit: contain;
        margin: auto;
        display: block;
        padding: 100px 0 50px 0;
    }

</style>