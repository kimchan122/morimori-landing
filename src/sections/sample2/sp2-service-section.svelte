<section id="service" class="bg-white">
    <div class="container">
        <div class="headline-container">
            <h2>SERVICE</h2>
            <p>회사 제품</p>
        </div>
        <div class="content-container">
            <div class="content-box">
                <img class="service-image" src="images/app-logo.png" alt="" />
                <h2 class="content-box-title">sed do eiusmod</h2>
                <p>
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit
                </p>
                <button class="service-more-btn">more</button>
            </div>
            <div class="content-box">
                <img
                    class="service-image"
                    src="images/about-image.png"
                    alt=""
                />
                <h2 class="content-box-title">et dolore magna aliqua</h2>
                <p>
                    sunt in culpa qui officia deserunt mollit anim id est
                    laborum. in voluptate velit esse cillum dolore consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                </p>
                <button class="service-more-btn">more</button>
            </div>
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
        /* height: 100%; */
        /* height: calc(100vh - 70px - 6em); */
        max-width: 980px;
        margin: 0 auto;
        /* padding: 6em 0 0 0; */
        display: flex;
        justify-content: center;
        align-items: flex-start;
        color: black;
    }

    .headline-container {
        display: flex;
        letter-spacing: 4px;
        flex-direction: column;
        align-items: flex-start;
        width: 250px;
    }

    .headline-container h2 {
        font-size: 30px;
        margin-top: 0;
    }

    .headline-container p {
        font-size: 16px;
        color: #555555;
        margin-top: 0;
    }

    .content-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        gap: 50px;
    }

    .content-box {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 15px;
        padding-bottom: 15px;
        /* border-top: 1px solid #dddddd; */
        padding: 20px 20px 20px 20px;
        box-sizing: border-box;
    }

    .service-image {
        max-height: 200px;
        height: 200px;
        width: auto;
        height: 100%;
        object-fit: cover;
    }

    .content-box-title {
        line-height: 1.5em;
        height: 3em; /* 높이를 조절하여 두 줄 공간 확보 */
        overflow: hidden; /* 넘치는 내용 숨기기 */
        letter-spacing: 3px;
    }

    .content-box p {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        margin-bottom: 30px;
    }

    .service-more-btn {
        width: 100%;
        border-radius: 0;
        border: none;
        cursor: pointer;
        outline: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        background-color: white;
        color: black;
        padding: 20px 30px;
        box-sizing: border-box;
        border: 1px solid #dddddd;
    }

    .service-more-btn:hover {
        background-color: #0056b3;
        border: 1px solid #0056b3;
        color: white;
    }
</style>
