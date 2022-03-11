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
      :data="data"
     
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
     <o-table-column :field="column.field" :label="column.label" width="40" :sortable="column.sortable" v-slot="props">
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
        data:[
          {
            id: 1,
            first_name: 'Jesse',
            last_name: 'Simmons',
            date: '2016-10-15 13:43:27',
            gender: 'Male'
          },
          {
            id: 2,
            first_name: 'John',
            last_name: 'Jacobs',
            date: '2016-12-15 06:00:53',
            gender: 'Male'
          },
          {
            id: 3,
            first_name: 'Tina',
            last_name: 'Gilbert',
            date: '2016-04-26 06:26:28',
            gender: 'Female'
          },
          {
            id: 4,
            first_name: 'Clarence',
            last_name: 'Flores',
            date: '2016-04-10 10:28:46',
            gender: 'Male'
          },
          {
            id: 5,
            first_name: 'Anne',
            last_name: 'Lee',
            date: '2016-12-06 14:38:38',
            gender: 'Female'
          },
          {
            id: 6,
            first_name: 'xxxJesse',
            last_name: 'Simmons',
            date: '2016-10-15 13:43:27',
            gender: 'Male'
          },
          {
            id: 7,
            first_name: 'xxxJohn',
            last_name: 'Jacobs',
            date: '2016-12-15 06:00:53',
            gender: 'Male'
          },
          {
            id: 8,
            first_name: 'xxxTina',
            last_name: 'Gilbert',
            date: '2016-04-26 06:26:28',
            gender: 'Female'
          },
          {
            id: 9,
            first_name: 'xxxClarence',
            last_name: 'Flores',
            date: '2016-04-10 10:28:46',
            gender: 'Male'
          },
          {
            id: 10,
            first_name: 'xxxAnne',
            last_name: 'Lee',
            date: '2016-12-06 14:38:38',
            gender: 'Female'
          },
        ],
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
        isLoading: false,
        hasMobileCards: true,
        columns: [
          {
            id:0,
            field: 'id',
            label: 'ID',
            width: '100',
            sortable: false
          },
          {
            id:1,
            field: 'first_name',
            label: 'First Name',
            sortable: true
          },
          {
            id:2,
            field: 'last_name',
            label: 'Last Name',
            sortable: true
          },
          {
            id:3,
            field: 'date',
            label: 'Date',
            position: 'centered',
            sortable: false
          },
          {
            id:4,
            field: 'gender',
            label: 'Gender',
            sortable: false
          }
        ]
      }
    }
  }
</script>
