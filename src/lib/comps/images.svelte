<script>
    
    import Image from './image.svelte'; 

    import axios from 'axios';
    import { onMount } from 'svelte';

    export let project;
    let works = [];

    onMount(async () => {
        let data = await fetch(`dirs/${project.toLowerCase()}.json`).then(x => x.json());
        works = data.works;
        console.log(works);
    });

</script>

<div>

    {#each works as work, i}
        <Image url='https://syrkis.ams3.digitaloceanspaces.com/thor/{project}/{project}_{i}.jpg' />
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
    {:else}
        ...loading
    {/each}

</div>
