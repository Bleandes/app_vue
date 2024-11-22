// services/categoriaService.js
import api from './api';

export default {
  getAllCategorias() {
    return api.get('/categories');
  },
  createCategoria(data) {
    return api.post('/categories', data);
  },
  getCategoriaById(id) {
    return api.get(`/categories/${id}`);
  },
  updateCategoria(id, data) {
    return api.patch(`/categories/${id}`, data);
  },
  deleteCategoria(id) {
    return api.delete(`/categories/${id}`);
  }
};
