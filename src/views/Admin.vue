<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container py-4">
    <h1 class="admin-title">Panel Administratora</h1>
    <div class="admin-buttons">
      <router-link :to="{ name: 'Category' }">
        <button class="btn btn-secondary btn-lg border-radius">Admin Kategorie</button>
      </router-link>
      <router-link :to="{ name: 'AdminProduct' }">
        <button class="btn btn-secondary btn-lg border-radius">Admin Produkty</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.admin-title {
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
}

.admin-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn {
  margin-bottom: 20px;
}

.border-radius {
  border-radius: 20px;
}
</style>
