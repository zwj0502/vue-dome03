const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  devServer:{
    open:true,
     port:3000,
    host:'localhost',
    },
  transpileDependencies: true
})
