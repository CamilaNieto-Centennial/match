import $ from 'jquery';
import 'flowbite';

export function initDropdowns() {
  $(".dropdown-item").click(function (e) {
    e.preventDefault();

    let selectedValue = $(this).data("value");
    let dropdownMenu = $(this).closest('[id^="dropdown"]');
    let button = dropdownMenu.siblings("button");
    let input = dropdownMenu.siblings("input");

    button.find("p").text(selectedValue);
    input.val(selectedValue);

    dropdownMenu.find(".dropdown-item").removeClass("bg-zinc-600 hover:bg-zinc-600");
    dropdownMenu.find(".dropdown-item").addClass("hover:bg-zinc-800");
    $(this).addClass("bg-zinc-600").removeClass("hover:bg-zinc-800").addClass("hover:bg-zinc-600");
  });
}
