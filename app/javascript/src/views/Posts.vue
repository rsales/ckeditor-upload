<template>
  <div id="posts">
    <p>{{ message }}</p>
    <router-link to="/new">Criar novo post</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
