<script setup>
import { Link } from '@inertiajs/inertia-vue3';
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
	},
	currentSearch:{
		type: String,
		default:'',
	},
	hasPopupEdit:{
		type: Boolean,
		default: false
	},
	routeName:{
		type: String,
		default: ''
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
			<o-table-column v-if="column.label == 'Action'" :field="column.field" :label="column.label" :width="column.width?column.width:'40'" :sortable="column.sortable" v-slot="props">
				<o-button class="btn-view"><span class="mdi mdi-eye" @click="$emit('viewModel', props.row[column.field])"></span></o-button>
				
				<Link v-if="hasPopupEdit == false" :href="route(routeName+'.edit',props.row[column.field])"><o-button class="btn-edit"><span class="mdi mdi-note-edit"></span></o-button></Link>
				<o-button v-else class="btn-edit"><span class="mdi mdi-note-edit" @click="$emit('editModel', props.row[column.field])"></span></o-button>
				
				<span v-if="props.row['super_admin'] == null || props.row['super_admin'] == 0">
					<o-button class="btn-delete"><span class="mdi mdi-trash-can" @click="$emit('deleteModel', props.row[column.field])"></span></o-button>
				</span>
			</o-table-column>

			<o-table-column v-else :field="column.field" :label="column.label" :width="column.width?column.width:'40'" :sortable="column.sortable" v-slot="props">
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
			}
		},
		mounted() {
			this.sortField = this.parentSortField
			this.sortOrder = this.parentSortOrder
		},
		methods:{
			onPageChange(page){
				this.page = page
				this.$emit('onPageChange', this.page, this.perPage, this.sortField, this.sortOrder, this.currentSearch)
			},
			onSort(field, order) {
				this.sortField = field
        		this.sortOrder = order

				this.$emit('onSort', this.page, this.perPage, this.sortField, this.sortOrder, this.currentSearch)
			},
		},
		watch: {
        	perPage: function(val){
				this.perPage = val
				this.$emit('onPageChange', this.page, this.perPage, this.sortField, this.sortOrder, this.currentSearch)
			}
		}

	}
</script>
<style scoped>
.btn-view{
    background: none;
    border: none;
    color: #ffb300;
    font-size: 20px;
    height: auto;
    line-height: .7;
}
.btn-edit{
    background: none;
    border: none;
    color: #1474ce;
    font-size: 20px;
    height: auto;
    line-height: .7;
}
.btn-delete{
    background: none;
    border: none;
    color: #c91818;
    font-size: 20px;
    height: auto;
    line-height: .7;
}
</style>