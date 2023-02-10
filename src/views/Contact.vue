<script>
import simpleIcons from "simple-icons";
import NavBar from "../components/NavBar.vue";
const platforms = [
  {
    name: "Email",
    icon: simpleIcons.Get("gmail").svg,
    url: "mailto:hi@micahlindley.com",
  },
  {
    name: "Phone",
    icon: simpleIcons.Get("googlemessages").svg,
    url: "tel:17319037085",
  },
  {
    name: "GitHub",
    icon: simpleIcons.Get("github").svg,
    url: "https://github.com/micahlt",
  },
  {
    name: "Dribbble",
    icon: simpleIcons.Get("dribbble").svg,
    url: "https://dribbble.com/micahlt",
  },
  {
    name: "LinkedIn",
    icon: simpleIcons.Get("linkedin").svg,
    url: "https://linkedin.com/in/micahlt",
  },
  {
    name: "Buy Me A Coffee",
    icon: simpleIcons.Get("buymeacoffee").svg,
    url: "https://www.buymeacoffee.com/micahlt",
  },
  {
    name: "Behance",
    icon: simpleIcons.Get("behance").svg,
    url: "https://behance.net/micahlt",
  },
  {
    name: "Hashnode",
    icon: simpleIcons.Get("hashnode").svg,
    url: "https://blog.micahlindley.com",
  },
  {
    name: "DEV",
    icon: simpleIcons.Get("devdotto").svg,
    url: "https://dev.to/@micahlt",
  },
  {
    name: "YouTube",
    icon: simpleIcons.Get("youtube").svg,
    url: "https://www.youtube.com/@micahlindley",
  },
  {
    name: "Polywork",
    icon: simpleIcons.Get("polywork").svg,
    url: "https://poly.work/micahlt",
  },
  {
    name: "Coolors",
    icon: simpleIcons.Get("cloudera").svg,
    url: "https://coolors.co/u/micahlt",
  },
  {
    name: "Scratch",
    icon: simpleIcons.Get("scratch").svg,
    url: "https://scratch.mit.edu/users/-Archon-",
  },
  {
    name: "Stack Overflow",
    icon: simpleIcons.Get("stackoverflow").svg,
    url: "https://stackoverflow.com/users/10806546/micahlt",
  },
  {
    name: "Spotify",
    icon: simpleIcons.Get("spotify").svg,
    url: "https://open.spotify.com/user/dq8tewx9swt2rytgq6knkwloe",
  },
  {
    name: "Trello",
    icon: simpleIcons.Get("trello").svg,
    url: "https://trello.com/micahlt/",
  },
  {
    name: "NPM",
    icon: simpleIcons.Get("npm").svg,
    url: "https://www.npmjs.com/~micahlt",
  },
  {
    name: "Google Play",
    icon: simpleIcons.Get("googleplay").svg,
    url: "https://play.google.com/store/apps/dev?id=6956576600836460324",
  },
  {
    name: "Scrapbook",
    icon: simpleIcons.Get("hackclub").svg,
    url: "https://scrapbook.hackclub.com/micahlt",
  },
  {
    name: "Ask Ubuntu",
    icon: simpleIcons.Get("askubuntu").svg,
    url: "https://askubuntu.com/users/905370/micah-lindley",
  },
  {
    name: "JSFiddle",
    icon: simpleIcons.Get("jsfiddle").svg,
    url: "https://jsfiddle.net/user/micahlt",
  },
  {
    name: "Codepen",
    icon: simpleIcons.Get("codepen").svg,
    url: "https://codepen.io/micahlt",
  },
  {
    name: "Soundcloud",
    icon: simpleIcons.Get("soundcloud").svg,
    url: "https://soundcloud.com/micahlt",
  },
  {
    name: "Local Guides",
    icon: simpleIcons.Get("googlemaps").svg,
    url: "https://www.google.com/maps/contrib/109067581520057374776",
  },
  {
    name: "Khan Academy",
    icon: simpleIcons.Get("khanacademy").svg,
    url: "https://www.khanacademy.org/profile/me/",
  },
];
export default {
  title: "Contact",
  emits: ["hoverIn", "hoverOut"],
  components: {
    NavBar,
  },
  data() {
    return {
      query: "",
      platforms,
    };
  },
  computed: {
    filteredPlatforms() {
      const filtered = this.platforms.filter((p) => {
        if (
          p.name.toLowerCase().includes(this.query.toLowerCase()) ||
          this.query.length < 1
        )
          return true;
      });
      if (filtered.length < 1) {
        return;
      } else {
        return filtered;
      }
    },
  },
};
</script>

