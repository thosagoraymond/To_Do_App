<template>
  <div class="app">
    <nav>
      <RouterLink class="float-left" to="#" >To do list</RouterLink> |  
      <RouterLink to="/">All</RouterLink> | 
      <RouterLink to="/done">Done</RouterLink> | 
      <RouterLink to="/undone">Undone</RouterLink> | 
      <RouterLink to="/todo">Todo</RouterLink>
    </nav>

  <RouterView />
  <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
  <!-- Add Icons using String format -->
  <!-- <font-awesome-icon icon="fa-regular fa-envelope"></font-awesome-icon> -->

  </div>
</template>

<script>
// import TodoApp from './components/TodoApp.vue';
  
//   export default {
//     setup() {
//         return {};
//     },
//     components: { TodoApp }
// }
</script>

<style>
  .app {
    text-align:center;
  }
</style>