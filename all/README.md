# This page is a experiment

List all pages

## {{ $site.pages.length }} pages.

<section v-for="(i, index) in $site.pages">
<p>Post {{ index }}.</p>
<a :href="'..'+i.path">{{i.title}}</a><br>
{{i}}<br>
<br>
<hr>
</section>
