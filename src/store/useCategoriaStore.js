import { defineStore } from 'pinia';

export const useCategoriaStore = defineStore('categoria', {
  state: () => ({
    categorias: []
  }),

  actions: {
    addCategoria(novaCategoria) {
      this.categorias.push(novaCategoria);
    },
    updateCategoria(index, novoNome) {
      this.categorias.map((item) => item.id === index ? item.name = novoNome : item.name ='ttt');
      //this.categorias[index] = novoNome;
    },
    removeCategoria(index) {
      this.categorias.splice(index, 1);
    }
  }
});
