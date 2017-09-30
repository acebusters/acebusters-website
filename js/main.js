document.addEventListener('DOMContentLoaded', function (e) {
  var localStorageRefId = localStorage.getItem('refId');

  Vue.config.devtools = !!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__) === true && true;
  Vue.use(VueSmoothScroll);
  var app = new Vue({
    el: '#app',
    delimiters: ['<%', '%>'],
    data: {
      appUrlName: 'https://dapp.acebusters.com',
      // Nutz contract
      ceilingPrice: 9999999999,
      floorPrice: 0,
      powerPool: 0,
      burnPool: 0,
      reserve: 0,
      // Power Contract
      authorizedPower: 0,
      // users
      alice: {
        eth: 1200,
        ntz: 0,
        abp: 0,
      },
      bob: {
        eth: 40000,
        ntz: 0,
        abp: 0,
      },
      charlie: {
        eth: 80000,
        ntz: 0,
        abp: 0,
      },
      refId: localStorageRefId ? '/register/ref/' + localStorageRefId : '',
    },
    computed: {
      totalNtz: function () {
        return this.activeSupply + this.powerPool + this.burnPool;
      },

      activeSupply: function () {
        return this.alice.ntz + this.bob.ntz + this.charlie.ntz;
      },

      issuedAbp: function () {
        return this.authorizedPower / 2;
      },

      outstandingPower: function () {
        return this.alice.abp + this.bob.abp + this.charlie.abp;
      },

      dataNtzPie: function () {
        return {
          labels: ['Active Supply', 'Power Pool', 'Burn Pool'],
          datasets: [{
            label: 'NTZ Distribution',
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
            data: [this.activeSupply, this.powerPool, this.burnPool],
          }]
        };
      },

      dataPowerPie: function () {
        return {
          labels: ['Alice\'s ABP', 'Bob\'s ABP', 'Charlie\'s ABP', 'Issued ABP'],
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
            data: [this.alice.abp, this.bob.abp, this.charlie.abp, this.issuedAbp - this.outstandingPower],
          }]
        };
      },
    },
    methods: {
      appUrl: function () {
        return this.appUrlName + this.refId;
      },

      purchaseNtz: function (amountStr, user) {
        var amountEth = parseInt(amountStr, 10);
        if (user.eth < amountEth) {
          alert('Not enough ETH!');
          return;
        }

        if (this.ceilingPrice >= 9999999999) {
          alert('Ceiling set to infinity, can not purchase.');
          return;
        }

        var amountNtz = (amountEth * this.ceilingPrice);
        // handle user account
        user.eth -= amountEth;
        this.reserve += amountEth;
        user.ntz += amountNtz;
        // handle Power Pool
        if (this.issuedAbp > 0) {
          var shareholderRatio = this.outstandingPower / (this.issuedAbp);
          this.powerPool += amountNtz * shareholderRatio;
        }
      },

      sellNtz: function(amountStr, user) {
        var amountNtz = parseInt(amountStr, 10);
        if (user.ntz < amountNtz) {
          alert('Not enough NTZ!');
          return;
        }

        if (this.floorPrice <= 0) {
          alert('Floor == 0, can not sell.');
          return;
        }

        var floorPrice = this.floorPrice;
        if (this.activeSupply / floorPrice > this.reserve) {
          floorPrice = this.activeSupply / this.reserve;
        }

        var amountEth = (amountNtz / floorPrice);
        this.reserve -= amountEth;
        user.ntz -= amountNtz;
        user.eth += amountEth;
        // handle Power Pool
        if (this.issuedAbp > 0) {
          var shareholderRatio = this.outstandingPower / (this.issuedAbp);
          this.powerPool -= amountNtz * shareholderRatio;
        }
      },

      powerUp: function (amountStr, user) {
        var amountNtz = parseInt(amountStr, 10);
        if (user.ntz < amountNtz) {
          alert('Not enough NTZ!');
          return;
        }

        if (this.authorizedPower === 0) {
          this.authorizedPower = 1000000;
        }

        var amountAbp = (amountNtz / this.totalNtz) * this.authorizedPower;
        if (this.outstandingPower + amountAbp > this.authorizedPower / 2) {
          alert('No ABP available!');
          return;
        }

        user.ntz -= amountNtz;
        this.powerPool += amountNtz;
        user.abp += amountAbp;
      },

      powerDown: function (amountStr, user) {
        var amountAbp = parseInt(amountStr, 10);
        if (user.abp < amountAbp) {
          alert('Not enough ABP');
          return;
        }

        var amountNtz = this.totalNtz * (amountAbp / this.authorizedPower);
        user.abp -= amountAbp;
        user.ntz += amountNtz;
        this.powerPool -= amountNtz;
      },

      setCeiling: function (ceilingStr) {
        var ceilingPrice = parseInt(ceilingStr, 10);
        // check not below floor
        if (this.floorPrice > 0 && (ceilingPrice > this.floorPrice)) {
          alert('can not set ceiling below floor.');
          return;
        }

        this.ceilingPrice = ceilingPrice;
      },

      setFloor: function (floorStr) {
        var floorPrice = parseInt(floorStr, 10);
        // check not above ceiling
        if (floorPrice < this.ceilingPrice) {
          alert('can not set floor above ceiling.');
          return;
        }

        // check that active supply covered by reserve
        if (this.activeSupply / floorPrice > this.reserve) {
          var maxFloor = this.activeSupply / this.reserve;
          alert('floor price not covered by reserve, max floor: ' + maxFloor);
          return;
        }

        this.floorPrice = floorPrice;
      },

      burnNtz: function (amountStr) {
        var amountNtz = parseInt(amountStr, 10);
        var factor = (this.totalNtz + amountNtz) / this.totalNtz;
        if (this.authorizedPower === 0) {
          this.authorizedPower = amountNtz / factor;
        }

        this.burnPool += amountNtz;
        this.authorizedPower *= factor;
      },

      allocateEth: function (amountStr) {
        var amountEth = parseInt(amountStr, 10);
        if (this.floorPrice > 0) {
          if (this.activeSupply / this.floorPrice > this.reserve - amountEth) {
            var maxAlloc = this.reserve - (this.activeSupply / this.floorPrice);
            alert('allocation too high, max allocation: ' + maxAlloc);
            return;
          }
        }

        this.reserve -= amountEth;
      },
    },
  });

  // JQuery logic
  $('[data-toggle="tooltip"]').tooltip();

  $('#modal-sign-up').on('click', function(){
    dataLayer.push({ 'event': 'Modal_SignUp_Click' });
  })

  function gtmUpdate(type) {
    type == 'sub' && dataLayer.push({ 'event': 'subscription_success' });
  }

  function matchExact(r, str) {
    var match = str.match(r);
    return match != null && str == match[0];
  }

  if (matchExact(/#ref.*/g, window.location.hash) && !localStorageRefId) {
    var refId = window.location.hash.replace('#ref/', '');
    localStorage.setItem('refId', refId);
    window.location.href = window.location.href.replace(/\/#ref.*/g, '');
  }

  var $investForm = $('#invest-form');
  $investForm.submit(function(e) {
  e.preventDefault();
  $.ajax({
    url: '//formspree.io/info@acebusters.com',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $investForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $investForm.find('.alert--loading').hide();
      $investForm.fadeOut(300);
      $('.invest-add').fadeIn(300);
      dataLayer.push({ 'event': 'Reveal_ETH_Address_Success' });
    },
    error: function(err) {
      $investForm.find('.alert--loading').hide();
      $investForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
      dataLayer.push({ 'event': 'Reveal_ETH_Address_Error' });
    }
  });
});


});
