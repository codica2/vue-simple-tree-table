<template lang="pug">
div#app(style="max-width: 800px; margin: auto;")
	v-table(:columns="columns" :data="data")
		template(v-slot:expand="row")
			div(style="display: flex; align-items: center;")
				img(:src="row.props.img" style="margin: 0 15px 0 0;")
				div(style="text-align: left;")
					div
						b NAME:
						span {{row.props.name}}
					div
						b Number:
						span {{row.props.number}}
					div
						b Qty:
						span {{row.props.qty}}
					div
						b hiddenData:
						span {{row.props.hiddenData}}
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      columns: [
        {
          name: "Name",
          field: "name"
        },
        {
          name: "Number",
          field: "number"
        },
        {
          name: "Qty",
          field: "qty"
        }
      ],
      data: [
        {
          name: "Name 1",
          number: "1",
          qty: 123,
          hiddenData: "hiddenData 1",
          img: "https://dummyimage.com/300"
        },
        {
          name: "Name 2",
          number: "2",
          qty: 123,
          hiddenData: "hiddenData 2"
        },
        {
          name: "Name 3",
          number: "3",
          qty: 123,
          hiddenData: "hiddenData 3"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "./styles/all.scss";
</style>
