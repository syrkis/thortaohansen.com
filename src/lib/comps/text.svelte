<script lang="ts">
    import type { PageData } from './$types';

    import Markdown from 'svelte-exmarkdown';

    export let data: PageData;

    let md = data.body;
    
    let date = new Date(data.date);
    data.date = date.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

</script>

<div>
    <div class='text'>
    <h1>
        {data.title}
    </h1>
    <p>{data.date}</p>
        <p>Thor Tao Hansen</p>
    <p><Markdown {md} /></p>
    </div>
</div>

<style>
    .text {
        font-size: 1.2em;
        line-height: 1.5em;
        width: 95%;
        max-width: 600px;
        margin: auto;
    }
</style>
