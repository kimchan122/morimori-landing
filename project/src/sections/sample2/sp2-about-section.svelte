<section id="about" class="bg-lightgray">
    <div class="container">
        <div class="headline-container">
            <h2>ABOUT</h2>
            <p>회사 개요</p>
        </div>
        <div class="content-container">
            <div class="content-box">
                <p class="content-box-title">회사명</p>
                <p>MORI</p>
            </div>
            <div class="content-box">
                <p class="content-box-title">위치</p>
                <p>대한민국 인천광역시 연수구 송도동---</p>
            </div>
            <div class="content-box">
                <p class="content-box-title">임원</p>
                <div>
                    <p>대표이사:</p>
                    <p>ㄱㄱ이사:</p>
                    <p>ㄴㄴ이사:</p>
                    <p>ㄷㄷ이사:</p>
                </div>
            </div>
            <div class="map-box">
                <div>GOOGLE MAP AREA</div>
            </div>
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

    .content-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .content-box {
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        padding-top: 15px;
        padding-bottom: 15px;
        border-top: 1px solid #dddddd;
    }

    .content-box-title {
        width: 100px;
        text-align: left;
        letter-spacing: 4px;
    }

    .map-box {
        width: 100%;
        height: 280px;
        background-color: #dddddd;
    }

    .container img {
        height: 250px;
    }
</style>
