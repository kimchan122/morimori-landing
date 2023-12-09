<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
    import { inview } from "svelte-inview";

    let characterX = 0;
    let characterY = 0;
    const moveRatio = 0.01;
    let isTablet = false;
    let isInView = false;
    const options = {
        unobserveOnEnter: false,
    };
    let titleArray = [
        "다양한 이벤트",
        "AI 무단학습 억제연구",
        "SNS 연동",
        "플랫폼 지원",
    ];
    let scriptArray = [
        "MoriMori의 즐거운 이벤트와 함께하세요!",
        "MoriMori의 그림 무단학습 억제 정책과 함께하세요!",
        "MoriMori에 게시한 내용을 다양한 SNS를 통해 공유하세요!",
        "다양한 기기로 MoriMori를 즐겨보세요!",
    ];
    let imageArray = [
        "/images/download01.png",
        "/images/download02.png",
        "/images/download03.png",
        "/images/download04.png",
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
</script>

<section
    id="download"
    class="bg-white"
    use:inview={options}
    on:inview_change={(event) => {
        const { inView } = event.detail;
        isInView = inView;
    }}
>
    <div class="container">
        <div class="role">
            <h1 use:reveal={{ transition: "fade", delay: 0 }}>DOWNLOAD</h1>
            <div class="role-box">
                {#each titleArray as title, i}
                    <div use:reveal={{ transition: "fade", delay: i * 100 }}>
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
        <div
            class="download-box"
            use:reveal={{ transition: "fade", delay: 400 }}
        >
            <img
                class="app-logo"
                src="images/app-logo.png"
                alt="app-logo"
                use:reveal={{ transition: "fade", delay: 500 }}
            />
            <div>
                <h2 use:reveal={{ transition: "fade", delay: 600 }}>
                    지금 다운로드하세요!
                </h2>
                <div
                    class="badges"
                    use:reveal={{ transition: "fade", delay: 700 }}
                >
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
</section>

<style lang="scss">
    @import "../styles/downloadSectionStyles.scss";
</style>
