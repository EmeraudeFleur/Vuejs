<template>
  <div class="home">
    <Search></Search>
    <List></List>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "@/components/Search.vue";
import List from "@/components/List.vue";

export default {
  name: "Home",
  components: {
    Search,
    List,
  },
};
</script>
