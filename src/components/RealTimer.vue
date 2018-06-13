<template>
    <div>
        <span :style="{color:color,fontSize:size+'px'}">{{time}}</span>
    </div>
</template>
<script>
import moment from 'moment';
export default {
    name: 'RealTimer',
    props: {
        color:String,
        size:Number,
        type:String
    },
    data() {
        return {
            time: '',
            timeRefresh:'',
        }
    },
    computed: {

    },
    methods: {
        clock() {
            let t='';
            switch (this.type) {
                case 'default':
                    t = moment().format('YYYY-MM-DD HH:mm:ss')
                    break;
                case 'slash':
                    t = moment().format('YYYY')+'/'+moment().format('MM')+'/'+moment().format('DD')+' '+moment().format('HH:mm:ss')
                    break;
                case 'CN':
                    t = moment().format('YYYY')+'年'+moment().format('MM')+'月'+moment().format('DD')+'日 '+moment().format('HH:mm:ss')
                    break;
                default:
                    t = moment().format('YYYY-MM-DD HH:mm:ss')
            }
            this.time = t;
        },
    },
    created() { },
    mounted() {
        this.clock();
        this.timeRefresh = setInterval(this.clock, 1000);
    },
    destroyed: function () {
        window.clearInterval(this.timeRefresh);
    }
}
</script>
