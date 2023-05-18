import { Directive } from "vue";

const vAutoFocus: Directive<HTMLElement, boolean> = {
  mounted: (el) => {
    el.focus();
  },
};

export default vAutoFocus;
