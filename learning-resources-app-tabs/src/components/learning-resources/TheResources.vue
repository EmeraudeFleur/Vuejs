<template>
  <BaseCard>
    <!-- when added props, eventlisteners from custom template fall through automatically to the root template -->
    <BaseButton
      @click="setSelectedTab('StoredResources')"
      :mode="storedResBtnMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('AddResource')" :mode="addResBtnMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <!-- dynamic component -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource.vue';

export default {
  components: {
    StoredResources,
    AddResource
  },
  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation.',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  // props => Direct parent-child communication (i.e. components which are
  // directly "connected" => one component is used in the template of another component)
  // Provide/ inject => "Long-range props" => Allows sending data from component A to
  // component C, even if B is in between (i.e. C is not used in the template of A).
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource, //provide this method for cmp AddResource to call and submit data
      deleteResource: this.removeResource
    };
  },
  computed: {
    storedResBtnMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResBtnMode() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource); // add this object on top of storedResources.
      this.selectedTab = 'StoredResources'; //change the tab to the default.
    },
    removeResource(resId) {
      //splice vs filter: filter method creates a new array, the original stays. but splice, like push and unshift, change the original array.
      //so splice can remove object from the storedResources and provide through the components.

      //   this.storedResources = this.storedResources.filter(
      //     res => res.id !== resId);
      const resIdx = this.storedResources.findIndex(res => res.id === resId);
      this.storedResources.splice(resIdx, 1); //splice needs index.
    }
  }
};
</script>
