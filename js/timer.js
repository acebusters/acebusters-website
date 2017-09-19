/**
 * Show Data of Acebusters Economy
 */



// charts
document.addEventListener("DOMContentLoaded", function(e) {


    // set the provider you want from Web3.providers
    var web3= new Web3(new Web3.providers.HttpProvider("http://rinkeby.acebusters.com:8545/"));
    var nutzAddr = "0x652d4bD25fd0271bfef3bC9a5e720337d7d6b523";

    var event = web3.eth.contract([{"constant":false,"inputs":[],"name":"startCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneShares","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nutzAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"tick","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"powerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"milestoneRecipients","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"minDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeClosed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"maxDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"RATE_FACTOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"startTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"amountPower","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"stopCollection","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"discountRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"initialReserve","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"completeFailed","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"controllerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"hardCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_controllerAddr","type":"address"},{"name":"_startTime","type":"uint256"},{"name":"_minDuration","type":"uint256"},{"name":"_maxDuration","type":"uint256"},{"name":"_softCap","type":"uint256"},{"name":"_hardCap","type":"uint256"},{"name":"_discount","type":"uint256"},{"name":"_amountPower","type":"uint256"},{"name":"_milestoneRecipients","type":"address[]"},{"name":"_milestoneShares","type":"uint256[]"}],"payable":false,"type":"constructor"}]).at("0x34c49baa50d28aa0c896b8cbba8d3bcbfc65ee3b");

    var token = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amountBabz","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"powerPool","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amountBabz","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"powerAddr","type":"address"},{"name":"_holder","type":"address"},{"name":"_amountBabz","type":"uint256"}],"name":"powerDown","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"floor","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amountBabz","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transData","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"ceiling","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_pullAddr","type":"address"},{"name":"_dest","type":"address"},{"name":"_amountWei","type":"uint256"}],"name":"asyncSend","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_amountBabz","type":"uint256"}],"name":"powerUp","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amountBabz","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amountBabz","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"activeSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amountBabz","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"},{"name":"_amountBabz","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_price","type":"uint256"}],"name":"purchase","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"purchaser","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Purchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"seller","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Sell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]).at(nutzAddr);

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
        <div class="ico-timer" v-show="state == 0 && !isTimeUp">
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
      computed: {
        seconds () {
          return (this.date - this.now) % 60
        },
        minutes () {
          return Math.trunc((this.date - this.now) / 60) % 60
        },
        hours () {
          return Math.trunc((this.date - this.now) / 60 / 60) % 24
        },
        days () {
          return Math.trunc((this.date - this.now) / 60 / 60 / 24)
        }
      },
      watch: {
        now (val) {
          if (val > this.date && !this.isTimeUp) {
            this.isTimeUp = true
          }
        }
      },
      data () {
        return {
          now: Math.trunc((new Date()).getTime() / 1000),
          state: 0,
          isTimeUp: false,
          startTime: null,
          date: new Date()
        }
      },
      methods: {
        twoDigits (number) {
          if (number < 10) return '0' + number
          else return number
        }
      },
      mounted () {
        window.setInterval(() => {
          this.now = Math.trunc((new Date()).getTime() / 1000)
        }, 1000)

        var that = this;

        var p1 = store.fromContract(event, 'startTime');
        var p2 = store.fromContract(event, 'maxDuration');
        var p3 = store.fromContract(event, 'minDuration');
        var p4 = store.fromContract(event, 'state');



        Promise.all([p1, p2, p3, p4]).then(values => {
            this.date = values[0].toNumber();
            store.startTime = values[0].toNumber();
            store.maxDuration = values[1].toNumber();
            store.minDuration = values[2].toNumber();
            that.state = values[3].toNumber();
            that.status = store.stateStrings[this.state];

            // check if ICO is over
            if (this.state <= 1) {
                this.now = Math.trunc((new Date()).getTime() / 1000);
                setInterval(() => {
                    this.now = Math.trunc((new Date()).getTime() / 1000);
                    // this.setTimer();
                }, 1000);
            }

        });


      }
    });

    Vue.component('loading-bar', {
      template: `
          <div>
              <div style="margin-bottom: 5%;">
              <h3 class="headline-dark-bg timer timer-heading"> CROWDSALE STATUS: {{ status }} </h3>
                  <p class="event-param" data-toggle="tooltip" :title="hardCapInfo"> Hardcap : {{ store.hardCap }} </p>
                  <p class="event-param" data-toggle="tooltip" :title="softCapInfo"> Softcap : {{ softCap }} </p>
                  <p class="event-param" data-toggle="tooltip" :title="minDuInfo"> min Duration : {{ minDuration }} Days </p>
                  <p class="event-param" data-toggle="tooltip" :title="maxDuInfo"> max Duration: {{ maxDuration }} Days </p>
                  <p class="event-param" data-toggle="tooltip" :title="aRaisedInfo"> raised: {{ amountRaised.toFixed(2) }} ETH </p>
              </div>

              <div class="progress">
                  <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: percent + '%' }">
                      <span class="sr-only">60% Complete</span>
                  </div>
              </div>
              <div class="progress-label">
                  <span class="funding-milestone-1">
                      0 ETH
                  </span>
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
          var p2 = store.fromContract(event, 'initialReserve');
          var p3 = store.fromContract(event, 'softCap');
          var p4 = store.fromContract(event, 'state');

          Promise.all([p1, p2, p3, p4]).then(values => {
              store.hardCap = parseFloat(web3.fromWei(values[0].toNumber()));
              this.maxValue = store.hardCap;
              store.softCap = parseFloat(web3.fromWei(values[2].toNumber()));
              this.softCap = store.softCap;
              web3.eth.getBalance(nutzAddr, function(error, result) {
                if (!error) {
                    store.reserve = web3.fromWei(result.toNumber());
                    store.initialReserve = web3.fromWei(values[1].toNumber());
                    that.amountRaised = (store.reserve - store.initialReserve);
                }
             });
             that.state = values[3].toNumber();
             that.status = store.stateStrings[this.state];

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
          minDuInfo: function() {
              return "The Event will be open for at least this time period";
          },
          hardCapInfo: function() {
              return "The Event will be over after this amount has been raised";
          },
          softCapInfo: function() {
              return "The Event will need to raise at least this amount";
          },
          maxDuInfo: function() {
              return "The Event will be over after this time period";
          },
          aRaisedInfo: function() {
              return "The amount in Ether that has been raised so far";
          },
      },
      data() {
          return {
              store,
              maxValue: 0,
              amountRaised: 0,
              softCap: 0,
              state: 0
          }
      },
      props: ['date']
    });

    Vue.component('distro-pie', {
        extends: VueChartJs.Doughnut,
        mixins: [VueChartJs.mixins.reactiveProp],
        computed: {
            pieData: function() {
                return {
                datasets: [{
                    label: 'Milestone Distribution',
                    backgroundColor: [
                      'rgba(153,153,153,0.59)',
                      'rgba(50, 30, 54,0.59)',
                      'rgba(230,230,230,0.59)',
                      'rgba(224,30,64,0.59)'
                    ],
                    borderWidth: 5,
                    borderRadius: 0,
                    borderColor: [
                        'rgb(153,153,153)',
                        'rgb(50, 30, 54)',
                        'rgb(230,230,230)',
                        '#E01E40'
                    ],
                    data: [15, 20, 20, 40],
                    options: {
                      tooltips: {
                        enabled: false
                      }
                    }
                }],
                }
            },
        },
        mounted () {
            this.renderChart(this.pieData, {responsive: true, maintainAspectRatio: false})
        }
    });

    Vue.component('power-pie', {
        extends: VueChartJs.Doughnut,
        mixins: [VueChartJs.mixins.reactiveProp],
        computed: {
            pieData: function() {
                return {
                datasets: [{
                    label: 'Power Distribution',
                    backgroundColor: [
                      'rgba(224,30,64,0.59)',
                      'rgba(230,230,230,0.59)'
                    ],
                    borderWidth: 5,
                    borderRadius: 0,
                    borderColor: [
                        '#E01E40',
                        'rgb(230,230,230)'

                    ],
                    data: [30,70],
                    options: {
                      tooltips: {
                        enabled: false
                      }
                    }
                }],
                }
            },
        },
        mounted () {
            this.renderChart(this.pieData, {responsive: true, maintainAspectRatio: false})
        }
    });

});
