/**
 * Show Chart of acebusters economy
 */

// charts
document.addEventListener("DOMContentLoaded", function(e) {

    Vue.filter('twoDigits', (value) => {
        if ( value.toString().length <= 1 ) {
            return '0'+value.toString()
        }
        return value.toString()
    });

    Vue.component('timer', {
        props: ['deadline'],
        template: `
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
        `,
        data() {
            return {
                now: Math.trunc((new Date()).getTime() / 1000),
                date: null,
            }
        },
        mounted() {
            this.date = Math.trunc(Date.parse(this.deadline) / 1000)
            setInterval(() => {
                this.now = Math.trunc((new Date()).getTime() / 1000)
            }, 1000)
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
            <div class="ico-progress">
                <h5 class="progress-headline">Total Value</h5>
                <p class="total-value"> {{ totalValue }} </p>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" v-bind:aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" v-bind:style="{ width: percent + '%' }">
                        <span class="sr-only">60% Complete</span>
                    </div>
                </div>
                <div class="progress-label">
                    <span class="funding-milestone-1"> 
                        0 ETH
                    </span>
                    <div class="funding-milestone-2"> 
                        {{ minValue }} ETH
                    </div>
                    <div class="funding-milestone-3"> 
                        {{ totalValue }} ETH
                    </div>
                </div>
            </div>
        `,
        data() {
            return {
                percent: 70,
                totalValue: 9000, 
                minValue:  7000,
            }
        },
    });

    var timer = new Vue({
        delimiters:['<%', '%>'],
        el: '#ico-app',
    });
});
