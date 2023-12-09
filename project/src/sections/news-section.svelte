<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
    import { inview } from "svelte-inview";
    import Carousel from "svelte-carousel";

    let characterX = 0;
    let characterY = 0;
    let particlesNumber = 3;
    const moveRatio = 0.01;
    let isTablet = false;
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
        if (window.innerWidth >= 800) {
            particlesNumber = 2;
        } else {
            particlesNumber = 1;
        }
    }

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();

    const newsItems = [
        {
            image: "/images/sample1.jpg",
            title: "NEWS TITLE NEWS TITLE NEWS TITLE NEWS TITLE",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur",
        },
        {
            image: "/images/sample2.png",
            title: "NEWS TITLE NEWS TITLE NEWS TITLE NEWS TITLE",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur",
        },
        {
            image: "/images/sample3.jpg",
            title: "NEWS TITLE NEWS TITLE NEWS TITLE NEWS TITLE",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consectetur",
        },
    ];
</script>

<!-- {#if !isTablet} -->
<section
    id="news"
    class="bg-white"
    use:inview={options}
    on:inview_change={(event) => {
        const { inView } = event.detail;
        isInView = inView;
    }}
>
    <div class="container">
        <div class="role">
            <h1 use:reveal={{ transition: "fade", delay: 0 }}>NEWS</h1>

            <div use:reveal={{ transition: "fade", delay: 100 }}>
                <Carousel
                    particlesToShow={3}
                    particlesToScroll={1}
                    autoplay
                    autoplayDuration={4000}
                    dots={false}
                >
                    {#each newsItems as item (item.image)}
                        <div class="carousel-box">
                            <div class="carousel-element">
                                <img
                                    class="news-image"
                                    src={item.image}
                                    alt=""
                                />
                                <div class="news-text">
                                    <h3 class="news-title">
                                        {item.title}
                                    </h3>
                                    <p class="news-script">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
    </div>
</section>

<!-- {/if} -->
<!-- {#if isTablet}
    <section
        id="news"
        class="bg-white"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView } = event.detail;
            isInView = inView;
        }}
    >
        <div class="container-mb">
            <div class="role-mb">
                <h1>NEWS</h1>

                <Carousel
                    particlesToShow={particlesNumber}
                    particlesToScroll={1}
                    autoplay
                    autoplayDuration={4000}
                    dots={false}
                    arrows={false}
                >
                    {#each newsItems as item (item.image)}
                        <div class="carousel-box-mb">
                            <div class="carousel-element-mb">
                                <img
                                    class="news-image-mb"
                                    src={item.image}
                                    alt=""
                                />
                                <div class="news-text-mb">
                                    <h3 class="news-title-mb">
                                        {item.title}
                                    </h3>
                                    <p class="news-script-mb">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    {/each}
                </Carousel>
            </div>
        </div>
    </section>
{/if} -->

<style>
    @import "../styles/newsSectionStyles.scss";
</style>
