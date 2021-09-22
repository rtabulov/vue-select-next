export default {
  mounted(el, bindings, { context }) {
    if (context && context.appendToBody) {
      const { height, top, left, width } =
        context.$refs.toggle.getBoundingClientRect();

      let scrollX = window.scrollX || window.pageXOffset;
      let scrollY = window.scrollY || window.pageYOffset;

      el.unbindPosition = context.calculatePosition(el, context, {
        width: width + 'px',
        left: scrollX + left + 'px',
        top: scrollY + top + height + 'px',
      });

      document.body.appendChild(el);
    }
  },

  unmounted(el, bindings, { context }) {
    if (context && context.appendToBody) {
      if (el.unbindPosition && typeof el.unbindPosition === 'function') {
        el.unbindPosition();
      }
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  },
};
