# scroll-custom

This module overwrites the native scrolling in DOM with a customisable script. That's it, really.

I've only tested this with Chromium engines because I intend to use it with Electron apps, but feel free to use it wherever.

## How to use

Requiring scroll-custom returns a `Scroller` constructor:
```javascript
const Scroller = require('scroll-custom');
let DOMScroller = new Scroller();
```

To bind the scroller to an element, use the `.elem` method:
```javascript
DOMScroller.elem(document.getElementById('element'));
```

## Customisables

To specify direction, friction, magnitude etc., do the same:
```javascript
DOMScroller.direction('vertical'); // vertical / horizontal, may expand to all directions later
DOMScroller.friction(0.5); // Default 2 - larger values slows scroll down faster
DOMScroller.magnitude(0.1); // Default 0.2 - initial velocity of scroll
DOMScroller.breakAt(1); // Default 1 - greatest velocity to break animation at
```

`.direction` specifies which axis the element will scroll through. Default is vertical, if string is neither vertical or horizontal, will default to vertical.
`.friction` is a constant which reduces velocity by a set amount every animation frame.
`.magnitude` is the velocity added to the scroll whenever the scrollwheel is applied
`.breakAt` sets the velocity to 0 when the absolute velocity of scroll decreases to the number specified here.

## Chaining parameter changes

All the methods specified so far return the parent instance of the `Scroller` object so you can chain them like so:
```javascript
DOMScroller.elem(document.getElementById('element'))
    .direction('vertical') 
    .friction(0.5)
    .magnitude(0.1)
    .breakAt(1);
```

## Initialising scroll animation

Scrolling is not overwritten by default, one must initialise the `Scroller` object, like so:
```javascript
DOMScroller.start();
```

To stop the animation at any time and revert back to the default DOM animation, do:
```javascript
DOMScroller.stop();
```

To check whether `Scroller` is active, use `DOMScroller.on`;

## Example

```javascript
const Scroller = require('scroll-custom');
let DOMScroller = new Scroller();

DOMScroller.elem(document.body)
    .direction('vertical') 
    .friction(0.5)
    .magnitude(0.1)
    .breakAt(1);

document.body.addEventListener('click', () => {
    if (DOMScroller.on) DOMScroller.stop();
    else DOMScroller.start();
})
```