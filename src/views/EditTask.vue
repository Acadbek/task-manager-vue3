<template>
  <form @submit.prevent="add" class="bg-white p-5 rounded-lg">
    <p class="bg-[#4c1d95] text-white !w-full py-2 text-center">
      Edit
    </p>
    <label
      class="block text-[#bbb] uppercase text-sm font-bold tracking-tighter mt-5 mr-0 mb-3 ml-0"
      >Title:</label
    >
    <input
      v-model="title"
      placeholder="Enter new task"
      class="p-3 border-b-2 border-[#ddd] w-full box-border"
      required
      type="text"
    />
    <label
      class="block text-[#bbb] uppercase text-sm font-bold tracking-tighter mt-5 mr-0 mb-3 ml-0"
      >Deadline:
    </label>
    <textarea
      v-model="deadline"
      placeholder="Enter deadline"
      class="border-1 border-[#ddd] p-3 w-full box-border h-full"
    ></textarea>
    <button
      class="block mt-5 mx-auto bg-green-500 text-white p-3 border-none rounded-md text-base"
    >
      add task
    </button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  data() {
    return {
      title: "",
      deadline: "",
    };
  },
  async mounted() {
    let { data } = await axios.get("http://localhost:3000/data/" + this.id);
    console.log(data);
    (this.title = data.title), (this.deadline = data.deadline);
  },
  methods: {
    async add() {
      await axios.patch("http://localhost:3000/data/" + this.id, {
        title: this.title,
        deadline: this.deadline,
      });
      this.$router.push("/");
    },
  },
};
</script>