<script>
    let routes = [
        {'url': 'toes', 'title': 'Toes'},
        {'url': 'seven', 'title': 'Seven sages laid its foundations'},
        {'url': 'sun', 'title': 'The sun hitches up her skirt for Utnapishtim'},
        {'url': 'garnitures', 'title': 'Garnitures for temple or house'},
        {'url': 'lilt', 'title': 'Lilt Series'},
        {'url': 's_90_3', 'title': 'S 90 3'},
        {'url': '1UU', 'title': '1UU'},
        {'url': 'other', 'title': 'other'},
        {'url': 'contact', 'title': 'Contact'},
    ];

    let texts = [
        {'url': 'kabul', 'title': 'Fall of Kabul (Ode to a battlespace)'}
    ]
    
    let films = [
        {'url': 'IHw57AAbiVg', 'title': 'Tonight with Zachary Khan 27/09/1463AH-2044AD'}
    ]
</script>

<main>
    <h1>Thor Tao Hansen</h1>

    <h2>Texts</h2>
    <div class='list'>
        {#each texts as text}
            <a href="/{text.url}">
                {text.title}
            </a>
            <br/>
        {/each}
    </div>

    <h2>Films</h2>
    <div class='list'>
        {#each films as film}
            <a href="https://youtu.be/{film.url}" target="_blank">
                {film.title}
            </a>
            <br/>
        {/each}
    </div>

    <h2>Paintings</h2>
    <div class='list'>
        {#each routes as route}
            <a href="/{route.url}">
                {route.title}
            </a>
            <br/>
        {/each}
    </div>

</main>
