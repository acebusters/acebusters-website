/**
 * Show Chart of acebusters economy
 */

// charts
document.addEventListener('DOMContentLoaded', function (e) {
  Vue.component('power-pie', {
    extends: VueChartJs.Pie,
    mixins: [VueChartJs.mixins.reactiveProp],
    mounted() {
      this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false });
    },
  });

  Vue.component('nutz-pie', {
    extends: VueChartJs.Pie,
    mixins: [VueChartJs.mixins.reactiveProp],
    mounted() {
      this.renderChart(this.chartData, { responsive: true, maintainAspectRatio: false });
    },
  });

});
