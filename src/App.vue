<template>
  <nav class="flex justify-around">
    <router-link
      to="/add"
      @click="active = 'addNewTask'"
      :class="{ active: active == 'addNewTask' }"
      class="text-2xl"
      >Add new task</router-link
    >
    <router-link
      to="/"
      @click="active = 'tasks'"
      :class="{ active: active === 'tasks' }"
      class="text-2xl"
      >Tasks</router-link
    >
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      active: null,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 700px;
  margin: 0 auto;
}

.active {
  color: green !important;
}
</style>
