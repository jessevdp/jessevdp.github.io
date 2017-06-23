---
title: "John Conway's Game of Life"
headline: "John Conway's Game of Life in JavaScript"
tags: ["Design", "Development", "Technical", "Logo"]
thumbnail: "/assets/portfolio/gol/thumbnail.svg"

live-version: "https://gol.js.org"
collaborators:
  - name: "Jesse van der Pluijm"
    url: "https://jessevdp.nl"

challenge: "Create a version of John Conway's Game of Life. Think of some extra features. Design the UX and the UI. Make it work, make it beautiful."

outcome: "The game, as expected with a beautiful interface and extra features like sharing your starting position with your friends."
---

<section class="fade-in">{% capture text %}
# Introduction
Let's start with a short introduction as to what the Game of life actually is:
>The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970.  
>The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves, or, for advanced "players", by creating patterns with particular properties.  
> [~ Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

Here's an example:

![example](/assets/portfolio/gol/example.gif){: .fade-in}

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The Idea
The idea was to create this "game" and make it work in the browser. Even-though numerous versions already existed on the web most of them either required Java applets or looked clunky— or both.

The idea was to create a beautiful version of the already existing game. It would be both a challenge to design it and to implement the mechanics.

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# Features
Besides a basic implementation of the game that would start at a random position and look good I wanted to offer some extra features, but what? As always when you're designing something it should be about to user. So what features could I add to this game that would bring value to it's user?

Game Of Life is all about the starting position, it determines the rest of the game. Therefore the user should be able to alter this position. An edit button was in order.

On top of that I thought it would be cool to add a function where you could share your starting position with anyone.

Besides that the user should be able to resize the board. This way the user isn't stuck with the default medium sized playing field.

Quickly clearing the board and quickly randomizing it would both be useful features too.

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The Design
Where most versions of the game of life use squares for their grid I wanted to go ahead and use circles. Besides that I took a couple of pleasant dark colors along with one bright color and created a rather simple, clean looking UI.

The UI is fairly simple to the point where I can show it off in two screenshots. You have the playing state and the editing state. The editing state allows the user access to a couple of options that aren't available while playing.

Playing state:

![screenshot playing state](/assets/portfolio/gol/design-1.png){: .fade-in}

Editing state:

![screenshot playing state](/assets/portfolio/gol/design-2.png){: .fade-in}

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# The Logo
Along with the rather simple and clean looking UI I wanted a rather simple and clean looking logo. The Logo I created in the end resembles a single cell and it's two possible states. Life or Death.

![logo](/assets/portfolio/gol/logo.svg){: .fade-in}

{% endcapture %}{{ text | markdownify }}</section>

<section class="fade-in">{% capture text %}
# Sharing Feature
`Heads up, this is where it get's a little more technical`  

#### UX
From a UX perspective I would want the sharing function to be as simple as possible. In my head the user would click share and get a code (or a link). Another user could take this code and enter it into their game (or click the link) and boom, same grid state would appear. This code (or link) would have to be as short as possible to improve overall readability. I would rather not send my friend an extremely long link or anything.

#### Saving the Grid
In order to share the grid we need to save it. Meaning: we need some kind of written representation of this grid. Luckily the base concept behind that is quite simple. Every grid cell can only have two possible states, either its alive (on/pink) or dead (off/grey). We could interpret this quite easily. Let's give every alive cell a value of 1 and every dead cell a value of 0.

There's just one problem with that. The default board is `30x30` cells. That's an overall of `900` cells. If we use the `string` of zero's and one's like this the codes would get way too long. Imagine changing the size of the grid to `60x60` cells... That would add up to `3600` cells and thus a 3600 character long code. Not even anywhere near what we want.

#### Compression round 1
Luckily there's compression. We could take this long string existing of only `0`s and '1's and start to replace certain patterns with other characters. For example take all the instances of `0000` (4x0) and replace it with a `2`. This would slim down the string a little bit.

While this would work the compression would be inconsistent. On top of that writing the algorithm for this would be an annoying and painful task.

Luckily there's a better way. If we interpret the long string of `0`s an `1`s as a binary number we could convert it into let's say a hexadecimal number. (A number system with 16 possible values). I chose to interpret every 4 characters of this long binary string into a hex number. Why? 4 binary numbers have exactly 16 possible values therefore the entire binary string would **always** get compressed to 1/4th of it's length. Now the `30x30` grid has been reduced to a 225 character long string.

#### Compression round 2
We've cut the length of the string down to 1/4th but we're not yet there. A 225 character long code is still too long in my opinion. Luckily we've not yet used all the letters in the alphabet.

I decided to do a second round of compression after converting the binary into hex by replacing common patterns like `00`, `11` or `ff` into a single character that's not yet in use. We had both all the capital letters and some of the small letters available to us. After I had covered all the combinations of double characters as mentioned before I used the remaining characters to further compress the `00`s. Since the grid is usually made up of way more dead cells than alive ones chances would be that `00` combinations would be a lot more common. By replacing the characters I had just replaced the 0s with I was able to compress the empty space way further to the point where an **empty** `60x60` grid could be compressed into the following code `0-zYyG`.

#### Final Compression
While the current method works pretty well with mainly empty grids it doesn't really work in all use cases. Most of the time I found that the codes generated were still way too lengthy. This is why I decided to submit the links to a url shortener. This means that the codes are generated by this compression method however, the final links the user will actually interact with will be links submitted to a url shortener. Such as this one: [https://is.gd/goljs_1566](https://is.gd/goljs_1566)

If you click it you'll be taken to [https://gol.js.org/?hash=7-g0152874a95g](https://gol.js.org/?hash=7-g0152874a95g). The string behind the `?hash=` section of the url is the actual compressed code that represents the entire grid.

{% endcapture %}{{ text | markdownify }}</section>
