# A simple, practical guide to css columns and frames.

In this guide I'll quickly go trough the steps of creating a simple, pintrest like, grid and populate it with things 
I'll call `frames` using css columns.

## Start with a wrapper
As a start, take any large container in which you want to place your `frames`. My advice is to take a full width block level 
element like a `<div>`.

Let's say I have some `HTML` like this: 
```html
<body>
  <div class="frame-wrapper">
    <!-- Frames will go here... -->
  </div>
</body>
```
---

To turn this `frame-wrapper` into the the element we wan't we need some css.
This css basically sets the widht of the `div` to 100% of the parent element.
We give the `frame-wrapper` a padding of 1 relative em to make sure our `frames` don't touch the sides of the wrapper.
The `text-align` center makes sure that **if** the `frame` has a widht less than the column, it's centered within the column.

Below that is where the real magic happens. We create a column count.
This is actually pretty straight forwards as you can see :wink:
```css
.frame-wrapper {
  width: 100%;
  padding: 1rem;

  text-align: center;

  -moz-column-count: 2; /* Firefox */
  -webkit-column-count: 2; /* Chrome, Safari, Opera */
  column-count: 2; /* The rest */
}
```

## The frames themself

Lastly we'll create the `frames` that'll populate the `frame-wrapper`.
Now I won't go into the design of each `frame`, that'll be up to you. 

Basically we'll create some blocks that populate oour columns. Their height will be variable.

```css
.frame {
  width: 100%;
  min-height: 100px;
  display: inline-block;
  
  margin-top: 0.6rem;
}
```
