<template>
    <main class="container">
        <div class="img"> 
            <img src="@/assets/image/login.png" alt="signup">
        </div>
        <div class="form">
            <form>
                <h2>Login</h2>
                <div>
                    <!-- <label for="email">Email</label><br> -->
                    <input type="email" placeholder="email" required>
                </div>
                <div>
                    <!-- <label for="pws">Password</label><br> -->
                    <input type="password" placeholder="password" required>
                </div>
                <div class="btn"><button>Login</button></div>
                <p>Don't have an account ? <router-link to="signup" style="text-decoration: none;">Sign up</router-link></p>
            </form>
        </div> 
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
    width: 77rem;
    height: 37rem;
    // height: 100%;
    display: flex;
    background-color: antiquewhite;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .img{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeeee;
        // background-color: aqua;
        img {
            // width: 100%;
            height: 100%;
            
            // object-fit: cover;
        }
    } 
    .form{
        // height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        form{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            div{
                width: 100%;
                input{
                    padding: .5rem;
                    width: 80%;
                    margin: 0 10%;
                }
            }
            .btn{
                display: flex;
                justify-content: center;
                button{
                    width: 5rem;
                    height: 2rem;
                }
            }
        }
    }
}
@media only screen and (max-width: 1100px){
    .container{
        width: 50rem;
        height: 28rem;

        .form{
            form{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            // gap: 1rem;
            div{
                width: 100%;
                input{
                    // padding: .5rem;
                    width: 80%;
                    margin: 0 10%;
                }
            }
            .btn{
                display: flex;
                justify-content: center;
                button{
                    width: 5rem;
                    height: 2rem;
                }
            }
        }
        }
    }
}

@media only screen and (max-width: 600px){
    .container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        .img{
            width: 100%;
            height: 50%;
            img{
                // height: 100%;
                width:100%;
            }
        }
        .form{
            width: 100%;
            height: 50%;
            display: flex;
            form{
                width: 100%;
                height: 100%;
                h2{ 
                    text-align: center;
                    padding-bottom: 15%;
                }
                div{
                    padding: 0;
                    margin: 0;
                    input{
                        width: 90%;
                        margin: 0 5%;
                        padding: .5rem;
                        // margin:  1rem;
                    }
                }
                .btn{
                    text-align: center;
                    margin-top: 1rem;
                    // padding-top: 10%;
                    button{
                        width: 4rem;
                        height: 1.5rem;
                        border: none;
                        border-radius: .2rem;
                        color: white;
                        background-color: black;

                    }
                }
            }
        }
    }
}


</style>