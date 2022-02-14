<template>
  <div>欢迎您，{{ account }}!</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      account: sessionStorage.getItem("account"),
    };
  },
};
</script>

<style></style>
