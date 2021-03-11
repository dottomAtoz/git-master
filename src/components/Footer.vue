<template>
  <div>
    <footer>
      Made with 🔥 by <a :href="link[0]">imotD.</a> Licensed under the
      <a :href="link[1]">MIT License.</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    // msg: String,
  },
  data() {
    return {
      link: [
        "https://www.instagram.com/tommyalhamra/",
        "https://github.com/imotD/git-master/blob/master/license.md",
      ],
    };
  },
};
</script>
