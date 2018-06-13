<template>
    <div class="dailyAdd">
        <el-form>
            <el-form-item label="项目名称">
                <el-select v-model="projectName" filterable placeholder="请选择项目名称">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </el-form-item>
            <div style="margin:20px 0;">
                <el-form-item label="项目描述">
                    <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="请输入内容"
                        v-model="textarea3" style="display:inline-block;">
                    </el-input>
                </el-form-item>
            </div>
            <div class="block">
                <el-form-item label="项目进度">
                    <el-slider v-model="value1" class="slider" style="width:50%;display:inline-block;"></el-slider>
                    <p style="display:inline-block;float:right;margin-right:30%;">{{value1}}%</p>
                </el-form-item>
            </div>
        </el-form>
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
       options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        projectName: '',
        textarea3: '',
        value1: 0,
      }
  },
  components: {},
  created: function() {},
  methods: {
    
  }
};
</script>
<style type="text/css">
.el-slider .slider {
    height: 10px;
    display: inline-block;
}
.el-textarea, .el-textarea__inner {
    width: 80%;
}
.dailyAdd {
    /* color: red; */
}
</style>
