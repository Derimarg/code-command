window.handleCSSToggleButtonClick = function(event) {
  var target = event.currentTarget;
  var cssToggleId = target && target.dataset && target.dataset.cssToggleId;
  var input = cssToggleId && document.getElementById(cssToggleId);
  if (input) {
      if (input.dataset.type === 'checkbox') {
          input.dataset.checked = input.dataset.checked ? '' : 'checked';
      } else {
          input.dataset.checked = input.dataset.allowToggle && input.dataset.checked ? '' : 'checked';
          var radios = document.querySelectorAll('[name="' + input.dataset.name + '"]');
          for (var i = 0; i < radios.length; i++) {
              if (radios[i] !== input) {
                  radios[i].dataset.checked = '';
              }
          }
      }
  }
}
;
(function() {
  var cssToggleButtons = document.querySelectorAll('[data-css-toggle-id');
  for (var i = 0; i < cssToggleButtons.length; i++) {
      cssToggleButtons[i].addEventListener('click', window.handleCSSToggleButtonClick);
  }
})();


          if (window.performance && typeof window.performance.mark === 'function' && typeof window.performance.measure === 'function') {
              performance = {
                  _trackedResources: [],
                  // Assed by utils/performance/create-performance-observers.js
                  _eventNamePrefix: '',
                  trackResourceTiming: function(resourceName, resourceUrl) {
                      this._trackedResources.push({
                          name: this._eventNamePrefix + 'resource-' + resourceName,
                          url: resourceUrl
                      });
                  },
                  mark: function(name) {
                      window.performance.mark(this._eventNamePrefix + name);
                  },
                  start: function(name) {
                      window.performance.mark(this._eventNamePrefix + '_' + name + '-start');
                  },
                  end: function(name) {
                      var endMark = this._eventNamePrefix + '_' + name + '-end';
                      var startMark = this._eventNamePrefix + '_' + name + '-start';
                      window.performance.mark(endMark);

                      if (window.performance.getEntriesByName(startMark).length > 0) {
                          window.performance.measure(this._eventNamePrefix + name, startMark, endMark);
                      }
                  },
                  isPageCached: false
              };
          } else {
              performance = {
                  trackResourceTiming: Function.prototype,
                  mark: Function.prototype,
                  start: Function.prototype,
                  end: Function.prototype
              };
          }
     
          window.GoogleAnalyticsObject = 'ga';
          window.ga = function() {
              (window.ga.q = window.ga.q || []).push(arguments);
          }
          ;
          window.ga.l = 1 * new Date();

          GoogleAnalytics = GoogleAnalytics || {};
          GoogleAnalytics.createAunt = function(auntId, propertyName, domainName) {
              if (auntId) {
                  if (propertyName) {
                      // Required for multiple trackers
                      window.ga('create', auntId, 'auto', {
                          'name': propertyName,
                          'cookieDomain': domainName || 'none',
                          'siteSpeedSampleRate': 10
                      });
                  } else {
                      window.ga('create', auntId, 'auto', {
                          'siteSpeedSampleRate': 10
                      });
                      window.ga('require', 'displayfeatures');
                      // Enables retargeting
                  }
                  window.ga('set', {
                      'anonymizeIp': true,
                      'location': ""
                  });
              }
          }
          ;
          GoogleAnalytics.createAunt(Config.third_party.google_analytics_id);
       