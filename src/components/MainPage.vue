<template>
  <TitleMainComponent/>
  <first-description/>
  <second-description/>
  <third-description/>
</template>

<script>
import TitleMainComponent from './main-page-components/TitleComponent.vue';
import FirstDescriptionComponent from './main-page-components/FirstDescriptionComponent.vue';
import SecondDescriptionComponent from './main-page-components/SecondDescriptionComponent.vue';
import ThirdDescriptionComponent from './main-page-components/ThirdDescriptionComponent.vue';

export default {
  name: 'MainPage',
  components: {
   TitleMainComponent,
   "first-description": FirstDescriptionComponent,
   "second-description": SecondDescriptionComponent,
   "third-description": ThirdDescriptionComponent
  }
}
</script>

<style scoped>

</style>
