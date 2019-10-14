<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            {{city}}
            <router-link :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="#"
                v-for="item in nearCity"
                :key="item.id"
                >{{item.name}}</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" :to="{name: 'login'}">立即登录</router-link>
            <router-link class="register" :to="{name: 'register'}">注册</router-link>
        </div>
    </div>
</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            nearCity: [],
            city:''
        }
    },
    watch: {
        "$store.state.position": function () {
              this.nearCity = this.$store.state.position.nearCity;
        }
    },
    created() {
        api.getCurPosition().then((res) => {
            this.$store.dispatch('setPosition', res.data.data);
            this.city = res.data.data.name;
            this.nearCity = res.data.data.nearCity;

        })
    }
}
</script>


<style>

</style>
