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
@import "../node_modules/@fontsource/aileron/700.css";
@import "../src/assets/fonts/bigjohn.css";
@import '../node_modules/font-awesome/css/font-awesome.css';
@import '../node_modules/material-design-icons/iconfont/material-icons.css';

body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Aileron', sans-serif;
  color: #545e6c;
  background: #f5f5f5;
  font-size: 14px;
  padding: 60px 30px 30px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
