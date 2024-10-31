// Import Container
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

export default function TodoList() {
  return (
    <Container fixed maxWidth="sm">
      <Card className="card" sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography
            variant="h2"
            component="h2"
            style={{ textAlign: "center" }}
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

        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Container>
  );
}
