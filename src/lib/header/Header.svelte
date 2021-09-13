<script>
  import { page } from '$app/stores';
  let open = false;
</script>
<div class="sticky z-50 top-0 md:py-2 md:mb-20 border-b-2 backdrop-filter backdrop-blur-lg bg-opacity-10 firefox:bg-opacity-90">
  <div class="max-w-2xl mx-auto">
    <div class="md:hidden p-4 flex flex-row items-center justify-between">
      <a sveltekit:prefetch href="/"> <img src="/logo.svg" alt="Rasio Ganang Atmaja" width="50" height="50"></a>
      <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" on:click={() => open = !open}>
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path class="{!open ? '' : 'hidden' }" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
          <path class="{open ? '' : 'hidden' }" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
        </svg>
      </button>
    </div>
    <nav class="{ open ? 'flex' : 'hidden'} md:flex">
      <ul class="px-4 md:px-0 w-full flex flex-col md:flex-row md:justify-between md:items-center font-medium text-gray-600 text-base">
        <li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
        <li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/">About</a></li>
        <li class="hidden md:block"><a sveltekit:prefetch href="/"> <img src="/logo.svg" alt="Rasio Ganang Atmaja" width="50" height="50"></a></li>
        <li><a href="https://github.com/rasatmaja" target="_blank">Portfolio</a></li>
        <li><a href="https://links.rasio.dev" target="_blank">Links</a></li>
      </ul>
    </nav>
  </div>
</div>

<style>
  li {
	  @apply px-3;
	  @apply py-2;
	}
  @media  (min-width: 768px) {
	  li {
		  @apply px-5;
		  @apply py-1;
	  }
  }
	.active{
		@apply bg-primary;
		@apply text-white;
		@apply rounded-lg;
	}
</style>