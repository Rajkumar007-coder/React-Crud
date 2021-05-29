import React,{useState} from "react";
import { Container } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Select, MenuItem } from "@material-ui/core";
import GridLayout from "./GridLayout";

const Form = () =>
{
    const [dataField, setDataField] = useState(0);

    const ChangeData = (event) =>
    {
        setDataField(event.target.value);
    
    }
  return (
    <>
    <Container component="main" maxWidth="xs" className="container">
          <form className="form" noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Full Name"
            type="text"
            id="name"
              />
          <TextField 
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
              <Select value={dataField} onChange={ChangeData} fullWidth displayEmpty variant="outlined" style={{marginBottom:"20px"}} label="select">
                  <MenuItem value={0}>Select Your Field</MenuItem>
                  <MenuItem value={1}>Node JS</MenuItem>
                  <MenuItem value={2}>React JS</MenuItem>
                  <MenuItem value={3}>WordPress</MenuItem>
                  <MenuItem value={4}>BootStrap</MenuItem>
              </Select>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          className="submit"
          href="/GridLayout"
          >
                      Submit
          </Button>
          </form>
    </Container>
    <GridLayout />
    </>
  );
};

export default Form;
