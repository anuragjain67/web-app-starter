import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../../resources";
import { addTodo as addTodoAction, editTodo as editTodoAction } from "../../actions";

export const CreateEditTodo = (props) => {
  const emptyInitialValues = {
    title: "",
    description: "",
  };
  const { open, handleClose, initialValues } = props;
  
  const [values, setValues] = useState(emptyInitialValues);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    let formValues;
    if (initialValues) {
      formValues = initialValues;
    } else {
      formValues = emptyInitialValues;
    }
    setValues(formValues)
  }, [initialValues]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.id === undefined){
      dispatch(addTodoAction(addTodo(values)));
    } else{
      dispatch(editTodoAction(editTodo(values)));
    }
    setValues(emptyInitialValues);
    handleClose();
  };

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
        <form onSubmit={handleSubmit}>
          <Stack direction="column" mt={2}>
            <FormControl>
              <Box>
                <FormLabel> Title</FormLabel>
              </Box>
              <TextField
                name="title"
                sx={{ mb: 2 }}
                onChange={handleChange}
                value={values.title}
              />
            </FormControl>

            <FormControl>
              <Box>
                <FormLabel> Description</FormLabel>
              </Box>
              <TextField
                name="description"
                multiline={true}
                maxRows={3}
                minRows={3}
                onChange={handleChange}
                value={values.description}
              />
            </FormControl>
          </Stack>
          <Stack direction="row-reverse" mt={2}>
            <Button variant="contained" sx={{ ml: 2 }} type="submit">
               {(values.id === undefined) ? "Create": "Save"}
            </Button>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};
