<template>
  <Card>
    <template #title> {{ title }} </template>
    <template #content>
      <router-link :to="{ name: 'Detail', params: { id: tv.id } }">
        <div><img :src="tv.image.medium" /></div>
        <div class="card-content-description">
          <div>Rating: {{ tv.rating.average }}</div>
          <label>Genres: {{ tv.genres.join(', ') }}</label>
        </div>
      </router-link>
    </template>
  </Card>
</template>

<script lang="ts">
import Card from "@/components/BaseCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Card,
  },
  props: {
    title: String,
    tv: Object,
  },
});
</script>

<style scoped>
.card-content-description {
  font-size: 0.8em;
  text-align: left;
}
</style>
