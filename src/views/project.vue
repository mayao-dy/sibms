<template>
    <div>
        <div>
            <el-select v-model="checkName" filterable placeholder="项目名称" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="行程类型" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="项目类型" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="项目组织形式" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="检查对象" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="m-t-10">
            <el-select v-model="checkTask" filterable placeholder="项目地点" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="属地证监局" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="checkTask" filterable placeholder="合作派出机构" size="small">
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
                class="width-300"
                @change="handleCheckDate()">
            </el-date-picker>
            <el-button type="primary" plain  size="small">查询</el-button>
            <el-button type="primary" plain  size="small" @click="resetCheck()">重置</el-button>
        </div>  
        <div class="m-t-20">
            <el-table
                :data="personalData"
                border
                class="m-t-10"
                style="width: 100%">
                <el-table-column
                  type="index"
                  label="序号"
                  width="50">
                </el-table-column>
                <el-table-column
                prop="date"
                label="项目名称">
                </el-table-column>
                <el-table-column
                prop="name"
                label="行程类型">
                </el-table-column>
                <el-table-column
                prop="province"
                label="项目类型">
                </el-table-column>   
                <el-table-column
                prop="province"
                label="项目子类型">
                </el-table-column>
                <el-table-column
                prop="province"
                label="项目组织形式">
                </el-table-column>
                <el-table-column
                prop="province"
                label="检查对象">
                </el-table-column>
                <el-table-column
                prop="province"
                label="项目组长">
                </el-table-column>
                <el-table-column
                prop="province"
                label="开始时间">
                </el-table-column>
                <el-table-column
                prop="province"
                label="结束时间">
                </el-table-column>
                <el-table-column
                prop="province"
                label="项目地点">
                </el-table-column>
                <el-table-column
                prop="province"
                label="项目组员">
                </el-table-column>
                <el-table-column
                prop="province"
                label="证监局人员">
                </el-table-column>
                <el-table-column
                prop="province"
                label="实习人员">
                </el-table-column>
                <el-table-column
                prop="province"
                label="邮件提醒">
                </el-table-column>
                <el-table-column
                prop="province"
                label="随行提醒">
                </el-table-column>
                <el-table-column
                prop="province"
                label="证监局人员">
                </el-table-column>
                <el-table-column
                prop="province"
                label="属地证监局">
                </el-table-column>
                <el-table-column
                prop="province"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="province"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="province"
                label="合作派出机构">
                </el-table-column>
                <el-table-column
                prop="province"
                label="邮件提醒">
                </el-table-column>
                <el-table-column
                prop="province"
                label="随行提醒">
                </el-table-column>
                <el-table-column
                prop="province"
                label="证监局人员">
                </el-table-column>
                <el-table-column
                prop="province"
                label="属地证监局">
                </el-table-column>
                <el-table-column
                prop="province"
                label="联系人">
                </el-table-column>
                <el-table-column
                prop="province"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="province"
                label="合作中介机构">
                </el-table-column>
                <el-table-column
                prop="province"
                label="合作人员姓名">
                </el-table-column>
                <el-table-column
                prop="province"
                label="联系电话">
                </el-table-column>
                <el-table-column
                prop="province"
                label="备注">
                </el-table-column>
            </el-table>
            <div class="text-center"> 
              <div class="m-t-10 inline-block">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                  </el-pagination>
              </div>
              <el-button type="primary" size="small" class="inline-block ver-middle m-t-5">下载</el-button>
            </div>
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
      personalData:[],
      currentPage:1,
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
    handleCheckDate(date){
        console.log("date",this.checkDate)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style>

</style>
