<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
    import { inview } from "svelte-inview";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;
    let titleArray = ["ATELIER", "AREA", "FIESTA"];
    let scriptArray = [
        "여러분의 소중히 작품을 모아 포트폴리오로 누구에게나 보여주세요!",
        "창작자, 소비자가 모두 모여 자유롭게 소통해봐요!",
        "대회를 개최하여 작품을 받아보고, 작가님을 후원해봐요!",
    ];
    // let titleArray = ["투고하세요,", "소통하세요,", "참가하세요,"];
    // let scriptArray = [
    //     "내 작품을 MoriMori에 투고해서 많은 사람들에게 보여주세요!",
    //     "MoriMori의 많은 사람들과 함께 즐거운 추억을 만들어가세요!",
    //     "MoriMori에서 다양한 대회에 참가하세요!",
    // ];

    let isInView = false;
    const options = {
        unobserveOnEnter: false,
    };

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
    <section
        id="about"
        class="bg-white"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView, entry, scrollDirection, observer, node } =
                event.detail;
            isInView = inView;
        }}
    >
        <div class="container">
            {#each titleArray as title, i}
                <div
                    use:reveal={{ transition: "fade", delay: i * 100 }}
                    class="about-element"
                >
                    <div class="element-title">
                        <h2>{title}</h2>
                    </div>
                    <div class="about-image-conatiner">
                        <img
                            class="about-image"
                            src="images/about-image.png"
                            alt="home-horizontal"
                        />
                    </div>
                    <div class="element-script">
                        {scriptArray[i]}
                    </div>
                </div>
            {/each}
        </div>
    </section>
{/if}
{#if isTablet}
    <section
        id="about"
        class="bg-white"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView, entry, scrollDirection, observer, node } =
                event.detail;
            isInView = inView;
        }}
    >
        <div class="container-mb">
            {#each titleArray as title, i}
                <div
                    use:reveal={{ transition: "fade", delay: i * 100 }}
                    class="about-element-mb"
                >
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
        padding: 70px 20px 70px 20px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .about-element {
        width: 300px;
        /* display: flex; */
        color: black;
    }

    .about-image-conatiner {
        width: 300px;
        height: 230px;
        overflow: hidden;
    }

    .about-image {
        width: 300px;
        height: 230px;
        object-fit: cover;
        overflow: hidden;
        transform-origin: center center;
        transition: transform 0.3s ease-in-out;
    }

    .about-image:hover {
        width: 300px;
        height: 230px;
        transform: scale(1.2);
        overflow: hidden;
    }

    .element-title {
        background: linear-gradient(transparent 80%, #ffdaa3 0%);
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
        background: linear-gradient(transparent 80%, #ffdaa3 0%);
    }

    .element-script-mb {
        text-align: left;
    }
</style>
