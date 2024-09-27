<script>
	import SEO from '$components/primary/SEO.svelte';
	export let data = {};
</script>

<SEO {...data.metadata} />

<section>
	<svelte:component this={data.content} />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1rem;
	}
</style>
