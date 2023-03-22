<template>
  <div class="title">
    <h1>DEN STORE</h1>
    <h3>Welcome To Den Store</h3>
    <div>
      <button>Shop Women</button>
      <button>Shop Men</button>
      <button>Shop Sale</button>
    </div>
  </div>
  <div class="pano">
    <div>
      <img src="\src\assets\image\t1.png" alt="t1.png">
    </div>
    <div>
      <img src="\src\assets\image\t2.png" alt="t2.png">
    </div>
    <div>
      <img src="\src\assets\image\t3.png" alt="t3.png">
    </div>
  </div>

  <div class="item">
    <div>
      <h1>New Arrival</h1>
    </div>
    <div class="product">
      <div>
        <img src="/src/assets/image/t4.png" alt="t4.png">
        <p>T1 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t5.png" alt="t5.png">
        <p>T2 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t6.png" alt="t6.png">
        <p>T3 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t7.png" alt="t7.png">
        <p>T4 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t8.png" alt="t8.png">
        <p>T5 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t9.png" alt="t9.png">
        <p>T6 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t10.png" alt="t10.png">
        <p>T7 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t11.png" alt="t11.png">
        <p>T8 <br> 10$</p>
      </div>
      <div>
        <img src="/src/assets/image/t12.png" alt="t12.png">
        <p>T9 <br> 10$</p>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="left">
      <div>Home</div>
      <div><a href="#">Facebook</a></div>
      <div>Category</div>
      <div><a href="#">Instagam</a></div>
      <div>Contact</div>
      <div><a href="#">Tweeter</a></div>
      <div>About</div>
      <div><a href="#">Pinterest</a></div>
    </div>
    <div class="right">
      <h2>Join our mailing list</h2>
      <p>and get 10% off</p>
      <button>Enter your email here</button><br>
      <button>Suscribe now</button>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
  .title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20rem;
    background-color: rgb(255, 148, 70);
    margin: 10px 0;
  }

  
  .title button{
    border: 2px solid white;
    margin-right: 10px;
    background-color: rgb(255, 148, 70);
    color: white;
    padding: 0.5rem;
  }
  .pano{
    display: flex;
    height: 25rem;
    background-color: rgb(198, 198, 198);
    margin-top: 10px;
    justify-content: space-around;
  }
  .pano div{
    height: 100%;
    width: 30%;
    /* background-color: red; */
  }
  .pano div img{
    height: 100%;
    width: 100%;
  }
  .item{
    width: 100%;
    /* height: 20rem; */
  }
  .item h1{
    text-align: center;
  }
  .item .product{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 10px;
    /* width: 30%; */
  }
  .item .product div{
    width: 100%;
    /* height: 50%; */
    background-color: rgb(174, 174, 174);
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    position:static;
  }
  .item .product div img{
    /* height: 50%; */
    width: 100%;
  }
  .footer{
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    width: 100%;
    height: 20rem;
    background-color: rgb(124, 122, 122);
  }
  .footer .left{
    width: 50%;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);

  }
  .footer .right{
    width: 50%;
    text-align: center;
    align-items: center;
  }

</style>