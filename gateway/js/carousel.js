Carousel = {
  currentTab: null,
  currentSection: null,

  init: function() {
    this.currentTab = document.getElementById('carousel-tab1');
    this.currentSection = document.getElementById('carousel-section1');
    this.tabs = document.getElementById('carousel-tabs');
    this.tabs.addEventListener('click', this.selectTab.bind(this));
  },

  selectTab: function(e) {
    if (e.target.tagName != 'A') {
      console.log('No tab clicked.');
      return;
    }
    e.preventDefault();
    this.currentSection.classList.remove('selected');
    this.currentSection = document.getElementById(e.target.dataset.section);
    this.currentSection.classList.add('selected');
    this.currentTab.classList.remove('selected');
    this.currentTab = e.target;
    this.currentTab.classList.add('selected');
  }
};


/**
  * Start site on page load.
  */
window.addEventListener('load', function page_onLoad() {
  window.removeEventListener('load', page_onLoad);
  Carousel.init();
});
