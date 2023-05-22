<template>
    <Navbar />
    <section class="new-arrival">
        <div class="content">
            <p>SHOP ALL</p>
            <div class="line"></div>
        </div>
        <div class="item">
            <div>
                <img src="../assets/image/homePage/t4.png" alt="t4">
                <p>T1-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t5.png" alt="t5">
                <p>T2-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t6.png" alt="t6">
                <p>T3-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t7.png" alt="t7">
                <p>T4-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t8.png" alt="t8">
                <p>T5-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t9.png" alt="t9">
                <p>T6-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t10.png" alt="t10">
                <p>T7-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t11.png" alt="t11">
                <p>T8-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t12.png" alt="t12">
                <p>T9-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t13.png" alt="t13">
                <p>T10-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t14.png" alt="t14">
                <p>T11-Shirt</p>
                <p>$10</p>
            </div>
            <div>
                <img src="../assets/image/homePage/t15.png" alt="t15">
                <p>T12-Shirt</p>
                <p>$10</p>
            </div>
        </div>
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

    .item {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 1rem;
        grid-gap: 1rem;

        div {

            // width: 100%;
            img {
                width: 100%;
                // height: 90%;
            }

            p:nth-child(3) {
                color: #ff6200;
            }

            p {
                height: 5%;
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