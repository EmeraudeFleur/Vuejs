<template>
  <BaseDialog v-if="inputInvalid" title="Invalid Input" @close="confirmError">
  <!-- v-slot:  -> # 指代具体的slot -->

    <template v-slot:default>
      <p>At least one input value is invalid.</p>
      <p>Please check your input.</p>
    </template>

    <template #actions>
      <BaseButton @click="confirmError">Okay</BaseButton>
    </template>

  </BaseDialog>

  <BaseCard>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" name="title" ref="titleInput" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>

      <!-- 表格输入数据获取方式，上面ref,下面$refs -->

      <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" name="link" ref="linkInput" />
      </div>

      <div>
        <BaseButton type="submit">Add Resource</BaseButton>
      </div>
      
    </form>
  </BaseCard>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return {
      inputInvalid: false
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      //checking invalid data
      //.trim is a builtin methos in js to remove empty spaces at the beginning and end.
      if (
        enteredTitle.trim() === '' ||
        enteredDesc.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        this.inputInvalid = true; //then toggle the error dialog
        //show error dialog, to replace alert
        return;
      }
      //call addResource: 上面的数据名直接对应到addResource 三个参数，名字不一样没关系
      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    confirmError() {
      this.inputInvalid = false; //then close the dialog.
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #640032;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
