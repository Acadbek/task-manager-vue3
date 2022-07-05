<template>
  <div class="flex items-center justify-center">
    <nav class="flex gap-3">
      <button
        :class="{
          'text-white border border-1 border-blue-800': current === 'all',
        }"
        @click="sort('all')"
        class="rounded-md active:scale-95 bg-blue-500 text-white px-4 py-2"
      >
        All
      </button>
      <button
        :class="{
          'text-white border border-1 border-blue-800': current === 'completed',
        }"
        @click="sort('completed')"
        class="rounded-md active:scale-95 bg-blue-500 text-white px-4 py-2"
      >
        Completed
      </button>
      <button
        :class="{
          'text-white border border-1 border-blue-800': current === 'process',
        }"
        @click="sort('process')"
        class="rounded-md active:scale-95 bg-blue-500 text-white px-4 py-2"
      >
        In process
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  props: ["current"],
  data() {
    return {};
  },
  methods: {
    sort(from) {
      this.$emit("sort", from);
    },
  },
};
</script>
