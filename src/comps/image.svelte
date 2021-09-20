<script>

    export let url;
    let wide = innerWidth > innerHeight;

</script>

<div class="image">

    <img src={url}/>

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
