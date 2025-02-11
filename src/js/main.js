import $ from 'jquery';
import { initDropdowns } from './dropdown.js';
import { initSortable } from './sortable.js';
import { initToggles } from './toggle.js';
import { initSimpleBar } from './simplebar-init.js';

$(document).ready(function () {
  $("#navbar").load("/src/components/Navbar.html", function () {
    console.log("Navbar loaded successfully!");
  });
  $("#main").load("/src/components/Main.html", function () {
    initToggles();
    console.log("Main loaded successfully!");
  });
  $("#bottom-nav").load("/src/components/BottomNavbar.html", function () {
    console.log("BottomNavbar loaded successfully!");
  });
  $("#add-modal").load("/src/components/AddModal.html", function () {
    console.log("AddModal loaded successfully!");
  });
  $("#edit-modal").load("/src/components/EditModal.html", function () {
    console.log("EditModal loaded successfully!");
  });
  $("#create-modal").load("/src/components/CreateModal.html", function () {
    console.log("CreateModal loaded successfully!");
  });


  initDropdowns();
  initSortable();
  initSimpleBar();
});
