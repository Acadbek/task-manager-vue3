<template>
  <Filter @sort="current = $event" :current="current" class="my-5" />
  <div class="home" v-for="(item, i) in sortedArr" :key="i">
    <Single
      @remove="remove"
      :data="item"
      @completed="completed"
      @inProcess="inProcess"
    />
  </div>
</template>

<script>
import axios from "axios";
import Single from "../components/Single.vue";
import Filter from "../components/Filter.vue";

export default {
  name: "HomeView",
  components: {
    Single,
    Filter,
  },
  data() {
    return {
      data: [],
      url: "http://localhost:3000/data",
      current: "all",
    };
  },
  async mounted() {
    let res = await axios.get(this.url);
    this.data = res.data;
  },
  methods: {
    remove(id) {
      this.data = this.data.filter((item) => item.id !== id);
    },
    completed(id) {
      let findCompleted = this.data.find((item) => item.id === id);
      console.log(findCompleted);
      findCompleted.completed = !findCompleted.completed;
    },
    inProcess(id) {
      let findCompleted = this.data.find((item) => item.id === id);
      findCompleted.completed = !findCompleted.completed;
    },
  },
  computed: {
    sortedArr() {
      if (this.current === "all") {
        return this.data;
      } else if (this.current === "completed") {
        return this.data.filter((item) => item.completed == true);
      } else if (this.current === "process") {
        return this.data.filter((item) => item.completed == false);
      }
    },
  },
};
</script>
