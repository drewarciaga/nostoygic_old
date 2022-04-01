<script setup>
defineProps({
    columns: {
        type: [],
    },
    modelData:{
      type: [],
    },
    isLoading:{
      type: Boolean,
      default: false,
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
     
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      :default-sort-direction="defaultSortDirection"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"

      :bordered="isBordered"
      :striped="isStriped"
      :narrowed="isNarrowed"
      :hoverable="isHoverable"
      :loading="isLoading"
      :focusable="isFocusable"
      :mobile-cards="hasMobileCards"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"

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
        defaultSortDirection: 'asc',
        sortIcon: 'arrow-up',
        sortIconSize: 'small',
        currentPage: 1,
        perPage: 5,

        isBordered: false,
        isStriped: true,
        isNarrowed: true,
        isHoverable: true,
        isFocusable: false,
        hasMobileCards: true,
    
      }
    }
  }
</script>
