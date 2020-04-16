<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-link type="primary" @click="click">点我有惊喜</el-link>
    <p></p>
    <div> {{msg}} </div>
  </div>
</template>
<script>
// import { add } from '../utils/tool'
export default {
  name: 'About',
  components: {
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    click () {
      import(/* webpackChunkName: "tool" */ '../utils/tool').then(tool => {
        this.msg = `1 + 1 = ${tool.add(1, 1)}`
      })
    }
  }
}
</script>
