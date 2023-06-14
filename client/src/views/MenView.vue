<template>
    <Navbar />
    <main>
        <header>
            <p>MEN</p>
            <div class="line"></div>
        </header>
        <ul>
            <li class="item">
                <div><img src="../assets/image/men/front/m1f.jpg" alt="m1"></div>
                <div>
                    <p>m1</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m2f.jpg" alt="m2"></div>
                <div>
                    <p>m2</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m3f.jpg" alt="m3"></div>
                <div>
                    <p>m3</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m4f.jpg" alt="m4"></div>
                <div>
                    <p>m4</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m5f.jpg" alt="m5"></div>
                <div>
                    <p>m5</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m6f.jpg" alt="m6"></div>
                <div>
                    <p>m6</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m7f.jpg" alt="m7"></div>
                <div>
                    <p>m7</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m8f.jpg" alt="m8"></div>
                <div>
                    <p>m8</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m9f.jpg" alt="m9"></div>
                <div>
                    <p>m9</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m10f.jpg" alt="m10"></div>
                <div>
                    <p>m10</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m11f.jpg" alt="m11"></div>
                <div>
                    <p>m11</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/men/front/m12f.jpg" alt="m12"></div>
                <div>
                    <p>m12</p>
                    <p>$10.00</p>
                </div>
            </li>
        </ul>
    </main>

</template>

<script setup>

import Navbar from '../components/Navbar.vue'


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