<template>
    <main>
        <div class="container">
        <header>
            <div class="img">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style="height: 16px;">
                    <path
                        d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
            </div>
            <div class="cart">
                <h2>Cart</h2>
            </div>
        </header>
        <section>
            <ul>
                <li>
                    <div class="img-info">
                        <div class="img">
                            <img src="../assets/image/men/front/m1f.jpg" alt="m1f">
                        </div>
                        <div class="info">
                            <div class="info-title">
                                <h3>T-Shirt</h3>
                                <p>10.0$</p>
                            </div>
                            <div class="info-count">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 16px;">
                                        <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                                    </svg>
                                </div>
                                <div>1</div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 16px;">
                                        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn">
                        <button>x</button>
                    </div>
                </li>
                <hr>
            </ul>
            <div class="subtotal">
                <h2>Subtotal</h2>
                <p>10.0$</p>
            </div>
        </section>
        <hr>
        <footer>
            <div class="viewCart">
                <button>View Cart</button>
            </div>
        </footer>
    </div>
    </main>
    
</template>

<script>

</script>

<style lang="scss" scoped>
main{
    .container {
    height: 95vh;
    width: 350px;

    // background-color: #cccccc;
    header {
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        background-color: rgb(0, 0, 0);

        div {
            width: 50%;
        }

        .img {
            text-align: center;
            fill: #fff;
        }

        .cart {
            text-align: start;
        }
    }

    section {
        height: 80%;
        width: 100%;
        // background-color: blueviolet;
        ul{
            height: 80%;
            width: 100%;
            list-style-type: none;
            margin: 0;
            padding: 0;
            li{
                // height: 170px;
                margin-top: 1rem;
                width: 100%;
                display: flex;
                justify-content: space-around;
                .img-info{
                    display: flex;
                    gap: 1rem;
                    width: 50%;
                    .img{
                        width: 50%;
                        img{
                            width: 100%;
                        }
                    }
                    .info{
                        width: 50%;
                       
                        .info-title{
                            
                            text-align: center;
                            h3{
                                margin: 0;
                            }
                        }
                        .info-count{
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            border: 1px solid black;
                            border-radius: 5px;
                            padding: 3px;
                        }
                    }
                }
                .btn{
                    width: 50%;
                    display: flex;
                    align-items: flex-start;
                    justify-content: flex-end;
                }
            }
        }
        div{
            height: 20%;
        }
    }

    footer {
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        .viewCart {
            button {
                padding: .5rem 4rem;
                color: #fff;
                background-color: #ff7926;
                border: none;
                border-radius: 5px;
            }
        }
    }
}
}

</style>