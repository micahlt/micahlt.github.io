<template>
  <nav>
    <div class="logo-left">
    <router-link to="/" class="logo-link" @mouseenter="$emit('hoverIn')" @mouseleave="$emit('hoverOut')"><img src="../assets/micahlt-small.png" class="logo"></router-link>
    </div>
    <div class="nav-links">
      <router-link to="/" class="logo-link mobile-hidden" @mouseenter="$emit('hoverIn')" @mouseleave="$emit('hoverOut')">Home</router-link>
      <router-link to="/projects" class="logo-link" @mouseenter="$emit('hoverIn')" @mouseleave="$emit('hoverOut')">Projects</router-link>
      <router-link to="/contact" class="logo-link" @mouseenter="$emit('hoverIn')" @mouseleave="$emit('hoverOut')">Contact</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  title: "NavBar",
  emits: ['hoverIn', 'hoverOut'],
  methods: {
    open(u) {
      window.open(u);
    }
  }
}
</script>

<style scoped>
nav {
  width: 100%;
  height: 4rem;
  background: var(--accent);
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: auto auto;
}

nav .logo {
  height: 50%;
  margin: 1rem 2rem;
  margin-left: 5vw;
}

nav .logo:active {
  opacity: 0.5;
}

.logo-link, .logo-left {
  height: 50%;
}

.nav-links {
  margin: 1.2rem 2rem;
  margin-right: 5vw;
  margin-left: 0;
  text-align: right;
}

.nav-links a {
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 1.75rem;
  position: relative;
}

.nav-links a[aria-current="page"]:before {
  content: "";
  width: 112%;
  height: 0.5em;
  background: white;
  opacity: 0.25;
  position: absolute;
  bottom: 0.1em;
  left: 50%;
  transform: translateX(-50%);
}

@media only screen and (max-width: 735px) {
  .mobile-hidden {
    display: none;
  }
}
</style>