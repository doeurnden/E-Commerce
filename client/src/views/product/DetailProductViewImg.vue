<template>
    <div class="container">
        <div class="cancel-btn"><button>X</button></div>
        <div class="back-img-next">
            <div class="back"><font-awesome-icon class="custom-icon" icon="fa-solid fa-chevron-left" /></div>
            <div class="img"><img src="../../assets/image/men/front/m7f.jpg" alt="m7f"></div>
            <div class="next"><font-awesome-icon class="custom-icon" icon="fa-solid fa-chevron-right" /></div>
        </div>
        <div class="flex-element">
            <div class="circle-flex"></div>
            <div class="circle-flex"></div>
            <div class="circle-flex"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    height: 80vh;
    width: 80vw;
    background-color: rgb(150, 154, 158);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .cancel-btn {
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: end;
        align-items: start;
        // background-color: antiquewhite;
    }

    .back-img-next {
        width: 100%;
        height: 80%;
        display: flex;

        .back,
        .next {
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .custom-icon{
                font-size: 36px;
            }
        }

        .img {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 50%;
            }
        }
    }
    .flex-element{
        width: 100%;
        height: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: antiquewhite;
        gap: 1rem;
        .circle-flex{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: aliceblue;
        }
    }
}

@media only screen and (max-width: 500px) {
    .container {
        height: 60vh;
        width: 80vw;
        background-color: rgb(150, 154, 158);

        .cancel-btn {}

        .back-img-next {
            .img {
                img {
                    width: 90%;
                }
            }
        }
    }
}
</style>