<template>
    <mainLayout>
        <main>
              <header>
                  <p>WOMEN</p>
                  <div class="line"></div>
              </header>
              <ul>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w1.jpg" alt="w1"></div>
                      <div>
                          <p>W1</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w2.jpg" alt="w2"></div>
                      <div>
                          <p>W2</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w3.jpg" alt="w3"></div>
                      <div>
                          <p>W3</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w4.jpg" alt="w4"></div>
                      <div>
                          <p>W4</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w5.jpg" alt="w5"></div>
                      <div>
                          <p>W5</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w6.jpg" alt="w6"></div>
                      <div>
                          <p>W6</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w7.jpg" alt="w7"></div>
                      <div>
                          <p>W7</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w8.jpg" alt="w8"></div>
                      <div>
                          <p>W8</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w9.jpg" alt="w9"></div>
                      <div>
                          <p>W9</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w10.jpg" alt="w10"></div>
                      <div>
                          <p>W10</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w11.jpg" alt="w11"></div>
                      <div>
                          <p>W11</p>
                          <p>$10.00</p>
                      </div>
                  </li>
                  <li class="item">
                      <div><img src="../assets/image/women/front/w12.jpg" alt="w12"></div>
                      <div>
                          <p>W12</p>
                          <p>$10.00</p>
                      </div>
                  </li>
              </ul>
          </main>

    </mainLayout>

</template>

<script setup>
import mainLayout from '../layout/mainLayout.vue';

</script>

<style lang="scss" scoped>
main{
    // min-height: 80vh;
    header{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: fit-content;
        position: relative;
        margin-top: 4rem;
        p {
            font-size: 4rem;
            text-align: center;
            margin: 0;
            line-height: .6;
            z-index: 10;
            font-family: 'Koulen', cursive;
        }
        .line {
            height: 8px;
            width: 11rem;
            background-color: #ff6200;
            position: absolute;
            bottom: 0;
        }
    }
    ul{
        // width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: 1rem;
        grid-gap: 1rem;
        padding-left: 0;
        list-style-type: none;
        .item{
            div{
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>