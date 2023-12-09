<script>
  import { Route, Router } from "svelte-routing";
  import Main from "./pages/Main.svelte";
  import Policy from "./pages/Policy.svelte";
</script>

<Router>
  <Route path="/" component={Main} />
  <Route path="/policy" component={Policy} />
</Router>
