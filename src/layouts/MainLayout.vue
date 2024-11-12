<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="header">
      <q-toolbar>
        <q-toolbar-title class="title_screen">
          Categorias
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  methods: {
    criarCategoria() {
      this.$router.push('/CriarCategoriaScreen');
    }
  }
};
</script>

<style>
.botao_criar_categoria{
  border-radius: 2rem;
  height: 2.5rem;
  width: 10rem;
  border: none;
  margin-left: 0.5rem;
}
.header{
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  border-bottom: 0.2px solid rgb(186, 186, 186);
}
.title_screen{
  display: flex;
  justify-content: center;
  color: black;
}
.texto_principal_categoria{
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1rem;
}
.container_texto_categoria{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1rem;
  }
</style>
