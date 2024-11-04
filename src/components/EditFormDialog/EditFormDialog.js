import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditFormDialog({
  open,
  setOpen,
  currentTitle,
  onSubmit,
}) {
  const [newTitle, setNewTitle] = useState(currentTitle);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    onSubmit(newTitle);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ width: "400px" }}>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="task"
          label="Edit task title"
          type="text"
          fullWidth
          variant="standard"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave} type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
