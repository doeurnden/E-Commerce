<template>
    <Navbar/>
    <main>
        <header>
            <p>Contact Us</p>
            <div class="line"></div>
        </header>
        <article>
            <div class="foc">
                <div>
                    <div><h2>Flagship Store</h2></div>
                    <div>
                        <p>500 Terry Francine St. <br>
                        San Francisco, CA 94158 <br>
                        123-456-7890
                        </p>
                    </div>
                </div>
                <div>
                    <div><h2>Opening Hours</h2></div>
                    <div>
                        Mon-Fri: 7am - 10am <br>
                        Saturday: 8am - 10pm <br>
                        Sunday: 8am - 11pm
                    </div>
                </div>
                <div>
                    <div><h2>Customer service</h2></div>
                    <div>
                        <p>1-800-000-000 <br>
                        123-456-7890 <br>
                        info@doeurnden.xyz
                    </p>
                    </div>
                </div>
            </div>
            <div class="dot"></div>
            <div class="stock">
                <div><h2>Stockists</h2></div>
                <div class="stockists">
                    <div class="each-stock">
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                    </div>
                    <div class="each-stock">
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                         <div>
                            500 Terry Francine St. <br>
                             San Francisco, CA 94158 <br>
                             123-456-7890
                         </div>
                    </div>
                </div>
            </div>
            <div class="dot"></div>
            <div class="input-field">
                <h2>For inquiries regarding an order, please include your <br>
                     order number and the date your order was placed
                </h2>
                <form action="#">
                    <input type="text" placeholder="Name">
                    <input type="email"  placeholder="Email">
                    <input type="text"  placeholder="How Can We Help?">
                    <input type="submit" value="Submit">
                </form>
            </div>
        </article>
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
    article{
        .foc{
            display: flex;
            justify-content: center;
            gap: 10rem;
        }
        .dot{
            width: 1rem;
            height: 1rem;
            background-color: #ff6200;
            margin: 1rem auto;
        }
        .stock{
            h2{
                text-align: center;
            }
            .stockists{
                .each-stock{
                    display: flex;
                    justify-content: center;
                    gap: 10rem;
                    text-align: center;
                    margin-top: 1rem;
                }
            }
        }
        .input-field{
            h2{
                text-align: center;
            }
            form{
                display: flex;
                justify-content: center;
                gap: 1rem;
                input{
                    padding: .5rem 1rem;
                }
                input[type=text],input[type=email]{
                    border: 2px solid #ff6200;
                    outline: none;
                }
                ::-webkit-input-placeholder{
                    color: #ff6200;
                }
                input[type=submit]{
                    border: none;
                    color: white;
                    background-color: #ff6200;
                    padding: 0 2rem;
                    cursor: pointer;
                }
                input[type=submit]:hover{
                    background-color: #ffb180;
                }
            }
        }
    }
}
</style>