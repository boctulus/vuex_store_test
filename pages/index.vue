<template>
  <div style="text-align:center; min-height:100vh">
      <h1 style="margin-bottom: 50px;">Prueba del Store</h1>

      Color: <span :style="{color: this.$store.state.colors.color}">{{ this.$store.state.colors.color }}</span>

      <div style="margin-top: 50px;">
        <nuxt-link to="/dos">Página (2)</nuxt-link>
      </div>
      <div style="margin-top: 10px;">
        <nuxt-link to="/tres">Página (3)</nuxt-link>
      </div>
      
      <div style="margin-top:100px;">
        La página 3 es de "acceso restringido" y solo puede ingresar "logueándose" con el color "red". Inténtelo!
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
