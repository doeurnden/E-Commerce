<template>
    <mainLayout>
        <div class="container">
            <section class="banner">
                <div class="title">
                    <div class="text">
                        <p class="p1">Free Shipping</p>
                        <p class="p2">On Order Over $50 - Use Coupon Code Over50</p>
                    </div>
                    <div class="link">
                        <router-link to="/women">Shop Women</router-link>
                        <router-link to="/men">Shop Men</router-link>
                        <router-link to="/shopAll">Shop Sale</router-link>
                    </div>
                </div>
                <div class="model">
                    <div><img src="../assets/image/homePage/t1.png" alt="t1"></div>
                    <div><img src="../assets/image/homePage/t2.png" alt="t2"></div>
                    <div><img src="../assets/image/homePage/t3.png" alt="t3"></div>
                </div>
            </section>
            <section class="new-arrival">
                <div class="content">
                    <p>NEW ARRIVALS</p>
                    <div class="line"></div>
                </div>
                <div class="item-filter">
                    <div>New (12 item )</div>
                    <div class="filter"><font-awesome-icon class="icon" icon="filter" /> filter</div>
                </div>
                <div class="items">
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t4.png" alt="t1"></div>
                        <p>T1-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t5.png" alt="t2"></div>
                        <p>T2-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets//image/homePage/t6.png" alt="t6"></div>
                        <p>T3-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t7.png" alt="t7"></div>
                        <p>T4-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t8.png" alt="t8"></div>
                        <p>T5-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t9.png" alt="t9"></div>
                        <p>T6-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t10.png" alt="t10"></div>
                        <p>T7-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t11.png" alt="t11"></div>
                        <p>T8-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t12.png" alt="t12"></div>
                        <p>T9-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t13.png" alt="t13"></div>
                        <p>T10-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t14.png" alt="t14"></div>
                        <p>T11-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div class="item">
                        <div class="img"><img src="../assets/image/homePage/t15.png" alt="t15"></div>
                        <p>T12-Shirt</p>
                        <p>$10</p>
                    </div>

                </div>
                <div class="next">
                    <router-link class="direction" to="/shopAll">
                        <div class="shop-all">Shop All</div>
                        <div class="next-shop">></div>
                    </router-link>
                </div>
            </section>
        </div>

    </mainLayout>
</template>

<script setup>
import mainLayout from '../layout/mainLayout.vue';

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

.container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // position: relative;

    .banner {
        width: 100%;

        .title {
            height: 20vh;
            background-color: #ff6200;

            .text {
                height: 50%;
                color: white;
                text-align: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    margin: 0;
                    padding: 0;
                }

                .p1 {
                    font-size: 60px;
                }

                .p2 {
                    font-size: 30px;
                }
            }

            .link {
                height: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4rem;

                a {
                    text-decoration: none;
                    color: white;
                    border: 2px solid white;
                    padding: 1rem 3rem;
                    font-size: 20px;

                }

                a:hover {

                    color: #ff6200;
                    background-color: #ffffff;

                }
            }
        }

        .model {
            // height: 60vh;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
            gap: 1rem;

            div {
                height: 100%;

                img {
                    width: 100%;
                }
            }
        }
    }

    .new-arrival {

        // margin-top: 1rem;
        .content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: fit-content;
            position: relative;
            margin-top: 4rem;

            p {
                font-size: 4rem;
                text-align: center;
                margin: 0;
                line-height: .6;
                z-index: 10;
                font-family: 'Koulen', cursive;
            }

            .line {
                height: 5px;
                width: 20rem;
                background-color: #ff6200;
                position: absolute;
                bottom: 0;
            }
        }

        .item-filter {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;

            .filter {
                border: 1px solid black;
                padding: .5rem 1rem;
                border-radius: 5px;
                background: transparent;

                .icon {}
            }
        }

        .items {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 1rem;
            gap: 1rem;

            .item {
                width: 100%;
                // background-color: #585858;

                .img {
                    width: 100%;
                    height: 90%;
                    display: flex;
                    justify-content: center;

                    img {
                        width: 100%;
                        transition: transform 0.3s;
                    }

                    img:hover {
                        /* Your styles for the image on hover go here */
                        transform: scale(1.01);
                        border-color: #f00;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                        cursor: pointer;
                    }
                }

                p {
                    height: 5%;
                    display: flex;
                    justify-content: start;
                    align-items: center;
                }

                p:nth-child(3) {
                    color: #cc4e00;
                }
            }
        }

        .next {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;

            .direction {
                display: flex;
                gap: 1rem;
                text-decoration: none;

                .shop-all,.next-shop{
                    border: 5px solid #ff6200;
                    background-color: white;
                    color: #ff6200;
                    border-radius: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .shop-all {
                    padding: .5rem 2rem;
                }

                .next-shop {
                    padding: .5rem .5rem;
                }

                :hover {
                    background-color: #ff6200;
                    color: white;
                }
            }
        }
    }
}

