# This page is a experiment

List all pages

## {{ $site.pages }} pages.

<section v-for="i in $site.pages">
<a :href="'..'+i.path">{{i.title}}</a>
<p>Nothing yet...</p>
{{i}}<br>
<br>
<hr>
</section>
