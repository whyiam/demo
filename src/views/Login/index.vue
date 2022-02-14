<template>
  <div class="login">
    <input
      @keyup.13="handleLogin"
      type="text"
      v-model="loginForm.account"
      placeholder="Account"
    />
    <br />
    <input
      @keyup.13="handleLogin"
      type="password"
      v-model="loginForm.password"
      placeholder="Password"
    />
    <br />
    <button @click="handleLogin">LOGIN</button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {},
    };
  },
  methods: {
    handleLogin() {
      let { account, password } = this.loginForm;

      if (!(account && password)) {
        alert("the login message is not compelete!");
        return;
      }

      if (account === "admin" && password === "admin") {
        sessionStorage.setItem("account", account);
        this.$router.push("/index");
      } else {
        this.$router.push("/error");
      }
    },
  },
};
</script>

<style>
.login {
  text-align: center;
}
</style>
