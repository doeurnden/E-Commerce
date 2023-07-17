<template>
    <mainLayout>
        <main>
            <header>
                <p>Contact Us</p>
                <div class="line"></div>
            </header>
            <article>
                <div class="foc">
                    <div>
                        <div>
                            <h2>Flagship Store</h2>
                        </div>
                        <div>
                            <p>
                                Toul Kork, Phnom Penh
                            </p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Opening Hours</h2>
                        </div>
                        <div>
                            Mon-Fri: 8am - 10pm <br>
                            Saturday: 8am - 5pm <br>
                            Sunday: 9am - 9pm
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Customer service</h2>
                        </div>
                        <div>
                            <p>
                                088 67 00 929
                            </p>
                        </div>
                    </div>
                </div>
                <div class="dot"></div>
                <div class="stock">
                    <div>
                        <h2>Stockists</h2>
                    </div>
                    <div class="stockists">
                        <div class="each-stock">
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                        </div>
                        <div class="each-stock">
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                            <div>
                                500 Terry Francine St. <br>
                                San Francisco, CA 94158 <br>
                                123-456-7890
                            </div>
                        </div>
                    </div>
                </div>
                <div class="dot"></div>
                <div class="input-field">
                    <h2>For inquiries regarding an order, please include your <br>
                        order number and the date your order was placed
                    </h2>
                    <form action="#">
                        <input type="text" placeholder="Name">
                        <input type="email" placeholder="Email">
                        <input type="text" placeholder="How Can We Help?">
                        <input type="submit" value="Submit">
                    </form>
                </div>
            </article>
        </main>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../layout/mainLayout.vue';

</script>

<style lang="scss" scoped>
main {
    height: 90vh;

    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        position: relative;
        margin-top: 4rem;

        p {
            font-size: 6rem;
            text-align: center;
            margin: 0;
            line-height: .6;
            z-index: 10;
            font-family: 'Koulen', cursive;
        }

        .line {
            height: 8px;
            width: 25rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }

    }

    article {

        // display: flex;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        .foc {
            display: flex;
            justify-content: center;
            gap: 10rem;
            margin: 2rem 0;
        }

        .dot {
            width: 1rem;
            height: 1rem;
            background-color: #ff6200;
            margin: 1rem auto;
        }

        .stock {
            margin: 4rem 0;

            h2 {
                text-align: center;
            }

            .stockists {
                .each-stock {
                    display: flex;
                    justify-content: center;
                    gap: 10rem;
                    text-align: center;
                    margin-top: 1rem;
                }
            }
        }

        .input-field {
            margin: 2rem 0;

            h2 {
                text-align: center;
            }

            form {
                display: flex;
                justify-content: center;
                gap: 1rem;
                margin: 4rem 0;

                input {
                    padding: .5rem 1rem;
                }

                input[type=text],
                input[type=email] {
                    border: 2px solid #ff6200;
                    outline: none;
                }

                ::-webkit-input-placeholder {
                    color: #ff6200;
                }

                input[type=submit] {
                    border: none;
                    color: white;
                    background-color: #ff6200;
                    padding: 0 2rem;
                    cursor: pointer;
                }

                input[type=submit]:hover {
                    background-color: #ffb180;
                }
            }
        }
    }
}</style>