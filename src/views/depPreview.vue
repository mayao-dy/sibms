<template>
    <div>
        <div>
            <el-select v-model="checkName" filterable placeholder="姓名" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="任务名称" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-date-picker
                v-model="checkDate"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="-"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions" 
                size="small"
                @change="handleCheckDate()">
            </el-date-picker>
            <el-button type="primary" plain  size="small">查询</el-button>
            <el-button type="primary" plain  size="small" @click="resetCheck()">重置</el-button>
        </div>  
        <div class="m-t-20">
            <el-tabs v-model="activeTabName" @tab-click="handleTabClick">
                <el-tab-pane label="项目行程" name="project">
                    <div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="个人行程" name="person">
                    <div>
                        <div class="font-14">
                            <span class="font-bold">马瑶的个人行程</span>
                            <span class="float-right">{{checkStartDate}}——{{checkEndDate}}</span>
                        </div>
                        <el-table
                            :data="personalData"
                            border
                            class="m-t-10"
                            style="width: 100%">
                            <el-table-column
                            prop="date"
                            label="任务名称">
                            </el-table-column>
                            <el-table-column
                            prop="name"
                            label="时间">
                            </el-table-column>
                            <el-table-column
                            prop="province"
                            label="地点">
                            </el-table-column>
                            <el-table-column
                            label="操作"
                            width="100">
                            <template slot-scope="scope">
                                <el-button @click="handleEdit(scope.row)" type="text" size="small">修改</el-button>
                                <el-button type="text" size="small">删除</el-button>
                            </template>
                            </el-table-column>
                        </el-table>
                        <div class="m-t-10 m-l-20" v-if="isAddSchedule">
                            <el-input v-model="addTask" class="width-per-25" placeholder="请添加任务名称" size="small"></el-input>
                            <el-date-picker
                                v-model="addDate"
                                type="daterange"
                                align="right"
                                unlink-panels
                                range-separator="-"
                                start-placeholder="开始日期"
                                end-placeholder="结束日期"
                                :picker-options="pickerOptions2" 
                                size="small">
                            </el-date-picker>
                            <el-cascader
                                v-model="addPlace"
                                placeholder="请选择地点"
                                :options="cityList"
                                filterable 
                                size="small"
                            ></el-cascader>
                            <el-button type="primary" plain size="small" @click="handleAdd()">添加</el-button>
                            <el-button plain size="small" @click="cancleAdd()">取消</el-button>
                        </div>
                        <div class="text-center m-t-10"><i class="el-icon-plus text-blue"></i><el-button type="text" size="small" @click="handeleAddSchedule">添加行程</el-button></div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
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
      checkName: "",
      checkTask: "",
      checkDate:  [new Date(), new Date().getTime() + 3600 * 1000 * 24 * 7],
      checkStartDate:moment(new Date()).format('YYYY-MM-DD'),
      checkEndDate:moment(new Date().getTime() + 3600 * 1000 * 24 * 7).format('YYYY-MM-DD'),
      activeTabName: "project",
      personalData:[],
      addTask:'',
      addDate:'',
      addPlace:[],
      isAddSchedule:false,
      cityList: [{
          value: 'zhinan',
          label: '江苏',
          children: [{
            value: 'shejiyuanze',
            label: '南京'
          },
          {
            value: 'suhzou',
            label: '苏州'
          }]
      },
      {
          value: 'zhinan',
          label: '浙江',
          children: [{
            value: 'shejiyuanze',
            label: '杭州'
          }]
      }],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  components: {},
  created: function() {},
  methods: {
    resetCheck(){
        this.checkName='';
        this.checkTask='';
        this.checkDate=[];
    },
    handleTabClick() {},
    handleEdit(row) {
      console.log(row);
    },
    handeleAddSchedule(){
        if(this.isAddSchedule==true){
            this.$message({
            message: '请先提交当前新增行程',
            type: 'warning'
            });
        }else{
            this.isAddSchedule=true;
        }
    },
    handleCheckDate(date){
        console.log("date",this.checkDate)
    },
    cancleAdd(){
        this.isAddSchedule=false;
        this.addTask='';
        this.addDate='';
        this.addPlace=[];
    },
    handleAdd(){
        console.log("this.addPlace",this.addPlace)
    }
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
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
