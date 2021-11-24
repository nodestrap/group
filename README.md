# &lt;Group&gt;&lt;/Group&gt;
Groups a series of (mostly) any components and stacks them horizontally or vertically.

## Preview

```jsx
<Group theme='primary' size='lg' gradient={true} outlined={true}>
    <Button /* ... */ />
    <Button /* ... */ />
    <Label>/* ... */</Label>
    <Radio /* ... */ />
    <Radio /* ... */ />
    <Radio /* ... */ />
</Group>
```
Rendered to:
```html
<ul aria-role="group" class="c1 thPrimary szLg gradient outlined">
    <li>/* ... */</li>
    <li>/* ... */</li>
    <li>/* ... */</li>
</ul>
```

## Features
* Includes all features in [`<List />`](https://www.npmjs.com/package/@nodestrap/list).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/group
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]