@media only screen and (max-width: 1000px) {
    .container {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        // position: relative;

        .banner {
            width: 100%;

            .title {
                height: 20vh;
                background-color: #ff6200;

                .text {
                    height: 50%;
                    color: white;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    p {
                        margin: 0;
                        padding: 0;
                    }

                    .p1 {
                        font-size: 60px;
                    }

                    .p2 {
                        font-size: 30px;
                    }
                }

                .link {
                    height: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 4rem;

                    a {
                        text-decoration: none;
                        color: white;
                        border: 2px solid white;
                        padding: 1rem 3rem;
                        font-size: 20px;

                    }

                    a:hover {

                        color: #ff6200;
                        background-color: #ffffff;

                    }
                }
            }

            .model {
                // height: 60vh;
                display: flex;
                justify-content: space-between;
                margin: 1rem 0;
                gap: 1rem;

                div {
                    height: 100%;

                    img {
                        width: 100%;
                    }
                }
            }
        }

        .new-arrival {

            // margin-top: 1rem;
            .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: fit-content;
                position: relative;
                margin-top: 4rem;

                p {
                    font-size: 4rem;
                    text-align: center;
                    margin: 0;
                    line-height: .6;
                    z-index: 10;
                    font-family: 'Koulen', cursive;
                }

                .line {
                    height: 5px;
                    width: 20rem;
                    background-color: #ff6200;
                    position: absolute;
                    bottom: 0;
                }
            }

            .items {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                margin-top: 3rem;
                gap: 1rem;

                .item {
                    width: 100%;
                    // background-color: #585858;

                    .img {
                        width: 100%;
                        height: 80%;
                        display: flex;
                        justify-content: center;

                        img {
                            width: 100%;
                        }
                    }

                    p {
                        height: 10%;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                    }

                    p:nth-child(3) {
                        color: #cc4e00;
                    }
                }
            }

            .next {

            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .container {
        width: 100%;
        height: 100%;

        .banner {
            width: 100%;
            height: 30vh;

            // background-color: #625e5e;
            .title {
                height: 50%;
                width: 100%;
                // background-color: #ff6200;

                .text {
                    height: 50%;
                    width: 100%;

                    // background-color: #625e5e;
                    .p1 {
                        font-size: 2rem;
                    }

                    .p2 {
                        font-size: .7rem;
                        // padding-top: 5px;
                    }
                }

                .link {
                    height: 50%;
                    width: 100%;
                    // display: flex;
                    justify-content: space-around;
                    // align-items: center;
                    // gap: 1rem;

                    a {
                        // text-decoration: none;
                        // color: white;
                        border: 1px solid white;
                        border-radius: 5px;
                        padding: .5rem;
                        font-size: .7rem;

                    }

                    a:hover {

                        color: #ff6200;
                        background-color: #ffffff;

                    }
                }
            }

            .model {
                height: 50%;
                // background-color: aquamarine;
                // background-color: aqua;
                // display: flex;
                // justify-content: space-between;
                // align-items: center;
                margin: 0;
                gap: 1rem;

                div {
                    height: 100%;
                    display: flex;
                    align-items: center;

                    img {
                        width: 100%;
                        // height: 100%;
                    }
                }
            }
        }

        .new-arrival {
            width: 100%;
            height: 100%;

            // margin-top: 1rem;
            .content {
                // display: flex;
                // flex-direction: column;
                // justify-content: center;
                // align-items: center;
                // height: fit-content;
                // position: relative;
                margin-top: 2rem;

                p {
                    font-size: 3rem;
                    // text-align: center;
                    // margin: 0;
                    // line-height: .6;
                    // z-index: 10;
                    // font-family: 'Koulen', cursive;
                }

                .line {
                    // height: 5px;
                    width: 15rem;
                    // background-color: #ff6200;
                    // position: absolute;
                    // bottom: 0;
                }
            }

            .item-filter {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 2rem;

                .filter {
                    border-bottom: 1 px solid black;
                    // border: 1px solid black;
                    padding: .1rem .25rem;
                    border-radius: 5px;
                    background: transparent;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .icon {}
                }
            }


            .items {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                margin-top: .5rem;
                gap: 1rem;

                .item {
                    width: 100%;
                    // background-color: #585858;

                    .img {
                        width: 100%;
                        height: 70%;
                        display: flex;
                        justify-content: center;

                        img {
                            width: 100%;
                        }
                    }

                    p {
                        height: 15%;
                        display: flex;
                        justify-content: start;
                        align-items: center;
                    }

                    p:nth-child(3) {
                        color: #cc4e00;
                    }
                }
            }

            .next {
                display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem;

            .direction {
                display: flex;
                gap: 1rem;
                text-decoration: none;

                .shop-all,.next-shop{
                    border: 5px solid #ff6200;
                    background-color: white;
                    color: #ff6200;
                    border-radius: 2px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .shop-all {
                    // width: 9rem;
                    height: 100%;
                }

                .next-shop {
                    // width: 1rem;
                    height: 100%;
                }

                :hover {
                    background-color: #ff6200;
                    color: white;
                }
            }
            }
        }
    }
}
</style>
