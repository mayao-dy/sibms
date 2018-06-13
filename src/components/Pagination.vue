<template>
    <div class="pagination">
        <el-pagination 
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange" 
            :current-page="currentPage||1" 
            :page-sizes="[10,20,50,100]"        
            layout="prev,pager,next,jumper"
            :total="totalNum">
        </el-pagination>
    </div>
</template>
<<script>
export default {
  props: {
      totalNum: Number,
      currentPage: Number
  },
  data () {
      return {
          pageSize: 10 // 默认每页显示10条
      }
  },
  methods: {
      handleSizeChange(val) { // pagesize改变时触发
          self.pageSize = val //每一页显示多少条
          this.$emit('size-change',val);
      },
      handleCurrentChange(val) { // currentPage改变时触发
          self.currentPage = val // 第几页
          this.$emit('current-change',val)
      }
  },
  mounted () {
      let self = this;
  } 
}
</script>
<<style>
.pagination {
    text-align: right;
    margin: 20px 0;
}
</style>


