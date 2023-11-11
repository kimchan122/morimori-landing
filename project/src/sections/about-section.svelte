<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;
    let titleArray = ["투고하세요,", "소통하세요,", "제안하세요,"];
    let scriptArray = [
        "내 작품을 MoriMori에 투고해서 많은 사람들에게 보여주세요!",
        "MoriMori의 많은 사람들과 함께 즐거운 추억을 만들어가세요!",
        "MoriMori의 새로운 기능, 원하는 기능을 자유롭게 제안하세요!",
    ];

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
            {#each titleArray as title, i}
                <div class="about-element">
                    <div class="element-title">
                        <h2>{title}</h2>
                    </div>
                    <img
                        class="about-image"
                        src="images/about-image.png"
                        alt="home-horizontal"
                    />
                    <div class="element-script">
                        {scriptArray[i]}
                    </div>
                </div>
            {/each}
            <!-- <div class="about-element">
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
            </div> -->
        </div>
        <!-- <div id="about" class="desktop-section-container" /> -->
    </section>
{/if}
{#if isTablet}
    <section id="about" class="bg-white">
        <div class="container-mb">
            {#each titleArray as title, i}
                <div class="about-element-mb">
                    <div class="element-title-mb">
                        <h2>{title}</h2>
                    </div>
                    <img
                        class="about-image-mb"
                        src="images/about-image.png"
                        alt="home-horizontal"
                    />
                    <div class="element-script-mb">
                        {scriptArray[i]}
                    </div>
                </div>
            {/each}
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
        padding: 70px 0 70px 0;
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
