import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function MuButton() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        onClick={() => {
          alert("Clicked!");
        }}
        variant="contained"
      >
        Contained
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
    </Stack>
  );
}
