<script>
    import { Router, Route } from "svelte-routing";
    import Policy from "./Policy.svelte";
    import Main from "./Main.svelte";
</script>

<main>
    <Router>
        <Route path="/" component={Main} />
        <Route path="/policy" component={Policy} />
    </Router>
</main>
