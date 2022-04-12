<script>
import Column1 from "../components/Column1.vue";
import Column2 from "../components/Column2.vue";
export default {
  title: "Home",
  emits: ["hoverIn", "hoverOut"],
  components: {
    Column1,
    Column2,
  },
};
</script>

<template>
  <div class="primary-grid">
    <Column2 @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
    <Column1 @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
  </div>
</template>

<style>
.primary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
}

@media only screen and (max-width: 1070px) {
  .primary-grid {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}

@media only screen and (max-width: 540px) {
  .primary-grid {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
  }
}
</style>
