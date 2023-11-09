<section id="news" class="bg-lightgray">
    <div class="container">
        <div class="headline-container">
            <h2>NEWS</h2>
            <p>회사 소식</p>
        </div>
        <div class="news-container">
            <div class="news-box">
                <p class="news-box-date">2023.03.24.</p>
                <p class="news-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="news-box">
                <p class="news-box-date">2023.03.24.</p>
                <p class="news-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="news-box">
                <p class="news-box-date">2023.03.24.</p>
                <p class="news-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="news-box">
                <p class="news-box-date">2023.03.24.</p>
                <p class="news-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <button class="news-more-btn"> 뉴스 더 보기 </button>
        </div>
    </div>
</section>

<style>
    .bg-lightgray {
        background-color: #f8f8f8;
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

    .news-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .news-box {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 15px;
        padding-bottom: 15px;
        background-color: white;
        padding: 20px 30px;
        box-sizing: border-box;
        margin-bottom: 20px;
    }

    .news-box-date {
        width: 100px;
        text-align: left;
        letter-spacing: 2px;
        padding-right: 50px;
    }
    .news-box-text {
        text-align: left;
        letter-spacing: 1px;
        padding-right: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .news-more-btn {
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
    }

    .news-more-btn:hover {
        background-color: #0056b3;
        color: white;
    }
</style>
