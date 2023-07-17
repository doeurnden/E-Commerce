<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
    }

    .login-container {
        max-width: 300px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    }

    .login-container h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .login-container input[type="text"],
    .login-container input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
    }

    .login-container input[type="submit"] {
        width: 100%;
        padding: 10px;
        background-color: #4caf50;
        border: none;
        color: #ffffff;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-container input[type="submit"]:hover {
        background-color: #45a049;
    }
</style>

<body>
    <div class="login-container">
        <h2>Login</h2>
        <form>
            <input type="text" placeholder="Username" required>
            <input type="password" placeholder="Password" required>
            <input type="submit" value="Login">
        </form>
    </div>
</body>

</html>