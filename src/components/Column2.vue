<script>
export default {
  title: "Column2",
  emits: ["hoverIn", "hoverOut"],
  data() {
    return {
      front: true,
    };
  },
  methods: {
    flip() {
      if (this.front) {
        // flip to back
        this.front = false;
      } else {
        // flip to front
        this.front = true;
      }
    },
  },
};
</script>

<template>
  <div class="column">
    <div :class="{ rotating: true, front: front, back: !front }" @click="flip">
      <img
        src="/assets/micahlt-static.png"
        class="static"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
      />
      <img src="/assets/micahlt-rotate.png" class="rotate" />
      <img
        src="https://avatars.githubusercontent.com/u/28816297"
        class="avatar"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
      />
    </div>
  </div>
</template>

<style scoped>
.column {
  background: var(--accent);
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

@media only screen and (max-width: 1070px) {
  .column {
    min-height: 100%;
    height: 40vh;
  }
}

.rotating {
  display: block;
  position: relative;
  opacity: 0;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.8s;
}

.rotate,
.static {
  position: absolute;
  max-width: 50vw;
  max-height: 30vh;
  border-radius: 100%;
}

.static {
  z-index: 1;
  transform: translate(-50%, -50%);
}

.rotate {
  animation: rotate 90s infinite linear;
  transform-origin: top left;
}

@keyframes rotate {
  0% {
    transform: rotate(0) translate(-50%, -50%);
  }
  100% {
    transform: rotate(360deg) translate(-50%, -50%);
  }
}

.rotating:hover .rotate {
  animation-play-state: paused;
}

.avatar {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
  position: absolute;
  transition: 0.3s all;
  max-width: 50vw;
  max-height: 30vh;
  border-radius: 100%;
  z-index: 2;
}

.back .avatar {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  transform-origin: top left;
}
</style>
