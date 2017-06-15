/**
 * Main website script.
 */

'use strict';

/**
 * Main site object.
 */
var Site = {
  menuActive: false,

  init: function() {
    this.menuButton = document.getElementById('menu-button');
    this.menuButton.addEventListener('click',
      this.handleMenuButtonClick.bind(this));
    this.menu = document.getElementById('main-menu');
  },

  handleMenuButtonClick: function(e) {
    if (this.menuActive) {
      this.menu.classList.remove('visible');
      this.menuActive = false;
    } else {
      this.menu.classList.add('visible');
      this.menuActive = true;
    }
  }
};

/**
  * Start site on page load.
  */
window.addEventListener('load', function site_onLoad() {
  window.removeEventListener('load', site_onLoad);
  Site.init();
});
