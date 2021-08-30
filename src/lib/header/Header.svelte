<script>
	import { page } from '$app/stores';
</script>

<header class="sticky top-0 py-2 mb-20 border-b-2 backdrop-filter backdrop-blur-lg bg-opacity-10 firefox:bg-opacity-90">
	<nav class="md:max-w-2xl mx-4 md:mx-auto ">
		<ul class="flex justify-between items-center font-medium text-gray-600 text-base">
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li><a sveltekit:prefetch href="/"> <img src="/logo.svg" alt="Rasio Ganang Atmaja" width="50" height="50"></a></li>
			<li class:active={$page.path === '/portfolio'}><a sveltekit:prefetch href="/portfolio">Portfolio</a></li>
			<li><a href="https://links.rasio.dev">Links</a></li>
		</ul>
	</nav>
</header>

<style>
	li {
		@apply px-5;
		@apply py-1;
	}
	.active{
		@apply bg-primary;
		@apply text-white;
		@apply rounded-lg;
	}
</style>