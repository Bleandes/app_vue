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
import { ref } from 'vue';
import CardCategoria from '../components/CardCategoria.vue';
import { useCategoriaStore } from '../store/useCategoriaStore.js';

const categoriaStore = useCategoriaStore();

const text = ref('');
//const categorias = ref([]);

function criarCategoria() {
  if (text.value.trim()) {
    categoriaStore.addCategoria(text.value)
    categorias.value.push(text.value);
    text.value = '';
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
</style>
