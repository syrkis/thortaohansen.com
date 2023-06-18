<script>
    import Text from '$lib/comps/text.svelte';
    import Painting from '$lib/comps/painting.svelte';
    export let data;
</script>

<div>
    {#if data.type === 'text'}
        <Text data={data} />
    {:else if data.type === 'painting'}
        <Painting data={data} />
    {:else}
        <p>Something went wrong</p>
    {/if}
</div>