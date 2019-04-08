import VTable from "./vtable";

VTable.install = Vue => {
  Vue.component(VTable.name, VTable);
};

export default VTable;
