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
  const [small, setSmall] = useState(0);
  const [large, Setlarge] = useState(0);
  const [check,setCheck]=useState(false);

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

  function addArray() {
    setCheck(true);
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
  
    const g = k + value.$y;
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
 

    const x = {
      id: rand,
      name: name,
      date: moment(` ${value.$M + 1} ${value.$D} ${value.$y}`).format(
        "MMM Do YY"
      ),
      dateofcake: moment(`${value.$M + 1} ${day} ${g}`).format("MMM Do YY"),
      sizeofcake: `${sizeofcake}`,
    };
    
    // setArray(array);
    
    setArray((current) => [...current, x]);
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
                  console.log(l,"L");
                  Setlarge(l);
                 }
            });
          }
          piechart()

  
  }

  let x = [...array];
  useEffect(() => {
 
    x.map((item, index) => {
      
      if (index>0) {
        array.map((item2, index2) => {
          console.log(item2.dateofcake, "item2");
          console.log(item.dateofcake, "item");

          if (index !==index2 && item2.dateofcake === item.dateofcake) {
            item2.sizeofcake = "large";
          }
        });
      }
      console.log(x, "array");
      setArray(array);
    });
  }, [array]);

 

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
            {" "}
            Submit
          </Button>
        </div>
      </div>
      <Detail
        array={array}
        setArray={setArray}
        small={small}
        large={large}
        setSmall={setSmall}
        Setlarge={Setlarge}
        check={check}
      />
    </>
  );
}
export default Form;
