<template>
    <mainLayout>
        <main>
            <header>
                <p>Our Story</p>
                <div class="line"></div>
            </header>
            <div class="content">
                <div class="content-img">
                    <img src="../assets/image/den-no-back.png" alt="logo">
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
 @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
main {
    height: 60vh;

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

        .content-img,
        .content-description {
            width: 50%;
        }

        .content-img {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50%;
            }
        }

        .content-description {
            display: flex;
            justify-content: center;
            p{
                text-align: center;
                width: 50%;
                font-size: 18px;
                font-family:'Koulen', cursive;
                letter-spacing: 3px;
            }
        }
    }
}</style>