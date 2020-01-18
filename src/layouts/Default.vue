<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="main-title" to="/">
          <span>M</span>
          <span><font-awesome-icon icon="music" flip="vertical" size=".5rem"/></span>
          <span>S</span>
          <span>I</span>
          <span>H</span>
          <span><font-awesome-icon icon="compact-disc"/></span>
          <span>L</span>
          <span><font-awesome-icon icon="wine-glass"/></span>
          <span>C</span>

        </g-link>
      </strong>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
@import url('https://fonts.googleapis.com/css?family=Prompt:700,900&display=swap');

body {
  font-family: 'Helvetica', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

header {
  font-family: 'Prompt', sans-serif;
  text-align: center;
  background: #4dd5be;
}

.main-title {
  text-decoration: none;
  font-size: 5.5em;
  color: black;
  bottom: -22%;
}

header a:hover {
  color: white;
  text-decoration: none;
}
</style>
