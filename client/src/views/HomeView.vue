<template>
    <mainLayout>
        <div class="container">
            <section class="banner">
                <div class="title">
                    <div class="text">
                        <p>Free Shipping</p>
                        <p>On Order Over $50 - Use Coupon Code Ovser50</p>
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
                <div class="item">
                    <div>
                        <img src="../assets/image/homePage/t4.png" alt="t4">
                        <p>T1-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t5.png" alt="t5">
                        <p>T2-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t6.png" alt="t6">
                        <p>T3-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t7.png" alt="t7">
                        <p>T4-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t8.png" alt="t8">
                        <p>T5-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t9.png" alt="t9">
                        <p>T6-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t10.png" alt="t10">
                        <p>T7-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t11.png" alt="t11">
                        <p>T8-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t12.png" alt="t12">
                        <p>T9-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t13.png" alt="t13">
                        <p>T10-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t14.png" alt="t14">
                        <p>T11-Shirt</p>
                        <p>$10</p>
                    </div>
                    <div>
                        <img src="../assets/image/homePage/t15.png" alt="t15">
                        <p>T12-Shirt</p>
                        <p>$10</p>
                    </div>
                </div>
                <div class="next">
                    <button>
                        <router-link to="/shopAll">Shop All</router-link>
                    </button>
                    <button>
                        <router-link to="/shopAll">></router-link>
                    </button>
                </div>
            </section>
        </div>

    </mainLayout>
</template>

<script setup>

// import Product from './DetailProductView.vue'
import mainLayout from '../layout/mainLayout.vue';

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');

.container {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    .banner {
        width: 100%;

        .title {
            height: 30vh;
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

                p:first-child {
                    font-size: 60px;
                }

                p:nth-child(2) {
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

        .item {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin-top: 1rem;
            grid-gap: 1rem;

            div {

                // width: 100%;
                img {
                    width: 100%;
                    // height: 90%;
                }

                p:nth-child(3) {
                    color: #ff6200;
                }

                p {
                    height: 5%;
                }
            }
        }

        .next {
            display: flex;
            justify-content: center;
            gap: 0.1rem;
            margin-top: 2rem;

            button {
                border: 5px solid #ff6200;

                a {
                    text-decoration: none;
                    color: #ff6200;
                }
            }

            :first-child {
                width: 7rem;
                height: 2.2rem;
            }

            button:nth-child(1):hover {
                background-color: #ff6200;

                a {
                    color: white;
                }
            }

            button:nth-child(2) {
                background-color: #ff6200;

                a {
                    color: white;
                    font-size: 1rem;
                }
            }

            button:nth-child(2):hover {
                border: 5px solid #ffb180;
                background-color: #ffb180;
            }
        }
    }
}
</style>
