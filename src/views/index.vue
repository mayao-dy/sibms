<template>
    <el-container class="container">
        <el-header>
            <div class="home-header-name">监管执行部综合业务管理系统</div>
            <div class="user-info" v-if="userName && userName!==''">
                <el-dropdown @command="handleUserCommand">
                    <div class="el-dropdown-link">
                        <img src="./../assets/me.png"/>
                        <span>{{userName}} </span>      
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">注销</el-dropdown-item>
                    </el-dropdown-menu>             
                </el-dropdown>
            </div>     
        </el-header>
        <el-container>
            <el-aside width="120px">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="vertical"
                @select="handleSelect"
                background-color="#3C454C"
                text-color="#fff">
                <router-link to="/depPreview"><el-menu-item index="1"><span class="menu-span">部门总览</span></el-menu-item></router-link>
                <router-link to="/member"><el-menu-item index="2"><span class="menu-span">人员清单</span></el-menu-item></router-link>
                <router-link to="/project"><el-menu-item index="3"><span class="menu-span">项目清单</span></el-menu-item></router-link>
                <router-link to="/createProject"><el-menu-item index="4"><span class="menu-span">指派任务</span></el-menu-item></router-link>
                <router-link to="/daily"><el-menu-item index="5"><span class="menu-span">工作总结</span></el-menu-item></router-link>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer><copy-right type="black"></copy-right></el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import CopyRight from "./../components/CopyRight";
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from "./../utils/loading.js";

export default {
  data() {
    return {
      activeIndex: "1",
      userName: "mayao"
    };
  },
  components: { CopyRight },
  created: function() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleUserCommand(command) {
      if (command == "logout") {
        this.$router.push("login");
      }
    }
  }
};
</script>
<style lang="less">
.container {
  height: 100%;
}
.el-header {
    background-color: #3b82dc;
  }
.el-aside {
}
.el-main {
  height: 100%;
}
.el-footer {
  padding: 0;
}
.el-menu {
  height: 100%;
}
.el-menu-item.is-active {
  color: #fff !important;
  border-left: 4px solid rgb(64, 158, 255);
  background-color: rgb(84, 92, 100) !important;
}
body > .el-container {
  margin-bottom: 40px;
}

.home-header-name {
  font-size: 18px;
  color: #ffffff;
  font-family: MicrosoftYaHei;
  line-height: 60px;
  display: inline-block;
  vertical-align: top;
  float: left;
}
.user-info {
  float: right;
  margin-right: 30px;
  cursor: pointer;
  padding: 0px 10px;
}
.user-info:hover {
  background-color: #316ebd;
}
.user-info img {
  margin-top: -5px;
  vertical-align: middle;
}
.user-info span {
  color: #ffffff;
  font-size: 18px;
  line-height: 60px;
  margin-left: 10px;
}
.menu-span {
  color: #fff;
}
</style>
