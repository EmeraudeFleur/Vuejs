<template>
  <li>
    <BaseCard>
      <header>
        <h3>{{ title }}</h3>
        <BaseButton mode="flat" @click="deleteResource(id)">Delete</BaseButton>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link">view resource</a>
      </nav>
    </BaseCard>
  </li>
</template>

<script>
export default {
  inject: ['deleteResource'],
  props: ['id', 'title', 'description', 'link']
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
