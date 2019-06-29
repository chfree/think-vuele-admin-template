<template>
  <div>
    <h1>index1</h1>
    <tc-button @click="testClick">demo1</tc-button>
    <div id="demo1" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      demo1: {
        data: [5, 20, 36, 10, 10, 20]
      }
    }
  },
  mounted() {
    this.testDemo1()
  },
  watch: {
    'demo1.data': function(newVal) {
      this.testDemo1()
    }
  },
  methods: {
    testClick() {
      this.demo1.data = [4, 28, 16, 19, 30, 10]
    },
    testDemo1() {
      var myChart = this.$echarts.init(document.getElementById('demo1'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: this.demo1.data
        }]
      })
    }
  }

}
</script>

<style lang="scss" scoped>
#demo1{
  width: 300px;
  height: 300px;
  border: 1px solid #eed;
}
</style>