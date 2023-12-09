<script>
    import { onMount } from "svelte";
    import { Link } from "svelte-routing";
    // import { reveal } from "svelte-reveal";
    // import Icon from "svelte-icons-pack/Icon.svelte";
    // import BsDiscord from "svelte-icons-pack/bs/BsDiscord";
    // import BsYoutube from "svelte-icons-pack/bs/BsYoutube";
    // import BsLinkedin from "svelte-icons-pack/bs/BsLinkedin";
    // import BsInstagram from "svelte-icons-pack/bs/BsInstagram";
    // import AiFillLinkedin from "svelte-icons-pack/ai/AiFillLinkedin";

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
        isTablet = window.innerWidth < 980;
    }

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();
</script>

{#if !isTablet}
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
                <div class="platform-badges">
                    <!-- <Icon src={BsDiscord} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsYoutube} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsLinkedin} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsInstagram} color="#333333" size="32" /> -->
                </div>
            </div>
            <div class="right-box">
                <div class="right-container-links">
                    <!-- <a>Discord</a> -->
                    <a
                        href="https://www.youtube.com/@MoriChanneru"
                        target="_blank"
                    >
                    <a href="https://discord.gg/YbhkU4mdPW" target="_blank">
                        Discord
                    </a>
                        Youtube
                    </a>
                    <a href="https://discord.gg/YbhkU4mdPW" target="_blank">
                        Discord
                    </a>
                    <!-- <a>Linkedin</a> -->
                    <!-- <a>Instagram</a> -->
                </div>
                <!-- <div class="right-container"> -->
                <!-- <a>앱 정보</a>
                    <a>회사 개요</a>
                    <a>뉴스</a>
                    <a>자주 묻는 질문</a> -->
                <!-- </div> -->
            </div>
        </div>
    </section>
{/if}
{#if isTablet}
    <section id="footer-info" class="bg-gray">
        <div class="container-mb">
            <div class="down-container-mb">
                <div class="slogan-mb">MoriMori</div>
                <div class="logo-mb">
                    <img
                        class="nav-logo-mb"
                        src="images/MORI_HORIZONTAL_BLACK.png"
                        alt="logo_black"
                    />
                </div>
                <div class="platform-badges-mb">
                    <!-- <Icon src={BsDiscord} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsYoutube} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsLinkedin} color="#333333" size="32" /> -->
                    <!-- <Icon src={BsInstagram} color="#333333" size="32" /> -->
                </div>
            </div>
            <div class="right-box">
                <div class="right-container-links">
                    <!-- <a>Discord</a> -->
                    <a
                        href="https://www.youtube.com/@MoriChanneru"
                        target="_blank">Youtube</a
                    >
                    <a href="https://discord.gg/YbhkU4mdPW" target="_blank">
                        Discord
                    </a>
                    <!-- <a>Linkedin</a> -->
                    <!-- <a>Instagram</a> -->
                </div>
                <!-- <div class="right-container">
                    <a>앱 정보</a>
                    <a>회사 개요</a>
                    <a>뉴스</a>
                    <a>자주 묻는 질문</a>
                </div> -->
            </div>
        </div>
    </section>
{/if}

{#if !isTablet}
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
{/if}
{#if isTablet}
    <footer id="footer" class="bg-darkgray">
        <div class="footer-mb">
            <a
                href="https://sites.google.com/view/morimoriprivacy"
                target="_blank"
            >
                개인정보 보호정책
            </a>
            <a href="/policy" target="_blank">이용 약관</a>
            <a>© 2023 MORI, Inc.</a>
        </div>
    </footer>
{/if}

<style lang="scss">
    /* desktop */
    .bg-gray {
        background-color: #eeeeee;
        margin: 0 auto;
    }

    .container {
        padding-top: 70px;
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        padding: 70px 20px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        .left-container {
            width: 200px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;

            .slogan {
                text-align: left;
                color: black;
                font-weight: 900;
                font-size: 24px;
            }
            .logo {
                display: flex;
                justify-content: flex-start;

                .nav-logo {
                    max-height: 100px;
                }
            }
            .platform-badges {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
        .right-box {
            display: flex;
            gap: 60px;

            .right-container-links {
                display: flex;
                flex-direction: column;
            }

            .right-container-links a {
                text-align: left;
                color: black;
                margin-bottom: 20px;
                text-decoration: underline;
            }

            .right-container {
                display: flex;
                flex-direction: column;
            }
        }
    }

    .bg-darkgray {
        background-color: #1f1f1f;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    /* footer */
    .footer {
        width: 100%;
        max-width: 980px;
        background-color: #1f1f1f;
        height: 50px;
        display: flex;
        align-items: center;
        color: white;

        * {
            margin-right: 50px;
            color: white;
        }
        Link {
            color: white;
        }
    }
    .footer-mb {
        width: 100%;
        background-color: #1f1f1f;
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;
        color: white;
        padding: 10px 0;
    }

    /* mobile */

    .container-mb {
        width: 100%;
        margin: 0 auto;
        padding: 6em 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
    }

    .down-container-mb {
        max-width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .slogan-mb {
        text-align: center;
        color: black;
        font-weight: 900;
        font-size: 24px;
    }

    .logo-mb {
        display: flex;
        justify-content: center;
    }

    .nav-logo-mb {
        max-height: 100px;
    }

    .platform-badges-mb {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .right-box {
        display: flex;
        gap: 60px;
    }

    .right-container-links {
        display: flex;
        flex-direction: column;
    }

    .right-container-links a {
        text-align: left;
        color: black;
        margin-bottom: 20px;
        text-decoration: underline;
    }

    .right-container {
        display: flex;
        flex-direction: column;
    }
</style>
