<template>
  <button class="p-2 rounded-full active:scale-75 active:bg-[#16223d]">
    <img :src="resolve_img_url(picture_src)" />
  </button>
</template>

<script>
export default {
  props: {
    picture_src: String,
    pic_desc: String,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/icons", false, /\.svg$|\.jpg$/);
      return images("./" + path);
    },
    remove() {
      this.$emit('remove', this.index)
    }
  },
};
</script>