<template>
  <main>
    <h1 class="background">Contact</h1>
    <img src="/assets/micahlt-rotate.png" class="spinner rotate" />
    <NavBar @hoverIn="$emit('hoverIn')" @hoverOut="$emit('hoverOut')" />
    <div class="contact-me">
      <div class="results-cover"></div>
      <input
        type="text"
        placeholder="find a platform"
        v-model="query"
        class="contact-search"
        @mouseenter="$emit('hoverIn')"
        @mouseleave="$emit('hoverOut')"
      />
      <div class="contact-results">
        <transition-group name="list" tag="div">
          <a
            class="result"
            v-for="p in filteredPlatforms"
            :href="p.url"
            @mouseenter="$emit('hoverIn')"
            @mouseleave="$emit('hoverOut')"
            :key="p.name"
          >
            <div class="result-icon" v-html="p.icon"></div>
            <h2>{{ p.name }}</h2>
          </a>
        </transition-group>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: grid;
  justify-content: center;
  height: 100vh;
}

.contact-me {
  position: relative;
  margin-top: 6rem;
  background: var(--bg-primary);
  padding: 22px 3vw;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 0.4rem;
  width: 80vw;
  max-width: calc(300px + 3vw);
  height: max-content;
  max-height: calc(calc(100vh - 9rem) - 3vw);
  min-height: 4rem;
  overflow-y: scroll;
}

input {
  position: fixed;
  font-family: "Jost", sans-serif;
  outline: none;
  font-size: 1.2rem;
  padding: 0.75rem;
  border: 2px solid var(--text-secondary);
  background: var(--bg-primary);
  border-radius: 0.3rem;
  text-align: center;
  width: 73vw;
  max-width: 300px;
  margin-bottom: 1rem;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  transition: outline 0.2s;
  z-index: 2;
}

input:focus {
  border: 2px solid var(--accent);
}

.contact-results {
  width: max-content;
  margin: auto;
  margin-top: 5rem;
  color: var(--text-primary);
}

.results-cover {
  width: 73vw;
  max-width: 300px;
  height: 4rem;
  background: var(--bg-primary);
  position: fixed;
  z-index: 1;
  transform: translateY(-1.4rem);
}

.result {
  margin: 1.25rem 0;
  font-size: 1.2em;
  display: grid;
  grid-template-columns: auto 1fr;
  color: black;
  text-decoration: none;
  transition: color 0.3s, fill 0.3s;
  align-items: center;
  color: var(--text-primary);
  fill: var(--text-primary);
}

.result:hover {
  color: var(--accent);
  fill: var(--accent);
}

.result-icon {
  height: 1.1em;
}

.result h2 {
  font-size: 1.2rem;
  margin-left: 1rem;
  font-weight: normal;
}

.spinner {
  position: fixed;
  bottom: calc(18px + 32px);
  right: calc(18px + 32px);
  width: 17rem;
  max-width: 30vw;
  transform: translate(50%, -50%);
}

.rotate {
  animation: rotate 90s infinite linear;
  transform-origin: bottom right;
}

@keyframes rotate {
  0% {
    transform: rotate(0) translate(50%, 50%);
  }
  100% {
    transform: rotate(360deg) translate(50%, 50%);
  }
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

@media only screen and (max-width: 735px) {
  .spinner {
    display: none;
  }

  .contact-me {
    width: 100vw;
    max-width: 100vw;
    box-shadow: none;
    background: transparent;
    height: 80vh;
    max-height: 80vh;
  }

  .results-cover {
    width: 100vw;
  }

  input {
    width: 1;
    margin-left: 10vw;
    margin-right: 10vw;
    max-width: unset;
  }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
