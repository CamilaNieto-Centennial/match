import $ from 'jquery';
import Sortable from "sortablejs";

export function initSortable() {
  let projectList = $("#listProjects");
  Sortable.create(projectList[0], {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "bg-zinc-800",
    onEnd: function (evt) {
      console.log("New order:", projectList.children().map((_, el) => $(el).attr("id")).get());
    }
  });
}
