---
title: "Example Portfolio Item"
headline: "Start with a cool and inviting headline to draw people in"
tags: ["Test", "Derp"]
thumbnail: "https://source.unsplash.com/LUgHXvLe_kM"

live-version: "https://jessevdp.nl"
collaborators:
  - name: "Jesse van der Pluijm"
    url: "https://jessevdp.nl"
  - name: "John Doe"
    url: "https://google.com"
  - name: "Jane Doe"
    url: "https://derp.com"

challenge: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

outcome: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
---

<section class="fade-in">{% capture text %}
# First Header Here

Lorem **ipsum dolor sit amet**— *consectetur* adipisicing ***elit***, sed do eiusmod tempor incididunt ut labore et. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip `var a = derp` consequat. Duis aute irure dolor in reprehenderit in voluptate. Excepteur sint occaecat cupidatat, sunt in culpa qui officia deserunt mollit [anim id est](https://example.com) laborum.

![image](https://source.unsplash.com/random/1600x800)

```js
function (foo) {
  const derp = 'derp'
  return 'bar' + 1 + derp
}
```

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.

{% endcapture %}{{ text | markdownify }}</section>

<img class="fade-in" src="https://source.unsplash.com/random/1600x800" alt="some img">

<section class="fade-in">{% capture text %}

# Second Header Here

Lorem **ipsum dolor sit amet**— *consectetur* adipisicing ***elit***, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip `var a = derp` consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.

> Lorem **ipsum dolor sit amet**— *consectetur* adipisicing ***elit***, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  
~ [Derp](derp.com)

{% endcapture %}{{ text | markdownify }}</section>

<div class="fade-in">
{% highlight js %}
function foo (bar, callback) {
  let derp = 'foo'
  var returnBar = bar + 1
  if (callback) callback(returnBar)
  var a = "haaloooooahhhhh balh hahahahah derppppppp haaloooooahhhhh balh hahahahah derppppppp"
}

// Run the function
foo (1, (bar) => {
  console.log(bar)
})
{% endhighlight %}
</div>

<div class="two-up">
  <img class="fade-in" src="https://source.unsplash.com/8jqna7aA-vs" alt="image">
  <img class="fade-in" src="https://source.unsplash.com/collection/562095/800x1000" alt="image">
</div>

<div class="two-up">
  <img class="fade-in" src="https://source.unsplash.com/collection/235549" alt="image">
  <img class="fade-in" src="https://source.unsplash.com/collection/519119" alt="image">
</div>

<div class="two-up">
  <div class="fade-in">
{% highlight js %}
function foo (bar, callback) {
  let derp = 'foo'
  var returnBar = bar + 1
  if (callback) callback(returnBar)
  var a = "haaloooooahhhhh balh hahahahah derppppppp haaloooooahhhhh balh hahahahah derppppppp"
}

// Run the function
foo (1, (bar) => {
  console.log(bar)
})
{% endhighlight %}
  </div>
  <div class="fade-in">
{% highlight js %}
function foo (bar, callback) {
  let derp = 'foo'
  var returnBar = bar + 1
  if (callback) callback(returnBar)
  var a = "haaloooooahhhhh balh hahahahah derppppppp haaloooooahhhhh balh hahahahah derppppppp"
}

// Run the function
foo (1, (bar) => {
  console.log(bar)
})
{% endhighlight %}
  </div>
</div>
