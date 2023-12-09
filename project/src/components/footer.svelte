<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;

    if (!isTablet) {
        function handleMouseMove(event) {
            const deltaX = (event.clientX - window.innerWidth / 2) * moveRatio;
            const deltaY = (event.clientY - window.innerHeight / 2) * moveRatio;

            characterX = -deltaX;
            characterY = -deltaY;
        }

        onMount(() => {
            window.addEventListener("mousemove", handleMouseMove);
        });
    }

    function checkScreenWidth() {
        isTablet = window.innerWidth <= 980;
    }

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();
</script>

<!-- {#if !isTablet} -->
<div class="footer-container">
    <section id="footer-info" class="bg-gray">
        <div class="container">
            <div class="left-container">
                <div class="slogan">MoriMori</div>
                <div class="logo">
                    <img
                        class="nav-logo"
                        src="images/MORI_HORIZONTAL_BLACK.png"
                        alt="logo_black"
                    />
                </div>
            </div>
            <div class="right-box">
                <div class="right-container-links">
                    <a
                        href="https://www.youtube.com/@MoriChanneru"
                        target="_blank"
                    >
                        Youtube
                    </a>
                    <a href="https://discord.gg/YbhkU4mdPW" target="_blank">
                        Discord
                    </a>
                </div>
            </div>
        </div>
    </section>
    <footer id="footer" class="bg-darkgray">
        <div class="footer">
            <a>© 2023 MORI, Inc.</a>
            <a
                href="https://sites.google.com/view/morimoriprivacy"
                target="_blank"
            >
                개인정보 보호정책
            </a>
            <a href="/policy" target="_blank">이용 약관</a>
        </div>
    </footer>
</div>

<style lang="scss">
    @import "../styles/footerStyles.scss";
</style>
