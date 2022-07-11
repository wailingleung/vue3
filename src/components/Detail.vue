<template>
  <div class="description">
    <div>{{computedValues.name}}</div>
    <div>{{computedValues.language}}</div>
    <div>{{computedValues.image}}</div>
    <div v-html="computedValues.summary" />
  </div>

</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import tvstoreDetail from "@/store/tvstore";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute()
    onMounted(async () => {
      await tvstoreDetail.getTvsDetail(Number(route.params.id));
    });

    const computedValues = computed(() => {
      return tvstoreDetail.state.tvsDetail;
    });
    return { computedValues };
  },
});
</script>

<style>
.image-poster{
  width: 500px;
  float: left;
}

.description{
  float: left;
  padding: 20px;
}
</style>
