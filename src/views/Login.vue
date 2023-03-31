<template>
    <div class="login">
      <h1>This is an login page</h1>
      <!-- <br>
      <br> -->
      <button @click="$emit('cancel')">Cancel</button>
    </div>
  </template>
  
  <style lang="scss">
    
    .login{
        // display: flex;
        // flex-direction: column;
        button{
            width: 4rem;
            height: 2rem;
        }
    }

  </style>