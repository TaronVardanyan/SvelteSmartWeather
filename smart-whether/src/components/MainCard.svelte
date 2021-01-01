<script>
    export let data;
    import {fade} from 'svelte/transition';

    console.log(data, "KKKKKK");
</script>

<div
        class="card"
        transition:fade
>
    <div class="location">
        {`${data.location.country}, ${data.location.region}`}
    </div>
    <div class="data_container">
        <div class="icon_sect"></div>
        <div class="temperature">{data.current.temperature}°c</div>
        <div class="more_details"></div>
    </div>
</div>

<style type="text/scss">
  .card {
    width: 40%;
    border-radius: 10px;
    border: 4px solid #608094;
    background: #16394c;
    color: white;

    .location {
      display: block;
      height: 5vh;
      text-align: center;
      padding-top: 3%;
      font-size: 1.2vw;
      font-weight: bold;
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
      }
    }
  }
</style>