<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
</script>

<footer id="footer" class="bg-darkgray">
    <div class="footer">
        <img
            class="footer-logo"
            src="images/MORI_HORIZONTAL_WHITE.png"
            alt=""
        />
        <div>COPYRIGHT © 2023 MORI INC. ALL RIGHTS RESERVED</div>
    </div>
</footer>

<style>
    .bg-gray {
        background-color: #eeeeee;
        margin: 0 auto;
    }
    .bg-darkgray {
        background-color: #1f1f1f;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .container {
        padding-top: 70px;
        width: 100%;
        /* height: calc(100vh - 70px); */
        max-width: 980px;
        margin: 0 auto;
        padding: 6em 0;
        display: flex;
        justify-content: space-between;
    }

    .left-container {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .slogan {
        text-align: left;
        color: black;
        font-weight: 900;
        font-size: 24px;
    }

    .logo {
        /* max-height: 80px; */
        display: flex;
        /* flex-direction: column; */
        justify-content: flex-start;
    }

    .nav-logo {
        max-height: 100px;
    }

    .badges {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .store-badge {
        width: 200px;
    }

    .right-container {
        display: flex;
        flex-direction: column;
    }

    .right-container a {
        text-align: left;
        color: black;
        margin-bottom: 20px;
    }

    .footer {
        width: 100%;
        max-width: 980px;
        background-color: #1f1f1f;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    .footer-logo {
        height: 70px;
    }

    .footer div {
    }
</style>
