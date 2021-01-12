.<template>
  <div class="echarts">
    <h2>实现vue3.0的折线图</h2>
    {{ name }} -- {{ id }} --- {{ age }}
    <button @click="change">click</button>
    <div ref="chart" style="width: 100%; height: 400px"></div>
    <hr />
    <h2>实现vue3.0的地图</h2>
    <!-- <div ref="map" style="width: 100%; height: 400px"></div> -->
  </div>
</template>

<script>
// 引入图表
import echarts from "echarts";
//引入中国地图
// import "echarts/map/js/china";
import "echarts/map/js/china";
import { reactive, toRefs, onMounted, ref } from "vue";
export default {
  name: "Echarts",
  // setup(props,{root}) 无法访问this
  setup(props, { root }) {
    //启动函数
    // 响应式数据
    const state = reactive({
      name: "jijing",
      id: 1,
      age: 4,
      chart: ref(),
    });
    const change = () => {
      //方法的定义
      state.age++;
    };
    onMounted(() => {
      //生命周期的写法
      init();
    });
    // const init = () => {
    //   //折线图
    //   // 基于准备好的dom，初始化echarts实例
    //   var myChart = echarts.init(state.chart);
    //   // 指定图表的配置项和数据
    //   var option = {
    //     title: {
    //       text: "ECharts 入门示例",
    //     },
    //     tooltip: {},
    //     legend: {
    //       data: ["销量"],
    //     },
    //     xAxis: {
    //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //     },
    //     yAxis: {},
    //     series: [
    //       {
    //         name: "销量",
    //         type: "bar",
    //         data: [5, 20, 36, 10, 10, 20],
    //       },
    //     ],
    //   };
    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option);
    // };
    const init = () => {
      //地图
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(state.chart);
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "ECharts 入门示例",
        },
        series: [
          {
            type: "map",
            map: "china",
            // data: [5, 20, 36, 10, 10, 20],
            label: {
              //修改字体信息
              show: true,
              colot: red,
              fontSize: 10,
            },
            itemStyle: {
              //修改样式
              backgroundColor: "#f60", //背景颜色
              borderColor: "#f5f5f5f", //边框颜色
              areaColor: "blue", //区域的颜色
            },
          },
        ],
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    };
    // ...扩展运算符不能同步响应，需要toRefs再次响应式数据的转换处理
    return { ...toRefs(state), change };
  },
};
</script>

<style scoped>
</style>