<script>
    let routes = [
        {'url': 'seven', 'title': 'Seven sages laid it\'s foundations'},
        {'url': 'sun', 'title': 'The sun hitches up her skirt for Utnapishtim'},
        {'url': 'fuzzy', 'title': 'Fuzzy is the language of creation'},
        {'url': 'garnitures', 'title': 'Garnitures for temple or house'},
        {'url': 'haben', 'title': 'Haben sie bigbag (Ecstacy of Saint Sebastian)'},
        {'url': 'lilt', 'title': 'Lilt Series'},
        {'url': 's_90_3', 'title': 'S 90 3'},
        {'url': '1UU', 'title': '1UU'},
        {'url': 'other', 'title': 'other'},
        {'url': 'contact', 'title': 'Contact'},
    ];
</script>

<main>
    <h1>Thor Tao Hansen</h1>
    {#each routes as route}
        <a href="/{route.url}">
            {route.title}
        </a>
        <br/>
    {/each}
</main>
