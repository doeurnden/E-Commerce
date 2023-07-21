<template>
    <mainLayout>
        <div class="container">
            <main class="my-cart">
                <div class="my-cart-title">
                    <h1>My Cart</h1>
                    <div style="width: 100%; height: 2px; background-color: black;"></div>
                </div>
                <div class="sub-container">
                    <ul>
                        <li class="item">
                            <div class="item-img">
                                <img src="../../assets/image/men/front/m1f.jpg" alt="m1f">
                            </div>
                            <div class="item-title">
                                <div>
                                    <h3>M3</h3>
                                    <p>10$</p>
                                    <p>color: white</p>
                                    <p>size: large</p>
                                </div>
                            </div>
                            <div class="item-btn">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                            <div class="item-price">$20</div>
                            <div class="item-cancel"><button>X</button></div>
                        </li>
                        <li class="item">
                            <div class="item-img">
                                <img src="../../assets/image/men/front/m1f.jpg" alt="m1f">
                            </div>
                            <div class="item-title">
                                <div>
                                    <h3>M3</h3>
                                    <p>10$</p>
                                    <p>color: white</p>
                                    <p>size: large</p>
                                </div>
                            </div>
                            <div class="item-btn">
                                <button>-</button>
                                <button>1</button>
                                <button>+</button>
                            </div>
                            <div class="item-price">$20</div>
                            <div class="item-cancel"><button>X</button></div>
                        </li>
                        <div style="width: 100%; height: 2px; background-color: black;"></div>
                    </ul>
                </div>
            </main>
            <main class="order-summary">
                <form>
                    <div>
                        <h1>Order Summary</h1>
                    </div>
                    <div style="width: 100%; height: 2px; background-color: black;"></div>
                    <div style="display: flex; justify-content: space-between;">
                        <h3>Subtotal:</h3>
                        <h3>$20</h3>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <h3>Discount:</h3>
                        <h3>-$10</h3>
                    </div>
                    <div style="width: 100%; height: 2px; background-color: black;"></div>
                    <div style="display: flex; justify-content: space-between;">
                        <h3>Total:</h3>
                        <h3>$10</h3>
                    </div>
                    <div class="btn">
                        <button>Checkout</button>
                    </div>
                </form>
                <form action="#" class="address-form">
                    <div class="address-title">
                        <h2>Address Delivery</h2>
                    </div>
                    <div class="address-input">
                        <label for="address">Your address</label><br>
                        <textarea name="address" id="address" cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="apply">
                    </div>
                </form>
            </main>
        </div>

    </mainLayout>
</template>

<script>
import mainLayout from '../../layout/mainLayout.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        mainLayout
    }
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    // align-items: center;
    width: 100%;
    height: 70vh;

    .my-cart {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .my-cart-title {
            width: 50%;
        }

        .sub-container {
            width: 50%;

            ul {
                width: 100%;
                list-style-type: none;
                padding: 0;

                .item {
                    width: 100%;
                    display: flex;
                    // gap: 5%;
                    // justify-content: center;

                    .item-img {
                        width: 40%;

                        img {
                            width: 100%;
                        }
                    }

                    .item-title {
                        width: 20%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        div>h3 {
                            margin: 0;
                        }
                    }

                    .item-btn {
                        width: 20%;
                        text-align: center;

                        button {
                            margin: 2%;
                        }
                    }

                    .item-price {
                        width: 10%;
                        text-align: center;
                    }

                    .item-cancel {
                        width: 10%;
                        text-align: end;
                    }
                }
            }
        }
    }

    .order-summary {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        form {
            width: 50%;
            height: 50%;
            .btn {
                width: 100%;
                display: flex;
                justify-content: center;

                button {
                    height: 2rem;
                    width: 6rem;
                    color: white;
                    background-color: #ff9446;
                    border: none;
                    border-radius: 5px;
                }
            }
        }
        .address-form{
            .address-input{
                width: 100%;
                textarea{width: 100%;}
            }
        }
    }
}

@media only screen and (max-width: 1000px) {
    .container {
        .my-cart {
            width: 60%;

            .my-cart-title {
                width: 80%;
            }

            .sub-container {
                width: 80%;
            }
        }

        .order-summary {
            width: 40%;

            form {
                width: 80%;
                height: 50%;
                background-color: #dedede;
                padding: 10px;
                border-radius: 5px;
            }
        }
    }

    .code-promotion-form {

        // width: 50%;
        .container1 {
            width: 80%;
        }
    }
}</style>