---
title: "Horizontal Parallax Effect"
headline: "Parallax on the web– horizontally. Heads up: it gets technical"

tags: ["Technical", "Programming"]
thumbnail: "/assets/portfolio/horizontal-parallax/thumbnail.svg"

live-version: '#live'

collaborators:
  - name: "Jesse van der Pluijm"
    url: "https://jessevdp.nl"

challenge: "Create a parallax effect that's 100% controlled by scrolling. Make it horizontal. Make it work for every screen size."

outcome: "Two separate ways of doing this. One is linear, the other has easing. Both are really cool!"
---

<section class="fade-in">{% capture text %}
# Intro
Let's start with a little backstory and some explaining. Lately there has been a lot of interest in parallax effects on the web. It's a technique used to draw the users attention to a specific point using motion and a sense of depth.

An example: a user would scroll and all of the sudden see a hole in the website that reveals just a little part of a product. As the user scrolls other parts slide into view.

![parallax example](/assets/portfolio/horizontal-parallax/example.gif)

What I wanted to do was create a sort of motion controlled by the users scroll but make it horizontal. You could for example have a little bird fly across the screen as you scrolled. It would come into view on the bottom left corner of your screen and disappear into the top right corner.

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The Requirements
This animation would have to work on all screen sizes. Whatever combination of height and width it would always enter the screen in the bottom left corner and exit in the top right. Never somewhere halfway.

The animation would have to purely be controlled by the users scroll. I didn't want to just start a css animation as soon as the element came into view. I wanted the user to feel in control. I figured that would create a real satisfactory effect.

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The First Approach
There would be two ways to do this. Either with or without easing. Without would be much much simpler so I started with that. I'll explain what I mean by easing later on.

The easiest way to do this would be to place the element I wanted to apply the effect to somewhere on the page and then move it around using [`css translate`](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate).

Let's say we put the element in the dead center of the page. What I needed now was a way to calculate exactly how many pixels the element would have to be `translated` to the left or the right. These values would depend on the screens height and width and on the amount of pixels scrolled. Here's a graph for clarification:

![graph](/assets/portfolio/horizontal-parallax/graph-1.svg){: .fade-in}

Let's say we scrolled exactly 0px since the element came into view. The element would then have to be translated exactly 1/2 screen width to the left, or negative 1/2 screen width to be exact.

If we've scrolled 1/4 of the screen height we would have to translate the element exactly negative 1/4 of the screen width.

I think you can start to sense a pattern here. We can take this pattern and write it out like a function that calculates the amount we need to translate quite simply. Let's do that in `JavaScript`.

```js
function calcTranslate (height, width, scrolled) {
  var factor = width / height
  var start = width / 2
  var amount = (factor * scrolled) - start
  return amount
}
```

Let's test this function. Let's say we have a screen that's `1000px` by `500px` and we've scrolled exactly 1/4 of the screen -> 250px.

```js
function calcTranslate (height, width, scrolled) {
  var factor = width / height // 500 / 1000 = 0.5
  var start = width / 2 // 500 / 2 = 250
  var amount = (factor * scrolled) - start // (0.5 * 250) - 250 = -125
  return amount // -125 (Exactly -1/4 width as expected)
}
```

As you can see the function returns the expected result. We scrolled 1/4 of the screen height and got 1/4 of the screens width in return. (in negative direction since it's the first 1/4th)

Let's write that out in a shorter format:

```js
function calcTranslate (height, width, scrolled) {
  return ((width / height) * scrolled) - (width / 2)
}
```

Here's another graph to hopefully clear things up a bit:

![graph](/assets/portfolio/horizontal-parallax/graph-2.svg){: .fade-in}

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The Second Approach
As I said before— I decided that there would be two ways to do this. We did the one without easing, now it's time to do the one with easing.

First of all, let's explain what I mean by easing. The in the first approach the element would move along the screen at a static pace in a linear fashion. The last graph in the previous section shows that.

While this might sometimes be the desired effect sometimes it wasn't what I wanted. I wanted to draw the users eye. I wanted to make the element come into view quickly then slow down somewhere along the middle of the page so the user would have a chance to focus on it. After that the element should quickly move out of the screen again.

I've created the same type of graph as with the linear function, compare them:

<div class="two-up">
  <img class="fade-in" src="/assets/portfolio/horizontal-parallax/graph-2.svg" alt="image">
  <img class="fade-in" src="/assets/portfolio/horizontal-parallax/graph-3.svg" alt="image">
</div>

Then the question was: *"How on earth am I going to figure out the math behind this?"* Luckily I didn't have to figure it out all on my own. I asked my question on [math.stackexchange.com](https://math.stackexchange.com/questions/2206936/position-fx-x3-by-inputting-2-variables) and there someone was able to help me. The formula they came up with:

![graph](/assets/portfolio/horizontal-parallax/formula.svg){: .fade-in}

Let's write that out in JavaScript again:

```js
function calcTranslate (height, width, scrolled) {
  return ((4 * width ) / Math.pow(height, 3)) * Math.pow(scrolled - (height / 2), 3) + (win_width/2)
}
```
{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in" id="live">{% capture text %}
# Live Version
I went ahead and created a minimal [codepen](https://codepen.io/jessevdp/pen/wJYaxd) to demonstrate the effect. (Using the easing function) Keep in mind, this is just the bare code needed, you can make this a lot more fancy if you need to.

***Heads up:*** **Some mobile browsers mess up the codepen. If it doesn't seem to work I suggest you take a look at this pen on a bigger screen.**

<p data-height="500" data-theme-id="0" data-slug-hash="wJYaxd" data-default-tab="result" data-user="jessevdp" data-embed-version="2" data-pen-title="Horizontal easing parallax" class="codepen fade-in">See the Pen <a href="https://codepen.io/jessevdp/pen/wJYaxd/">Horizontal easing parallax</a> by Jesse van der Pluijm (<a href="https://codepen.io/jessevdp">@jessevdp</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

I've made this working version using the formula created earlier. I've used jQuery to help me interact with the `DOM` in a simpler manner.

To make sure we don't ask the browser to over perform I've build in a couple of safe guards. For example: When the element goes outside of the screen we won't be moving the object around. When the user scrolls half a pixel (yes that's possible) we won't move the object around. When the element has to move half a pixel (according to the formula) we won't move the object around.

All these safe guards should make sure the animation runs smoothly in most browsers.

{% endcapture %}{{ text | markdownify }}</section>
