<template>
  <header class="main-nav">
      <!-- run a loop on items from the result of frontpage() -->
      <a v-for="(i, index) in frontpage($site.pages)" :href="(/*$page.frontmatter.home?'':*/$site.base)+i.path.replace('/','')">{{i.title}}</a>
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