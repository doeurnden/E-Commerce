<template>
    <mainLayout>
        <div class="container">
            <main class="navbar-link">
                <div>
                    <h3>Home / T1</h3>
                </div>
                <div class="prev-next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 16px;">
                        <path
                            d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
                    </svg>
                    <h3>Prev | Next</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="height: 16px;">
                        <path
                            d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
                    </svg>
                </div>
            </main>
            <main class="detail-product-info">
                <div class="image-rotation">
                    <div class="image">
                        <img src="../../assets/image/homePage/t5.png" alt="t5">
                    </div>
                    <div class="rotation" style="display: flex; gap: .5rem;">
                        <div style="width: 3rem; height: 3rem; background-color: aqua;"></div>
                        <div style="width: 3rem; height: 3rem; background-color: rgb(0, 0, 0);"></div>
                    </div>
                    <div>
                        <p>Make in Thailand</p>
                    </div>
                </div>
                <div class="product-info">
                    <div class="title-cost">
                        <h3>T1-Shirt</h3>
                        <h4>$10.00</h4>
                    </div>
                    <div class="form">
                        <form action="#">
                            <div class="color-product">
                                <p>Color</p>
                                <div class="color">
                                    <div style="width: 20px;height: 20px; background-color: bisque;"></div>
                                    <div style="width: 20px;height: 20px; background-color: rgb(94, 93, 93);"></div>
                                </div>
                            </div>
                            <div class="size-guide">
                                <div class="size">
                                    <span>size</span>
                                    <span>check size</span>
                                </div>
                                <select style="width: 5rem; height: 2rem;">
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
                        </form>
                        <div>
                            <button>Add to Cart</button>
                        </div>
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
    .navbar-link {
        display: flex;
        justify-content: space-around;

        .prev-next {
            display: flex;
            gap: 1rem;
        }
    }

    .detail-product-info {
        display: flex;
        justify-content: space-around;

        .image-rotation {
            .rotation {
                display: flex;
            }
        }

        .product-info {
            .form {
                .color-product {
                    .color {
                        display: flex;
                        gap: 1rem;
                    }

                    .size-guide {
                        .size {
                            display: inline-block;
                            color: antiquewhite;
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