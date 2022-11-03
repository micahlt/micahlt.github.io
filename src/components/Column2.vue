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
    changeTheme() {
      const current = window.localStorage.getItem("t");
      const html = document.querySelector("html");
      let newTheme;
      if (!current) {
        // initial theme config
        if (html.classList.contains("dark")) {
          newTheme = "light";
        } else {
          newTheme = "dark";
        }
      } else if (current == "light") {
        newTheme = "dark";
      } else if (current == "dark") {
        newTheme = "light";
      }
      window.localStorage.setItem("t", newTheme);
      html.classList.remove("dark");
      html.classList.add(newTheme);
    },
  },
};
</script>

<template>
  <div class="column">
    <svg
      role="icon"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="color-scheme-dark"
      class="change-theme"
      @mouseenter="$emit('hoverIn')"
      @mouseleave="$emit('hoverOut')"
      @click="changeTheme"
    >
      <path
        d="M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z"
      ></path>
    </svg>
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
  position: relative;
}

@media only screen and (max-width: 1070px) {
  .column {
    min-height: 100%;
    height: 40vh;
  }
}

.change-theme {
  fill: var(--bg-primary);
  opacity: 0.25;
  position: absolute;
  top: 2vw;
  left: 2vw;
  top: clamp(1rem, 2vw, 3rem);
  left: clamp(1rem, 2vw, 3rem);
  width: 1.7rem;
  height: 1.7rem;
  transition: color 0.2s, opacity 0.2s;
}

.change-theme:hover {
  fill: white;
  opacity: 1;
}

.rotating {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  opacity: 0;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.8s;
  user-select: none;
  justify-items: center;
  align-items: center;
}

.rotate,
.static {
  max-width: 50vw;
  max-height: 30vh;
  border-radius: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.static {
  z-index: 1;
}

.rotate {
  animation: rotate 90s infinite linear;
  transform-origin: center center;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotating:hover .rotate {
  animation-play-state: paused;
}

.avatar {
  opacity: 0;
  transition: 0.3s all;
  transform: scale(0.1);
  max-width: 50vw;
  max-height: 30vh;
  border-radius: 100%;
  z-index: 2;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.back .avatar {
  opacity: 1;
  transform: scale(1);
  transform-origin: top left;
}
</style>
