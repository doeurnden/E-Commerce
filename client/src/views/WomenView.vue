<template>
    <mainLayout>
        <section class="new-arrival">
            <div class="content">
                <p>WOMEN</p>
                <div class="line"></div>
            </div>
            <div class="item-filter">
                <div>Women (12 item )</div>
                <div class="filter"><font-awesome-icon class="icon" icon="filter" /> filter</div>
            </div>
            <div class="items">
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w1.jpg" alt="w1"></div>
                    <p>w1</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w2.jpg" alt="w2"></div>
                    <p>w2</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets//image/women/front/w3.jpg" alt="w3"></div>
                    <p>w3</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w4.jpg" alt="w4"></div>
                    <p>w4</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w5.jpg" alt="w5"></div>
                    <p>w5</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w6.jpg" alt="w6"></div>
                    <p>w6</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w7.jpg" alt="w7"></div>
                    <p>w7</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w8.jpg" alt="w8"></div>
                    <p>w8</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w9.jpg" alt="w9"></div>
                    <p>w9</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w10.jpg" alt="w10"></div>
                    <p>w10</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w11.jpg" alt="w11"></div>
                    <p>w11</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/women/front/w12.jpg" alt="w12"></div>
                    <p>w12</p>
                    <p>$10.00</p>
                </div>
            </div>
        </section>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../layout/mainLayout.vue';
</script>

<style lang="scss" scoped>
.new-arrival {

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
            width: 10rem;
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

}

.load-more {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    button {
        color: white;
        background-color: #ff6200;
        padding: .8rem 8rem;
        border: none;
    }
}

@media only screen and (max-width: 1000px) {
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
                width: 13.2rem;
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
    }
}

@media only screen and (max-width: 500px) {
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
                width: 7rem;
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

    }

    .load-more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3rem 0;

        button {
            color: white;
            background-color: #ff6200;
            padding: .8rem 4rem;
            border: none;
        }
    }
}
</style>