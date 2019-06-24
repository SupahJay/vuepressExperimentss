# This page is a experiment

List all pages

## {{ $site.pages.lenght }} pages.

<section v-for="i in $site.pages">
<a :href="'..'+i.path">{{i.title}}</a>
{{i}}<br>
<br>
<hr>
</section>
