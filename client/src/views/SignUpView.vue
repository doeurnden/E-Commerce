<template>
    <main class="container">
        <div class="img"> 
            <img src="../assets/image/signup.jpg" alt="signup">
        </div>
        <div class="form">
            <form>
                <h2>Sign Up</h2>
                <div>
                    <!-- <label for="username">Username</label><br> -->
                    <input type="text" placeholder="username" required>
                </div>
                <div>
                    <!-- <label for="email">Email</label><br> -->
                    <input type="email" placeholder="email" required>
                </div>
                <div>
                    <!-- <label for="pws">Password</label><br> -->
                    <input type="password" placeholder="password" required>
                </div>
                <div>
                    <!-- <label for="r-pws">Confirm password</label><br> -->
                    <input type="password" placeholder="repeat password" required>
                </div>
                <div class="btn"><button>Signup</button></div>
            </form>
        </div> 
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
    width: 87rem;
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
        // height: 100%;
        // background-color: aqua;
        img {
            width: 100%;
            height: 100%;
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
            display: block;
            form{
                width: 100%;
                // height: 100%;
                h2{ 
                    margin-top: 1rem;
                    text-align: center;
                }
                div{
                    input{
                        width: 90%;
                        margin: 0 5%;
                        padding: .5rem;
                    }
                }
                .btn{
                    text-align: center;
                    margin-top: 1rem;
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