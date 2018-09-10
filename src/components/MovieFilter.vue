<template>
  <div id="movie-filter">
    <h2>Filter Results</h2>
    <h3>By Time</h3>
    <div class="filter-group">
      <check-filter category="time"
                    v-bind:key="time.id"
                    v-for="time in times"
                    v-bind:title="time"
                    v-on:check-filter="checkFilter">
      </check-filter>
    </div>

    <h3>By Genre</h3>
    <div class="filter-group">
      <check-filter category="genre"
                    v-bind:key="genre.id"
                    v-for="genre in genres"
                    v-bind:title="genre"
                    v-on:check-filter="checkFilter">
      </check-filter>
    </div>
  </div>
</template>

<script>
import genres from '../util/genres';
import times from '../util/times';
import CheckFilter from './CheckFilter.vue';
export default {
  data() {
    return {
      genres,
      times,
    };
  },
  methods: {
    checkFilter(category, title, check) {
      this.$emit('check-filter', category, title, check);
    },
  },
  components: {
    CheckFilter,
  },
};
</script>

<style>
</style>
