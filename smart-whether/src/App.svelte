<script>
    import CardContainer from './components/CardContainer.svelte';
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<main class="app">
    <Header/>
    <CardContainer/>
    <Footer/>
</main>

<style type="text/scss">
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>