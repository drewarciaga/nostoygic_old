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
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page"
        >
            <template v-for="column in columns" :key="column.id">
                <o-table-column v-if="column.label == 'Action'" :field="column.field" :label="column.label" :width="column.width?column.width:'40'" :sortable="column.sortable" v-slot="props">
                    <o-button class="btn-view"><span class="mdi mdi-eye"></span></o-button>
                    <o-button class="btn-edit"><span class="mdi mdi-note-edit"></span></o-button>
                    <o-button class="btn-delete"><span class="mdi mdi-trash-can"></span></o-button>
             
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
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'small',
                currentPage: 1,
                perPage: 5
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