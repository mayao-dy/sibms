<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="项目日报">项目日报
                <router-link :to="{path: '/dailyAdd'}">
                    <el-button type="primary" size="small">新增日报</el-button>
                </router-link>
            </el-tab-pane>
            <el-tab-pane label="项目周报">项目周报
                <router-link :to="{path: '/dailyAdd'}">
                    <el-button type="primary" size="small">新增周报</el-button>
                </router-link>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import moment from 'moment';
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from "./../utils/loading.js";

export default {
  data() {
    return {
      
    };
  },
  components: {},
  created: function() {},
  methods: {
    
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
