<template>
  <div class="container">
    <div class="left">
      <div class="logo">
        <RouterLink to="/">DEN</RouterLink>
      </div>
      <div class="search">
        <font-awesome-icon class="icon" icon="fa-solid fa-magnifying-glass" />
        <input type="text" placeholder="Search...">
      </div>
    </div>

    <div class="right">
      <div class="content">
        <nav class="menu">
          <RouterLink to="/shopAll">Shop All</RouterLink>
          <RouterLink to="/women">Women</RouterLink>
          <RouterLink to="/men">Men</RouterLink>
          <RouterLink to="/sale">Sale</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
        <!-- </nav> -->
        <!-- <nav class="login-cart"> -->
        <nav class="account-cart">
          <RouterLink to="/login"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
          <RouterLink to="" id="cart" @click="store.state.sideBarState = true"><font-awesome-icon
              icon="fa-solid fa-bag-shopping" /></RouterLink>
        </nav>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { RouterLink } from 'vue-router'
import store from '../store';
</script>
  
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: white;

  .left {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    gap: 1rem;

    .logo {
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
        color: white;
        text-decoration: none;
      }
    }

    .search {
      width: 80%;
      display: flex;
      border-bottom: 1px solid black;

      input {
        border: none;
        outline: none;
        padding-left: .5rem;
        background: transparent;
      }
    }

  }

  .right {
    width: 70%;
    display: flex;
    gap: 1rem;

    .content {
      width: 100%;
      display: flex;

      .menu {
        width: 90%;
        display: flex;
        justify-content: center;
        gap: 1rem;

        a {
          color: black;
          text-decoration: none;
        }
      }

      .account-cart {
        width: 10%;
        display: flex;
        justify-content: end;

        a {
          display: flex;
          justify-content: end;
          width: 50%;
          color: black;
          text-decoration: none;
        }

      }
    }
  }
}

@media screen and (max-width: 500px) {
  *{font-size: .8rem;}
  .container {
    width: 100%;
    //4rem->3rem
    height: 3rem;
    display: flex;
    align-items: center;
    //1rem -> .5rem
    gap: .5rem;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: white;

    .left {
      height: 100%;
      width: 30%;
      display: flex;
      align-items: center;
      //1rem->.5rem
      gap: .5rem;

      .logo {
        //20-30
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
          color: white;
          text-decoration: none;
        }
      }

      .search {
        //80-70
        width: 70%;
        display: flex;
        border-bottom: 1px solid black;

        input {
          border: none;
          outline: none;
          padding-left: .5rem;
          background: transparent;
        }
      }

    }

    .right {
      width: 70%;
      display: flex;
      gap: 1rem;

      .content {
        width: 100%;
        display: flex;

        .menu {
          width: 90%;
          display: flex;
          justify-content: center;
          //1rem - 0
          gap: .2rem;

          a {
            color: black;
            text-decoration: none;
            font-size: .8rem;
          }
        }

        .account-cart {
          width: 10%;
          display: flex;
          justify-content: end;
          gap: .2rem;
          a {
            display: flex;
            justify-content: end;
            width: 50%;
            color: black;
            text-decoration: none;
          }

        }
      }
    }
  }
}
</style>
  