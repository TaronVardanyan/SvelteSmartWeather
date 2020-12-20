<script>
    import {onMount} from 'svelte';
    import {weatherData} from "../writableStore";

    let apiURL = process.env.API_URL;
    let key = process.env.API_KEY;

    onMount(async () => {
        let response = await fetch(`${apiURL}current?access_key=${key}&query=Tbilisi`);
        if (response.ok) {
            let json = await response.json();
            weatherData.set(json);
        }
    });
</script>

<main>
    {#if $weatherData}
        <button>Data is in Store</button>
    {:else}
        <h3>Loading...</h3>
    {/if}
</main>

<style>

</style>