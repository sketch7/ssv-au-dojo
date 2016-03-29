
# Tasks
- Binding
 - repeat
 - if
 - two-way with input
 - inline-conditions
 - click trigger/delegate
- Binding Behaviors
 - debounce
 - throttle
- Value Converters
 - KebabValueConverter
 - TruncateValueConverter
- Extract Element - without VM
- 

# Value Converters

Require from basic-form
```html
<require from="../../components/value-converters/kebabcase"></require>
```

# Custom Elements

Quick HTML way
```html
<require from="./hero-list-item.html"></require>


<hero-list-item hero.bind="hero" link-route.bind="heroState"></hero-list-item>


<template bindable="hero, linkRoute">
```

