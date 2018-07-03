# Tags

Angular components that displays a list of tags

## How to use

```
<dng-tags [tags]=['tag1', 'tag2']></dng-tags>
```

## Override colors
This component works with css variables, so in your css/scss file modify the class `.dng-tags`

```
.bsc-tags {
  --tag-selected-bg-color: #ffc400;
  --tag-selected-text-color: #FFFFFF;
  --tag-default-color: transparent; // This changes the border color as well
  --tag-hover-text-color: #ffc400;
}
```

```
<dng-tags [tags]=['tag1', 'tag2']></dng-tags>
```

## Where

* [tags]: Array of strings