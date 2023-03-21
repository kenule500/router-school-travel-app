<template>
  <ul>
    <li><RouterLink :to="{ name: 'protected' }">Dashboard</RouterLink></li>
    <li><RouterLink :to="{ name: 'invoices' }">Invoices</RouterLink></li>
  </ul>
</template>

<script setup></script>

<style lang="css" scoped>
ul {
  background-color: white;
  padding: 10px;
  list-style: none;
  margin-right: 20px;
}

li {
  margin: 10px;
}
</style>
