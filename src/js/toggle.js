import $ from 'jquery';
import gsap from "gsap";

export function initToggles() {
  $(document).on("click", ".toggle-actions", function () {
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

  $(document).on("click", ".toggle-filters", function () {
    $(".filters-container").slideToggle(300);
  });
}
