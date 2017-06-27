# My personal website
This repository houses my personal website. It is build using [`jekyll`](https://jekyllrb.com/). Find it live on [jessevdp.nl](https://jessevdp.nl)!

---

# Notes to self 🗒
Below I've written out a couple notes to myself. Just things I need to keep in mind while writing blogposts and maintaining the site.

## Portfolio item structure 🏗
I've (ab)used jekyll's build in blogpost mechanism to easely manage my portfolio items. Let's start with the frontmatter.

### Front matter
Every jekyll page needs front matter. Besides the usual `title` I've created a couple more custom fields. Most of them are required, some are not.
```yml
---
title: "Portfolio Item Title"
headline: "Some awesome headline to start things off with"
thumbnail: "https://example.com/image" || "/assets/portfolio/item/image.extention"

# Short summary devided into 'challenge' and 'outcome'
challenge: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
outcome: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

# Aside info
# ----------

# Tags to catogarize portfolio items
tags: ["Tag", "Tag"]

# Credit the people I've worked with
collaborators:
  - name: "John Doe"
    url: "https://google.com"
  - name: "Jane Doe"
    url: "https://derp.com"

# OPTIONAL - Link to live version
# (HTML output will be ommited if this field is excluded)
live-version: "https://jessevdp.nl"
---
```
The permalink & layout for the posts have been defaulted in the `_config.yml` file. Just so I don't have to repeat myself.

### Content building blocks 👷
Each and every portfolio item is different. To make sure I have the tools to make all my work (current and future) look exactly like I want it too, yet keep it in unity with the rest of the site I created a series of building blocks that would make up a portfolio items. I would have liked to need no formatting at all and just write my portfolio items using `markdown` but this wasn't possible for me. I needed extra formatting in order to have special fade-in effects and to support for variable amounts of whitespace between the sections.

Here are some of these building blocks:

#### section
Sections are used as containers. They don't get too wide and stay nicely centerd. On top of that they can fade in as a group, not just paragrhaph for paragrahp.

I wanted to still have suport for markdown inside of these sections. Luckily this was possible through a series of `liquid` tags. Here is an example in mardown: a couple paragrpahs and an image.
```markdown
<section class="fade-in">{% capture text %}
# First Header Here

Lorem **ipsum dolor sit amet**— *consectetur* adipisicing ***elit***, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip `var a = derp` consequat. Duis aute irure dolor in reprehenderit in voluptate. Excepteur sint occaecat cupidatat, sunt in culpa qui officia deserunt mollit [anim id est](https://example.com) laborum.

![image](https://source.unsplash.com/random/1600x800)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

{% endcapture %}{{ text | markdownify }}</section>
```
You could add a code block to this too, unfortunatly you can't have a markdown codeblock inside a markdown codeblock in the readme file but it works pretty much straight forwards.

#### two-up
In order to display two items next to each other I created the `two-up` class. This could be used to create comparisions etc. Note that these items will wrap on smaller screens.

For example two images side by side:
```markdown
<div class="two-up">
  <img class="fade-in" src="https://example.com/image" alt="description">
  <img class="fade-in" src="/path/to/image" alt="description">
</div>
```
You can use this `two-up` wrapper inside a section to create some interesting effects.

#### Full size images and codeblocks
Sometimes you might want to display something and give it extra attention. For this reason you can use normal html elements within the file and they'll use the full width of the container. This could be used for both code blocks and images.

Image:
```markdown
<img class="fade-in" src="/path/to/image" alt="description">
```

Codeblock:
```markdown
<div class="fade-in">
{% highlight js %}
function foo (bar) {
  return bar
}
{% endhighlight %}
</div>
```

## Tags 🏷
The portfolio items had to be catogarized. Why? Because the projects would range all the way from logo design to backend code. Some projects would include multiple stages like both a logo and a bunch of code. To make sure people would get to see the type of work they were looking for I decided to catorarize every item using multiple tags.

In order to filter these posts by tag I had to create multiple `tagpages`. Every tag used in the projects should also have it's own seperate page. These `tagpage` files live in `/tags/tagname.html`.

To make creating these tags as simple as possible I created a `tagpage` layout. To add a new tag all you have to do is create a file with the appropriate name in the `/tags/` folder and add the following front matter:

```yml
---
layout: tagpage
tag: "Tagname"
title: "Tagname"
---
```

