<script>
    let routes = [
        {'url': 'toes', 'title': 'Toes'},
        {'url': 'seven', 'title': 'Seven sages laid its foundations'},
        {'url': 'sun', 'title': 'The sun hitches up her skirt for Utnapishtim'},
        {'url': 'garnitures', 'title': 'Garnitures for temple or house'},
        {'url': 'lilt', 'title': 'Lilt Series'},
        {'url': 's_90_3', 'title': 'S 90 3'},
        {'url': '1UU', 'title': '1UU'},
        {'url': 'other', 'title': 'other'}
    ];

    let texts = [
        {'url': 'Fall%20of%20Kabul%20(Ode%20to%20a%20battlespace).pdf', 'title': 'Fall of Kabul (Ode to a battlespace)'}
    ]
    
    let films = [
        {'url': 'IHw57AAbiVg', 'title': 'Tonight with Zachary Khan 27/09/1463AH-2044AD'}
    ]
</script>

<main>
    <h1>Thor Tao Hanen</h1>
    <div class='list'>
    <h2>Text</h2>
    <div style="">
        {#each texts as text}
        <div class='item'>
            <a href="https://syrkis.ams3.cdn.digitaloceanspaces.com/thor/texts/{text.url}" target="_blank">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text.title}
            </a>
        </div>
        {/each}
    </div>

    <h2>Film</h2>
    <div class='list'>
        {#each films as film}
        <div class='item'>
            <a href="https://youtu.be/{film.url}" target="_blank">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{film.title}
            </a>
        </div>
        {/each}
    </div>

    <h2>Painting</h2>
    <div class='list'>
        {#each routes as route}
        <div class='item'>
            <a href="/{route.url}">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{route.title}
            </a>
        </div>
        {/each}
    </div>

    <hr style="margin: 1rem 0; color: #000; background-color: #000; height: 1px; border: none; width: 150px;" />

    <a href="/contact">
        Contact
    </a>
    <br/>
    <a href="/cv">
        CV
    </a>
    <br/>
    </div>

</main>

<style>
    .item {
        padding: 0;
    }
</style>