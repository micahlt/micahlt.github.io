<script>
let x,
  y,
  mouseStatus = {
    hovered: false,
    active: false,
  };

document.onmousemove = function (e) {
  x = e.clientX;
  y = e.clientY;
  updateProps();
};

document.onmousedown = function () {
  if (mouseStatus.hovered) {
    document.body.style.setProperty(
      "--transform",
      "translate(-50%,-50%) scale(1.2)"
    );
  } else {
    document.body.style.setProperty(
      "--transform",
      "translate(-50%,-50%) scale(0.8)"
    );
  }
};

document.onmouseup = function () {
  if (mouseStatus.hovered) {
    document.body.style.setProperty(
      "--transform",
      "translate(-50%,-50%) scale(1.7)"
    );
  } else {
    document.body.style.setProperty(
      "--transform",
      "translate(-50%,-50%) scale(1)"
    );
  }
};

document.body.style.setProperty("--size", "1.5em");
document.body.style.setProperty("--transform", "translate(-50%,-50%) scale(1)");
document.onscroll = updateProps;

function updateProps() {
  document.body.style.setProperty("--x", x + "px");
  document.body.style.setProperty(
    "--y",
    y + document.documentElement.scrollTop - window.scrollY + "px"
  );
}

export default {
  title: "App",
  methods: {
    hoverIn() {
      document.body.style.setProperty(
        "--transform",
        "translate(-50%,-50%) scale(1.7)"
      );
      mouseStatus.hovered = true;
    },
    hoverOut() {
      document.body.style.setProperty(
        "--transform",
        "translate(-50%,-50%) scale(1)"
      );
      mouseStatus.hovered = false;
    },
  },
  mounted() {
    setTimeout(() => {
      document.querySelector("#bmc-wbtn").addEventListener("mouseover", () => {
        this.hoverIn();
      });
      document.querySelector("#bmc-wbtn").addEventListener("mouseout", () => {
        this.hoverOut();
      });
    }, 1500);
  },
};
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <component :is="Component" @hoverIn="hoverIn" @hoverOut="hoverOut" />
    </transition>
  </router-view>
</template>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}

body {
  height: 100vh;
  width: 100%;
  background: var(--bg-primary);
  overflow-y: auto;
  overflow-x: hidden;
}

#bmc-wbtn {
  z-index: 50 !important;
  cursor: none !important;
}

#app {
  font-family: "Jost", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-width: 540px) {
  * {
    cursor: revert;
  }
  body:before {
    display: none;
  }
  #bmc-wbtn {
    cursor: pointer !important;
  }
}

@media screen and (pointer: coarse) {
  * {
    cursor: revert;
  }
  body:before {
    display: none;
  }
  #bmc-wbtn {
    cursor: pointer !important;
  }
}
</style>
