<template>
    <div class="background">
      <div class="card login-component">
        <h2 class="text-body-secondary">Recuperação</h2>
        <form @submit.prevent="">
          <div class="input-group flex-nowrap">
            <label class="input-group-text" id="addon-wrapping" for="email">
              <i class="bi bi-person-circle"></i>
            </label>
            <input class="form-control" type="email" id="email" v-model="loginData.email" required />
          </div>
          <div class="subt">
            <button type="submit" class="submit btn btn-outline-success">Recuperar</button>
          </div>
        </form>
      </div>
    </div>
  
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  export default defineComponent({
    name: 'pass',
    data() {
      return {
        loginData: {
          email: '',
        }
      }
    },
  })
  </script>
  
  <style scoped>
  .login-component {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 60px 20px;
    gap: 30px;
    align-items: center;
  }
  
  .background {
    background-color: #3d7272;
    height: 100vh;
    display: flex;
    padding: 20px;
    justify-content: center;
    margin: 0px;
    flex-direction: column;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 90%;
  }
  .subt{
    width: 100%;
  }
  .submit {
    gap: 10px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
  </style>