// Import Components
import Task from "./Task";
import Container from "@mui/material/Container";
// Import Card
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// Import Divider
import Divider from "@mui/material/Divider";
// Import Toggle Button
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// button
import Button from "@mui/material/Button";
// Text field
import TextField from "@mui/material/TextField";
// Import Grid
import Grid from "@mui/material/Grid2";
// Import Style
import "../App.css";
// Import data
import { tasks } from "../data";
// Import hooks
import { useState } from "react";
export default function TodoList() {
  const [task, setTask] = useState(tasks);
  const [titleInput, setTitleInput] = useState("");
  const taskContent = tasks.map((task) => {
    return (
      <div>
        <Task key={task.id} title={task.title} details={task.details} />
      </div>
    );
  });
  // handleAddClick
  function handleAddClick() {
    // alert("test");
    const newTask = setTask()
  }
  return (
    <Container fixed maxWidth="md">
      {/* Card */}
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h3"
            component="h3"
            style={{ textAlign: "center", fontFamily: "his" }}
          >
            My Tasks
          </Typography>
          <Divider />

          {/* Filter Buttons */}
          <ToggleButtonGroup
            // value={alignment}
            // exclusive
            // onChange={handleAlignment}
            // aria-label="text alignment"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <ToggleButton value="left">All</ToggleButton>
            <ToggleButton value="right">Done</ToggleButton>
            <ToggleButton value="justify">ToDo</ToggleButton>
          </ToggleButtonGroup>
          {/* //Filter Buttons// */}
        </CardContent>
        {taskContent}
        <Divider />
        {/* Input + Add Button */}
        <div className="input">
          <Grid container spacing={2}>
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              size={4}
              // backgroundColor="red"
            >
              <Button
                variant="contained"
                style={{ height: "100%" }}
                onClick={handleAddClick}
              >
                Add new task
              </Button>
            </Grid>
            {/* Input */}
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              size={8}
              // backgroundColor="red"
              margin={0}
            >
              <TextField
                id="outlined-basic"
                label="Task Name"
                variant="outlined"
                value={titleInput}
                onChange={(e) => {
                  setTitleInput(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          {/* //Input + Add Button// */}
        </div>
      </Card>
    </Container>
  );
}
