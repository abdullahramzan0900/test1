import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PieChart } from 'react-minimal-pie-chart';
function Detail({ array, setArray,small,large ,setSmall,Setlarge,check}) {
  const columns = [
    {
      field: `name`,
      headerName: "EmployeeName ",
      width: 230,
      editable: true,
    },
    {
      field: "date",
      headerName: "Dateofbirth ",
      width: 240,
      editable: true,
    },
    {
      field: "dateofcake",
      headerName: "DateofCake",
      type: "number",
      width: 240,
      editable: true,
    },
    {
      field: "sizeofcake",
      headerName: "SizeofCake",
      description: "This column has a value getter and is not sortable.",
      sortable: true,
      width: 140,
    },
  ];

  const rows = array;
    console.log("smallcake",small);
    console.log("largecake",large);
  return (
    <>
      <div className="box">
      
        <Box sx={{ height: 400, width: "60%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(rows) => rows.id}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            />
        </Box>
            </div>

{ check &&
  
        <div className="piechart">
<PieChart style={{
  width:300,
  marginTop:30
}}
data={[
  { title: 'One', value:large, color: 'red' },
  { title: 'Two', value:small, color: 'blue' }
]}
/>
<div className="small">

  <p>small  <span class="dot"></span></p>

</div>
<div className="large">

  <p>large  <span class="dot2"></span></p>
 
</div>

</div>       
}
    </>
  );
}
export default Detail;
