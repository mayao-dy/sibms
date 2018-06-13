<template>
    <div>
      <el-form :model="projForm" :rules="projRules" ref="projForm" label-width="120px">
        <div class="form-title">项目信息</div>
        <div>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目名称：" prop="projName">
                <el-input v-model="projRules.projName"  size="small" class="width-400"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="行程类别：" prop="scheduleType">
                <el-radio-group v-model="projRules.scheduleType">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
           <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目类型：" prop="scheduleType">
                <el-radio-group v-model="projRules.scheduleType">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目组织形式：" prop="scheduleType">
                <el-radio-group v-model="projRules.scheduleType">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目子类型：" prop="projName">
                <el-radio-group v-model="projRules.scheduleType">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="检查对象" prop="scheduleType">
                <el-input v-model="projRules.projName" size="small" class="width-400"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="提醒：" prop="projName">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="邮箱提醒"></el-checkbox>
                  <el-checkbox label="随行提醒"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
        </div>
        <div class="form-title">项目周期</div>
        <div>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目时间：" prop="projName">
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
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="项目地点：" prop="scheduleType">
                <el-cascader
                  size="small"
                  :options="cityOptions"
                  v-model="selectedOptions"
                  @change="handleChangeCity">
                </el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button type="text" class="float-right">添加项目周期</el-button>
        </div>
        <div class="form-title">项目人员</div>
        <div>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目组长：" prop="projName">
                <el-select v-model="checkTask" filterable placeholder="任务名称" size="small">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="证监局人员：" prop="scheduleType">
                <el-input v-model="projRules.projName" size="small" class="width-400"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="项目组员：" prop="projName">
                <el-select v-model="value5" multiple placeholder="请选择" size="small">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="实习人员：" prop="scheduleType">
                <el-input v-model="projRules.projName" size="small" class="width-400"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="form-title">其他信息</div>
        <div>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="属地证监局：" prop="projName">
                <el-select v-model="checkTask" filterable placeholder="任务名称" size="small">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="联系人信息：" prop="scheduleType">
                  <el-input v-model="projRules.projName"  size="small" class="width-120"></el-input>
                  <span>—</span>
                  <el-input v-model="projRules.projName"  size="small" class="width-200"></el-input>
                  <el-checkbox v-model="checked">记住</el-checkbox>
                </el-form-item>
              </div>
              <el-button type="text" class="float-right">添加联系人</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="属地派出机构：" prop="projName">
                <el-select v-model="checkTask" filterable placeholder="任务名称" size="small">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="联系人信息：" prop="scheduleType">
                  <el-input v-model="projRules.projName"  size="small" class="width-120"></el-input>
                  <span>—</span>
                  <el-input v-model="projRules.projName"  size="small" class="width-200"></el-input>
                  <el-checkbox v-model="checked">记住</el-checkbox>
                </el-form-item>
              </div>
              <el-button type="text" class="float-right">添加联系人</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="12">
              <el-form-item label="合作中介机构：" prop="projName">
                <el-select v-model="checkTask" filterable placeholder="任务名称" size="small">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <div>
                <el-form-item label="联系人信息：" prop="scheduleType">
                  <el-input v-model="projRules.projName"  size="small" class="width-120"></el-input>
                  <span>—</span>
                  <el-input v-model="projRules.projName"  size="small" class="width-200"></el-input>
                  <el-checkbox v-model="checked">记住</el-checkbox>
                </el-form-item>
              </div>
              <el-button type="text" class="float-right">添加联系人</el-button>
            </el-col>
          </el-row>
          <el-row :gutter="0">
            <el-col :span="24">
              <el-form-item label="备注：" prop="projName">
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
</template>
<script>
import {
  showFullScreenLoading,
  tryHideFullScreenLoading
} from "./../utils/loading.js";
import { regionData } from 'element-china-area-data'
export default {
  data() {
    return {
      projForm:{},
      projRules:{},
      cityOptions: regionData,
      selectedOptions: [],
      value5: [],
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
    };
  },
  components: {  },
  created: function() {},
  methods: {
      handleChangeCity (value) {
        console.log(value)
      }
  }
};
</script>
<style scoped>
.form-title{
   color: #409EFF;
   font-size: 14px;
   margin-bottom: 20px;
}
.el-row{
  margin-bottom: 0;
}
</style>
