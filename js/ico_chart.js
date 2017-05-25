var canvas  = document.getElementById("icoChart");
var ctx = document.getElementById("icoChart").getContext('2d');
var myNutz = parseInt($('#my-nutz').val());
var totalNutz = parseInt($('#total-nutz').val());
var totalPower = parseInt($('#max-power').val());
var myPower = parseInt($('#my-power-nutz').val());
var firstRound = 12000000;


var calcData = function(totalNutz, myNutz, totalPower, myPower) {
    totalNutz = parseInt(totalNutz);
    myNutz = parseInt(myNutz);
    totalPower = parseInt(totalPower);
    myPower = parseInt(myPower);
    var rest = totalNutz - myNutz - myPower;
    var data = [];
    data[0] = (myNutz / totalNutz) * 100;
    data[1] = (myPower / totalNutz) * 100;
    data[2] = (rest / totalNutz) * 100;
    return data;
};

var initData = calcData(totalNutz, myNutz, totalPower, myPower);


var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["My Nutz in supply %", "My Nutz in Power %", "Rest"],
        datasets: [{
            data: initData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {}
});

$('#my-nutz').change(function(e) {
    if ((parseInt(this.value) + parseInt(myPower)) > firstRound) {
        this.value = firstRound - parseInt(myPower);
    }
    myNutz = parseInt(this.value);
    myChart.data.datasets[0].data = calcData(totalNutz, myNutz, totalPower, myPower);
    myChart.update();
});

$('#my-power-nutz').change(function(e) {
    if ((parseInt(this.value) + parseInt(myNutz)) > firstRound) {
        this.value = firstRound - parseInt(myNutz);
    }
    myPower = parseInt(this.value);
    myChart.data.datasets[0].data = calcData(totalNutz, myNutz, totalPower, myPower);
    myChart.update();
});

$('#total-nutz').change(function(e) {
    var powerRatio = myChart.data.datasets[0].data[1];
    myPower = this.value * (powerRatio/100);
    $('#my-power-nutz').val(myPower);
    myChart.data.datasets[0].data = calcData(parseInt(this.value), myNutz, totalPower, myPower);
    myChart.update();
});
    