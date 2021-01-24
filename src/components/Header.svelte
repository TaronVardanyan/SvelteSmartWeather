<script>
    import {link} from "svelte-routing";
</script>

<header>
    <h3>Smart Weather</h3>
    <div class="navigation_sect">
        <nav>
            <a href="/" use:link>Home</a>
            <a href="forecast" use:link>Forecast weather for 3 days</a>
        </nav>
        <img src="images/svelte-icon.svg" alt="svelte-icon">
    </div>
</header>

<style type="text/scss">
  header {
    width: 100%;
    background: orangered;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
    box-shadow: 0 0 10px red;

    h3 {
      color: white;
      margin-left: 3vw;
      white-space: nowrap;
      font-size: 1.4vw;
      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2.2vw;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        font-size: 3.2vw;
      }

      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 3.5vw;
      }
    }

    img {
      width: 3vw;
      margin: 3vw;

      @media (min-width: 320px) and (max-width: 480px) {
        width: 4.5vw;
      }
    }

    .navigation_sect {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      nav {
        a {
          color: white;
          font-weight: bold;
          text-decoration: none;
          white-space: nowrap;
          cursor: pointer;
          font-size: 1.4vw;

          @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 2.2vw;
          }

          @media (min-width: 481px) and (max-width: 767px) {
            font-size: 3.2vw;
          }

          @media (min-width: 320px) and (max-width: 480px) {
            font-size: 3vw;
          }

          &:first-child {
            margin-right: 2vw;
          }
        }
      }
    }
  }
</style>