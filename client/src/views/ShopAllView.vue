<template>
    <!-- <Navbar /> -->
    <mainLayout>
        <section class="new-arrival">
            <div class="content">
                <p>SHOP ALL</p>
                <div class="line"></div>
            </div>
            <div class="item-filter">
                <div>shopAll (16 item )</div>
                <div class="filter"><font-awesome-icon class="icon" icon="filter" /> filter</div>
            </div>
            <div class="items">
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa1f.jpg" alt="sa1f"></div>
                    <p>sa1f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa2f.jpg" alt="sa2f"></div>
                    <p>sa2f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets//image/shopAll/front/sa3f.jpg" alt="sa3f"></div>
                    <p>sa3f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa4f.jpg" alt="sa4f"></div>
                    <p>sa4f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa5f.jpg" alt="sa5f"></div>
                    <p>sa5f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa6f.jpg" alt="sa6f"></div>
                    <p>sa6f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa7f.jpg" alt="sa7f"></div>
                    <p>sa7f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa8f.jpg" alt="sa8f"></div>
                    <p>sa8f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa9f.jpg" alt="sa9f"></div>
                    <p>sa9f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa10f.jpg" alt="sa10f"></div>
                    <p>sa10f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa11f.jpg" alt="sa11f"></div>
                    <p>sa11f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa12f.jpg" alt="sa12f"></div>
                    <p>sa12f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa13f.jpg" alt="sa13f"></div>
                    <p>sa13f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa14f.jpg" alt="sa14f"></div>
                    <p>sa14f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa15f.jpg" alt="sa15f"></div>
                    <p>sa15f</p>
                    <p>$10.00</p>
                </div>
                <div class="item">
                    <div class="img"><img src="../assets/image/shopAll/front/sa16f.jpg" alt="sa16f"></div>
                    <p>sa16f</p>
                    <p>$10.00</p>
                </div>

            </div>
        </section>
        <div class="load-more">
            <button @click="load">Load More</button>
        </div>
    </mainLayout>
    <!-- <Foot/> -->
</template>

<script setup>

// import Navbar from '../components/Navbar.vue'
// import Foot from '../components/Footer.vue'
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
            width: 13.25rem;
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
                width: 10rem;
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