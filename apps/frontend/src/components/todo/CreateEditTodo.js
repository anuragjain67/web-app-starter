import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  Stack,
  TextField,
} from "@mui/material";

export const CreateEditTodo = (props) => {
  const { open, handleSubmit, handleClose } = props;
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack direction="column" mt={2}>
          <FormControl>
            <Box>
              <FormLabel> Title</FormLabel>
            </Box>
            <TextField id="todo-title" sx={{ mb: 2 }} />
          </FormControl>

          <FormControl>
            <Box>
              <FormLabel> Description</FormLabel>
            </Box>
            <TextField
              id="todo-description"
              multiline={true}
              maxRows={3}
              minRows={3}
            />
          </FormControl>
        </Stack>
        <Stack direction="row-reverse" mt={2}>
          <Button variant="contained" sx={{ ml: 2 }} onClick={handleSubmit}>
            Create
          </Button>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
