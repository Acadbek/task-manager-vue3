<template>
  <nav class="flex justify-around">
    <router-link
      to="/add"
      @click="active = 'addNewTask'"
      :class="{ 'text-green-700': active == 'addNewTask' }"
      class="text-2xl"
      >Add new task</router-link
    >
    <router-link
      to="/"
      @click="active = 'tasks'"
      :class="{ 'text-green-700': active === 'tasks' }"
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