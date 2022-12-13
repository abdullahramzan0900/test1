import React, { useEffect } from "react";
import { useState } from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";
import Detail from "./detail";
import moment from "moment";
import { PieChart } from "react-minimal-pie-chart";

function Form() {
  const [name, setName] = useState();
  const [array, setArray] = useState([]);
  const [year, setYear] = useState();
  const [sizecake, Setsizecake] = useState("small");
  const [small,setSmall]=useState(0)
  const [large,Setlarge]=useState(0)
  useEffect(() => {}, [array]);

  const [value, setValue] = React.useState(dayjs("2022-12-18T21:11:54"));
  const handleChange1 = (event) => {
    setName(event.target.value);
    console.log(name);
  };
 

  const handleChange = (newValue) => {
    setValue(newValue);
    // console.log("y",moment(newValue).format("LLLL"));
    console.log("date", newValue);
  };
  function Check() {
    array?.map((item) => {
      let x = item.dateofcake;
      console.log("datofcake", item.dateofcake);
      array?.map((item2) => {
        if (item.length > 0 && x === item2.dateofcake) {
          item2.sizeofcake = "large";
        }
      });
    });
    setArray(array);
  }

  function addArray() {
    let day = value.$D;
    const sizeofcake = "small";
    if (value.$W === 5) {
      day = value.$D + 4;
    } else if (value.$W === 6) {
      day = value.$D + 3;
    } else if (value.$W === 0) {
      day = value.$D + 2;
    } else if (value.$W === 1 || value.$W === 2 || value.$W === 3) {
      day = value.$D + 1;
    } else if (value.$W === 4) {
      day = value.$D + 4;
    }

    const k = 2022 - value.$y;
    //  console.log(value.$y,"ababab");
    console.log(k, "newyear");
    const g = k + value.$y;
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    // console.log(moment( `${value.$D}-${value.$M + 1}-${value.$y}`,).format("MMM Do YY"),"datee");
    // let a=moment( ` ${value.$M+1} ${value.$D} ${value.$y}`,).format("MMM Do YY");// for dob
    // console.log(a,"format");
    // console.log("check",`${value.$M+1}  ${day}  ${value.$y}`)
    // let b=moment( `${value.$M+1}  ${day}  ${value.$y}`,).format("MMM Do YY");
    // console.log("format2",b);

    const x = {
      id: rand,
      name: name,
      date: moment(` ${value.$M + 1} ${value.$D} ${value.$y}`).format(
        "MMM Do YY"
      ),
      dateofcake: moment(`${value.$M + 1} ${day} ${g}`).format("MMM Do YY"),
      sizeofcake: `${sizeofcake}`,
    };
    array?.map((item) => {
      let x = item.dateofcake;
      console.log("datofcake", item.dateofcake);
      array?.map((item2) => {
        if (x === item2.dateofcake) {
          item2.sizeofcake = "large";
        }
      });
      setArray(array);
    });

    setArray((current) => [...current, x]);

    console.log(x, "aaa");
    //  const y=  JSON.stringify(value.$d);
    //  console.log(y,"string")
    // console.log(value.$d,"sojqd");
    
    console.log(array);
    function piechart() {
        let s=0;// for small
        let l=0; // for large
        array.map((item) => {
             if(item.sizeofcake==="large")
             {
                  s++;
                  console.log(s,"s");
                  setSmall(s)
             }
             else {
              l++;
              console.log(l,"L")
              Setlarge(l);
             }
        });
      }
      piechart()
  }
  return (
    <>
      <div className="conatiner">
        <div style={{}}>
          <label>
            <input
              style={{
                width: 150,
                height: 40,
              }}
              type="text"
              id="name"
              name="name"
              onChange={handleChange1}
              value={name}
              placeholder="Name"
            />
          </label>
        </div>
        <div>
          <LocalizationProvider
            style={{
              width: "20",
            }}
            dateAdapter={AdapterDayjs}
          >
            <Stack spacing={1}>
              <DesktopDatePicker
                className="date"
                label="Date desktop"
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div>
          <Button
            onClick={() => {
              addArray();
            }}
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </div>
      <Detail array={array} setArray={setArray} small={small} large={large} setSmall={setSmall} Setlarge={Setlarge}/>
    </>
  );
}
export default Form;
