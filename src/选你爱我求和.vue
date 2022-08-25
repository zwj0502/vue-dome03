<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">
        <input type="checkbox" :value="item" v-model="ccc"> {{item}}
      </li>
    </ul>
    和为：{{number}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
        ccc: []
      }
    },
    computed: {
      number() {
        return this.ccc.reduce((sum, item) => {
          return sum + item
        }, 0)
      }
    }

  }
</script>

<style scoped>

</style>