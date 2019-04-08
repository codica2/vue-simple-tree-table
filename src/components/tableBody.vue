<template lang="pug">
div
	table(style="width: 100%" cellspacing="0" cellpadding="0" border="0").v-table__body
		tbody(id="tbody")
			tr(v-for="(rowData, rowDataIndex) in data" :key="rowDataIndex" :id="`index-${rowDataIndex}`" :data-row-index="rowDataIndex")
				td(:style="{ width: expandWidth + 'px' }" @click="expandRow(rowDataIndex)").v-row__expand
					i(:class="{ 'rotate': expanded[rowDataIndex] }").fas.fa-chevron-right
				td(:style="{ width: setWidth((100 / columns.length)) || settableWidth }" v-for="(columnData, columnDataIndex) in columns" :key="columnDataIndex")
					span  {{rowData[columnData.field]}}
				td.expand
					transition(name="fade" tag="div")
						slot(v-if="expanded[rowDataIndex]" name="expand" :props="rowData")
</template>

<script>
export default {
  name: "TableBody",
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
  data() {
    return {
      expandWidth: 50,
      columnWidth: null,
      settableWidth: null,
      expanded: {}
    };
  },
  methods: {
    setWidth(val) {
      let columnWidth = null;
      this.$nextTick(() => {
        const widthTable = document.querySelector(".v-table__body").offsetWidth;
        columnWidth = (widthTable * this.columnWidth) / 100;
        let qtyColumns = Math.round(widthTable / columnWidth);
        columnWidth = columnWidth - this.expandWidth / qtyColumns;
        this.settableWidth = Math.round(columnWidth) + "px";
      });
      if (typeof val === "number") {
        this.columnWidth = val;
      }
    },
    expandRow(index) {
      this.$set(this.expanded, index, !this.expanded[index]);
    }
  },
  created() {
    window.addEventListener("resize", this.setWidth);
  }
};
</script>

<style lang="scss" scoped></style>
