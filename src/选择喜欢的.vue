<template>
  <div>
    <form v-for="(item,index) in arr" :key="index">
      <input type="checkbox" :value='item' v-model="check">{{item}}
    </form>
    <ul>
      <li v-for="item in check" :key="item">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: ["科幻", "喜剧", "动漫", "冒险", "科技", "军事", "娱乐", "奇闻"],
        check: []
      }
    },
  }
</script>

<style>

</style>