document.addEventListener('DOMContentLoaded', function (e) {
  var localStorageRefId = localStorage.getItem('refId');

  Vue.config.devtools = !!(window.__VUE_DEVTOOLS_GLOBAL_HOOK__) === true && true;
  Vue.use(VueSmoothScroll);
  var app = new Vue({
    el: '#app',
    delimiters: ['<%', '%>'],
    data: {
      refId: localStorageRefId ? '/register/ref/' + localStorageRefId : '',
    },
    methods: {
      customMethod() {
      },
    },
  });

  // JQuery logic
  $('[data-toggle="tooltip"]').tooltip();

  function matchExact(r, str) {
    var match = str.match(r);
    return match != null && str == match[0];
  }

  if (matchExact(/#ref.*/g, window.location.hash) && !localStorageRefId) {
    var refId = window.location.hash.replace('#ref/', '');
    localStorage.setItem('refId', refId);
    window.location.href = window.location.href.replace(/\/#ref.*/g, '');
  }
});
