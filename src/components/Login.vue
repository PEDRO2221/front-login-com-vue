<template>
  <div class="background">
    <div class="card login-component">
      <h2 class="text-body-secondary">Login</h2>
      <Form @submit="onSubmit" @invalid-submit="onInvalidSubmit">
        <div class="input-group flex-nowrap">
          <label class="input-group-text" id="addon-wrapping" for="email">
            <i class="bi bi-person-circle"></i>
          </label>
          <Field v-model="username" class="form-control" name="email" type="email" rules="required|email"
            placeholder="Email" />
        </div>
        <div class="input-group flex-nowrap">
          <label class="input-group-text" id="addon-wrapping" for="password"><i class="bi bi-shield-lock"></i></label>
          <input class="form-control" type="password" v-model="password" required placeholder="Senha" />
        </div>
        <div class="redefinir-senha">
          <a href="#">Recuperar Senha</a>
        </div>
        <div class="subt">
          <button type="submit" class="submit btn btn-outline-success">Login</button>

        </div>
      </Form>
      <!-- <div class="subt">
        <button type="submit" class="submit btn btn-outline-success" @submit.prevent="">Register</button>
      </div> -->

    </div>
  </div>

</template>

<script lang="ts">
import { Form, Field } from 'vee-validate';
export default {
  components: {
    Form,
    Field,
  },
  methods: {
    onSubmit(values: any) {
      // console.log(JSON.stringify(values, null, 2));
      alert("passei")
    },
    onInvalidSubmit({ values, errors, results }: any) {
      const keys = Object.keys(errors);
      const firstKey = keys[0];
      const firstMessage = errors[firstKey]
      alert(firstMessage)
     
      console.log(errors)
    },
  },
  data() {
    return {
      username: '',
      password: ''
    };
  },
};
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

.redefinir-senha {
  text-decoration: none;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  font-size: 14px;
  align-items: center;
}

.redefinir-senha a {
  color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1));
  text-decoration: none;
}

.submit {
  gap: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.subt {
  width: 100%;
}
</style>