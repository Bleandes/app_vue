<template>
  <q-page>
    <div class="container-screen">
      <input
        class="input_criar_categoria"
        v-model="text"
      />
      <button class="botao_criar_categoria" @click="criarCategoria">Criar</button>
    </div>

    <div>
      <CardCategoria :categorias="categorias" />
    </div>
  </q-page>
</template>

<script setup>
import { ref, inject } from 'vue';
import CardCategoria from '../components/CardCategoria.vue';
import { useCategoriaStore } from '../store/useCategoriaStore.js';
import categoriaService from '../services/categoriaService.js';


const categoriaStore = useCategoriaStore();
const text = ref('');
const isLoading = inject('isLoading');

async function criarCategoria() {
  try {
    isLoading.value = true;
    const response = await categoriaService.createCategoria({name: text.value});
    categoriaStore.addCategoria(response)
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }finally {
    isLoading.value = false;
  }
}

defineOptions({
  name: 'CriarCategoriaScreen',
});
</script>

<style>
.container-screen {
  display: flex;
  flex-direction: row;
  margin-top: 1.7rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.botao_criar_categoria {
  border-radius: 2rem;
  height: 44px;
  width: 79px;
  border: none;
  margin-left: 0.5rem;
  background-color: #F24F82;
  color: white;
}
.input_criar_categoria {
  border-radius: 2rem;
  width: 256px;
  height: 44px;
  border: 1px solid #008197;
}

@media (min-width: 768px) {
  .container-screen {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1.7rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.input_criar_categoria {
  border-radius: 2rem;
  width: 456px;
  height: 44px;
  border: 1px solid #008197;
}
.botao_criar_categoria {
  border-radius: 2rem;
  height: 44px;
  width: 200px;
  border: none;
  margin-left: 0.5rem;
  background-color: #F24F82;
  color: white;
}
}
@media (min-width: 900px) {}
</style>
