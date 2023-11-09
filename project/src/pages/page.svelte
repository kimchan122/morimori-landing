<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import AboutSection from "../sections/about-section.svelte";
    import DownloadSection from "../sections/sample1/download-section.svelte";
    import HomeSection from "../sections/sample1/home-section.svelte";
    import ReviewSection from "../sections/sample1/review-section.svelte";
    // import DesktopNavbar from "../components/desktop/desktop-navbar.svelte";
    // import DesktopAbout from "../sections/desktop/desktop-about.svelte";
    // import DesktopMain from "../sections/desktop/desktop-main.svelte";
    // import DesktopService from "../sections/desktop/desktop-service.svelte";

    let isTabletView = false;

    function checkTabletView() {
        isTabletView = window.innerWidth < 1024;
    }

    window.addEventListener("resize", checkTabletView);
    checkTabletView();
</script>

<Navbar />
<!-- <DesktopNavbar /> -->

<div class="desktop-container">
    <HomeSection />
    <AboutSection />
    <DownloadSection />
    <ReviewSection />
    <!-- <HomeSection /> -->
    <!-- <AboutSection /> -->
    <!-- <DownloadSection /> -->
    <!-- <ReviewSection /> -->
    <!-- <DesktopAbout /> -->
    <!-- <DesktopService /> -->
</div>

<Footer />

<style>
    .desktop-container {
        height: 100%;
        width: 100%;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }
</style>
