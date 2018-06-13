<template>
    <div :class='"copy-right copy-right-"+type'>
      <span>© 2018 上海证券交易所版权所有，建议使用IE11，Chrome，Firefox或者其他高级浏览器，1280*800分辨率</span>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    name: 'CopyRight',
    props: {
        type:String
    }
}
</script>
<style>
.copy-right{
  position: absolute;
  z-index: 999;
  width: 100%;
  height: 65px;
  bottom: 0;
  text-align: center;
}
.copy-right > span {
  font-size: 14px;
  line-height: 65px;
}
.copy-right-white {
  background-color: #FFFFFF;
}
.copy-right-white > span {
  color: #666666;
}
.copy-right-black {
  /* background-color: #2A2D32; */
  position: relative;
}
.copy-right-black > span {
  color: #999;
}
</style>
