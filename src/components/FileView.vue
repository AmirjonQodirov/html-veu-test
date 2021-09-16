<template>
  <p class="file">
    <i class="fas fa-file"></i>
    {{name}}
  </p>
</template>

<script>
export default {
  name: 'FileView',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
.file{
  color: green;
}
</style>
