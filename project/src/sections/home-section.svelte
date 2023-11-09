<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;

    let mainText = [
        "창작자도 소비자도 함께하는 플랫폼",
        "MoriMori와 함께하세요,",
    ];
    let textArray = ["투고", "소통", "제안"];
    let currentIndex = 0;
    let isFadingOut = false;

    function fadeOut() {
        isFadingOut = true;
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % textArray.length;
            isFadingOut = false;
            fadeIn();
        }, 400); // 1초 후에 currentIndex를 변경하고 fadeIn 함수를 호출
    }

    function fadeIn() {
        setTimeout(fadeOut, 4000); // 2초 후에 fadeOut 함수 호출
    }

    onMount(() => {
        fadeOut(); // 초기에 fadeOut 함수 호출
    });

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
    <section id="main" class="bg-lightblue">
        <div class="top-container">
            <img
                class="phone-image"
                src="images/home-horizontal2.png"
                alt="home-horizontal"
            />
            <div class="intro">
                <div>
                    <div class="slogan-third">
                        {mainText[0]}
                    </div>
                    <div class="slogan-second">{mainText[1]}</div>
                    <span class="slogan-first" class:out={isFadingOut}>
                        {textArray[currentIndex]}
                        <!-- 모리 -->
                    </span>
                    <!-- <span class="slogan-doit">하세요</span> -->
                    <!-- <span class="slogan-first-doit">하세요</span> -->
                </div>
                <div class="badges">
                    <img
                        class="store-badge"
                        src="images/google-play-badge.png"
                        alt="download-google-play"
                    />
                    <img
                        class="store-badge"
                        src="images/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                        alt="download-app-store"
                    />
                </div>
                <!-- <div>
                    <button class="goto-web-service">서비스로 이동</button>
                </div> -->
            </div>
        </div>
    </section>
    <section class="bg-white" />
{/if}
{#if isTablet}
    <section id="main" class="bg-lightblue-mb">
        <div class="top-container-mb">
            <div class="intro-mb">
                <div>
                    <div class="slogan-third-mb">
                        {mainText[0]}
                    </div>
                    <div class="slogan-second-mb">{mainText[1]}</div>
                    <span class="slogan-first-mb" class:out={isFadingOut}>
                        {textArray[currentIndex]}
                        <!-- 모리 -->
                    </span>
                    <!-- <span class="slogan-doit-mb">하세요</span> -->
                    <!-- <span class="slogan-first-doit-mb">하세요</span> -->
                </div>
                <div class="badges-mb">
                    <img
                        class="store-badge-mb"
                        src="images/google-play-badge.png"
                        alt="download-google-play"
                    />
                    <img
                        class="store-badge-mb"
                        src="images/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                        alt="download-app-store"
                    />
                </div>
                <!-- <div>
                    <button class="goto-web-service-mb">서비스로 이동</button>
                </div> -->
                <!-- <div class="footnote-mb">
                    *1 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, *2 quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                </div> -->
            </div>
            <img
                class="phone-image-mb"
                src="images/home-mb.png"
                alt="home-horizontal"
            />
        </div>
    </section>
    <!-- <section class="bg-white" /> -->
{/if}

<style>
    .bg-white {
        background-color: white;
        height: 150px;
    }
    .bg-lightblue {
        background-color: #32c7ff;
        height: 600px;
    }
    .top-container {
        padding-top: 70px;
        width: 100%;
        height: calc(100vh - 300px);
        max-width: 1080px;
        margin: 0 auto;
        padding: 6em 0 0 0;
        display: flex;
        justify-content: space-between;
    }
    /* .desktop-section-container {
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
    } */

    .phone-image {
        /* width: 100%; */
        max-width: 400px;
        object-fit: contain;
        /* padding: 0px 30px 0px 30px; */
        box-sizing: border-box;
        /* position: absolute;
        bottom: 0; */
    }

    .intro {
        margin-right: 4rem;
        max-width: 420px;
    }

    .slogan-third {
        font-family: "NotoSansKR";
        color: black;
        font-size: 28px;
        font-weight: 300;
    }

    .slogan-second {
        font-family: "NotoSansKR";
        color: black;
        font-size: 36px;
        font-weight: 500;
    }

    .slogan-first {
        transition: opacity 0.4s;
        font-family: "NotoSansKR";
        color: white;
        font-size: 144px;
        font-weight: 700;
    }

    /* .slogan-first-doit {
        transition: opacity 0.4s;
        font-family: "NotoSansKR";
        color: black;
        font-size: 88px;
        font-weight: 700;
    } */
    /* .slogan-doit {
        font-family: "NotoSansKR";
        margin-left: 10px;
        font-size: 24px;
        color: black;
        font-weight: 700;
    } */

    .out {
        opacity: 0;
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

    /* .footnote {
        color: #aaaaaa;
        font-size: 12px;
        margin-top: 35px;
        padding-top: 15px;
        text-align: left;
    }

    .goto-web-service {
        height: 61px;
        border: 1px solid #aaaaaa;
        width: 100%;
        border-radius: 8px;
        background-color: black;
        color: white;
        cursor: pointer;
        outline: none;
    } */

    /* for mobile / tablet */

    /* .bg-white-mb {
        background-color: white;
        height: 150px;
    } */
    .bg-lightblue-mb {
        background-color: #32c7ff;
        /* height: 600px; */
    }
    .top-container-mb {
        /* padding-top: 70px; */
        width: 100%;
        min-height: 100vh;
        /* height: calc(100vh - 300px); */
        /* max-width: 1080px; */
        margin: 0 auto;
        padding: 70px 0 0 0;
        display: flex;
        /* justify-content: space-between; */
        flex-direction: column;
        align-content: center;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
    }

    .phone-image-mb {
        width: 100%;
        max-width: 300px;
        padding: 0px 30px 0px 30px;
        box-sizing: border-box;
        /* position: absolute;
        bottom: 0; */
    }
    /* .desktop-section-container {
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
    } */

    .intro-mb {
        /* margin-right: 4rem; */
        /* max-width: 420px; */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding-top: 70px;
        height: 100%;
        box-sizing: content-box;
        /* box-sizing: border-box; */
    }

    /* .slogan-third-mb {
        font-family: "NotoSansKR";
        color: black;
        font-size: 28px;
        font-weight: 300;
    }

    .slogan-second-mb {
        font-family: "NotoSansKR";
        color: black;
        font-size: 48px;
        font-weight: 500;
    }

    .slogan-first-mb {
        transition: opacity 0.4s;
        font-family: "NotoSansKR";
        color: white;
        font-size: 144px;
        font-weight: 700;
    } */

    /* .slogan-first-doit-mb {
        transition: opacity 0.4s;
        font-family: "NotoSansKR";
        color: black;
        font-size: 144px;
        font-weight: 700;
    } */

    @media (max-width: 420px) {
        /* 브레이크포인트 설정 */
        .slogan-third-mb {
            font-family: "NotoSansKR";
            color: black;
            font-size: 20px;
            font-weight: 300;
        }

        .slogan-second-mb {
            font-family: "NotoSansKR";
            color: black;
            font-size: 26px;
            font-weight: 500;
        }

        .slogan-first-mb {
            transition: opacity 0.4s;
            font-family: "NotoSansKR";
            color: white;
            font-size: 120px;
            font-weight: 700;
        }
        /* .slogan-first-doit-mb {
            transition: opacity 0.4s;
            font-family: "NotoSansKR";
            color: black;
            font-size: 64px;
            font-weight: 700;
        } */
    }

    @media (min-width: 421px) and (max-width: 980px) {
        /* 브레이크포인트 설정 */
        .slogan-third-mb {
            font-family: "NotoSansKR";
            color: black;
            font-size: 26px;
            font-weight: 300;
        }

        .slogan-second-mb {
            font-family: "NotoSansKR";
            color: black;
            font-size: 32px;
            font-weight: 500;
        }

        .slogan-first-mb {
            transition: opacity 0.4s;
            font-family: "NotoSansKR";
            color: white;
            font-size: 144px;
            font-weight: 700;
        }
        /* .slogan-first-doit-mb {
            transition: opacity 0.4s;
            font-family: "NotoSansKR";
            color: black;
            font-size: 108px;
            font-weight: 700;
        } */
    }

    /* .slogan-doit-mb {
        font-family: "NotoSansKR";
        margin-left: 10px;
        font-size: 24px;
        color: black;
        font-weight: 700;
    } */

    .out {
        opacity: 0;
    }

    .badges-mb {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        align-content: center;
    }

    .store-badge-mb {
        /* width: 100%; */
        width: 150px;
    }

    /* .footnote-mb {
        color: #aaaaaa;
        font-size: 12px;
        margin-top: 35px;
        padding-top: 15px;
        text-align: left;
    } */
    /* 
    .goto-web-service-mb {
        height: 61px;
        border: 1px solid #aaaaaa;
        width: 100%;
        border-radius: 8px;
        background-color: black;
        color: white;
        cursor: pointer;
        outline: none;
    } */
</style>
