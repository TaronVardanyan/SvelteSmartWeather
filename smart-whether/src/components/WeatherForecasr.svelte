<script>
    import {onMount} from "svelte";
    import {weatherForecastData} from "../writableStore";
    import {fly, fade} from 'svelte/transition';
    import {DoubleBounce} from 'svelte-loading-spinners'

    const forecastAPIURL = process.env.API_FORECAST_URL;
    const forecastAPIKey = process.env.API_FORECAST_KEY;
    let isLoading = false;

    onMount(async () => {
        let response = await fetch(`${forecastAPIURL}?q=Yerevan&appid=${forecastAPIKey}`);
        if (response.ok) {
            let json = await response.json();
            weatherForecastData.set(json);
            console.log(json, "REsp");
        }
    });
</script>

<main class="main_card_container">
    {#if $weatherForecastData}
        <ul
                in:fade
                out:fade
        >
            {#each $weatherForecastData.list as dayItem (dayItem.dt)}
                <li></li>
            {/each}
        </ul>
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    background: linear-gradient(135deg, #1f4e69 0, #164058 100%);
    position: relative;

    ul {
      margin: 5%;
      list-style: none;
      padding-left: 0;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 2vw;

      li {
        width: 16vw;
        height: 18vw;
        border: 1px solid red;
        border-radius: 0.3vw;
      }
    }

    .loading {
      position: absolute;
    }
  }
</style>