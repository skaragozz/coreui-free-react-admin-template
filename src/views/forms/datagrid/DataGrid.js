import { useMemo, useState, useEffect } from 'react'
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table'

//data must be stable reference (useState, useMemo, useQuery, defined outside of component, etc.)
const data = [
  {
    name: 'Ali',
    age: 13,
  },
  {
    name: 'Ahmet',
    age: 15,
  },
  {
    name: 'Veli',
    age: 30,
  },
  {
    name: 'Mehmet',
    age: 25,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Sara',
    age: 57,
  },
  {
    name: 'Dilek',
    age: 33,
  },
  {
    name: 'Fatma',
    age: 25,
  },
  {
    name: 'Ceren',
    age: 20,
  },
  {
    name: 'Deniz',
    age: 16,
  },
]

export default function App() {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //simple recommended way to define a column
        header: 'Name',
        muiTableHeadCellProps: { sx: { color: 'green' } }, //optional custom props
        Cell: ({ cell }) => <span>{cell.getValue()}</span>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: 'age', //id required if you use accessorFn instead of accessorKey
        header: 'Age',
        Header: () => <i>Age</i>, //optional custom header render
      },
    ],
    [],
  )

  //optionally, you can manage any/all of the table state yourself
  const [rowSelection, setRowSelection] = useState({})

  useEffect(() => {
    //do something when the row selection changes
  }, [rowSelection])

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnOrdering: true, //enable some features
    enableRowSelection: true,
    enablePagination: false, //disable a default feature
    onRowSelectionChange: setRowSelection, //hoist internal state to your own state (optional)
    state: { rowSelection }, //manage your own state, pass it back to the table (optional)
  })

  const someEventHandler = () => {
    //read the table state during an event from the table instance
    console.log(table.getState().sorting)
  }

  return (
    <MaterialReactTable table={table} /> //other more lightweight MRT sub components also available
  )
}
