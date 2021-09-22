# vue-select-next

vue-select component ported for vue 3.

this is completely based on [vue-select](https://github.com/sagalbot/vue-select). all credits go to [sagalbot](https://github.com/sagalbot)

you can check docs for vue-select at https://vue-select.org/

## Basic usage

```html
<script>
  import { defineComponent } from 'vue';
  import VSelect from 'vue-select-next';
  import 'vue-select-next/css';

  export default defineComponent({
    components: {
      VSelect,
    },
  });
</script>

<template>
  <VSelect :options="['foo', 'bar']" />
</template>
```
