<script>
import NavBar from "../components/NavBar.vue";
let images = [];
const projects = [
  {
    name: "The Caf App",
    image: "/assets/projects/thecafapp.png",
    subtitle: "Info for the Caf at Mississippi College",
    url: "https://thecaf.app",
  },
  {
    name: "Offsides",
    image: "/assets/projects/offsides.png",
    subtitle: "A YikYak client for Android",
    url: "https://offsides.micahlindley.com",
  },
  {
    name: "Itchy",
    image: "/assets/projects/itchy.png",
    subtitle: "A mobile app for Scratch",
    url: "https://itchy.micahlindley.com",
  },
  {
    name: "Vesper",
    image: "/assets/projects/vesper.png",
    subtitle: "Easy and fast YouTube downloader",
    url: "https://vesper.micahlindley.com",
  },
  {
    name: "Caf Data",
    image: "/assets/projects/cafdata.png",
    subtitle: "Historical caf rating analysis",
    url: "https://data.thecaf.app",
  },
  {
    name: "Tzutujil.org",
    image: "/assets/projects/tzdb.png",
    subtitle: "Maya Tz'utujil language dictionary",
    url: "https://tzutujil.org",
  },
  {
    name: "wasteof for Android",
    image: "/assets/projects/wasteof.png",
    subtitle: "Mobile client for wasteof.money",
    url: "https://play.google.com/store/apps/details?id=com.micahlindley.wasteofmobile",
  },
  {
    name: "DOMPong",
    image: "/assets/projects/dompong.png",
    subtitle: "Pong clone in HTML, no canvas",
    url: "https://dompong.micahlindley.com",
  },
  {
    name: "Scratch Import Fixer",
    image: "/assets/projects/sif.png",
    subtitle: "Fix SVGs created in Affinity",
    url: "https://sif.micahlindley.com",
  },
  {
    name: "See more",
    image: "/assets/projects/github.jpg",
    subtitle: "There's more on my GitHub profile!",
    url: "https://github.com/micahlt",
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
      loaded: false,
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
    <h1 class="background">Projects</h1>
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
      >
        <img :src="p.image" class="project-image" v-if="loaded" />
        <div class="project-image skeleton" v-else></div>
        <h2>{{ p.name }}</h2>
        <p>{{ p.subtitle }}</p>
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
}

.project-grid {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: clamp(1rem, 3vw, 3rem);
  flex-wrap: wrap;
  width: calc(100vw - 2rem);
  margin: 1rem;
  margin-top: 6rem;
}

.project {
  cursor: inherit;
  text-decoration: none;
  width: max-content;
}

.project-image {
  max-width: 20rem;
  max-height: 15rem;
  aspect-ratio: 20 / 15;
  object-fit: cover;
  border-radius: 0.3rem;
  transition: 0.2s;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
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

.project:hover .project-image {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  filter: grayscale(1);
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
}

.project h2:before {
  content: "";
  display: block;
  background: var(--accent);
  max-height: 0;
  position: absolute;
  bottom: 0.2em;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 0.1em;
  transition: max-height 0.2s;
  z-index: -1;
}

.project:hover h2 {
  color: white;
}

.project:hover h2:before {
  max-height: 1em;
}

.project p {
  color: var(--text-secondary);
}

.background {
  color: var(--accent);
  position: fixed;
  z-index: -1;
  bottom: 0;
  left: 2rem;
  font-size: 30vh;
  opacity: 0.1;
  transform: skewX(-10deg);
  user-select: none;
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
  .project-grid {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1360px) {
  .project-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .spinner {
    display: none;
  }
}

@media only screen and (max-width: 1041px) {
  .project-grid {
    grid-template-columns: 1fr 1fr;
  }

  .project-link:last-of-type {
    margin-bottom: 4rem;
  }

  .spinner {
    display: none;
  }
}

@media only screen and (max-width: 735px) {
  .project-grid {
    grid-template-columns: 1fr;
    margin-top: 6rem;
  }

  .project {
    width: max-content;
    margin: auto;
    margin-bottom: 1rem;
  }

  .project-image {
    width: 80vw !important;
    height: 11rem;
  }

  .spinner {
    display: none;
  }
}
</style>
