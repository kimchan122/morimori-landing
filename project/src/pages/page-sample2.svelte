<script>
    import Sp2Footer from "../components/sample2/sp2-footer.svelte";
    import Sp2Header from "../components/sample2/sp2-header.svelte";
    import Sp2AboutSection from "../sections/sample2/sp2-about-section.svelte";
    import Sp2ContactSection from "../sections/sample2/sp2-contact-section.svelte";
    import Sp2NewsSection from "../sections/sample2/sp2-news-section.svelte";
    import Sp2ServiceSection from "../sections/sample2/sp2-service-section.svelte";
    import Sp2TitleSection from "../sections/sample2/sp2-title-section.svelte";
</script>

<Sp2Header />

<main class="desktop-container">
    <Sp2TitleSection />
    <Sp2NewsSection />
    <Sp2ServiceSection />
    <Sp2AboutSection />
    <Sp2ContactSection />
</main>

<Sp2Footer />
