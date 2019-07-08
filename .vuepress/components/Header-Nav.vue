<template>
  <header class="main-nav">
      <a v-for="(i, index) in $site.pages" :href="'..'+i.path">{{i.title}}</a>
  </header>
</template>