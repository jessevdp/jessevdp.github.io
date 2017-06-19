---
title: "Rebranding Myself"
headline: "Everyone has a brand, most just don't realize it"

tags: ["Design", "Branding", "Development"]
thumbnail: "/assets/portfolio/rebranding-myself/thumbnail.png"

live-version: "https://jessevdp.nl"
collaborators:
  - name: "Jesse van der Pluijm"
    url: "https://jessevdp.nl"

challenge: "I had a problem. I wasn't achieving my goal: making a living doing the things that I love— programming & design."

outcome: "My own personal brand revised. A new strategy a new website and a new logo. A way to show off my work as I intended it."
---

<section class="fade-in">
  <div class="header">Identifying The Problem</div>
  <div class="text">{% capture text %}

I had a problem. I wasn't achieving my goal. I wanted to be able to do the things that I love and get paid to do them. In other words: My goal is to be able to make a living doing the things that I love— design and code.

Once I clearly identified the goal I **asked why 3 times** to get to the root of why I hadn't achieved it yet.

**Why** have you not yet achieved this goal? *I don't have many clients*.

**Why** don't you have many clients? *I presume I don't have many clients because potential clients don't even know I exist*.

**Why** don't potential clients know you exist? *There is no real way for them to find me, identify me and review my work*.

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">The Solution</div>
  <div class="text">{% capture text %}

Once you clearly identify the problem and express it using normal language the solution tends to be right there.

There was no real way for potential clients to find me, identify me and to review my work. The logical solution: I needed to be out there. I needed to go and manage my own brand so people could identify it and I needed to show off my work, show off what I can do.

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">My Own Brand</div>
  <div class="text">{% capture text %}

Everyone has a brand, most just don't realize it, most don't manage it. Don't confuse a brand with a logo or a trademark. Simply put **your brand is what people think of when they hear your name**. Both factual (Nike makes shoes) and emotional (Nike shoes look really nice) apply here.

What I needed to go and do is manage my brand. Show people what I do so that next time they need someone with my abilities they'll think of me.

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">Trademark</div>
  <div class="text">{% capture text %}

An important part of every brand is their trademark. It makes identifying the brand much simpler. In a moment of inspiration I started sketching:

![logo sketch](/assets/portfolio/rebranding-myself/sketch.jpg)

I started out with my entire name (Jesse) in a graffiti style. While this worked it looked way too cluttered for my taste. I ended up simplifying things, the end result:

![final logo](/assets/global/logo-circle.svg)

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">The Website</div>
  <div class="text">{% capture text %}

Having a website is definitely a must for someone like me. However, knowing you want a website isn't enough. A website should serve a purpose.

The purpose of my personal website is to serve my potential clients. To answer their questions so that they can decide weather or not they want to work with me. How?

A potential client will want to see my portfolio and more importantly they'll want to see the process behind the work. They'll only want to see work that's relevant so the portfolio needs to be categorized. A potential client will also need to know a little about me, hear my story. Lastly I want potential clients to contact me and I wanted to make that process as easy and seamless as possible for them.

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">Website Wireframes</div>
  <div class="text">{% capture text %}

The purpose of my website could be broken up into 3 main categories. My work, my story and getting into contact. Logical decision was to create 3 pages. A landing page to both tell my story and get people interested in my work, a page focussed on my portfolio itself and a page with all my contact information.

While creating the wireframes for any website you should always think of the user first. I imagine users who lands on my website to have 3 main questions:

What is this and is it for me? (Is it what I'm looking for?) Does it work? (Is he/she good?) What is it exactly? (Who is he/she?) (Details)

With these 3 questions in mind I started laying out the landing page. The page that would also hold my story.

![wireframe](/assets/portfolio/rebranding-myself/wireframe.jpg)

Although the overall layout changed a slight bit over the many design iterations the main structure was set. Time to work on the graphical side of the design.

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">Design</div>
  <div class="text">{% capture text %}

The website would have to look really sleek and be a good representation of my style. Of course it would have to follow modern day best practices like mobile optimized design too.

I got to work using my favorite design/prototyping software [AdobeXD](http://www.adobe.com/products/experience-design.html). The file you see below shows the design for all the pages. Some of the layout changed. I have a tendency to change little things while I'm developing but the design file shows the main theme.

![website design](/assets/portfolio/rebranding-myself/design.jpg)

{% endcapture %}{{ text | markdownify }}</div></section>

<section class="fade-in">
  <div class="header">Development</div>
  <div class="text">{% capture text %}

Time to start taking all these ideas and making them into reality. Almost. I had a couple more decisions to make. Where am I going to host this site? Content management system? Those kinds of things.

Most of my code is open sourced and lives on [GitHub](https://github.com). Therefore I knew about something called GitHub pages (gh-pages). A service GitHub offers providing free website hosting for developers who contribute to the open source community. I also knew that gh-pages offered support for [jekyll](https://jekyllrb.com)— a static site generator.

Jekyll takes a whole bunch of text documents and spits them out as a static website. It's a content management system of sorts but it lacks a proper Graphical User Interface. But honestly I don't really need a CMS with a fancy user interface. I prefer to work with text documents.

On top of that jekyll offers build in support for both [sass](http://sass-lang.com/) and [markdown](https://en.wikipedia.org/wiki/Markdown). Sass is a css preprocessor that helps me avoid repetition when writing stylesheets. Markdown is a lightweight markup language. It is designed to be converted into `HTML`.

{% endcapture %}{{ text | markdownify }}</div></section>
