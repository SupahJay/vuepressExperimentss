<template>
  <img class="hero" :src="src" :alt="alt">
</template>
<script>
export default {
  props: ["src", "alt"]
};
</script>

