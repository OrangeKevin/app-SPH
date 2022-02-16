<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>
<script>
//引入其余的组件
import ListContainer from './ListContainer/index'
import Recommend from './Recommend/index'
import Rank from './Rank/index'
import Like from './Like/index'
import Floor from './Floor/index'
import Brand from './Brand/index'
export default {
  data () {
   return {}
  },
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
   methods:{}
}
</script>
<style lang="less" scoped>
</style>