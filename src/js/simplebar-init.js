import 'simplebar';
import 'simplebar/dist/simplebar.css';

export function initSimpleBar() {
  document.querySelectorAll('[data-simplebar]').forEach(el => {
    new SimpleBar(el, { autoHide: false });
  });
}
