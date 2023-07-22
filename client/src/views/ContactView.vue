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
                        <h2>Flagship Store</h2>
                        <p>Toul Kork, Phnom Penh</p>
                    </div>
                    <div>
                        <h2>Opening Hours</h2>
                        <p>
                            Mon-Fri: 8am - 10pm <br>
                            Saturday: 8am - 5pm <br>
                            Sunday: 9am - 9pm
                        </p>
                    </div>
                    <div>
                        <h2>Customer service</h2>
                        <p>088 67 00 929</p>
                    </div>
                </div>
                <div class="dot"></div>
                <div class="stock">
                    <h1>Stockists</h1>
                    <h2>Toul Kouk, Phnom Penh</h2>
                </div>
                <div class="dot"></div>
                <div class="input-field">
                    <p>For inquiries regarding an order, please include your <br>
                        order number and the date your order was placed
                    </p>
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
    header {
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
            height: 8px;
            width: 17rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }

    }

    article {
        .foc {
            display: flex;
            justify-content: space-around;
            margin-top: 5rem;
        }

        .dot {
            width: 1rem;
            height: 1rem;
            background-color: #ff6200;
            margin: 3rem auto;
        }

        .stock {
            // margin: 4rem 0;

            h1,
            h2 {
                text-align: center;
            }
        }

        .input-field {
            margin: 2rem 0;

            p {
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
}
@media only screen and (max-width: 500px) {
    main {
    header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        position: relative;
        margin-top: 4rem;

        p {
            //4rem-3rem
            font-size: 3rem;
            text-align: center;
            margin: 0;
            line-height: .6;
            z-index: 10;
            font-family: 'Koulen', cursive;
        }

        .line {
            height: 8px;
            //17-13
            width: 13rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }

    }

    article {
        .foc {
            display: flex;
            //space-aroun -> spece-between
            justify-content: space-between;
            //5-4
            margin-top: 4rem;

            div{
                text-align: center;
                h2{
                    font-size: 1.5rem;
                }
                p{
                    font-size: 1rem;
                    margin-top: 1rem;
                }
            }
        }

        .dot {
            width: 1rem;
            height: 1rem;
            background-color: #ff6200;
            margin: 3rem auto;
        }

        .stock {
            // margin: 4rem 0;

            h1,
            h2 {
                text-align: center;
            }
        }

        .input-field {
            margin: 2rem 0;

            p {
                text-align: center;
            }

            form {
                display: flex;
                justify-content: center;
                flex-direction: column;
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
                    padding: .5rem 2rem;
                    cursor: pointer;
                }

                input[type=submit]:hover {
                    background-color: #ffb180;
                }
            }
        }
    }
}
}
</style>