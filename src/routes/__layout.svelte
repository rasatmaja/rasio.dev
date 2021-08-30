<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import "../app.postcss";
</script>

<Header/>
<main class="md:max-w-2xl mx-4 md:mx-auto text-primary">	
	<slot></slot>
</main>
<Footer/>