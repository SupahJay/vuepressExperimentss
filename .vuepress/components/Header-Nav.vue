<template>
  <header class="main-nav">
      <a v-for="(i, index) in frontpage($site.pages)" :href="'..'+i.path">{{i.title}}</a>
  </header>
</template>
<script>
export default {
  methods: {
    frontpage(pages) {
      return pages.filter((page)=>{
        console.log(page.title, page);
        return (page.frontmatter.nav) ? true:false;
      });
    }
  }
}
</script>