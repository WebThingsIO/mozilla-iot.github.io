Tabs = {
  currentInstallationTab: null,
  currentInstallationSection: null,
  currentExampleTab: null,
  currentExampleSection: null,

  init: function() {
    this.currentInstallationTab = document.getElementById('installation-tab-node');
    this.currentInstallationSection = document.getElementById('installation-node');
    this.installationTabs = document.getElementById('installation-tabs');
    this.installationTabs.addEventListener('click', this.selectInstallationTab.bind(this));


    this.currentExampleTab = document.getElementById('example-tab-node');
    this.currentExampleSection = document.getElementById('example-node');
    this.exampleTabs = document.getElementById('example-tabs');
    this.exampleTabs.addEventListener('click', this.selectExampleTab.bind(this));
  },

  selectInstallationTab: function(e) {
    if (e.target.tagName != 'A') {
      console.log('No tab clicked.');
      return;
    }
    e.preventDefault();
    this.currentInstallationSection.classList.remove('selected');
    this.currentInstallationSection = document.getElementById(e.target.dataset.section);
    this.currentInstallationSection.classList.add('selected');
    this.currentInstallationTab.classList.remove('selected');
    this.currentInstallationTab = e.target;
    this.currentInstallationTab.classList.add('selected');
  },

  selectExampleTab: function(e) {
    if (e.target.tagName != 'A') {
      console.log('No tab clicked.');
      return;
    }
    e.preventDefault();
    this.currentExampleSection.classList.remove('selected');
    this.currentExampleSection = document.getElementById(e.target.dataset.section);
    this.currentExampleSection.classList.add('selected');
    this.currentExampleTab.classList.remove('selected');
    this.currentExampleTab = e.target;
    this.currentExampleTab.classList.add('selected');
  }
};


/**
  * Start site on page load.
  */
window.addEventListener('load', function page_onLoad() {
  window.removeEventListener('load', page_onLoad);
  Tabs.init();
});
