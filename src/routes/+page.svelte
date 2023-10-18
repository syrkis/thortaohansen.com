<script lang="ts">

    import type { PageData } from './$types';
    export let data: PageData;
    let texts = data.body.texts;
    let films = data.body.films;
    let paintings = data.body.paintings;
    let exhibitions = data.body.exhibitions;

</script>

<div>
    <div>
        <h1>Thor Tao Hansen</h1>
    </div>
    <div>
        <div>
            <h2>Film</h2>
            {#each films as film}
                <a href={film.link} target="_blank">
                    <div>
                        <h3>{film.title}</h3>
                    </div>  
                </a>
            {/each}
        </div>
        
        <div>
            <h2>Painting</h2>
            {#each paintings as painting}
                <a href={painting.slug}>
                    <div>
                        <h3>{painting.title}</h3>
                    </div>  
                </a>
            {/each}
        </div>

        <div>
            <h2>Exhibitions</h2>
            {#each exhibitions as exhibition}
                <a href={exhibition.slug}>
                    <div>
                        <h3>{exhibition.title}</h3>
                    </div>  
                </a>
            {/each}
        </div>
        
        <div>
            <h2>Text</h2>
            {#each texts as text}
            <a href={text.url ? text.url : text.slug}>
                <div>
                        <h3>{text.title}</h3>
                    </div>  
                </a>
            {/each}
        </div>
    </div>
    <div>
        <br>
        <a href='/contact'>
            <h2>Contact</h2>
        </a>
    </div>
</div>