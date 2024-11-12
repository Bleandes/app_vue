<template>
  <q-dialog v-model="show" persistent>
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
      <q-card-actions align="right">
        <q-btn flat label="Cancelar" color="negative" @click="cancel" />
        <q-btn flat label="Excluir" color="pink" @click="confirmDelete" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  show: Boolean,
});
const emits = defineEmits(['close', 'delete']);

function confirmDelete() {
  emits('delete');
  emits('close');
}

function cancel() {
  emits('close');
}
</script>

<style scoped>
.modal-card {
  width: 300px;
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
</style>
