<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiMenu from "svelte-icons-pack/fi/FiMenu";
    import FiX from "svelte-icons-pack/fi/FiX";

    let showNavbarShadow = false;
    console.log(showNavbarShadow);
    let isTablet = false;
    // let isMobileView = false;
    let isSidebarOpen = false;

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    window.addEventListener("scroll", () => {
        showNavbarShadow = window.scrollY > 0;
    });

    function checkTabletView() {
        isTablet = window.innerWidth <= 980;
        // isMobileView = window.innerWidth < 768;
        if (!isTablet) isSidebarOpen = false;
    }

    window.addEventListener("resize", checkTabletView);
    checkTabletView();

    function toggleSidebar() {
        isSidebarOpen = !isSidebarOpen;
        if (isSidebarOpen) {
            document.body.style.overflow = "auto";
        } else {
            document.body.style.overflow = "";
        }
        event.stopPropagation();
    }

    function closeSidebar(event) {
        if (
            event &&
            event.target &&
            event.target.id === "app" &&
            isSidebarOpen
        ) {
            toggleSidebar();
        }
        if (event) {
            event.stopPropagation();
        }
    }

    document.addEventListener("click", closeSidebar);
</script>

<section class="navbar" class:show-box-shadow={showNavbarShadow}>
    <div class="inner-navbar">
        <div class="logo">
            <button
                class="logobutton-container"
                on:click={() => scrollToSection("main")}
            >
                <div class="logo-container">
                    <img class="nav-logo" src="images/logo.png" alt="logo" />
                    <span>MoriMori</span>
                </div>
                <!-- APP LOGO -->
            </button>
        </div>
        <div class="menu">
            {#if !isTablet}
                {#if showNavbarShadow}
                    <button
                        class="button-container-white"
                        on:click={() => scrollToSection("about")}
                    >
                        ABOUT
                    </button>
                    <button
                        class="button-container-white"
                        on:click={() => scrollToSection("download")}
                    >
                        DOWNLOAD
                    </button>
                    <button
                        class="button-container-white"
                        on:click={() => scrollToSection("news")}>NEWS</button
                    >
                {:else if !showNavbarShadow}
                    <button
                        class="button-container"
                        on:click={() => scrollToSection("about")}
                    >
                        ABOUT
                    </button>
                    <button
                        class="button-container"
                        on:click={() => scrollToSection("download")}
                    >
                        DOWNLOAD
                    </button>
                    <button
                        class="button-container"
                        on:click={() => scrollToSection("news")}>NEWS</button
                    >
                {/if}

                <!-- <button class="button-container">PARTNERSHIP</button> -->
            {/if}
            {#if isTablet}
                <button
                    class="button-container-mobile"
                    on:click={toggleSidebar}
                >
                    <Icon src={FiMenu} size="32" />
                </button>
            {/if}
        </div>
    </div>
</section>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section
    class="sidebar-background"
    class:open={isSidebarOpen}
    on:click={closeSidebar}
    role="button"
    tabindex="0"
>
    <div class="sidebar" class:open={isSidebarOpen}>
        <div class="sidebar-container">
            <button class="button-container-mobile" on:click={toggleSidebar}>
                <Icon src={FiX} size="32" />
            </button>
        </div>
        <button
            class="button-container-mobile-element"
            on:click={() => {
                scrollToSection("about");
                toggleSidebar();
            }}
        >
            ABOUT
        </button>
        <button
            class="button-container-mobile-element"
            on:click={() => {
                scrollToSection("download");
                toggleSidebar();
            }}
        >
            DOWNLOAD
        </button>
        <button
            class="button-container-mobile-element"
            on:click={() => {
                scrollToSection("news");
                toggleSidebar();
            }}
        >
            NEWS
        </button>
    </div>
</section>

<style lang="scss">
    @import "../styles/navbarStyles.scss";
</style>
