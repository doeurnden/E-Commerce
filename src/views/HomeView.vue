<template>
    <Navbar />
    <div class="container">
        <section class="show">
            <div class="title">
                <div class="text">
                    <p>Free Shipping</p>
                    <p>On Order Over $50 - Use Coupon Code Over50</p>
                </div>
                <div class="link">
                    <div>
                        <router-link to="/women">Shop Women</router-link>
                    </div>
                    <div>
                        <router-link to="/men">Shop Men</router-link>
                    </div>
                    <div>
                        <router-link to="shopAll">Shop Sale</router-link> 
                    </div>
                </div>
            </div>
            <div class="model">
                <div><img src="../assets/image/t1.png" alt="t1"></div>
                <div><img src="../assets/image/t2.png" alt="t2"></div>
                <div><img src="../assets/image/t3.png" alt="t3"></div> 
            </div>
        </section>
        <section class="new-arrival">
            <div class="content">
                <p>NEW ARRIVALS</p>
                <div class="line"></div>
            </div>
            <div class="item"></div>
            <div class="next"></div>
        </section>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
    .container{
        .show{
            height: 100vh;
            .title{
                height: 40%;
                background-color: #ff6200;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .text{
                    color: white;
                    text-align: center;
                    p:first-child{
                        font-size: 60px;
                    }
                    p:nth-child(2){
                        font-size: 30px;
                    }
                }
                .link{
                    display: flex;
                    gap: 4rem;
                    div{
                        border: 2px solid white;
                        padding: 1rem 3rem;
                        font-size: 20px;
                        a{
                            color: white;
                            text-decoration: none;
                        }
                    }
                }
            }
            .model{
                height: 60vh;
                display: flex;
                gap: 1rem;
                padding-top: 1rem;
                img{
                    width: 100%;
                }
            }
        }
        .new-arrival{

        }
    }
</style>
