<script>
    import {onMount} from 'svelte';
    import {weatherData} from "../writableStore";
    import MainCard from "./MainCard.svelte";

    const apiURL = process.env.API_URL;
    const key = process.env.API_KEY;

    onMount(async () => {
        let response = await fetch(`${apiURL}current?access_key=${key}&query=Yerevan`);
        if (response.ok) {
            let json = await response.json();
            weatherData.set(json);
        }
    });
</script>

<main class="main_card_container">
    {#if $weatherData}
        <MainCard
                data={$weatherData}
        />
    {:else}
        <div>Loading...</div>
    {/if}
</main>

<style>
    .main_card_container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex: 1;
        background: lightpink;
    }
</style>