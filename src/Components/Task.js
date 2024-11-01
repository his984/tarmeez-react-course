// Import Components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Import style
import "../App.css";

// Import Grid
import Grid from "@mui/material/Grid2";

// Import Icons
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// Task
export default function Task() {
  return (
    <>
      <Card
        style={{
          backgroundColor: "#80808059",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
          // alignItems: "center",
          // justifyContent: "center",
        }}
        sx={{ minWidth: 275 }}
        className="task-card"
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid
              display="flex"
              flexDirection="column"
              // alignItems="r"
              justifyContent="flex-start"
              size={8}
              // backgroundColor="red"
            >
              <Typography variant="h5" component="h2">
                Task Name
              </Typography>
              <Typography
                variant="h6"
                component="h2"
                style={{ fontSize: "17px" }}
              >
                Task Details
              </Typography>
            </Grid>
            <Grid size={4}>
              {/* Actions Buttons & Icons */}
              <div
                className="icons"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start",
                  // backgroundColor:"green",
                  height: "100%",
                }}
              >
                <IconButton
                  style={{
                    backgroundColor: "white",
                    border: "solid 2px green",
                    color: "green",
                  }}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  style={{
                    backgroundColor: "white",
                    margin: "0 10px",
                    border: "solid 2px #0006ffad",
                    color: "#0006ffad",
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  style={{
                    backgroundColor: "white",
                    border: "solid 2px #ff0000bd",
                    color: "#ff0000bd",
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </div>
              {/* //Actions Buttons & Icons// */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
