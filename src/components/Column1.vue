<script>
import simpleIcons from "simple-icons";
export default {
  title: "Column1",
  emits: ["hoverIn", "hoverOut"],
  data() {
    return {
      i: {
        linkedin: simpleIcons.Get("linkedin").svg,
        github: simpleIcons.Get("github").svg,
        dribbble: simpleIcons.Get("dribbble").svg,
        stackoverflow: simpleIcons.Get("stackoverflow").svg,
        youtube: simpleIcons.Get("youtube").svg,
      },
    };
  },
};
</script>

<template>
  <div class="column">
    <div class="center">
      <h1>Hi, I'm Micah</h1>
      <p>
        I've been building things on the Internet since 2015, and I'm
        experienced with multiple web languages and frameworks like
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >JavaScript</a
        >,
        <a
          href="https://ionicframework.com/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Ionic</a
        >,
        <a
          href="https://vuejs.org"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Vue</a
        >,
        <a
          href="https://reactjs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >React</a
        >,
        <a
          href="https://svelte.dev/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Svelte</a
        >,
        <a
          href="https://nodejs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Node.js</a
        >,
        <a
          href="https://sass-lang.com/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Sass</a
        >,
        <a
          href="https://nativescript.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >NativeScript</a
        >,
        <a
          href="https://www.electronjs.org/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Electron</a
        >,
        <a
          href="https://socket.io/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Socket.io</a
        >, and
        <a
          href="https://vitejs.dev/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Vite</a
        >.<br /><br />
        Aside from web development, I dabble in 3D design and do freelance
        branding and print design. I work at 
        <a
          href="https://www.linkedin.com/company/epic-solutions-llc-/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Epic Solutions</a
        >
        as webmaster and
        <a
          href="https://madebyspeak.com"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >Speak Creative</a
        >
        as an intern.  Every now and then you can find me making
        <a
          href="https://soundcloud.com/micahlt"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >digital music</a
        >, producing a video for my
        <a
          href="https://www.youtube.com/channel/UC6RTYK7Amqv6TpFsfDn-wnQ"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >YouTube channel</a
        >, or writing a post for my
        <a
          href="https://blog.micahlindley.com/"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          >blog.</a
        ><br /><br />
        While you're here, feel free to check out my
        <router-link
          to="/projects"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >projects</router-link
        >
        or
        <router-link
          to="/contact"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
          class="special-link"
          >get in touch</router-link
        >.
      </p>
      <div class="socials">
        <a
          v-html="i.linkedin"
          href="https://www.linkedin.com/in/micahlt"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.github"
          href="https://github.com/micahlt"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.dribbble"
          href="https://dribbble.com/micahlt"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.stackoverflow"
          href="https://stackoverflow.com/users/10806546"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
        <a
          v-html="i.youtube"
          href="https://www.youtube.com/channel/UC6RTYK7Amqv6TpFsfDn-wnQ"
          @mouseenter="$emit('hoverIn')"
          @mouseleave="$emit('hoverOut')"
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.column {
  background: var(--bg-primary);
  display: grid;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;
}

.center {
  margin: 1rem auto;
  max-width: 480px;
  padding: 1rem 2.5rem;
}

h1 {
  color: var(--accent);
  font-size: 4rem;
  line-height: 1em;
  margin-bottom: 0.2em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.1s;
}

p {
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.2s;
  color: var(--text-primary);
  transition: color 0.2s;
}

p > a {
  color: inherit;
  font-weight: 500;
  transition: color 0s;
}

.special-link {
  color: var(--accent);
}
  
.socials {
  margin-top: 1.5em;
  opacity: 0;
  transform-style: preserve-3d;
  transform-origin: top center;
  transform: var(--animation-initial);
  animation: var(--animation);
  animation-delay: 0.5s;
}

.socials a {
  fill: var(--text-secondary);
  text-decoration: none;
  margin-right: 1.2rem;
  transition: 0.2s;
}

.socials a:hover {
  fill: var(--accent);
}
  
@media only screen and (max-width: 510px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
