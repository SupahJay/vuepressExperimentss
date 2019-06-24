# This page is a experiment

List all pages

## {{ $site.pages.length }} pages.

<section v-for="i in $site.pages">
<a :href="'..'+i.path">{{i.title}}</a>
{{i}}<br>
<br>
<hr>
</section>
