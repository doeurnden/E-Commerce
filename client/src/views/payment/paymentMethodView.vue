<template>
    <main>
        <div class="payment">
            <div class="payment-method">
                <h1>Payment Method</h1>
                <div class="payment-method-radio">
                    <div class="radio-card">
                        <div><input type="radio"></div>
                        <div><font-awesome-icon class="icon" icon="fa-regular fa-credit-card" /></div>
                    </div>
                    <div class="radio-paypal">
                        <div><input type="radio"></div>
                        <div><font-awesome-icon class="icon" icon="fa-brands fa-cc-paypal" /></div>
                    </div>
                </div>
            </div>
            <div class="payment-detail">
                <h1>Payment Detail</h1>
                <form action="#">
                    <div class="cardholder-name">
                        <label for="cardholder-name">Cardholder's Name</label><br>
                        <input type="text" placeholder="card name">
                    </div>
                    <div class="card-number">
                        <label for="card-number">Card Number</label><br>
                        <input type="text" placeholder="xxxx xxxx xxxx">
                    </div>
                    <div class="expire-cvc">
                        <div class="m-y-expire">
                            <label for="expire">Expire</label><br>
                            <input type="text" placeholder="xx/xx">
                        </div>
                        <div class="cvc">
                            <label for="cvc">CVC</label><br>
                            <input type="text" placeholder="xxx">
                        </div>
                    </div>
                    <div class="btn">
                        <input type="submit" value="play">
                    </div>
                </form>
            </div>
        </div>
        <div class="img">
            <img src="../../assets/image/payment.png" alt="payment">
        </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
main {
    width: 90vw;
    height: 90vh;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    gap: 1rem;

    .payment {
        width: 50%;
        height: 100%;
        // height: 20%;
        // background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        align-items: center;

        .payment-method {
            width: 100%;
            height: 20%;

            h1 {
                height: 50%;
                display: flex;
                align-items: center;
            }

            .payment-method-radio {
                width: 50%;
                height: 50%;
                display: flex;
                align-items: center;

                // justify-content: space-between;
                .radio-card {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    gap: 10%;
                }

                .radio-paypal {
                    width: 50%;
                    display: flex;
                    align-items: center;
                    gap: 10%;
                }

                .icon {
                    font-size: 36px;
                }
            }
        }

        .payment-detail {
            width: 100%;
            height: 80%;
            h1 {
                height: 10%;
            }

            form {
                width: 50%;
                height: 90%;
                // background-color: aquamarine;

                .cardholder-name {
                    width: 100%;

                    input {
                        width: 100%;
                        padding: .5rem;
                    }
                }

                .card-number {
                    width: 100%;

                    input {
                        width: 100%;
                        padding: .5rem;
                    }
                }

                .expire-cvc {
                    width: 100%;
                    display: flex;
                    gap: 1rem;

                    .m-y-expire {
                        width: 50%;

                        input {
                            width: 100%;
                            padding: .5rem;
                        }
                    }

                    .cvc {
                        width: 50%;

                        input {
                            width: 100%;
                            padding: .5rem;
                        }
                    }
                }
            }

            .btn {
                width: 100%;

                input {
                    width: 100%;
                    padding: .5rem;
                    margin-top: 1rem;
                }
            }
        }
    }

    .img {
        width: 50%;

        img {
            width: 100%;
            height: 100%;
        }
    }
}</style>