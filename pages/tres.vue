<!-- 
  Esta página solo puede ser accedida si el color es "red"
-->
<template>
  <div style="text-align:center; min-height:100vh" :style="{backgroundColor: this.$store.state.colors.color}">
      <h1 style="margin-bottom: 50px;" >Página de acceso restringido !!!</h1>

      <div style="color: yellow;">
        Este texto es ultra-secreto.
      </div>

      <div style="margin-top: 50px;">
        <nuxt-link to="/">Index</nuxt-link>
      </div>
      <div style="margin-top: 10px;">
        <nuxt-link to="/dos">Página (2)</nuxt-link>
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
