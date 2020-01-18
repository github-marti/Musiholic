<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link class="main-title" to="/">
          <span>M</span>
          <span><font-awesome-icon icon="headphones" flip="vertical" size="xs"/></span>
          <span>S</span>
          <span><font-awesome-icon icon="wine-glass" size="xs"/></span>
          <span>H</span>
          <span><font-awesome-icon icon="compact-disc" size="xs"/></span>
          <span>L</span>
          <span>I</span>
          <span><font-awesome-icon icon="glass-cheers" rotation="270" size="xs"/></span>

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
@import url('https://fonts.googleapis.com/css?family=Prompt:600,900&display=swap');

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
}

.main-title>span {
  padding: 5px
}

header a:hover {
  color: white;
  text-decoration: none;
}
</style>
