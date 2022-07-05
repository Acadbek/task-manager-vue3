<template>
  <div class="relative">
    <div
      @click="showDeadlineFunc"
      id="title"
      class="cursor-pointer flex items-center justify-between bg-slate-900 p-3 rounded-md mb-2"
      :class="
        data.completed
          ? 'border-l-8 border-l-green-500'
          : 'border-l-8 border-l-red-500'
      "
    >
      <p class="text-xl text-slate-500 ml-3">
        {{ data.title }}
      </p>
      <div class="!mt-0 flex gap-3">
        <Button
          @click="inProcess()"
          :class="this.data.completed ? 'block' : 'hidden'"
          picture_src="pass.svg"
        />
        <Button
          @click="completed(this.data.id)"
          :class="this.data.completed ? 'hidden' : 'block'"
          picture_src="stop-circle.svg"
        />

        <router-link :to="{ name: 'edit', params: { id: data.id } }">
          <Button picture_src="edit.svg" />
        </router-link>

        <Button @click="remove(this.data.id)" picture_src="trash.svg" />
      </div>
    </div>
    <div class="deadline overflow-hidden px-2">
      <p v-if="showDeadline" class="text-sm">{{ data.deadline }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Button from "./Button.vue";

export default {
  props: ["data"],
  data() {
    return {
      showDeadline: false,
      completedTask: false,
      url: `http://localhost:3000/data/${this.data.id}`,
    };
  },
  components: { Button },
  methods: {
    async remove() {
      await axios.delete(`http://localhost:3000/data/${this.data.id}`);
      this.$emit("remove", this.data.id);
    },
    async completed(index) {
      await axios.patch(this.url, {
        completed: !this.data.completed,
      });
      this.$emit("completed", this.data.id);
    },
    async inProcess(id) {
      await axios.patch(this.url, {
        completed: !this.data.completed,
      });
      this.$emit("inProcess", this.data.id);
    },
    showDeadlineFunc(e) {
      if (e.target.id === "title") {
        this.showDeadline = !this.showDeadline;
      }
    },
  },
};
</script>
