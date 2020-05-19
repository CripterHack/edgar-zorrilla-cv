<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
/* Add new fonts here */
@import '../node_modules/roboto-fontface/css/roboto/roboto-fontface.css';
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/material-design-icons/iconfont/material-icons.css';
@import '../node_modules/source-sans-pro/source-sans-pro.css';
@import '../node_modules/npm-font-open-sans/open-sans.css';
@import '../node_modules/npm-font-open-sans-condensed/open-sans-condensed.css';
@import '../node_modules/raleway-webfont/raleway.css';

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: roboto,sans-serif;
  color: #545e6c;
  background: #f5f5f5;
  font-size: 14px;
  padding: 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
