<script>
    export let data;
    import {fade, fly} from 'svelte/transition';
    import {createEventDispatcher} from "svelte";

    const updateData = createEventDispatcher();

    function handleUpdate() {
        updateData('message');
    }
</script>

<div
        class="card"
        in:fade
        out:fade
>
    <div class="location">
        {#if data.current.is_day === "yes"}
            <img src="images/sun.svg" alt="day"/>
        {:else}
            <img src="images/moon.svg" alt="night"/>
        {/if}
        <span>{`${data.location.country}, ${data.location.region}`}</span>
        <img
                src="images/loop.svg"
                on:click={handleUpdate}
                class="refresh"
                alt="update data"
        />
    </div>
    <div class="data_container">
        <div class="weather">
            <span>{data.current.weather_descriptions}</span>
        </div>
        <div class="temperature">
            {data.current.temperature}°c
        </div>
        <div class="more_details">
            <span>Wind: {data.current.wind_speed} kmph</span>
            <span>Precip: {data.current.precip} mm</span>
            <span>Pressure: {data.current.pressure} mb</span>
        </div>
    </div>
</div>

<style type="text/scss">
  .card {
    width: 40%;
    border-radius: 10px;
    border: 4px solid #608094;
    background: #16394c;
    color: white;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);

    @media (min-width: 768px) and (max-width: 1024px) {
      width: 50%;
    }

    @media (min-width: 481px) and (max-width: 767px) {
      width: 70%;
    }

    @media (min-width: 320px) and (max-width: 480px) {
      width: 80%;
    }

    .location {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5vh;
      text-align: center;
      padding: 3% 2% 0 2%;
      font-size: 1.2vw;
      font-weight: bold;
      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.2vw;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        font-size: 3.5vw;
      }

      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 3.8vw;
      }

      img {
        width: 2vw;
        @media (min-width: 768px) and (max-width: 1024px) {
          width: 3vw;
        }

        @media (min-width: 481px) and (max-width: 767px) {
          width: 5vw;
        }

        @media (min-width: 320px) and (max-width: 480px) {
          width: 5vw;
        }
      }

      .refresh {
        cursor: pointer;
      }
    }

    .data_container {
      display: flex;
      justify-content: center;
      align-items: center;

      div {
        flex: 1;
        min-height: 20vh;
      }

      .temperature {
        font-size: 3.2vw;
        font-weight: bold;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (min-width: 768px) and (max-width: 1024px) {
          font-size: 4.5vw;
        }

        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 7.5vw;
        }

        @media (min-width: 320px) and (max-width: 480px) {
          font-size: 7.5vw;
        }
      }

      .more_details {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        span {
          white-space: nowrap;
          font-size: 1.4vw;
          line-height: 1.4;

          @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 1.8vw;
          }

          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 2.6vw;
            line-height: 1.6;
          }

          @media (min-width: 320px) and (max-width: 480px) {
            font-size: 2.9vw;
            line-height: 1.6;
          }
        }
      }

      .weather {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1.6vw;
        @media (min-width: 768px) and (max-width: 1024px) {
          font-size: 2vw;
        }

        @media (min-width: 481px) and (max-width: 767px) {
          font-size: 2.6vw;
        }

        @media (min-width: 320px) and (max-width: 480px) {
          font-size: 3vw;
        }
      }
    }
  }
</style>