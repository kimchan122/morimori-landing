<script>
    let isFixed = false;

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        if (scrollY > 680 - 35) {
            isFixed = true;
        } else {
            isFixed = false;
        }
    });

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
</script>

<div class="header {isFixed ? 'fixed' : ''}">
    {#if isFixed === true}
        <button
            class="header-btn-logo"
            on:click={() => scrollToSection("title")}
        >
            <img
                class="header-logo"
                src="images/MORI_HORIZONTAL_WHITE.png"
                alt=""
            />
        </button>
    {/if}
    <button class="header-btn" on:click={() => scrollToSection("news")}
        >NEWS</button
    >
    <button class="header-btn" on:click={() => scrollToSection("service")}
        >SERVICE</button
    >
    <button class="header-btn" on:click={() => scrollToSection("about")}
        >ABOUT</button
    >
    <button class="header-btn-last" on:click={() => scrollToSection("contact")}
        >CONTACT</button
    >
</div>

<style>
    .header {
        position: absolute;
        top: calc(680px - 35px);
        width: 100%;
        max-width: 980px;
        height: 70px;
        background-color: #333;
        color: #fff;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    }

    .fixed {
        position: fixed;
        top: 0;
        left: 50%;
    }

    .header-btn-logo {
        width: 100%;
        height: 100%;
        border-radius: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        position: relative;
    }

    .header-btn {
        width: 100%;
        height: 100%;
        border-radius: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        position: relative;
    }

    .header-btn:hover {
        background-color: #0056b3;
        transition: background-color 0.3s ease;
    }

    .header-btn-last {
        width: 100%;
        height: 100%;
        border-radius: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;
        position: relative;
    }

    .header-btn-last:hover {
        background-color: #0056b3;
        transition: background-color 0.3s ease;
    }

    .header-btn-logo::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0em;
        width: 1px;
        height: 1em;
        background-color: #aaaaaa;
    }

    .header-btn::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0em;
        width: 1px;
        height: 1em;
        background-color: #aaaaaa;
    }

    .header-logo {
        height: 50px;
    }
</style>
