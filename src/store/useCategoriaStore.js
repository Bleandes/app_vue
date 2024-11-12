import { defineStore } from 'pinia';

export const useCategoriaStore = defineStore('categoria', {
  state: () => ({
    categorias: ['Categoria 1', 'Categoria 2', 'Categoria 3']
  }),
  
  actions: {
    addCategoria(novaCategoria) {
      this.categorias.push(novaCategoria);
    },
    updateCategoria(index, novoNome) {
      this.categorias[index] = novoNome;
    },
    removeCategoria(index) {
      this.categorias.splice(index, 1);
    }
  }
});
