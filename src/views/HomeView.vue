<template>
  <div class="home">
    <h1>Home page</h1>
   <FormView />
  </div>
</template>

<script>
import FormView from './FormView.vue';
export default {
  name: 'HomeView',
  components: {FormView}
}
</script>
