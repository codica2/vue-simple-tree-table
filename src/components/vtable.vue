<template lang="pug">
	div(style="width: 100%").v-table
		table-header(:columns="columns")
		table-body(:data="data" :columns="columns")
			template(v-slot:expand="props")
				slot(name="expand" :props="props.props")
</template>

<script>
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";
export default {
  name: "VTable",
  props: {
    columns: {
      type: Array,
      default: () => {
        return [];
      }
    },
    data: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  components: { TableBody, TableHeader }
};
</script>

<style lang="scss">
@import "../styles/all.scss";
</style>
