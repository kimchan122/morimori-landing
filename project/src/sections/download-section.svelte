<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;
    let titleArray = [
        "다양한 이벤트",
        "AI 무단학습 억제연구",
        "SNS 연동",
        "플랫폼 지원",
    ];
    let scriptArray = [
        "MoriMori의 즐거운 이벤트와 함께하세요!",
        "MoriMori는 그림 무단학습 억제를 위해 최선을 다 하고 있어요!",
        "게시한 내용을 다양한 SNS를 통해 공유하세요!",
        "다양한 플랫폼으로 MoriMori를 즐겨보세요!",
    ];
    let imageArray = [
        "images/sample1.jpg",
        "images/sample2.png",
        "images/sample3.jpg",
        "images/sample1.jpg",
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
    <section id="download" class="bg-white">
        <div class="container">
            <div class="role">
                <h1>DOWNLOAD</h1>
                <div class="role-box">
                    {#each titleArray as title, i}
                        <div>
                            <img
                                class="role-box-image"
                                src={imageArray[i]}
                                alt="role"
                            />
                            <h2>{title}</h2>
                            <p>{scriptArray[i]}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="download-box">
                <img
                    class="app-logo"
                    src="images/app-logo.png"
                    alt="app-logo"
                />
                <div>
                    <h2>지금 다운로드하세요!</h2>
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
                </div>
            </div>
        </div>
        <!-- <div id="about" class="desktop-section-container" /> -->
    </section>
{/if}
{#if isTablet}
    <section id="download" class="bg-white">
        <div class="container-mb">
            <div class="role-mb">
                <h1>DOWNLOAD</h1>
                <div class="role-box-mb">
                    {#each titleArray as title, i}
                        <div>
                            <img
                                class="role-box-image"
                                src={imageArray[i]}
                                alt="role"
                            />
                            <h2>{title}</h2>
                            <p>{scriptArray[i]}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="download-box-mb">
                <img
                    class="app-logo-mb"
                    src="images/app-logo.png"
                    alt="app-logo"
                />
                <div>
                    <h2>지금 다운로드하세요!</h2>
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
                </div>
            </div>
            <!-- <div id="about" class="desktop-section-container" /> -->
        </div>
    </section>
{/if}

<style>
    /* .bg-gray {
        background-color: #eeeeee;
        margin: 0 auto;
    } */

    .bg-white {
        background-color: white;
        height: 0 auto;
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
    .role-box {
        display: flex;
        justify-content: space-between;
    }
    .role-box-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    .role-box div {
        max-width: 200px;
    }

    .role-box div h2 {
        font-size: 20px;
    }
    .download-box {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        /* background-color: #32c7ff; */
        border: 3px solid #32c7ff;
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
    }

    /* for mobile/tablet */

    /* .bg-gray {
        background-color: #eeeeee;
        margin: 0 auto;
    } */
    .container-mb {
        /* padding-top: 70px; */
        width: 100%;
        /* height: calc(100vh - 70px); */
        /* max-width: 1080px; */
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        color: black;
        padding: 70px 30px;
        box-sizing: border-box;
    }
    .role-mb {
        padding-bottom: 6em;
    }
    .role-box-mb {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .role-box-mb div {
        flex: 1 0 calc(50% - 10px); /* flex-grow, flex-shrink, flex-basis */
        margin: 5px;
    }

    .role-box-mb div h2 {
        font-size: 20px;
    }

    .role-box-image {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }
    .download-box-mb {
        display: flex;
        /* flex-direction: column; */
        justify-content: center;
        align-items: center;
        /* background-color: white; */
        background-color: white;
        border: 3px solid #32c7ff;
        border-radius: 30px;
        /* margin-bottom: 6em; */
        padding: 30px 30px;
        flex-wrap: wrap;
    }

    @media (max-width: 800px) {
        .download-box-mb {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            /* background-color: white; */
            background-color: #32c7ff;
            border: 3px solid #32c7ff;
            border-radius: 30px;
            /* margin-bottom: 6em; */
            padding: 30px 30px;
            flex-wrap: wrap;
        }
    }

    .download-box-mb div h2 {
        margin-bottom: 20px;
    }

    .app-logo-mb {
        width: 200px;
        padding: 20px;
    }

    .badges-mb {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .store-badge-mb {
        width: 200px;
    }
</style>
