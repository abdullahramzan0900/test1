import React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { PieChart } from 'react-minimal-pie-chart';
function Detail({ array, setArray,small,large ,setSmall,Setlarge}) {
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
      width: 230,
      editable: true,
    },
    {
      field: "sizeofcake",
      headerName: "SizeofCake",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 230,
    },
  ];

  const rows = array;
    console.log("smallcake",small);
    console.log("largecake",large);
  return (
    <>
      <div className="box">
        {/* <h4>employee-name</h4>
      <h4>Date of birth</h4>
      <h4>Date of cake</h4>
      <h4>Size of Cake</h4>
   */}

        {/* {
     array &&   array?.map((item)=>{
        return(
            <>
     
            <div className="table">
             <br></br>
              <p>{item.name}</p>   
              <p>{item.date}</p>   
          
             
            </div>
            </>
        )
        })
      } */}
        <Box sx={{ height: 400, width: "70%" }}>
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


        
<PieChart style={{
    width:300,
    marginTop:30
}}
  data={[
    { title: 'One', value:7, color: 'red' },
    { title: 'Two', value:small, color: 'blue' }
  ]}
/>; 
      </div>
    </>
  );
}
export default Detail;
