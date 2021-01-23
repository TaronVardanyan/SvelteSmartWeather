<script>
    import {onMount} from 'svelte';
    import {weatherData} from "../writableStore";
    import MainCard from "./MainCard.svelte";
    import {fly} from 'svelte/transition';
    import { DoubleBounce } from 'svelte-loading-spinners'

    const apiURL = process.env.API_URL;
    const key = process.env.API_KEY;
    let isLoading = false;

    onMount(async () => {
        let response = await fetch(`${apiURL}current?access_key=${key}&query=Yerevan`);
        if (response.ok) {
            let json = await response.json();
            weatherData.set(json);
        }
    });

    async function updateCardData() {
        isLoading = true;
        let response = await fetch(`${apiURL}current?access_key=${key}&query=Yerevan`);
        if (response.ok) {
            let json = await response.json();
            weatherData.set(json);
            setTimeout(() => {
                isLoading = false;
            }, 3000);
        }
    }
</script>

<main class="main_card_container">
    {#if ($weatherData && !isLoading)}
        <MainCard
                data={$weatherData}
                on:message={updateCardData}
        />
    {:else}
        <div
                in:fly="{{delay: 500}}"
                class="loading"
        >
            <DoubleBounce size="60" color="#FF3E00" unit="px"/>
        </div>
    {/if}
</main>

<style type="text/scss">
  .main_card_container {
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    position: relative;

    .loading {
      position: absolute;
    }
  }
</style>