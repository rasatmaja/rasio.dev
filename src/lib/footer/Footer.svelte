<script>
    import SocialMedia from '$lib/social/Social.svelte';
    var year = new Date().getFullYear();
</script>
<footer class="absolute w-full bottom-0 py-4 border-t-2 text-gray-500 text-sm mt-20">
    <div class="md:max-w-2xl mx-4 md:mx-auto items-center flex justify-between">
        <p>© { year } Rasio Atmaja. All rights reserved.</p>
        <SocialMedia/>
    </div>
    
</footer>