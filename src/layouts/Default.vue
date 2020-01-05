<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
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
@import url('https://fonts.googleapis.com/css?family=Montserrat+Subrayada&display=swap');

body {
  font-family: 'Helvetica', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

header {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 2.5em;
  text-align: center;
  padding: 20px;
  background: black;
}

header a {
  text-decoration: none;
  color: white;
}

header a:hover {
  color: rgb(170, 255, 237);
  text-decoration: none;
}
</style>
