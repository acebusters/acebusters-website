/**
 * Show Chart of our economy
 */

// charts
document.addEventListener("DOMContentLoaded", function(e) {
    Vue.component('power-pie', {
        extends: VueChartJs.Pie,
        mixins: [VueChartJs.mixins.reactiveProp],
        mounted () {
            this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
        }    
    });

    Vue.component('nutz-pie', {
        extends: VueChartJs.Pie,
        mixins: [VueChartJs.mixins.reactiveProp],
        mounted () {
            this.renderChart(this.chartData, {responsive: true, maintainAspectRatio: false})
        }    
    });

    var icoApp = new Vue({
        delimiters:['<%', '%>'],
        el: '#app',
        data: {
            activeSupply: 0,
            powerPool: 1600000,
            burnPool: 2400000,
            ceiling: 100,
            floor: 130,
            alice: {
                eth: 6000,
                purNtz: 1200,
                ntz: 0,
                powerUp: 0,
                abp: 0,
                sellNtz: 0,
                powerDown: 0,
            },
            bob: {
                eth: 6000,
                purNtz: 1200,
                ntz: 0,
                powerUp: 0,
                abp: 0,
                sellNtz: 0,
                powerDown: 0,
            },
            authorizedPower: 100,
            issuedPower: 60,
            outstandingPower: 40,
            totalReserve: 1,
            needReserve: 0,
            chart:{},
        },
        computed: {
            totalNtz: function() {
                return this.activeSupply + this.powerPool + this.burnPool;
            },
            dataNtzPie: function() {
                return { 
                    labels: ['Alice Ntz', 'Bobs Ntz', 'PowerPool', 'BurnPool'],
                    datasets: [{
                        label: 'Data One',
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
                        data: [this.alice.ntz, this.bob.ntz, this.powerPool, this.burnPool]
                    }]
                }
            },
            dataPowerPie: function() {
                return { 
                    labels: ['Alice ABP', 'Bobs ABP', 'Rest'],
                    datasets: [{
                        label: 'Data One',
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
                        data: [this.alice.abp, this.bob.abp, this.authorizedPower - this.alice.abp - this.bob.abp]
                    }]
                }
            },
        },
        methods: {
            purchaseNtz: function(amount, user) {
                amount = parseInt(amount);
                if (user.eth <= 0) {
                    alert('Not enough Ether!');
                    return;
                }
                this.activeSupply = this.activeSupply + (amount * this.ceiling);
                user.eth -= amount;
                user.ntz += (amount * this.ceiling);
                this.issuePowerPool(user.ntz);
            },
            issuePowerPool: function(amount) {
                this.powerPool += amount / this.issuedPower * this.outstandingPower;
            },
            sellNtz: function(amount, user) {
                amount = parseInt(amount);
                if (user.ntz <= 0) {
                    alert('No more Nutz to sell!');
                    return;
                }
                if (amount > user.ntz) {
                    alert('Not enough Nutz!');
                    return;
                } 
                this.activeSupply = this.activeSupply - amount;
                user.ntz -= amount;
                user.eth += (amount / this.floor);
            },
            powerUp: function(amount, user) {
                amount = parseInt(amount);
                if (user.ntz <= 0) {
                    alert('No more Nutz to power up!');
                    return;
                }
                if (amount > user.ntz) {
                    alert('Not enough Nutz to power up!');
                    return;
                }
                user.ntz -= amount;
                this.activeSupply -= amount;
                this.powerPool += amount;
                user.abp = user.abp + (amount / this.totalNtz) * 100;
                amount = parseInt(amount);
            },
            powerDown: function(amount, user) {
                user.ntz += this.totalNtz * (amount / 100);
                user.abp -= user.abp
            },
        }
    });    
});

    