<script>
import NavBar from "../components/NavBar.vue";
let images = [];
const projects = [
  {
    name: "The Caf App",
    image: "/assets/projects/thecafapp.svg",
    subtitle: "Info for the Caf at Mississippi College",
    url: "https://thecaf.app",
    color: "#0b1d3c",
  },
  {
    name: "Offsides",
    image: "/assets/projects/offsides.svg",
    subtitle: "A YikYak client for Android",
    url: "https://offsides.micahlindley.com",
    color: "#3ddc84",
  },
  {
    name: "Itchy",
    image: "/assets/projects/itchy.svg",
    subtitle: "A mobile app for Scratch",
    url: "https://itchy.micahlindley.com",
    color: "#0082ff",
  },
  {
    name: "Tzutujil.org",
    image: "/assets/projects/tzutujil.svg",
    subtitle: "Maya Tz'utujil language dictionary",
    url: "https://tzutujil.org",
    color: "black",
  },
  {
    name: "wasteof for Android",
    image: "/assets/projects/wasteof.svg",
    subtitle: "Mobile client for wasteof.money",
    url: "https://play.google.com/store/apps/details?id=com.micahlindley.wasteofmobile",
    color: "#191b42",
  },
  {
    name: "Glyde",
    image: "/assets/projects/glyde.svg",
    subtitle: "Web-based lyric presentation software (beta)",
    url: "https://glyde.micahlindley.com",
    color: "#4D97FF",
  },
  {
    name: "Vesper",
    image: "/assets/projects/vesper.svg",
    subtitle: "Easy and fast YouTube downloader",
    url: "https://vesper.micahlindley.com",
    color: "#0e0c12",
  },
  {
    name: "Caf Data",
    image: "/assets/projects/cafdata.svg",
    subtitle: "Historical caf rating analysis",
    url: "https://data.thecaf.app",
    color: "black",
  },
  {
    name: "DOMPong",
    image: "/assets/projects/dompong.svg",
    subtitle: "Pong clone in HTML, no canvas",
    url: "https://dompong.micahlindley.com",
    color: "#000000",
  },
];
export default {
  title: "Projects",
  emits: ["hoverIn", "hoverOut"],
  components: {
    NavBar,
  },
  data() {
    return {
      projects,
      loaded: true,
    };
  },
  mounted() {
    let loadCount = 0;
    const checkForLoad = () => {
      if (loadCount == projects.length) {
        this.loaded = true;
        console.log("Loaded!");
      }
    };
    const preloadImage = (url) => {
      let img = new Image();
      img.src = url;
      img.addEventListener("load", () => {
        loadCount++;
        checkForLoad();
      });
      images.push(img);
      return;
    };
    projects.forEach((project, i) => {
      preloadImage(project.image);
    });
  },
  methods: {
    open(u) {
      window.open(u);
    },
  },
};
</script>

<template>
  <main>
    <img src="/assets/micahlt-rotate.png" class="spinner rotate" />
    <NavBar @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
    <div class="project-grid">
      <a
        class="project"
        :href="p.url"
        @click.prevent
        v-for="p in projects"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
        @click="open(p.url)"
        :style="`background: ${p.color}`"
      >
        <img :src="p.image" class="project-image" v-if="loaded" />
        <div class="project-image skeleton" v-else></div>
        <p>{{ p.subtitle }}</p>
      </a>
      <a
        class="project github"
        href="https://github.com/micahlt"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
        target="_blank"
      >
        <h2>See more on my <span class="underline">GitHub</span></h2>
      </a>
    </div>
  </main>
</template>

<style scoped>
.spinner {
  position: fixed;
  bottom: calc(18px + 32px);
  right: calc(18px + 32px);
  width: 17rem;
  max-width: 30vw;
  transform: translate(50%, -50%);
  z-index: 2;
}

.project-grid {
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4rem;
  overflow: hidden;
}

.project {
  display: flex;
  cursor: inherit;
  text-decoration: none;
  width: 100%;
  flex-grow: 1;
  transition: 0.75s all;
  background-position: center !important;
  background-repeat: no-repeat !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.project > p {
  color: white !important;
  opacity: 0;
  transition: 0.15s opacity;
  padding-left: 2rem;
  width: calc(100% - 4rem);
}

.project:hover > p {
  opacity: 0.8 !important;
  transition: 0.15s opacity;
}

.project-image {
  max-height: 4rem;
  height: 8vh;
  border-radius: 0.3rem;
  transition: 0.2s;
}

.project-image.skeleton {
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
}

.project-image.skeleton:after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(225, 225, 225, 0) 0,
    rgba(225, 225, 225, 0.2) 20%,
    rgba(225, 225, 225, 0.5) 60%,
    rgba(225, 225, 225, 0)
  );
  animation: shimmer 2s infinite;
  content: "";
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}

.project:hover {
  flex-grow: 15;
  transition: 0.25s all;
  padding-top: 1rem;
}

.project:hover > .project-image {
  height: 100%;
  max-height: 10vh !important;
}

.project-grid:hover > .project:not(:hover) {
  filter: brightness(0.4) grayscale(1);
  flex-grow: 0;
}

.project-grid:hover > .project:not(:hover) > img {
  max-height: 4rem;
}

.rotate {
  animation: rotate 90s infinite linear;
  transform-origin: bottom right;
}

.project h2 {
  color: var(--text-primary);
  position: relative;
  margin-right: 0;
  width: max-content;
  transition: color 0.2s;
  font-size: 2.5rem;
}

.project:hover h2 {
  color: white;
}

.project:hover h2:before {
  max-height: 1em;
}

.project p {
  color: var(--text-primary);
  font-size: 1.5rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  text-align: center;
}

.project.github {
  background: var(--accent);
  color: white;
  text-align: center;
  font-weight: bold;
}

.project.github h2 {
  margin: auto;
  opacity: 1 !important;
  font-size: 1.5rem;
}

@keyframes rotate {
  0% {
    transform: rotate(0) translate(50%, 50%);
  }
  100% {
    transform: rotate(360deg) translate(50%, 50%);
  }
}

@media only screen and (max-width: 1680px) {
}

@media only screen and (max-width: 1360px) {
  .project-grid {
    height: max-content;
  }

  .project {
    height: max-content;
    padding: 3em 0;
    padding-bottom: 4rem;
  }

  .project > p {
    opacity: 1;
    font-size: 1rem;
  }

  .project:last-of-type {
    padding-bottom: 6rem;
  }

  .spinner {
    display: none;
  }

  .underline {
    text-decoration: underline;
  }
}

@media only screen and (max-width: 1041px) {
  .spinner {
    display: none;
  }
}

@media only screen and (max-width: 735px) {
  .spinner {
    display: none;
  }
}
</style>
