<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <!-- show loading while data is loading -->
      <p v-if="isLoading">Loading...</p>
      <!-- handling no data case -->
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        No stored experiences found.
      </p>
      <!-- show data when finished loading and data is not empty -->
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
// import axios from 'axios';
export default {
  // props: ['results'],
  data() {
    return {
      results: [],
      isLoading: false,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.isLoading = true; //data is loading
      this.error = null;
      //GET request (get request doesn't carry any data) and fetch returns a promise
      fetch(
        'https://http-vue-bd255-default-rtdb.europe-west1.firebasedatabase.app/surveys.json'
      )
        .then(response => {
          if (response.ok) {
            return response.json(); //parsing data to json format.
          }
        })
        .then(data => {
          // console.log(data);
          this.isLoading = false; //once data is fetched, switch the isLoading to default false.
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating
            });
          }
          this.results = results; //transferring the data from stored in database to the temporary array.
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
          this.error = 'Failed to fetch data, please try again later.';
        });
    }

    // axios.post('https://vue-http-demo-85e9e.firebaseio.com/surveys.json', {
    //   name: this.enteredName,
    //   rating: this.chosenRating,
    // });
  },
  components: {
    SurveyResult
  },
  mounted() {
    this.loadExperiences();
  } //loadexperiences automatically when the page loads
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
