<template>
  <el-container>
    <el-header>
        <my-header/>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from '@/components/header/index'
import myFooter from '@/components/footer/index'
export default {
  components: {
    myHeader,
    myFooter
  }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
