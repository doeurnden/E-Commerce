<template>
    <div class="container">
        <div class="img"> 
            <img src="../assets/image/signup.jpg" alt="signup">
        </div>
        <div class="form">
            <form>
                <h2>Sign Up</h2>
                <div>
                    <label for="username">Username</label><br>
                    <input type="text" placeholder="username" required>
                </div>
                <div>
                    <label for="fname">First Name</label><br>
                    <input type="text" placeholder=" Frist Name" required>
                </div>
                <div>
                    <label for="lname">Last Name</label><br>
                    <input type="text" placeholder=" Last Name" required>
                </div>
                <div>
                    <label for="pws">Password</label><br>
                    <input type="password" placeholder="Password" required>
                </div>
                <div>
                    <label for="r-pws">Confirm password</label><br>
                    <input type="text" placeholder="repeat Password" required>
                </div>
                <div>
                    <label for="email">Email</label><br>
                    <input type="email" placeholder="Email" required>
                </div>
                <div class="btn"><button>Signup</button></div>
            </form>
        </div> 
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    display: flex;
    background-color: antiquewhite;

    .img{
        width: 50%;
        img {
            width: 100%;
            height: 100%;
        }
    } 
    .form{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        form{
            // width: 100%;
            h2{
                text-align: center;
            }
            .btn{
                display: flex;
                justify-content: center;
            }
        }   
    }
}

@media only screen and (max-width: 600px){
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        .img{
            width: 100%;
            height: 50%;
            img{
                height: 100%;
                width:100%;
            }
        }
        .form{
            width: 100%;
            height: 50%;
            display: flex;
            justify-content: center;
            form{
                width: 50%;
                height: 100%;
                gap: 0.4rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                h2{}
                div{
                    input{
                        padding: 0.5rem 1rem;
                    }
                }
                // .btn{
                //     button{
                //         width: 100px;
                //     }
                // }
            }
        }
    }
}


</style>