<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";

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
    <section id="about" class="bg-white">
        <div class="container">
            <div class="about-element">
                <div class="element-title">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
            <div class="about-element">
                <div class="element-title">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
            <div class="about-element">
                <div class="element-title">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
        </div>
        <!-- <div id="about" class="desktop-section-container" /> -->
    </section>
{/if}
{#if isTablet}
    <section id="about" class="bg-white">
        <div class="container-mb">
            <div class="about-element-mb">
                <div class="element-title-mb">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image-mb"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script-mb">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
            <div class="about-element-mb">
                <div class="element-title-mb">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image-mb"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script-mb">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
            <div class="about-element-mb">
                <div class="element-title-mb">
                    <h2>Lorem ipsum dolor</h2>
                </div>
                <img
                    class="about-image-mb"
                    src="images/about-image.png"
                    alt="home-horizontal"
                />
                <div class="element-script-mb">
                    Lorem ipsum dolor sit amet, adipiscing elit consectetur
                </div>
            </div>
        </div>
        <!-- <div id="about" class="desktop-section-container" /> -->
    </section>
{/if}

<style>
    .bg-white {
        background-color: white;
    }
    .container {
        /* padding-top: 70px; */
        width: 100%;
        /* height: calc(100vh - 70px - 6em); */
        max-width: 1080px;
        margin: 0 auto;
        padding: calc(70px + 6em) 0 6em 0;
        display: flex;
        justify-content: space-between;
    }

    .about-element {
        max-width: 300px;
        /* display: flex; */
        color: black;
    }

    .about-element img {
        width: 300px;
    }

    .element-title {
        background: linear-gradient(transparent 70%, #54caff 0%);
    }

    .element-script {
        text-align: left;
    }

    /* for mobile / tablet */

    .container-mb {
        /* padding-top: 70px; */
        width: 100%;
        /* height: calc(100vh - 70px - 6em); */
        max-width: 1080px;
        margin: 0 auto;
        padding: 70px 0 70px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 30px;
    }

    .about-element-mb {
        max-width: 300px;
        /* display: flex; */
        color: black;
        flex: 1 0 calc(100%); /* flex-grow, flex-shrink, flex-basis */
        /* margin: 5px; */
    }

    .about-element-mb img {
        width: 300px;
    }

    .element-title-mb {
        background: linear-gradient(transparent 70%, #54caff 0%);
    }

    .element-script-mb {
        text-align: left;
    }
</style>
