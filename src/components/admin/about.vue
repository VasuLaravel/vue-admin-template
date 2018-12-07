<template>
  <div class="ABOUT" align="center">
  	<q-card class="bg-white q-mb-md">
  		<h6>Table Component</h6>
  	</q-card>
		<q-table
			class="bg-white q-mb-md"
	    title="Table With Row Click Option"
	    :data="tableData"
	    :columns="columns"
	    row-key="name"
	  >
	  	<template slot="top-right" slot-scope="props">
        <q-search
          color="secondary"
          v-model="filter"
          class="col-12"
        />
      </template>

      <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
		    <q-td v-for="col in props.cols" :key="col.name" :props="props">
		      {{ col.value }}
		    </q-td>
		  </q-tr>
	  </q-table>

	  <blockquote align="left">
      <p>For More details see below link.</p>
      <small><a href="https://quasar-framework.org/components/datatable.html" target="_blank">
        https://quasar-framework.org/components/datatable.html
      </a></small>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
    	filter: '',
    	columns: [
	      {
	        name: 'name',
	        required: true,
	        label: 'Name',
	        align: 'center',
	        field: 'name',
	        sortable: true
	      },
	      {
	        name: 'desc',
	        required: true,
	        label: 'Dessert (100g serving)',
	        align: 'center',
	        field: 'desc',
	        sortable: true
	      },
	      {
	        name: 'phoneno',
	        required: true,
	        label: 'Phone Number',
	        align: 'center',
	        field: 'phoneno',
	        sortable: true
	      },
	    ],
	    tableData: [
	      {
	        name: 'Frozen Yogurt',
	        desc: 159,
	        phoneno: 6.0,
	      },
	      {
	        name: 'Frozen Yogurt1',
	        desc: 159,
	        phoneno: 6.0,
	      },
	      {
	        name: 'Frozen Yogurt2',
	        desc: 159,
	        phoneno: 6.0,
	      },
	    ]
    }
  },
  created () {},
  methods : {
  	rowClick (data) {
  		this.$q.dialog({
        title: 'Alert',
        message: 'You clicked on : ' + data.name
      })
  	}
  }
}
</script>

<style>
</style>
