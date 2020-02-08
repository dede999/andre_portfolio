<template>
  <div class="text-block" v-if="!padding">
    <slot/>
  </div>
  <div class="text-block with-padding" v-else>
    <slot/>
  </div>
</template>

<script>
  export default {
    props: {
      padding: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="sass" scoped>

.text-block
  background: linear-gradient(125deg, #91b2c5, #acd4ea)
  box-shadow: 16px 16px 32px #89a8ba, -16px -16px 32px #b9e4fc
  border-radius: 15px 55px
  font-family: 'Trocchi', sans-serif

.with-padding
  padding: 20px

</style>
