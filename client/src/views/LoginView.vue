<template>
    <main>
        <div class="container">
            <div class="left-side">
                <h1>Welcome Back Again</h1>
            </div>
            <aside class="right-side">
                <div>
                    <h2>Login</h2><br>
                    <div class="form">
                        <form>
                            <input type="text" placeholder="username" required><br><br>
                            <input type="password" placeholder="password" required>
                            <p>forget password?</p><br>
                            <div><input type="submit" value="login"></div><br>
                            <p>Don't have an account?<router-link to="signup"> sign up</router-link></p>
                        </form>
                    </div>
                </div>
            </aside>
        </div>
    </main>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
main{
    height: 98vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2eaf9;
    .container{
        display: flex;
        width: 80%;
        height: 80%;
        // border-radius: 10px;
        .left-side{
            width: 50%;
            height: 100%;
            border-radius: 10px 0px 0px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            background-color: #ff6200;
            h1{
                font-size: 50px;
                text-shadow: 1px 1px 20px #766363;
                font-family: 'Koulen', cursive;
                text-align: center;
            }
        }
        .right-side{
            width: 50%;
            height: 100%;
            background-color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0px 10px 10px 0px;;
            div{
                h2{
                    text-align: center;
                    color: #ff6200;
                    font-size: 40px;
                }
                .form{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    form{
                        // width: 100%;
                        input[type=text],input[type=password]{
                            padding: .8rem 7rem .8rem 1rem;
                            border: none;
                            background-color: #efefef;
                            outline-color: #ff6200;
                            border-radius: 5px;
                            // margin: .5rem 1rem;
                        }
                        input[type=submit]{
                            padding: .5rem 2rem;
                            color: #ffffff;
                            background-color: #ff6200;
                            border: none;
                            border-radius: 5px;
                        }
                        input[type=submit]:hover{
                            cursor: pointer;
                        }
                        div{
                            display: flex;
                            justify-content: center;
                        }
                        p{
                            text-align: end;
                            color: #ff6200;
                            a{
                                text-decoration: none;
                                color: #ff6200;
                            }
                        }
                        button{
                            padding: .5rem 1rem;
                            color: #ff6200;
                            border: 1px solid #ff6200;
                            border-radius: 5px;
                            svg{
                                height: 12px; 
                                margin-left: 1rem; 
                                fill: #ff6200;
                            }
                        }
                        button:hover{
                            cursor: pointer;
                        }
                    }
                }

            }
        }
    }
}
</style>