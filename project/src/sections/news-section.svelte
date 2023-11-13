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

{#if !isTablet}
    <section
        id="news"
        class="bg-white"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView, entry, scrollDirection, observer, node } =
                event.detail;
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
{/if}
{#if isTablet}
    <section
        id="news"
        class="bg-white"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView, entry, scrollDirection, observer, node } =
                event.detail;
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
{/if}

<style>
    .bg-white {
        background-color: white;
    }
    .container {
        width: 100%;
        max-width: 1080px;
        margin: 0 auto;
        padding: 70px 20px 70px 20px;
        display: flex;
        flex-direction: column;
        color: black;
        box-sizing: border-box;
    }
    .role {
        padding-bottom: 6em;
    }
    /* .role-box {
        display: flex;
        justify-content: space-between;
    }
    .role-box-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    .svelte-carousel .dots .dot.active {
        background-color: red;
    }

    .desktop-section-container {
        width: 100%;
        height: calc(100vh);
        padding-top: 70px;
        max-width: 980px;
        margin: 0 auto;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        flex-wrap: wrap;
    }

    .download-box {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 30px;
        margin-bottom: 6em;
    }

    .app-logo {
        width: 200px;
        padding: 20px;
    }

    .badges {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    .store-badge {
        width: 200px;
    } */

    .carousel-box {
        width: 250px;
        max-width: 250px;
        height: 350px;
        max-height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: white; */
        /* margin: 20px; */
        /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); */
    }
    .carousel-element {
        width: 270px;
        height: 300px;
        padding: 10px;
        background-color: white;
        /* margin: 20px; */
        border-radius: 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
        margin-left: 10px;
        margin-right: 10px;
    }

    .news-image {
        width: 250px;
        height: 120px;
        object-fit: cover;
    }

    .news-text {
        display: flex;
        flex-direction: column;
    }

    .news-title {
        width: 250px;
        font-weight: 500;
        /* line-height: 30px; */
        /* margin: 0; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        text-align: left;
        /* max-height: 2em; */
    }

    .news-script {
        width: 250px;
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        text-align: left;
        max-height: 4.5em;
    }

    /* for mobile/tablet */

    .container-mb {
        width: 100%;
        height: 100vh;
        /* max-width: 1080px; */
        margin: 0 auto;
        /* padding: 70px 0 70px 0; */
        display: flex;
        flex-direction: column;
        color: black;
        justify-content: center;
        padding: 70px 30px 70px 30px;
        box-sizing: border-box;
    }
    .role-mb {
        padding-bottom: 6em;
    }

    .carousel-box-mb {
        width: 100%;
        max-width: 250px;
        height: 350px;
        max-height: 350px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-color: white; */
        /* margin: 20px; */
        /* box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5); */
    }
    .carousel-element-mb {
        width: 270px;
        height: 300px;
        padding: 10px;
        background-color: white;
        /* margin: 20px; */
        border-radius: 10px;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: space-around; */
        margin-left: 10px;
        margin-right: 10px;
    }

    .news-image-mb {
        width: 250px;
        height: 120px;
        object-fit: cover;
    }

    .news-text-mb {
        display: flex;
        flex-direction: column;
    }

    .news-title-mb {
        width: 250px;
        font-weight: 500;
        /* line-height: 30px; */
        /* margin: 0; */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        text-align: left;
        /* max-height: 2em; */
    }

    .news-script-mb {
        width: 250px;
        margin: 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        text-align: left;
        max-height: 4.5em;
    }
</style>
