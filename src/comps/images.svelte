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
        {work.title}<br/>
        {work.year}<br/>
        {work.dimensions}<br/>
        {work.materials}
    {:else}
        ...loading
    {/each}

</div>
