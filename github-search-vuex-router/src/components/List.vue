<template>
  <div class="cards">
    <div v-for="user in $store.state.users" :key="user.id" class="card">
      <!-- 动态绑定user的属性 -->
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* grid setting 网格设置 */
.cards {
  max-width: 1200px;
  margin: 20px auto;
  display: grid;
  grid-gap: 1rem;
}

@media (min-width: 600px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
