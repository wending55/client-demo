<template>
  <div>
    <div class="nav">
      <router-view />
      <van-tabbar route v-model="active" active-color="#07c160" inactive-color="#000">
        <van-tabbar-item replace to="/homepage">
          <span>主页</span>
          <template #icon="props">
            <img v-if="props.active" src="@/assets/tabIcon/home/selected.png">
            <img v-else src="@/assets/tabIcon/home/unselected.png">
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/class">
          <span>课程</span>
          <template #icon="props">
            <img v-if="props.active" src="@/assets/tabIcon/workbench/selected.png">
            <img v-else src="@/assets/tabIcon/workbench/unselected.png">
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/service">
          <span>服务</span>
          <template #icon="props">
            <img v-if="props.active" src="@/assets/tabIcon/Information/selected.png">
            <img v-else src="@/assets/tabIcon/Information/unselected.png">
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/mine">
          <span>我的</span>
          <template #icon="props">
            <img v-if="props.active" src="@/assets/tabIcon/mine/selected.png">
            <img v-else src="@/assets/tabIcon/mine/unselected.png">
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data () {
    return {
      active: 0,
      icon1: {
        active: '@/assets/tabIcon/home/selected.png',
        inactive: '@/assets/tabIcon/home/unselected.png'
      }
    }
  }
}
</script>

<style scoped>
</style>
