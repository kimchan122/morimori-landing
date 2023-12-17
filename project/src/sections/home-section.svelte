<script>
    import { onMount } from "svelte";
    import { reveal } from "svelte-reveal";
    import { inview } from "svelte-inview";
    import Icon from "svelte-icons-pack/Icon.svelte";
    import BsDiscord from "svelte-icons-pack/bs/BsDiscord";

    let isMobile = /Android/i.test(navigator.userAgent);
    let storeLink = isMobile
        ? "https://play.google.com/store/apps/details?id=com.projectMori.app"
        : "https://play.google.com/store/apps/details?id=com.projectMori.app";

    let isTablet = false;
    let isInView = false;
    const options = {
        unobserveOnEnter: false,
    };
    let mainText = [
        "창작자도 소비자도 함께하는 플랫폼",
        "MoriMori와 함께하세요,",
    ];
    let textArray = ["투고", "소통", "참가"];
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

    function checkScreenWidth() {
        isTablet = window.innerWidth <= 980;
    }

    function handleDiscordBadgeClick() {
        const inviteLink = "https://discord.gg/YbhkU4mdPW";
        window.open(inviteLink, "_blank");
    }

    window.addEventListener("resize", checkScreenWidth);

    checkScreenWidth();
</script>

{#if !isTablet}
    <section
        id="main"
        class="bg-color"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView } = event.detail;
            isInView = inView;
        }}
    >
        <div class="top-container">
            <img
                use:reveal={{ transition: "fade", delay: 0 }}
                class="phone-image"
                src="images/home_appLogo_phone.png"
                alt="home-horizontal"
            />

            <div use:reveal={{ transition: "fade", delay: 100 }} class="intro">
                <div>
                    <div class="slogan-third">
                        {mainText[0]}
                    </div>
                    <div class="slogan-second">
                        {mainText[1]}
                    </div>
                    <div class="slogan-first" class:out={isFadingOut}>
                        {textArray[currentIndex]}
                    </div>
                </div>
                <div
                    use:reveal={{ transition: "fade", delay: 200 }}
                    class="badges"
                >
                    <a href={storeLink} target="_blank">
                        <img
                            class="store-badge"
                            src="images/google-play-badge.png"
                            alt="download-google-play"
                        />
                    </a>
                    <img
                        class="store-badge"
                        src="images/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                        alt="download-app-store"
                    />
                </div>
                <div
                    use:reveal={{ transition: "fade", delay: 200 }}
                    class="badges"
                >
                    <button
                        class="discord-badge"
                        on:click={handleDiscordBadgeClick}
                    >
                        <div>
                            <Icon src={BsDiscord} size="36" color="#5865F2" />
                        </div>
                        <div class="badge-text-container">
                            <p class="badge-title">Discord에서</p>
                            <p class="badge-script">소통하기</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-white" />
{/if}
{#if isTablet}
    <section
        id="main"
        class="bg-color-mb"
        use:inview={options}
        on:inview_change={(event) => {
            const { inView } = event.detail;
            isInView = inView;
        }}
    >
        <div class="top-container-mb">
            <div class="intro-mb">
                <div use:reveal={{ transition: "fade", delay: 0 }}>
                    <div class="slogan-third-mb">
                        {mainText[0]}
                    </div>
                    <div class="slogan-second-mb">{mainText[1]}</div>
                    <span class="slogan-first-mb" class:out={isFadingOut}>
                        {textArray[currentIndex]}
                    </span>
                </div>
                <div
                    class="badges-mb"
                    use:reveal={{ transition: "fade", delay: 100 }}
                >
                    <a href={storeLink} target="_blank">
                        <img
                            class="store-badge-mb"
                            src="images/google-play-badge.png"
                            alt="download-google-play"
                        />
                    </a>
                    <img
                        class="store-badge-mb"
                        src="images/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg"
                        alt="download-app-store"
                    />
                </div>
                <div
                    use:reveal={{ transition: "fade", delay: 200 }}
                    class="badges-mb"
                >
                    <button
                        class="discord-badge-mb"
                        on:click={handleDiscordBadgeClick}
                    >
                        <div>
                            <Icon src={BsDiscord} size="24" color="#5865F2" />
                        </div>
                        <div class="badge-text-container-mb">
                            <p class="badge-title-mb">Discord에서</p>
                            <p class="badge-script-mb">소통하기</p>
                        </div>
                    </button>
                </div>
            </div>
            <img
                use:reveal={{ transition: "fade", delay: 200 }}
                class="phone-image-mb"
                src="images/mobile_home_appLogo_phone.png"
                alt="home-horizontal"
            />
        </div>
    </section>
{/if}

<style lang="scss">
    @import "../styles/homeSectionStyles.scss";
</style>
