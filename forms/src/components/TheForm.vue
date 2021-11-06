<template>
  <form @submit.prevent="submitForm">
    <!-- add validation fail style condition-->
    <div
      class="form-control"
      :class="{ invalid: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <!-- 2 ways: 1-@input; 2-v-model (two way binding相当于@input & :value) -->
      <!-- blur is builtin event, when the user is losing focus on this input -->
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="validateInput"
      />
      <!-- validation fail alert -->
      <p v-if="userNameValidity === 'invalid'">Please enter a valid name!</p>
    </div>

    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>

    <!-- dropdown -->
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>

    <div class="form-control">
      <h2>What are you interested in?</h2>

      <!-- 3 checkboxes -->
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="news"
        />
        <label for="interest-news">News</label>
      </div>

      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="tutorials"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>

      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          v-model="interest"
          value="nothing"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>

    <div class="form-control">
      <h2>How do you learn?</h2>

      <!-- 3 radio buttons -->
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          v-model="how"
          value="video"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          v-model="how"
          value="blog"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          v-model="how"
          value="other"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <!-- 这里评分组件同时运用了父传子和子发射事件同步到父。 -->
    <!-- 当v-model涉及传递数据。相当于: :model-value="" & @update:modelValue="" -->
    <!-- 这里即隐含 :modelValue="rating", 向子组件RatingControl 传递评分数据-->
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
    </div>

    <!-- single checkbox -->
    <div class="form-control">
      <input
        type="checkbox"
        id="confirm-terms"
        name="confirm-terms"
        v-model="confirm"
      />
      <label for="confirm-terms">Agree to terms of use?</label>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingControl from './RatingControl.vue';
export default {
  components: { RatingControl },
  data() {
    return {
      userName: '', //注意这4种默认数据设置:''适用于字符串，null适用于非字符串（数字），或者默认状态下没有内容的
      userAge: null,
      referrer: 'wom', //choose a default value
      interest: [], //vue puts all checked elements to an array. 这时候uncheck会全不选,故而在input中加value属性区别每个选项.
      how: null,
      confirm: false, //for single checkbox, value is true/false.
      userNameValidity: 'pending',
      rating: null
    };
  },
  methods: {
    submitForm() {
      console.log('Username: ' + this.userName);
      this.userName = '';
      console.log('User age: ');
      console.log(this.userAge);
      console.log(31);
      this.userAge = null;

      console.log('Referrer: ' + this.referrer);
      this.referrer = 'wom';

      console.log('Checkboxes: ' + this.interest);
      console.log('Rado buttons: ' + this.how);
      this.interest = [];
      this.how = null;

      console.log('Confirm? ' + this.confirm);

      console.log(this.rating);
      this.rating = null;
    },
    validateInput() {
      // if (this.userName.trim)... 改成在上面v-model.trim, 这样userName就直接去头尾空格了
      if (this.userName === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

/* input validation fail alert style */
/* .a.b means "an element with both class a and class b"  <div class="a b">(element)</div>*/
/* .a .b means "an element with class b for which either its parent or grand-parent or grand-grand-parent, etc, has class a" */
.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
