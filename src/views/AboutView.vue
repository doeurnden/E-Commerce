<template>
    <Navbar />
    <main>
        <header>
            <p>Our Story</p>
            <div class="line"></div>
        </header>
        <div class="content">
            <img src="../assets/image/den-no-back.png" alt="logo">
        </div>
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
            width: 18rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }
        
    }
    .content{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>