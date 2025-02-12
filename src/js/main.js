import $ from 'jquery';
import { initDropdowns } from './dropdown.js';
import { initSortable } from './sortable.js';
import { initToggles } from './toggle.js';
import { initSimpleBar } from './simplebar-init.js';

$(document).ready(function () {
  $("#navbar").load("/components/Navbar.html");
  $("#main").load("/components/Main.html", function () {
    initToggles();
  });
  $("#bottom-nav").load("/components/BottomNavbar.html");
  $("#add-modal").load("/components/AddModal.html");
  $("#edit-modal").load("/components/EditModal.html");
  $("#create-modal").load("/components/CreateModal.html");


  initDropdowns();
  initSortable();
  initSimpleBar();
});
