<script>
  import { Router, Route, Link, navigate } from "svelte-routing";

  import PageSample1 from "./pages/page-sample1.svelte";
  import PageSample2 from "./pages/page-sample2.svelte";
  // import { onMount } from "svelte";
  // import PageSample3 from "./pages/page-sample3.svelte";

  // onMount(() => {
  //   navigate("/sample2"); // 사용자를 '/sample2'로 리디렉션합니다.
  // });

  let isMobile = false;

  function checkMobile() {
    isMobile = window.innerWidth < 768;
  }

  window.addEventListener("resize", checkMobile);
  checkMobile();

  export let url = "";
</script>

<Router {url}>
  <!-- <nav class="sample-nav">
    <ul>
      <li><Link to="/"><span class="sample-nav-link">Sample 1</span></Link></li>
      <li>
        <Link to="/sample2"><span class="sample-nav-link">Sample 2</span></Link>
      </li>
      <li>
        <a href="https://forms.gle/PfbUE3jt4HMHw3jr8" target="_blank"
          ><span class="sample-nav-survey">설문조사</span></a
        >
      </li>
    </ul>
  </nav> -->
  <div>
    <Route path="/" component={PageSample1} />
    <Route path="/sample2" component={PageSample2} />
    <!-- <Route path="/sample3" component={PageSample3} /> -->
  </div>
</Router>

<!-- 
{#if isMobile}
  <MobilePage />
{:else} -->
<!-- <DesktopPage /> -->
<!-- {/if}  -->

<style>
  /* .sample-nav {
    position: fixed;
    bottom: 50px;
    left: 20px;
    background-color: #333333;
    border-radius: 10px;
    border: 3px solid #555555;
    backdrop-filter: blur(10px);
    z-index: 9999;
  }
  .sample-nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sample-nav ul li {
    padding: 3px;
    border: 1px solid #888888;
    border-radius: 5px;
    background-color: #555555;
    margin: 5px;
  }
  .sample-nav-link {
    color: white;
  }
  .sample-nav-survey {
    color: white;
  } */
</style>
