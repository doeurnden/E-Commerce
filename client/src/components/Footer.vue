<template>
    <section class="section1">
        <div class="data">
            <div class="link">
                <p><router-link to="/shopAll">Shop All</router-link></p>
                <p><router-link to="/about">About</router-link></p>
                <p><router-link to="/contact">Contact</router-link></p>
                <p>Stockists</p>
            </div>
            <div class="more-info">
                <p>FQA</p>
                <p>Shipping & Returns</p>
                <p>Store Policy</p>
                <p>Payment Methods</p>
            </div>
            <div class="social">
                <p>Instagram <font-awesome-icon icon="fa-brands fa-square-instagram" /></p>
                <p>Pinterest <font-awesome-icon icon="fa-brands fa-pinterest" /></p>
                <p>Facebook <font-awesome-icon icon="fa-brands fa-facebook" /></p>
                <p>Twitter <font-awesome-icon icon="fa-brands fa-twitter" /></p>
            </div>
        </div>
    </section>
    <section class="section2">
        <p id="copy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                    d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z" />
            </svg>
            2023 by DEN.
        </p>
    </section>
</template>

<script>

</script>

<style lang="scss" scoped>
*{margin: 0;}
.section1 {
    width: 100%;
    height: 15rem;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    background-color: black;
    color: white;
    margin-top: 1rem;
    border-radius: 5px;
    box-shadow: 2px 2px 2px #000000;

    .data {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        div {
            height: 100%;

            p {
                height: 25%;
                display: flex;
                // justify-content: space-around;
                align-items: center;
            }
        }

        div:first-child {
            p {
                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }

        .message {
            input[type=email] {
                border: 3px solid rgb(255, 255, 255);
                background-color: black;
                color: aliceblue;
                padding: 0.5rem 1rem;
                outline: none;
                // font-weight: bold;
            }

            ::-webkit-input-placeholder {
                color: rgb(255, 255, 255);
                font-weight: bold;
            }

            input[type=submit] {
                color: aliceblue;
                background-color: #ff6200;
                border: none;
                padding: .5rem 1rem;
            }

            input[type=submit]:hover {
                background-color: #ffb180;
            }
        }
    }
}

.section2 {
    margin-top: 1rem;
    p {
        margin-left: 5%;

        svg {
            width: 16px;
            height: 16px;
        }
    }
}</style>