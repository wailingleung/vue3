<template>
  <header>
    <div class="brand">TV Project</div>
    <Search :search="state.search" @search="handleSearch" />
  </header>
</template>

<script>

import Search from "@/components/Search.vue";
import { defineComponent } from "vue";
import { reactive, watch } from "vue";
import tvstoreSearch from "@/store/tvstore";

export default defineComponent({
  components: {
    Search,
  },
  name: "layout-header",
  setup() {

    const state = reactive({
      search: '',
      loading: true,
      movies: [],
      errorMessage: null
    });

    watch( async () => {
      if (state.search != "") {
        await tvstoreSearch.getTvsSearch(state.search);
      }
    });

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      }
    };
  }
});
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: var(--primary-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
}
.brand {
  font-weight: 700;
  font-size: 1.2em;
  text-align: center;
}
</style>
