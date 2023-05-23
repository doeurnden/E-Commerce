<template>
    <Navbar />
    <section class="new-arrival">
        <div class="content">
            <p>SHOP ALL</p>
            <div class="line"></div>
        </div>
        <ul>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa1f.jpg" alt="sa1"></div>
                <div>
                    <p>sa1</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa2f.jpg" alt="sa2"></div>
                <div>
                    <p>sa2</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa3f.jpg" alt="sa3"></div>
                <div>
                    <p>sa3</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa4f.jpg" alt="sa4"></div>
                <div>
                    <p>sa4</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa5f.jpg" alt="sa5"></div>
                <div>
                    <p>sa5</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa6f.jpg" alt="sa6"></div>
                <div>
                    <p>sa6</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa7f.jpg" alt="sa7"></div>
                <div>
                    <p>sa7</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa8f.jpg" alt="sa8"></div>
                <div>
                    <p>sa8</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa9f.jpg" alt="sa9"></div>
                <div>
                    <p>sa9</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa10f.jpg" alt="sa10"></div>
                <div>
                    <p>sa10</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa11f.jpg" alt="sa11"></div>
                <div>
                    <p>sa11</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa12f.jpg" alt="sa12"></div>
                <div>
                    <p>sa12</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa13f.jpg" alt="sa13"></div>
                <div>
                    <p>sa13</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa14f.jpg" alt="sa14"></div>
                <div>
                    <p>sa14</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa15f.jpg" alt="sa15"></div>
                <div>
                    <p>sa15</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa16f.jpg" alt="sa16"></div>
                <div>
                    <p>sa16</p>
                    <p>$10.00</p>
                </div>
            </li>
            <li class="item">
                <div><img src="../assets/image/shopAll/front/sa17f.jpg" alt="sa17"></div>
                <div>
                    <p>sa17</p>
                    <p>$10.00</p>
                </div>
            </li> <li class="item">
                <div><img src="../assets/image/shopAll/front/sa18f.jpg" alt="sa18"></div>
                <div>
                    <p>sa18</p>
                    <p>$10.00</p>
                </div>
            </li> <li class="item">
                <div><img src="../assets/image/shopAll/front/sa19f.jpg" alt="sa19"></div>
                <div>
                    <p>sa19</p>
                    <p>$10.00</p>
                </div>
            </li> <li class="item">
                <div><img src="../assets/image/shopAll/front/sa20f.jpg" alt="sa20"></div>
                <div>
                    <p>sa20</p>
                    <p>$10.00</p>
                </div>
            </li>
        </ul>
    </section>
    <div class="load-more">
        <button @click="load">Load More</button>
    </div>
    <Footer/>
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
    components: {
        Navbar,
        Footer
    },
    data(){
        return{
            item: '',
            data: []
        }
    },
    methods:{
        load(){
            alert('Hello World!')
        }
    }
}
</script>

<style lang="scss" scoped>
.new-arrival {

    // margin-top: 1rem;
    .content {
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
            height: 5px;
            width: 14rem;
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
.load-more{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    button{
        color: white;
        background-color: #ff6200;
        padding: .8rem 8rem;
        border: none;
    }
}
</style>