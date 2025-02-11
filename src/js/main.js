import $ from 'jquery';
import { initDropdowns } from './dropdown.js';
import { initSortable } from './sortable.js';
import { initToggles } from './toggle.js';
import { initSimpleBar } from './simplebar-init.js';

$(document).ready(function () {
  $("#navbar").load("/src/components/Navbar.html");
  $("#main").load("/src/components/Main.html", function () {
    initToggles();
  });
  $("#bottom-nav").load("/src/components/BottomNavbar.html");
  $("#add-modal").load("/src/components/AddModal.html");
  $("#edit-modal").load("/src/components/EditModal.html");
  $("#create-modal").load("/src/components/CreateModal.html");


  initDropdowns();
  initSortable();
  initSimpleBar();
});
