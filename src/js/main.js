import $ from 'jquery';
import { initDropdowns } from './dropdown.js';
import { initSortable } from './sortable.js';
import { initToggles } from './toggle.js';
import { initSimpleBar } from './simplebar-init.js';

$(document).ready(function () {
  initDropdowns();
  initSortable();
  initToggles();
  initSimpleBar();
});
