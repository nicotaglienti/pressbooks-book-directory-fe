<template>
  <section
    v-if="$store.state[storeName][storeProperty].length >= 5"
    class="bg-pb-blue"
    data-cy="collection-section"
    aria-labelledby="collections-section-title"
  >
    <div class="container mx-auto py-10 px-8">
      <div class="border-gray-300">
        <div class="w-full mx-auto text-center">
          <h2
            id="collections-section-title"
            class="section-title font-bold text-4xl mb-12"
          >
            Curated Collections
          </h2>
          <ul 
            role="list"
            aria-labelledby="collections-section-title"
            class="grid grid-cols-1 gap-y-3 md:grid-cols-5 md:gap-x-3"
          >
            <pb-collection-card
              v-for="(card, n) in $store.state[storeName][storeProperty].slice(0, collectionCardsLimit)"
              :key="n"
              :card="card"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PbCollectionCard from './PbCollectionCard.vue';
export default {
  name: 'PbCollections',
  components: {PbCollectionCard},
  data() {
    return {
      storeName: 'collections',
      storeProperty: 'collectionHeaderCardObjects',
      collectionCardsLimit: 5
    };
  },
  mounted() {
    let index = this.$store.state.SClient.searchClient.initIndex(this.$store.state.SClient.indexName);
    this.$store.dispatch('getCollections', index);
  }
};
</script>

<style scoped>

</style>
