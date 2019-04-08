import VTable from "./components/index";
import { use, registerComponentProgrammatic } from "./utils/plugins";

const components = [VTable];

const VSimpleTreeTable = {
  install(Vue) {
    for (let componentKey in components) {
      Vue.use(components[componentKey]);
    }
    registerComponentProgrammatic(Vue, "$vui");
  }
};

use(VSimpleTreeTable);
export default VSimpleTreeTable;
