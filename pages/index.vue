<template>
  <div style="text-align:center; min-height:100vh">
      <h1 style="margin-bottom: 50px;">Prueba del Store</h1>

      Color: <span :style="{color: this.$store.state.colors.color}">{{ this.$store.state.colors.color }}</span>

      <div style="margin-top: 50px;">
        <nuxt-link to="/dos">Página dos</nuxt-link>
      </div>
      
  </div>
</template>

<script>

export default {
  mounted() {
    console.log(this.$store.state.colors.color);
  },
  
  components: {
  
  }
}
</script>
