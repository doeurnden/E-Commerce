<template>
    <mainLayout>
        <main>
            <header>
                <p>Our Story</p>
                <div class="line"></div>
            </header>
            <div class="content">
                <div class="content-img">
                    <img src="../assets/image/ex1.jpg" alt="logo">
                </div>
                <div class="content-description">
                    <p>Welcome to DEN Store, an online platform created by
                        a fourth-year student in 2023. Our goal is to simplify
                        the process of finding the perfect T-shirt. We curate a
                        thoughtfully selected collection of trendy and high-quality
                        T-shirts, ensuring there's something for everyone. Our user-friendly
                        interface and detailed product descriptions help shoppers make informed
                        decisions. In the future, we aim to create a thriving community of fashion
                        enthusiasts and collaborate with emerging designers. Join us on this adventure
                        for an exceptional T-shirt shopping experience.</p>
                </div>
            </div>
        </main>
    </mainLayout>
</template>

<script setup>
import mainLayout from '@/layout/mainLayout.vue'
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
main {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
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
            width: 15rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }

    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        .content-img,
        .content-description {
            width: 50%;
        }

        .content-img {
            display: flex;
            justify-content: center;
            align-items: center;
            // width: 100%;
            img {
                width: 80%;
                // height: 100%;
                opacity: .8;
                border-radius: 5px;
            }
        }

        .content-description {
            display: flex;
            justify-content: center;
            p{
                width: 100%;
                font-size: large;
            }
        }
    }
}
@media only screen and (max-width: 1000px){
    main{
        height: 70vh;
        .content-description {
            display: flex;
            justify-content: center;
        }
    }
}
</style>