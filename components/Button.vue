<template>
  <el-button>
    <slot />
  </el-button>
</template>

<style lang="scss">
  .el-button {
    &--default {
      background: red;
    }
  }
</style>
