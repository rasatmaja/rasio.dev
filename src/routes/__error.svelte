<script context="module">
	export function load({ status }) {

        if (status == 404) {
            return {
                props: {
                    status: `${status}`,
                    title: "Ooups, page not found.",
                    subtitle: "Iam sorry for the inconvenience. it looks like you're trying to access a page that has been deleted or never existed"
                }
		    };
        } else {
            return {
                props: {
                    status: `${status}`,
                    title: "Oouch, thats my bad.",
                    subtitle: "Iam sorry for the inconvenience. it looks like there is problem with server. Im not exacly sure what happenned, but my servers say something wrong.  "
                }
            };
        }
		
	}
</script>

<script>
	export let title;
    export let subtitle;
    export let status;
</script>

<div class="max-w-md mx-auto flex flex-col items-center justify-center">
    <h1 class="text-9xl text-gray-200 font-black absolute z-negative">{status}</h1>
    <h2 class="text-3xl font-extrabold">{title}</h2>
    <p>{subtitle}</p>
</div>

<style>
    
</style>