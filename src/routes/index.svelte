<script context="module">
	export const prerender = true;
</script>

<script>
	import Experience from '$lib/section/Experience.svelte';
	import EndSection from '$lib/section/EndSection.svelte';
</script>

<svelte:head>
	<title>Rasio Atmaja | Home</title>
</svelte:head>

<section class="h-2/6 my-20 flex flex-col">
	<div class="my-5 w-max text-5xl p-5 bg-red-100 rounded-full">🤠</div>
	<div>
		<h2 class="text-lg font-medium tracking-wide text-secondary">HELLO THERE</h2>
		<h1 class="text-5xl font-black tracking-tight my-2">I'm Rasio Atmaja.</h1>
		<h3 class="text-lg font-light text-gray-500">I'm a software engineer, Researcher</h3>
	</div>
	
</section>

<Experience/>
<EndSection/>