<section id="contact" class="bg-white">
    <div class="container">
        <button class="contact-btn">
            <div class="contact-title">CONTACT</div>
            <div class="contact-subtitle">문의</div>
        </button>
        <div class="contact-policy">
            <a>개인 정보 보호</a>
            <a>보안 정책</a>
        </div>
    </div>
</section>

<style>
    .bg-white {
        background-color: white;
        /* height: 680px; */
    }
    .container {
        padding-top: 6em;
        padding-bottom: 6em;
        width: 100%;
        height: 500px;
        /* height: 100%; */
        /* height: calc(100vh - 70px - 6em); */
        max-width: 980px;
        margin: 0 auto;
        /* padding: 6em 0 0 0; */
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    }

    .contact-btn {
        width: 100%;
        border-radius: 0;
        border: none;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        padding-top: 4em;
        padding-bottom: 4em;
        background-color: white;
        color: black;
    }

    .contact-btn:hover {
        background-color: #0056b3;
        color: white;
    }

    .contact-title {
        font-size: 30px;
        letter-spacing: 4px;
    }

    .contact-subtitle {
        font-size: 20px;
        letter-spacing: 4px;
    }

    .contact-policy {
        font-size: 16px;
        display: flex;
        gap: 50px;
    }

    .contact-policy a {
        color: black;
        text-decoration: underline;
    }
</style>
