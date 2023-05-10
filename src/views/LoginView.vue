<template>
    <header>
        <form>
        <div>
            <label>Email</label><br>
            <input type="email" placeholder="email" required><br><br>
            <label>Password</label><br>
            <input type="password" placeholder="password" required><br><br>
            <section class="submit">
                <input type="submit" value="Login">
            </section>
        </div>
    </form>
    </header>
    
</template>

<script>
</script>

<style lang="scss" scoped>
header{

    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
    width: 40rem;
    height: 20rem;
    background-color: darkgray;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
        .submit{
            display: flex;
            justify-content: center;
            input{
                color: aliceblue;
                background-color: rgb(109, 204, 255);
                cursor: pointer;
                
            }
            :hover{
                background-color: red;
            }
        }
        input{
            padding: 0.4rem;
            border-radius: 5px;
        }
    }
}
}
</style>