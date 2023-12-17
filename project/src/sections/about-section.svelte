<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
    import { inview } from "svelte-inview";

    const moveRatio = 0.01;
    const options = {
        unobserveOnEnter: false,
    };

    let characterX = 0;
    let characterY = 0;

    let isTablet = false;
    let isInView = false;
    let hoveredIndex = -1;

    let titleArray = ["ATELIER", "AREA", "ARENA"];
    let scriptArray = [
        "여러분의 소중한 작품을 모아 모두에게 보여주세요!",
        "창작자, 소비자가 모두 모여 자유롭게 소통해봐요!",
        "대회를 개최하여 작품을 받아보고, 작가님을 후원해봐요!",
    ];
    let imageArray = [
        "/images/screenshot_atelier.png",
        "/images/screenshot_area.png",
        "/images/screenShot_arena.png",
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
        isTablet = window.innerWidth <= 980;
    }

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();

    function handleMouseOver(i) {
        hoveredIndex = i;
        event.stopPropagation();
    }

    function handleMouseOut() {
        hoveredIndex = -1;
        event.stopPropagation();
    }
</script>

<section
    id="about"
    class="bg-white"
    use:inview={options}
    on:inview_change={(event) => {
        const { inView } = event.detail;
        isInView = inView;
    }}
>
    <div class="container">
        {#each titleArray as title, i}
            <div
                use:reveal={{ transition: "fade", delay: i * 100 }}
                class="about-element"
            >
                <div class="element-text-container">
                    <div class="element-title">
                        <h2>{title}</h2>
                    </div>
                    <div
                        class="about-script"
                        use:reveal={{
                            delay: 50,
                        }}
                    >
                        {scriptArray[i]}
                    </div>
                </div>
                <div
                    class="about-image-conatiner"
                    on:mouseover={() => handleMouseOver(i)}
                    on:mouseout={handleMouseOut}
                    on:focus={() => handleMouseOver(i)}
                    on:blur={handleMouseOut}
                    role="button"
                    tabindex={i}
                >
                    <img
                        class="about-image"
                        src={imageArray[i]}
                        alt="home-horizontal"
                    />
                </div>
            </div>
        {/each}
    </div>
</section>

<style lang="scss">
    @import "../styles/aboutSectionStyles.scss";
</style>
