<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <a
      role="button"
      class="navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          <router-link to="/Home">Home</router-link>
        </a>

        <a class="navbar-item">
          <router-link to="/Viewer">Viewer</router-link>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item"></div>
      </div>
    </div>
  </nav>
</template>