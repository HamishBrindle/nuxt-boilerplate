<template>
  <h1
    :title="title"
    @click="onClick(title)"
  >
    {{ title.text }}
  </h1>
</template>

<script>
export default {
  data() {
    return {
      title: { text: 'Contact' },
    };
  },
  methods: {
    onClick(data) {
      console.log('clicked');
      data.text = 'Woooooooo';
    },
  },
};
</script>

<style>

</style>
