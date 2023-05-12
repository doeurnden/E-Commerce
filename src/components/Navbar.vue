<template>
  <nav>
    <div class="left">
      <span id="den">
        <router-link to="/">DEN</router-link>
      </span>
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
        Search...
      </span>
    </div>

    <div class="right">
      <div>
        <span><router-link to="/shopAll">Shop All</router-link></span>
        <span><router-link to="/women">Women</router-link></span>
        <span><router-link to="/men">Men</router-link></span>
        <span><router-link to="/sale">Sale</router-link></span>
        <span><router-link to="/about">About</router-link></span>
        <span><router-link to="/contact">Contact</router-link></span>
      </div>
      <div>
        <span>
          <router-link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            Login
          </router-link>
        </span>
        <span>
          <router-link to="cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
            </svg>
          </router-link>
        </span>
      </div>
    </div>
  </nav>
</template>
  
<script>

</script>
  
<style lang="scss" scoped>
nav {
  width: 100%;
  height: 3rem;
  background-color: rgb(207, 207, 207);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    span {
      margin-right: 1rem;
    }

    #den a{
      color: white;
      background-color: black;
      padding: 0.5rem;
      text-decoration: none;
      margin-left: 1rem;
    }
  }

  .right {
    display: flex;
    gap: 1rem;
    div a{
      text-decoration: none;
      color: black;
    }
    :hover{
      color: chocolate;
    }

    div:first-child {
      span {
        margin-right: 1rem;
      }
    }

    div:nth-child(2) {
      span {
        margin: 1rem;
      }
    }
  }
}

svg {
  width: 12px;
}
</style>
  