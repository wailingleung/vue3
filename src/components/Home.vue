<template>
  <div>
    <div v-for="(tvCategory, key) in computedValues"  class="cards">
      <div class="category">{{key}}</div>
      <TvCard
          v-for="tv in tvCategory.sort((a,b) => b.rating.average - a.rating.average)"
          :key="tv.id"
          :title="tv.name"
          :tv="tv"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import TvCard from "@/components/TvCard.vue";
import tvstore from "@/store/tvstore";

export default defineComponent({
  components: { TvCard },
  setup() {
    onMounted(async () => {
      await tvstore.getTvs();
    });

    const computedValues = computed(() => {
      return tvstore.state.tvs.reduce((result, currentValue) => {
        const genre = currentValue['genres'][0] ? currentValue['genres'][0] : "Other";
        // @ts-ignore
        (result[genre] = result[genre] || []).push(
            currentValue
        );
        return result;
      }, {});
    });
    return { computedValues };
  },
});
</script>

<style>

.category {
  font-size: 2em;
  color: white;
  clear: both;
  width: 100%;
  padding-left: 30px;
}
.cards {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
