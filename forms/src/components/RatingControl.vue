<template>
  <ul>
    <!-- in order for these buttons to not submit form automatically, add type to overwrite dedault submit button-->
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="activate('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button @click="activate('average')" type="button">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click="activate('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], //v-model默认的v-bind值
  emits: ['update:modelValue'], //v-model内含的自定义事件
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: rgb(18, 115, 206);
}

.active button {
  color: rgb(18, 115, 206);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
