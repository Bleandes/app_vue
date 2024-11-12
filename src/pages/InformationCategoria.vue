<template>
  <q-page>
       <div class="container_texto_categoria">
         <span class="texto_principal_categoria">Organize seu catálogo com categorias e subcategorias</span>
         <p>Ao usar as categorias e subcategorias do catálogo, você ajuda seus clientes a encontrqarem os produtos desejados</p>
      </div>
      <div>
        <button class="botao_criar_categoria" @click="criarCategoria" >Criar categorias <span> + </span></button>
      </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'InformationCategoria',
  methods: {
    criarCategoria() {
      this.$router.push('/CriarCategoriaScreen');
    }
  }
});
</script>

<style>
.botao_criar_categoria{
  border-radius: 2rem;
  height: 2.5rem;
  width: 10rem;
  border: none;
  margin-left: 0.5rem;
  background-color: #F24F82;
  color: white;
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
