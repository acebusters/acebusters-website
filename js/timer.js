/**
 * Show Data of Acebusters Economy
 */



// charts
document.addEventListener("DOMContentLoaded", function(e) {


    // set the provider you want from Web3.providers
    var web3= new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/ACEBUSTERS"));

    var nutzAddr = "0xe1EDa226759825E236831714bcDc0ca0B21fd862";

    var store = {
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
    };

    Vue.filter('twoDigits', (value) => {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
        return value.toString()
    });

    Vue.component('timer-pre-launch', {
      template: `
        <div class="ico-timer" v-show="!isTimeUp">
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

        this.date = 1505997600 + 1200;
        store.startTime = 1505997600;
        store.maxDuration = 2592000;
        store.minDuration = 259200;
        that.state = 0;
        that.status = store.stateStrings[0];

        // check if ICO is over
        if (this.state <= 1) {
            this.now = Math.trunc((new Date()).getTime() / 1000);
            setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000);
                // this.setTimer();
            }, 1000)
      }
  }
});


    Vue.component('timer-post-launch', {
          template: `
            <div class="ico-timer" v-show="!isTimeUp && now >= 1505998800">
              <p class="headline-dark-bg timer timer-heading timer-heading-launch"> GUARANTEED PARTICIPATION UNTIL: <span>{{ days | twoDigits }}d : {{ hours | twoDigits }}h : {{ minutes | twoDigits }}m : {{ seconds | twoDigits }}s</span></p>
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

            this.date = 1505997600 + 1200 + 259200;
            store.startTime = 1505997600;
            store.maxDuration = 2592000;
            store.minDuration = 259200;
            that.state = 1;
            that.status = store.stateStrings[1];
            // check if ICO is over
            if (this.state <= 1) {
                this.now = Math.trunc((new Date()).getTime() / 1000);
                setInterval(() => {
                    this.now = Math.trunc((new Date()).getTime() / 1000);
                    // this.setTimer();
                }, 1000);
            }

          }
      });

    Vue.component('loading-bar', {
      template: `
          <div>
              <div style="margin-bottom: 5%;" v-show="now >= 1505998800">
              <span class="raised-param" data-toggle="tooltip" :title="aRaisedInfo"> {{ amountRaised.toFixed(2) }} ETH | {{ store.hardCap }} ETH </span>
              </div>
              <div class="milestones" v-show="now >= 1505998800">
                <div class="milestone-soft-cap"></div>
                <div class="milestone-hard-cap"></div>
              </div>
              <div class="progress" v-show="now >= 1505998800">
                  <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: percent + '%' }" v-show="now >= 1505998800">
                      <span class="sr-only">60% Complete</span>
                  </div>
                  <div class="milestone-soft" v-show="now >= 1505998800"></div>
              </div>
              <div class="progress-facts" v-show="now >= 1505998800">
                <span class="event-param" data-toggle="tooltip" :title="softCapInfo"> Softcap : {{ softCap }} </span> | 
                <span class="event-param" data-toggle="tooltip" :title="hardCapInfo"> Hardcap : {{ store.hardCap }} </span> | 
                <span class="event-param" data-toggle="tooltip" :title="minDuInfo"> min Duration : {{ minDuration }} Days </span> | 
                <span class="event-param" data-toggle="tooltip" :title="maxDuInfo"> max Duration: {{ maxDuration }} Days </span> |
                <span class="event-param"> STATUS: {{ status }} </p>
              </div>
          </div>
      `,
      mounted() {
          window.setInterval(() => {
              this.now = Math.trunc((new Date()).getTime() / 1000)
            }, 1000)

          var that = this;
          // get hard cap
          store.hardCap = parseFloat(30000);
          this.maxValue = store.hardCap;
          store.softCap = parseFloat(5000);
          this.softCap = store.softCap;
          web3.eth.getBalance(nutzAddr, function(error, result) {
            if (!error) {
                store.reserve = web3.fromWei(result).toNumber();
                that.amountRaised = (store.reserve - 2.41975);
            }
          });
          that.state = 1;
          that.status = store.stateStrings[1];
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
              state: 0,
              now: Math.trunc((new Date()).getTime() / 1000)
          }
      }
  });

    Vue.component('chart-pie', {
        extends: VueChartJs.Doughnut,
        mixins: [VueChartJs.mixins.reactiveProp],
        props: [
          'data-label',
          'data-colors',
          'data-bgc',
          'data-values'
        ],
        computed: {
            pieData: function() {
              return {
                datasets: [{
                  label: this.dataLabel,
                  backgroundColor: this.dataBgc.replace(/(\)\s*and\s)|(\),\s*and\s)|(\),\s)/g, ')!!').split('!!'),
                  borderWidth: 5,
                  borderRadius: 0,
                  borderColor: this.dataColors.replace(/(\)\s*and\s)|(\),\s*and\s)|(\),\s)/g, ')!!').split('!!'),
                  data: this.dataValues.replace(/(\s*and\s)|(,\s*and\s)|(,\s)/g, '!!').split('!!'),
                }],
              }
            },
        },
        mounted () {
          this.renderChart(this.pieData, {
            responsive: true, maintainAspectRatio: false, tooltips: { enabled: false }})
        }
    });

});
