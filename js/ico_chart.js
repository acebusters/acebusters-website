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
            authorizedPower: 100,
            issuedPower: 60,
            outstandingPower: 40,
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
        },
        computed: {
            totalNtz: function() {
                return this.activeSupply + this.powerPool + this.burnPool;
            },
            neededReserve: function() {
                return this.activeSupply / this.floor;
            },
            totalReserve: function() {
                return (this.bob.ntz + this.alice.ntz) / this.ceiling;
            },
            dataNtzPie: function() {
                return { 
                    labels: ['Alice Ntz', 'Bobs Ntz', 'PowerPool'],
                    datasets: [{
                        label: 'Data Nutz',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        data: [this.alice.ntz, this.bob.ntz, this.powerPool + this.burnPool]
                    }]
                }
            },
            dataPowerPie: function() {
                return { 
                    labels: ['Alice ABP', 'Bobs ABP','Foundes Share', 'Rest'],
                    datasets: [{
                        label: 'Data Power',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        data: [this.alice.abp, this.bob.abp, 40, this.authorizedPower - this.outstandingPower - this.alice.abp - this.bob.abp]
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
                    alert('Not enough Nutz!');
                    return;
                }
                user.ntz -= amount;
                this.activeSupply -= amount;
                this.powerPool += amount;
                user.abp = user.abp + (amount / this.totalNtz) * 100;
                this.outstandingPower += user.abp;
                amount = parseInt(amount);
            },
            powerDown: function(amount, user) {
                if (user.abp <= 0) {
                    alert('No more ABP to power down');
                    return;
                }
                if (amount > user.abp) {
                    alert('Not enough ABP');
                    return;
                }
                user.ntz += this.totalNtz * (amount / 100);
                this.outstandingPower -= amount;
                user.abp -= amount;
            },
        }
    });    
});

    