<template>
  <div id='id'>
    斤数： <input type="text" v-model.number="jinshu">
    <button @click="end">结账</button>
    总价：{{zongjia}}元 折后价：{{zhehou}}元 省了{{sheng}}元
  </div>
</template>

<script>
  export default {
    data() {
      return {
        jinshu: '',
        zongjia: '',
        zhehou: '',
        sheng: ''
      }
    },
    methods: {
      end(jinshu) {
        this.zongjia = this.jinshu * 10
        this.zhehou = this.jinshu * 10 * 0.8
        this.sheng = this.zongjia - this.zhehou
      }
    },

  }
</script>

<style scoped>

</style>