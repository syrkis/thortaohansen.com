<script lang="ts">
    export let data;
</script>

<div>
    {#each data.works as work}
        <img src='images/{work.image}' alt={work.title} />
        {work.title}<br/>
        {work.year}<br/>
        {work.dimensions}<br/>
        {work.materials}
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