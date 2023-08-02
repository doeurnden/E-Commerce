<template>
    <mainLayout>
        <div class="container">
            <main class="navbar-link">
                <div class="nav">
                    <h3>Home / T1</h3>
                </div>
                <div class="prev-next">
                    <font-awesome-icon class="custom-icon" icon="fa-solid fa-chevron-left" />
                    <h3>Prev | Next</h3>
                    <font-awesome-icon class="custom-icon" icon="fa-solid fa-chevron-right" />
                </div>
            </main>
            <main class="detail-product-info">
                <div class="image-rotation">
                    <div class="image">
                        <img src="../../assets/image/homePage/t5.png" alt="t5">
                    </div>
                    <div class="rotation">
                        <div style="width: 3rem; height: 3rem; background-color: aqua;"></div>
                        <div style="width: 3rem; height: 3rem; background-color: rgb(0, 0, 0);"></div>
                    </div>
                    <div class="discription">
                        <p>Make in Cambodia</p>
                    </div>
                </div>
                <div class="product-info">
                    
                    <div class="title-cost">
                        <h2>T1-Shirt</h2>
                        <p>$10.00</p>
                    </div>
                    <div class="form">
                        <form>
                            <div class="color-product">
                                <p>Color</p>
                                <div class="color">
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <div class="size-guide">
                                <div class="size">
                                    <div>size</div>
                                    <div>check size</div>
                                </div>
                                <select class="setection">
                                    <option value="" selected disabled hidden>Select</option>
                                    <option value="1">XS</option>
                                    <option value="2">S</option>
                                    <option value="3">M</option>
                                    <option value="4">L</option>
                                </select>
                            </div>
                            <div class="qty">
                                <p>Qty</p>
                                <input type="number">
                            </div>
                            <div class="btn">
                                <button>Add to Cart</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <main class="related-products">
                <div class="title">
                    <h1>Related Products</h1>
                </div>
                <div class="slide-another-product">
                    <div class="left-direction">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512">
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg>
                    </div>
                    <div class="content-list-product">
                        <div><img src="../../assets/image/shopAll/front/sa1f.jpg" alt="sa1f"></div>
                        <div><img src="../../assets/image/shopAll/front/sa2f.jpg" alt="sa2f"></div>
                        <div><img src="../../assets/image/shopAll/front/sa3f.jpg" alt="sa3f"></div>
                        <div><img src="../../assets/image/shopAll/front/sa4f.jpg" alt="sa4f"></div>
                    </div>
                    <div class="right-direction">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" style="height: 16px;">
                            <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg>
                    </div>
                </div>
            </main>
        </div>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../../layout/mainLayout.vue';

</script>

<style lang="scss" scoped>
.container {
    height: 100%;
    width: 100%;

    .navbar-link {
        height: 10vh;
        display: flex;
        justify-content: center;

        .nav {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .prev-next {
            width: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
        }
    }

    .detail-product-info {
        height: 70vh;
        // background-color: antiquewhite;
        display: flex;
        // justify-content: space-around;

        .image-rotation {
            height: 100%;
            width: 50%;

            .image {
                height: 80%;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    height: 100%;
                    // width: 80%;
                }
            }

            .rotation {
                width: 100%;
                height: 10%;
                display: flex;
                justify-content: start;
                gap: 1rem;
                align-items: center;
                padding-left: 10%;
            }

            .discription {
                width: 100%;
                height: 10%;
                display: flex;
                justify-content: start;
                align-items: center;
                padding-left: 10%;
            }
        }

        .product-info {
            height: 100%;
            width: 50%;

            .title-cost {
                height: 15%;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .form {
                height: 85%;
                width: 100%;

                form {
                    height: 100%;
                    width: 100%;

                    .color-product {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        height: 10%;

                        .color {
                            display: flex;
                            align-items: center;
                            gap: 1rem;

                            div {
                                width: 20px;
                                height: 20px;
                                background-color: aquamarine;
                            }
                        }
                    }

                    .size-guide {
                        height: 15%;
                        width: 100%;
                        // background-color: aquamarine;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        .size {
                            width: 50%;
                            display: flex;
                            justify-content: space-between;
                        }

                        .setection {
                            width: 50%;
                            height: 2rem;
                            border-radius: 5PX;
                            border: 2px solid rgb(255, 115, 0);
                            padding: 0 1rem;
                        }
                    }

                    .qty {
                        height: 15%;
                        width: 100%;
                        // background-color: rgb(91, 169, 208);
                        display: flex;
                        flex-direction: column;
                        justify-content: center;

                        input {
                            width: 50%;
                            height: 2rem;
                            border-radius: 5PX;
                            border: 2px solid rgb(255, 115, 0);
                            padding-left: 1rem;
                        }
                    }

                    .btn {
                        height: 10%;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;

                        button {
                            height: 2rem;
                            border-radius: 5PX;
                            border: 2px solid rgb(255, 115, 0);
                            padding: 0 1rem;
                        }:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    .related-products {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
            h1 {
                text-align: center;
            }
        }

        .slide-another-product {
            display: flex;
            gap: 1rem;

            .left-direction {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .content-list-product {
                height: 246px;
                display: flex;
                gap: 1rem;

                div {
                    height: 100%;

                    img {
                        height: 100%;
                    }
                }
            }

            .right-direction {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
}</style>