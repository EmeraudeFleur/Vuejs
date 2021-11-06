<template>
  <button :class="mode">
    <slot></slot>
    <!-- 注意slot位置，如果在button外面，则不会包裹使用button时自定义再中间的文字Delete -->
  </button>
</template>

<script>
export default {
  props: ['mode']
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #640032;
  border: 1px solid #640032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #640032;
  border-color: #640032;
}

.flat {
  background-color: transparent;
  color: #640032;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #f7ebff;
}
</style>
