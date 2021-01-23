<script>
    import {onMount} from "svelte";
    import {weatherForecastData} from "../writableStore";
    import {fly, fade} from 'svelte/transition';
    import {DoubleBounce} from 'svelte-loading-spinners'
    import moment from "moment";

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
                <li>
                    <span>
                        <img src="images/calendar.svg" alt="date">
                        {moment(dayItem.dt_txt).format("lll")}
                    </span>
                    <h2>{Math.round(dayItem.main.temp - 273.15)}°c</h2>
                    <div class="more_details">
                        <span>Wind: {dayItem.wind.speed} kmph</span>
                        <span>Weather: {dayItem.weather[0].description}</span>
                        <span>Pressure: {dayItem.main.pressure} mb</span>
                    </div>
                </li>
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
    min-height: 80vh;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex: 1;
    position: relative;

    ul {
      margin: 10vh 0;
      width: 90%;
      list-style: none;
      padding-left: 0;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 2vw;

      li {
        height: auto;
        border-radius: 0.3vw;
        border: 4px solid #608094;
        background: #16394c;
        padding: 5%;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 90%;
          color: white;
          font-weight: bold;

          img {
            width: 9%;
            margin-right: 5%;
          }
        }

        h2{
          text-align: center;
          font-size: 250%;
          color: white;
          font-weight: bold;
        }

        .more_details {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          span {
            line-height: 2.4;
          }
        }
      }
    }

    .loading {
      position: absolute;
    }
  }
</style>