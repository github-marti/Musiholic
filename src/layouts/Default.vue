<template>
  <div class="layout">
    <header class="header position-relative">
      <strong>
        <g-link class="position-absolute main-title" to="/">MUSIHOLIC</g-link>
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
@import url('https://fonts.googleapis.com/css?family=Prompt:900&display=swap');

body {
  font-family: 'Helvetica', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

header {
  font-family: 'Prompt', sans-serif;
  text-align: center;
  height: 150px;
  background: #4dd5be;
}

.main-title {
  text-decoration: none;
  font-size: 5em;
  color: white;
  left: 0;
  bottom: 0;
}

header a:hover {
  color: rgb(205, 255, 255);
  text-decoration: none;
}
</style>
