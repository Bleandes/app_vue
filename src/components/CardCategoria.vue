<template>
  <div>
    <ul class="list">
      <li class="card" v-for="(categoria, index) in categorias" :key="index">
        <div v-if="editIndex === index" class="edit-mode">
          <input
            v-model="editText"
            @blur="saveEdit(index)"
            @keyup.enter="saveEdit(index)"
            class="input-edit"
          />
          <button class="icon-button-cancel" @click="editIndex = null">
            <img class="icon" src="../assets/close.png" alt="Cancelar">
          </button>
          <button class="icon-button" @click="saveEdit(index)">
            <img class="icon" src="../assets/check.png" alt="Salvar">
          </button>
        </div>
        <div v-else class="view-mode">
          {{ categoria }}
          <button class="dot" @click="openModalRenameDelete(index)">...</button>
        </div>
      </li>
    </ul>

    <!-- Modal de Opções (Renomear / Excluir) -->
    <q-dialog v-model="showModal">
      <q-card class="modal-card">
        <q-card-section class="modal_content">
          <button class="modal_item" @click="transformInput">
            <img src="../assets/pencil.png" alt="Renomear" class="icon"> Renomear
          </button>
          <button class="modal_item" @click="showDeleteConfirmation">
            <img src="../assets/bin.png" alt="Excluir" class="icon"> Excluir
          </button>
        </q-card-section>
      </q-card>
    </q-dialog>


    <q-dialog v-model="showDeleteModal" persistent>
      <q-card class="modal-card">
        <q-card-section class="modal-content">
          <div class="icon-warning">
            <q-icon name="warning" color="orange" size="36px" />
          </div>
          <div class="modal-title">Deseja excluir a categoria?</div>
          <div class="modal-text">
            Essa ação é irreversível e implica na exclusão das subcategorias vinculadas.
            <br />
            Os produtos ligados a essa categoria não serão excluídos.
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn flat label="Cancelar" class="botao-cancelar-modal-delete" @click="cancelDelete" />
          <q-btn flat label="Excluir" class="botao-excluir-modal-delete" @click="confirmDelete" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import { ref, watch  } from 'vue';
import { useCategoriaStore } from '../store/useCategoriaStore.js';

const props = defineProps({
  categorias: {
    type: Array,
    default: () => []
  }
});


const categoriaStore = useCategoriaStore();
const categorias = categoriaStore.categorias;

const showModal = ref(false);
const showDeleteModal = ref(false);
const selectedCategoryIndex = ref(null);
const editIndex = ref(null);
const editText = ref('');

function openModalRenameDelete(index) {
  selectedCategoryIndex.value = index;
  editText.value = categoriaStore.categorias[index];
  showModal.value = true;
}

function transformInput() {
  if (selectedCategoryIndex.value !== null) {
    editIndex.value = selectedCategoryIndex.value;
    editText.value = categoriaStore.categorias[editIndex.value];
    showModal.value = false;
  }
}

function showDeleteConfirmation() {
  showModal.value = false;
  showDeleteModal.value = true;
}

function cancelDelete() {
  showDeleteModal.value = false;
}

function confirmDelete() {
  if (selectedCategoryIndex.value !== null) {
    categoriaStore.removeCategoria(selectedCategoryIndex.value)
    showDeleteModal.value = false;
  }
}

function saveEdit(index) {
  if (editIndex.value === index) {
    categoriaStore.updateCategoria(index, editText.value);
    editIndex.value = null;
  }
}
</script>

<style scoped>
.icon {
  width: 20px;
  height: 20px;
}
.icon-button {
  border: none;
  background: #F24F82;
  cursor: pointer;
  border-radius: 60%;
  padding-top: 5px;
  margin-left: 0.3rem;
}
.botao-cancelar-modal-delete{
  background: #FFE2EB;
  width: 120px;
  height: 44px;
  border-radius: 24px;
}
.botao-excluir-modal-delete{
  background: #F24F82;
  width: 120px;
  height: 44px;
  border-radius: 24px;
}
.icon-button-cancel {
  border: none;
  background: #FFE2EB;
  border-radius: 60%;
  padding-top: 5px;
  cursor: pointer;
  margin-left: 0.3rem;
}
.modal_item {
  background-color: transparent;
  border: none;
}
.modal_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

}
.list {
  list-style-type: none;
  padding: 0;
}
.dot {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  background-color: transparent;
  color: #F24F82;
  font-weight: 500;
}
.card {
  display: flex;
  padding: 0.5rem 0.8rem;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  height: 52px;
  background-color: #F3F3F5;
  border-radius: 14px;
  margin-left: 1rem;
  margin-top: 0.5rem;
}
.modal-card {
  width: 300px;
  border-radius: 1rem;
}
.icon-warning {
  text-align: center;
  margin-bottom: 1rem;
}
.modal-title {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
}
.modal-text {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
}
.input-edit {
  width: 230px;
  border: 1px solid #ddd;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
.edit-mode {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
}
.view-mode {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
