<template>
  <div>
    <div id="card-element"></div>
  </div>
</template>

<script>
  export default {
    mounted () {
      const card = this.$stripe.elements().create('card')
      card.mount('#card-element')
    }
  }
</script>
