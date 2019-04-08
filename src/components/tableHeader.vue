<template lang="pug">
	div
		table(style="width: 100%" cellspacing="0" cellpadding="0"	border="0").v-table__header
			thead
				th(:style="{ width: expandWidth + 'px' }")
				th(:style="{ width:  setWidth((100 / columns.length)) || settableWidth }" v-for="(column, columnIndex) in columns" :key="columnIndex" @on-mousemove="($event) => this.handleMouseMove($event, column)")
					span {{column.name}}
</template>

<script>
export default {
  name: "tableHeader",
  props: {
    columns: {
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
      settableWidth: null
    };
  },
  methods: {
    setWidth(val) {
      let columnWidth = null;
      this.$nextTick(() => {
        const widthTable = document.querySelector(".v-table__header")
          .offsetWidth;
        columnWidth = (widthTable * this.columnWidth) / 100;
        let qtyColumns = Math.round(widthTable / columnWidth);
        columnWidth = columnWidth - this.expandWidth / qtyColumns;
        this.settableWidth = Math.round(columnWidth) + "px";
      });
      if (typeof val === "number") {
        this.columnWidth = val;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.setWidth);
  }
};
</script>

<style scoped></style>
