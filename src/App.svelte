<script>
    import { Router, Route } from "svelte-routing";
    import CardContainer from './components/CardContainer.svelte';
    import WeatherForecast from './components/WeatherForecasr.svelte';
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";

    export let url = ""

    let pathString = window.location.href;
    console.log(window.location.href.replace("https", "http"))
    if(pathString.split(":")[0] === "https"){
        window.location.assign(window.location.href.replace("https", "http"));
    }
</script>

<main class="app">
    <Router url="{url}">
        <Header/>
        <Route path="/" component="{CardContainer}"/>
        <Route path="/forecast" component="{WeatherForecast}"/>
        <Footer/>
    </Router>
</main>

<style type="text/scss">
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, #1f4e69 0, #164058 100%);
  }
</style>