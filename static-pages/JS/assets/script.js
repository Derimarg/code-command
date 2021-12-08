
 window.handleCSSToggleButtonClick = function (event) {
    var target = event.currentTarget;
    var cssToggleId = target && target.dataset && target.dataset.cssToggleId;
    var input = cssToggleId && document.getElementById(cssToggleId);
    if (input) {
      if (input.dataset.type === "checkbox") {
        input.dataset.checked = input.dataset.checked ? "" : "checked";
      } else {
        input.dataset.checked =
          input.dataset.allowToggle && input.dataset.checked ? "" : "checked";
        var radios = document.querySelectorAll(
          '[name="' + input.dataset.name + '"]'
        );
        for (var i = 0; i < radios.length; i++) {
          if (radios[i] !== input) {
            radios[i].dataset.checked = "";
          }
        }
      }
    }
  };
  (function () {
    var cssToggleButtons = document.querySelectorAll("[data-css-toggle-id");
    for (var i = 0; i < cssToggleButtons.length; i++) {
      cssToggleButtons[i].addEventListener(
        "click",
        window.handleCSSToggleButtonClick
      );
    }
  })();