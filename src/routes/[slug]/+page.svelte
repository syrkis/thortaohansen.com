<script lang="ts">
	import type { PageData } from './$types';

	import Post from '$lib/comps/post.svelte';

	export let data: PageData;
</script>

<div>
	<Post data={data.body} />
</div>
