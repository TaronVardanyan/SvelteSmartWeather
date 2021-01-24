<script>

</script>

<footer>
    <h3>Made by T.Vardanyan in 2021 Jan 3</h3>
</footer>

<style type="text/scss">
  footer {
    width: 100%;
    background: orangered;
    height: 10vh;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    box-shadow: 0 0 10px red;

    h3 {
      color: white;
      font-size: 1.5vw;
      @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 2vw;
      }

      @media (min-width: 481px) and (max-width: 767px) {
        font-size: 3.2vw;
      }

      @media (min-width: 320px) and (max-width: 480px) {
        font-size: 3.5vw;
      }
    }
  }
</style>