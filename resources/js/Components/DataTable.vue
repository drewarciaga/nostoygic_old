<script setup>
defineProps({
	columns: {
		default: [],
	},
	modelData:{
		default: [],
	},
	isLoading:{
		type: Boolean,
		default: false,
	},
	total:{
		type: Number,
		default: 0,
	},
	parentSortField:{
		type: String,
		default: 'id',
	},
	parentSortOrder:{
		type: String,
		default: 'DESC',
	}
});


</script>
<template>
  <section>
	<o-field grouped group-multiline>
		<o-select v-model="perPage" :disabled="!isPaginated">
			<option value="5">5 per page</option>
			<option value="10">10 per page</option>
			<option value="15">15 per page</option>
			<option value="20">20 per page</option>
		</o-select>
	</o-field>
	<br>
	<o-table
		:data="modelData"
		:loading="isLoading"
		paginated
		backend-pagination
		:total="total"
		:per-page="perPage"
		@page-change="onPageChange"
		aria-next-label="Next page"
		aria-previous-label="Previous page"
		aria-page-label="Page"
		aria-current-label="Current page"


		backend-sorting
		:default-sort-direction="defaultSortOrder"
		:default-sort="[sortField, sortOrder]"
		@sort="onSort"
	

		:sort-icon="sortIcon"
		:sort-icon-size="sortIconSize"

		:bordered="isBordered"
		:striped="isStriped"
		:narrowed="isNarrowed"
		:hoverable="isHoverable"

		:focusable="isFocusable"
		:mobile-cards="hasMobileCards"


	>
		<template v-for="column in columns" :key="column.id">
			<o-table-column :field="column.field" :label="column.label" :width="column.width?column.width:'40'" :sortable="column.sortable" v-slot="props">
				{{ props.row[column.field] }}
			</o-table-column>
		</template>
     
     
  
    </o-table>
  </section>
</template>

<script>
  

	export default {
		data() {
			return {
				isPaginated: true,
				isPaginationSimple: false,
				paginationPosition: 'bottom',

				sortIcon: 'arrow-up',
				sortIconSize: 'small',
				page: 1,
				perPage: 5,

				isBordered: false,
				isStriped: true,
				isNarrowed: true,
				isHoverable: true,
				isFocusable: false,
				hasMobileCards: true,

				sortField: 'id',
				sortOrder: 'desc',
				defaultSortOrder: 'desc',
				search: "",

			}
		},
		mounted() {
			this.sortField = this.parentSortField
			this.sortOrder = this.parentSortOrder
		},
		methods:{
			onPageChange(page){
				this.page = page
				this.$emit('onPageChange', this.page, this.perPage, this.sortField, this.sortOrder, this.search)
			},
			onSort(field, order) {
				this.sortField = field
        		this.sortOrder = order

				this.$emit('onSort', this.page, this.perPage, this.sortField, this.sortOrder, this.search)
			},
		},
		watch: {
        	perPage: function(val){
				this.perPage = val
				this.$emit('onPageChange', this.page, this.perPage, this.sortField, this.sortOrder, this.search)
			}
		}

	}
</script>
