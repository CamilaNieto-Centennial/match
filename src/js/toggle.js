import $ from 'jquery';
import gsap from "gsap";

export function initToggles() {
  $(".toggle-actions").click(function () {
    let projectContainer = $(this).closest('.flex');
    let icon = $(this).find("i");
    let text = $(this).find("p");

    let isExpanded = icon.hasClass("rotated");

    gsap.to(icon, {
      rotate: isExpanded ? 0 : 180,
      duration: 0.3,
      ease: "power2.inOut",
    });

    text.text(isExpanded ? "Show actions" : "Hide actions");
    icon.toggleClass("rotated");

    projectContainer.siblings(".actions-container").slideToggle(300);
  });

  $(".toggle-filters").click(function () {
    $(".filters-container").slideToggle(300);
  });
}
