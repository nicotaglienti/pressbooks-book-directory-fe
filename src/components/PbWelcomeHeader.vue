<template>
  <section aria-labelledby="welcome-section-title">
    <div class="container mx-auto w-full md:w-2/3 p-8">
      <h1
        id="welcome-section-title"
        class="section-title text-5xl mb-8 font-bold text-center"
      >
        Welcome to Pressbooks Directory
      </h1>

      <p class="font-serif leading-7 text-lg">
        This directory provides an index of <strong data-cy="total-books-indexed">{{ totalBooksIndexed | numberFormat }}</strong> books published across <strong data-cy="total-networks-indexed">{{ totalNetworksIndexed | numberFormat }}</strong> Pressbooks
        networks. Learn to use the Directory by taking a
        <button
          class="text-pb-red underline"
          @click="startTour"
        >
          self-guided tour
        </button> or reading
        <a
          :href="guide"
          class="text-pb-red underline"
          target="_blank"
          rel="noopener"
          @click="sendGuideInsight"
        >our guide</a>.
      </p>

      <p class="mt-4 font-serif leading-7 text-lg">
        Pressbooks Directory is more powerful when paired with a PressbooksEDU Authoring & Editing Platform, which allows you to clone, revise, remix, and redistribute all of the openly licensed content found through this Directory.
      </p>

      <div class="flex items-center justify-center mt-4 mx-auto">
        <a
          :href="site"
          target="_blank"
          rel="noopener"
          class="inline-block text-center text-lg py-3 px-6 border-2 border-red-700 text-white bg-red-700 font-semibold rounded-full"
          data-cy="learn-about-pressbooks"
          @click="sendWelcomeCTAInsight"
        >
          Learn more about Pressbooks
        </a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'PbWelcomeHeader',
  computed: {
    guide() {
      return this.$store.state.config.urls.guide;
    },
    site() {
      return this.$store.state.config.urls.pressbooks;
    },
    totalBooksIndexed() {
      return this.$store.state.stats.numberOfBooksIndexed;
    },
    totalNetworksIndexed() {
      return this.$store.state.stats.numberOfNetworksIndexed;
    },
  },
  methods: {
    startTour() {
      this.sendFilterAppliedInsight(
        ['tour:opened'],
        'Start Tour Link Clicked'
      );
      this.$store.commit('showTour');
    },
    sendGuideInsight() {
      this.sendFilterAppliedInsight(
        ['guide:opened'],
        'Our Guide Link Clicked'
      );
    },
    sendWelcomeCTAInsight() {
      this.sendInsight({
        insightsMethod: 'convertedObjectIDs', 
        payload: {
          eventName: 'Welcome CTA Clicked',
          objectIDs: [
            `link:${this.site}`
          ]
        }, 
      });
    },
  }
};
</script>
