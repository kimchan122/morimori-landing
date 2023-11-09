<script>
    import Icon from "svelte-icons-pack/Icon.svelte";
    import FiMenu from "svelte-icons-pack/fi/FiMenu";
    import FiX from "svelte-icons-pack/fi/FiX";

    let showNavbarShadow = false;
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
        isTablet = window.innerWidth < 980;
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
                class="button-container"
                on:click={() => scrollToSection("main")}
            >
                <div class="logo-container">
                    <img class="nav-logo" src="images/logo.png" alt="logo" />
                    MoriMori
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
        <!-- <button class="button-container-mobile-element">NEWS</button> -->
        <!-- <button class="button-container-mobile-element">PARTNERSHIP</button> -->
    </div>
</section>

<style>
    .navbar {
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 70px;
        background-color: #32c7ff;

        display: flex;
        justify-content: center;
        align-items: center;

        /* font-family: "Inter"; */
        color: #fff;
        text-align: center;

        transition: background-color 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;
    }

    .inner-navbar {
        width: 100%;
        max-width: 1080px;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin: 0 auto; */
        padding: 0px 50px;
        box-sizing: border-box;
    }

    .show-box-shadow {
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    }

    .button-container {
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        color: black;
        outline: none;
        transition: color 0.3s ease;
        line-height: 0px;
    }

    .button-container:hover {
        color: white;
    }

    .button-container-white {
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        color: black;
        outline: none;
        transition: color 0.3s ease;
        line-height: 0px;
    }

    .button-container-white:hover {
        color: #32c7ff;
    }

    .logo-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .button-container-mobile {
        border: none;
        padding: 0;
        background-color: transparent;
        cursor: pointer;
        color: black;
        outline: none;
        transition: color 0.3s ease;
        line-height: 0px;
    }

    .nav-logo {
        height: 70px;
    }

    .menu {
        display: flex;
        gap: 60px;
        font-size: 18px;
        font-weight: bold;
    }

    .sidebar-background {
        position: fixed;
        top: 0;
        right: -100vw;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    .sidebar {
        position: fixed;
        top: 0;
        right: -300px;
        width: 300px;
        height: 100vh;
        background-color: white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        transition: right 0.3s ease;
        z-index: 100;
        display: flex;
        flex-direction: column;
    }

    .open {
        right: 0;
        opacity: 1;
        z-index: 100;
    }

    .sidebar-container {
        padding-right: 50px;
        height: 70px;
        display: flex;
        justify-content: right;
    }

    .button-container-mobile-element {
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #dddddd;
        font-size: 18px;
        font-weight: bolder;
        text-align: left;
        padding: 20px 100px 20px 30px;
        background-color: transparent;
        cursor: pointer;
        color: black;
        outline: none;
        transition: color 0.3s ease;
        /* line-height: 0px; */
    }

    /* .button-container-mobile-element:hover {
        color: #30c5d2;
        color: white;
    } */
</style>
