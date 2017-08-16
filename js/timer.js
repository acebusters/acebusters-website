/**
 * Show Data of Acebusters Economy
 */



// charts
document.addEventListener("DOMContentLoaded", function(e) {


    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://rinkeby.acebusters.com:8545/"));

    var event = web3.eth.contract([{"constant":false,"inputs":[],"name":"startCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"powerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneRecipients","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeClosed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"RATE_FACTOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"stopCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ntzAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"discountRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeFailed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hardCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ntzAddr","type":"address"},{"name":"_startTime","type":"uint256"},{"name":"_minDuration","type":"uint256"},{"name":"_maxDuration","type":"uint256"},{"name":"_softCap","type":"uint256"},{"name":"_hardCap","type":"uint256"},{"name":"_discount","type":"uint256"},{"name":"_milestoneRecipients","type":"address[]"},{"name":"_milestoneShares","type":"uint256[]"}],"payable":false,"type":"constructor"}]).at("0x3c135aca44b69502089e393705e8ddaf4b10c503");
    var token = web3.eth.contract([{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'approve', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'purchaseTokens', outputs: [], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'floor', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_amountEther', type: 'uint256' }, { name: '_beneficiary', type: 'address' }], name: 'allocateEther', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'powerAddr', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newCeiling', type: 'uint256' }], name: 'moveCeiling', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'ceiling', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_amountNtz', type: 'uint256' }], name: 'dilutePower', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'activeSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'reserve', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newFloor', type: 'uint256' }], name: 'moveFloor', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'admin', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { inputs: [{ name: '_downTime', type: 'uint256' }], payable: false, type: 'constructor' }, { payable: true, type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: 'purchaser', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Purchase', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'seller', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Sell', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }, { indexed: true, name: 'spender', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }]).at("0x179237e4e955369a69bd26499e3b89f6df9e5d7b");

    var store = {
        event,
        token,
        icoStarts: null,
        icoEnds: null,
        maxDuration: 0,
        minDuration: 0,
        hardCap: 0,
        msg: "Hello Vue",
        initalReserve: 0,
        reserve: 0,
        stateStrings: ['Waiting', 'Collecting', 'Closed', 'Failed', 'Success',''],
        hasStarted: false,
        fromContract: function(contract , value) {
            return new Promise(function(resolve, reject) {
                contract[value].call(function(err, rsp) {
                    if (err) {
                        reject(err);
                    }
                    resolve(rsp);
                })
            })
        },
    };

    Vue.filter('twoDigits', (value) => {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
        return value.toString()
    });

    Vue.component('timer', {
        template: `
            <div class="ico-timer">
                <h3 class="headline-dark-bg timer timer-heading"> OUR CROWDSALE STARTS IN: </h3>
                <ul class="vue-countdown">
                    <li>
                        <p class="digit timer">{{ days | twoDigits }}:</p>
                        <p class="text timer">DAYS</p>
                    </li>

                    <li>
                        <p class="digit timer">{{ hours | twoDigits }}:</p>
                        <p class="text timer">HOURS</p>
                    </li>

                    <li>
                        <p class="digit timer">{{ minutes | twoDigits }}:</p>
                        <p class="text timer">MIN</p>
                    </li>

                    <li>
                        <p class="digit timer">{{ seconds | twoDigits }}</p>
                        <p class="text timer">SEC</p>
                    </li>
                </ul>
            </div>
        `,
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000),
                date: null,
                status: "",
                state: null,
                anouncement: "",
            }
        },
        mounted() {
            // initialize date
            this.date = Math.trunc((new Date()).getTime() / 1000);

            var p1 = store.fromContract(event, 'startTime');
            var p2 = store.fromContract(event, 'maxDuration');
            var p3 = store.fromContract(event, 'minDuration');
            var p4 = store.fromContract(event, 'state');

            Promise.all([p1, p2, p3, p4]).then(values => {
                store.startTime = 1504483200;
                store.maxDuration = values[1].toNumber();
                store.minDuration = values[2].toNumber();
                this.state = values[3].toNumber();
                this.status = store.stateStrings[this.state];

                // check if ICO is over
                //if (this.state <= 1) {
                    this.now = Math.trunc((new Date()).getTime() / 1000);
                    setInterval(() => {
                        this.now = Math.trunc((new Date()).getTime() / 1000);
                        this.setTimer();
                    }, 1000);
                //}

            });
        },
        methods: {
            setTimer: function() {
                if (store.startTime * 1000 > Date.now()) {
                    this.anouncement = "Token Event starts in ";
                    store.hasStarted = false;
                    this.date = Math.trunc(store.startTime);
                } else {
                    this.anouncement = "Token Event ends in ";
                    store.hasStarted = true;
                    this.date = Math.trunc(store.startTime + store.maxDuration);
                }
            },
        },
        computed: {
            seconds() {
                return Math.trunc(this.date - this.now) % 60
            },
            minutes() {
                return Math.trunc((this.date - this.now) / 60) % 60
            },
            hours() {
                return Math.trunc((this.date - this.now) / 60 / 60) % 24
            },
            days() {
                return Math.trunc((this.date - this.now) / 60 / 60 / 24)
            }
        }
    });

    Vue.component('distro-pie', {
        extends: VueChartJs.Doughnut,
        mixins: [VueChartJs.mixins.reactiveProp],
        computed: {
            pieData: function() {
                return {
                datasets: [{
                    label: 'NTZ Distribution',
                    backgroundColor: [

                    ],
                    borderColor: [
                        '#E01E40',
                        '#F8F8F8',
                        '#321E36',
                        '#FFFFFF'
                    ],
                    data: [40, 40, 20, 20]
                }]
                }
            },
        },
        mounted () {
            this.renderChart(this.pieData, {responsive: true, maintainAspectRatio: false})
        }
    });

    var app = new Vue({
        delimiters:['<%', '%>'],
        el: '#ico-app',
    });

    var app2 = new Vue({
        delimiters:['<%', '%>'],
        el: '#distro-app',
    });

    $('[data-toggle="tooltip"]').tooltip();

});
