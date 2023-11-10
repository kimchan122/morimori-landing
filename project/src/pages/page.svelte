<script>
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import AboutSection from "../sections/about-section.svelte";
    import DownloadSection from "../sections/download-section.svelte";
    import HomeSection from "../sections/home-section.svelte";
    import ReviewSection from "../sections/news-section.svelte";

    // let isTabletView = false;

    // function checkTabletView() {
    //     isTabletView = window.innerWidth < 1024;
    // }

    // window.addEventListener("resize", checkTabletView);
    // checkTabletView();
</script>

<Navbar />
<!-- <div class="desktop-container"> -->
<HomeSection />
<AboutSection />
<DownloadSection />
<ReviewSection />
<!-- </div> -->
<Footer />

<style>
    /* .desktop-container {
        height: 100%;
        width: 100%;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    } */
</style>
