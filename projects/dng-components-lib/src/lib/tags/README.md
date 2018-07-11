# Tags

Angular components that displays a list of tags

## How to use

```
<dng-tags [tags]="['tag1', 'tag2']"></dng-tags>
<dng-tags>
  <dng-tag tag="tag1"></dng-tag>
  <dng-tag tag="tag2"></dng-tag>
</dng-tags>
<dng-tags>
  <dng-tag>Custom tag 1</dng-tag>
  <dng-tag>Custom tag 2</dng-tag>
</dng-tags>
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

## Where

* [tags]: Array of strings