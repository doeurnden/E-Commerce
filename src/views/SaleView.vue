<template>
    <Navbar />
    <main>
        <header>
            <p>Sale</p>
            <div class="line"></div>
        </header>
        <ul>
            <li class="item">
                <div><img src="../assets/image/sale/front/s1f.jpg" alt="s1"></div>
                <div>
                    <p>s1</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s2f.jpg" alt="s2"></div>
                <div>
                    <p>s2</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s3f.jpg" alt="s3"></div>
                <div>
                    <p>s3</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s4f.jpg" alt="s4"></div>
                <div>
                    <p>s4</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s5f.jpg" alt="s5"></div>
                <div>
                    <p>s5</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s6f.jpg" alt="s6"></div>
                <div>
                    <p>s6</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s7f.jpg" alt="s7"></div>
                <div>
                    <p>s7</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/sale/front/s8f.jpg" alt="s8"></div>
                <div>
                    <p>s8</p>
                    <p>$10.00</p>
                </div>
            </li>
        </ul>
    </main>
    <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>
main{
    header{
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
            width: 6rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }
        
    }
    ul{
        // width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 1rem;
        grid-gap: 1rem;
        padding-left: 0;
        list-style-type: none;
        .item{
            div{
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>