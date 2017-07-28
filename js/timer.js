/**
 * Show Data of Acebusters Economy
 */



// charts
document.addEventListener("DOMContentLoaded", function(e) {

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://rinkeby.acebusters.com:8545/"));
    }

    var event = web3.eth.contract([{"constant":false,"inputs":[],"name":"startCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"powerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneRecipients","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeClosed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"RATE_FACTOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"stopCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ntzAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"discountRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeFailed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hardCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_ntzAddr","type":"address"},{"name":"_startTime","type":"uint256"},{"name":"_minDuration","type":"uint256"},{"name":"_maxDuration","type":"uint256"},{"name":"_softCap","type":"uint256"},{"name":"_hardCap","type":"uint256"},{"name":"_discount","type":"uint256"},{"name":"_milestoneRecipients","type":"address[]"},{"name":"_milestoneShares","type":"uint256[]"}],"payable":false,"type":"constructor"}]).at("0x3c135aca44b69502089e393705e8ddaf4b10c503");
    var token = web3.eth.contract([{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_spender', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'approve', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_from', type: 'address' }, { name: '_to', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'transferFrom', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [], name: 'purchaseTokens', outputs: [], payable: true, type: 'function' }, { constant: true, inputs: [], name: 'floor', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_amountEther', type: 'uint256' }, { name: '_beneficiary', type: 'address' }], name: 'allocateEther', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'powerAddr', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newCeiling', type: 'uint256' }], name: 'moveCeiling', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'ceiling', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_to', type: 'address' }, { name: '_amountNtz', type: 'uint256' }], name: 'transfer', outputs: [{ name: '', type: 'bool' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_amountNtz', type: 'uint256' }], name: 'dilutePower', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'activeSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'reserve', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: false, inputs: [{ name: '_newFloor', type: 'uint256' }], name: 'moveFloor', outputs: [], payable: false, type: 'function' }, { constant: true, inputs: [{ name: '_owner', type: 'address' }, { name: '_spender', type: 'address' }], name: 'allowance', outputs: [{ name: '', type: 'uint256' }], payable: false, type: 'function' }, { constant: true, inputs: [], name: 'admin', outputs: [{ name: '', type: 'address' }], payable: false, type: 'function' }, { inputs: [{ name: '_downTime', type: 'uint256' }], payable: false, type: 'constructor' }, { payable: true, type: 'fallback' }, { anonymous: false, inputs: [{ indexed: true, name: 'purchaser', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Purchase', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'seller', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Sell', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'owner', type: 'address' }, { indexed: true, name: 'spender', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Approval', type: 'event' }, { anonymous: false, inputs: [{ indexed: true, name: 'from', type: 'address' }, { indexed: true, name: 'to', type: 'address' }, { indexed: false, name: 'value', type: 'uint256' }], name: 'Transfer', type: 'event' }]).at("0x179237e4e955369a69bd26499e3b89f6df9e5d7b");

    var store = {
        event,
        token,
        icoStarts: null,
        icoEnds: null,
        maxDuration: 0,
        minDuration: 0,
        hardCap: 0,
        initalReserve: 0,
        reserve: 0,
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
            <div>
                <h3 class="headline-dark-bg">{{ anouncement }}</h3>
                <ul class="vue-countdown">
                    <li>
                        <p class="digit">{{ days | twoDigits }}</p>
                        <p class="text">days</p>
                    </li>

                    <li>
                        <p class="digit">{{ hours | twoDigits }}</p>
                        <p class="text">hours</p>
                    </li>

                    <li>
                        <p class="digit">{{ minutes | twoDigits }}</p>
                        <p class="text">Min</p>
                    </li>

                    <li>
                        <p class="digit">{{ seconds | twoDigits }}</p>
                        <p class="text">Sec</p>
                    </li>
                </ul>
            </div>
        `,
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000),
                date: null,
                anouncement: "",
            }
        },
        mounted() {
            var that = this;
            
            // initialize date
            this.date = Math.trunc((new Date()).getTime() / 1000);
            
            var p1 = store.fromContract(event, 'startTime');
            var p2 = store.fromContract(event, 'maxDuration');
            var p3 = store.fromContract(event, 'minDuration');

            Promise.all([p1, p2, p3]).then(values => { 
                store.startTime = values[0].toNumber();
                store.maxDuration = values[1].toNumber();
                store.minDuration = values[2].toNumber();
                this.setTimer();

                setInterval(() => {
                    this.setTimer();
                    this.now = Math.trunc((new Date()).getTime() / 1000)
                }, 1000);
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

    Vue.component('loading-bar', {
        template: `
            <div>
                <p class="total-value"> Hardcap : {{ store.hardCap }} </p>
                <p class="total-value"> Softcap : {{ softCap }} </p>
                <p class="total-value"> min Duration : {{ minDuration }} Days </p>
                <p class="total-value"> max Duration: {{ maxDuration }} Days </p>
                <p class="total-value"> raised: {{ amountRaised }} </p>
                <div class="progress">
                    {{percent}}
                    <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: percent + '%' }">
                        <span class="sr-only">60% Complete</span>
                    </div>
                </div>
                <div class="progress-label">
                    <span class="funding-milestone-1"> 
                        0 ETH
                    </span>
                    <div class="funding-milestone-2" v-if="store.hasStarted" v-bind:style="{ left: percent + '%' }"> 
                        {{ amountRaised }} ETH
                    </div>
                    <div class="funding-milestone-3"> 
                        {{ maxValue }} ETH
                    </div>
                </div>
            </div>
        `,
        mounted() {
            var that = this;
            // get hard cap
            var p1 = store.fromContract(event, 'hardCap');
            var p2 = store.fromContract(token, 'reserve');
            var p3 = store.fromContract(event, 'initialReserve');
            var p4 = store.fromContract(event, 'softCap');

            Promise.all([p1, p2, p3, p4]).then(values => { 
                store.hardCap = parseFloat(web3.fromWei(values[0].toNumber()));
                this.maxValue = store.hardCap;
                store.softCap = parseFloat(web3.fromWei(values[3].toNumber()));
                this.softCap = store.softCap;
                store.reserve = web3.fromWei(values[1].toNumber());
                store.initialReserve = values[2].toNumber();
                this.amountRaised = parseFloat(store.reserve - store.initialReserve).toFixed(2);
            });
        },
        computed: {
            percent: function() {
                return ((this.amountRaised / this.maxValue) * 100).toFixed(2);
            },
            maxDuration: function() {
                return parseFloat(store.maxDuration / 60 / 60 / 24);
            },
            minDuration: function() {
                return parseFloat(store.minDuration / 60 / 60 / 24);
            },
        },
        data() {
            return {
                store,
                maxValue: 0, 
                amountRaised: 0,
                softCap: 0,
            }
        },
    });

    var timer = new Vue({
        delimiters:['<%', '%>'],
        el: '#ico-app',
    });
});
