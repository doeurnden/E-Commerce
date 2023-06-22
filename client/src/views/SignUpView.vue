<template>
    <form action="#">
        <div>
            <label for="username">Username</label><br>
            <input type="text" placeholder="Enter your username" required>
        </div>
        <div>
            <label for="fname">First Name</label><br>
            <input type="text" placeholder="Enter your Frist Name" required>
        </div>
        <div>
            <label for="lname">Last Name</label><br>
            <input type="text" placeholder="Enter your Last Name" required>
        </div>
        <div>
            <label for="pws">Password</label><br>
            <input type="password" placeholder="Enter your Password" required>
        </div>
        <div>
            <label for="r-pws">Confirm Password</label><br>
            <input type="text" placeholder="repeat your Password" required>
        </div>
        <div>
            <label for="email">Email</label><br>
            <input type="email" placeholder="Enter your Email" required>
        </div>
        <div><button>Signup</button></div>
    </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
form{
    width: 600px;
    background-color: rgb(154, 149, 149);
    text-align: center;
}
</style>