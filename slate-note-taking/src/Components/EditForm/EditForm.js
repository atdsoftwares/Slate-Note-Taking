// import {
//   axios,
//   toast,
//   useEffect,
//   useNavigate,
//   useState,
// } from "../../Utils/CustomUtils";
// import { useNoteTakingContext } from "../../Context/IndexAllContext";
// import RTEEditor from "../../Components/Editor/RTEEditor";

// function EditForm() {
//   const {
//     notesTakingFn,
//     priorityRadioBoxValue,
//     notesBgColor,
//     textareaBoxValue,
//     labelInputBoxValue,
//     inputTextTitleValue,
//   } = useNoteTakingContext();

//   const noteCreatedAt = new Date();
//   const noteUpdatedAt = new Date(noteCreatedAt).toLocaleString("en-US", {
//     timeZone: "Asia/Kolkata",
//   });
//   const [_id, setId] = useState();
//   const navigate = useNavigate();
//   async function updateNotesDataFn(e) {
//     e.preventDefault();

//     try {
//       const response = await axios({
//         method: "POST",
//         url: `/api/notes/${_id}`,
//         headers: { authorization: localStorage.getItem("token") },
//         data: {
//           note: {
//             labelInputBoxValue,
//             textareaBoxValue,
//             priorityRadioBoxValue,
//             inputTextTitleValue,
//             notesBgColor,
//             noteUpdatedAt,
//           },
//         },
//       }).then((response) =>
//         notesTakingFn({
//           type: "GETNOTESDATAFROMAPI",
//           payload: response.data.notes,
//         })
//       );
//       toast.success(`Note Updated Successfully`);
//       navigate("/Home");
//     } catch (error) {
//       console.log(`something went wrong`, error);
//     }

//     notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: null });
//     notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: null });
//     notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: null });
//     notesTakingFn({ type: "TEXTAREABOXVALUE", payload: "" });
//     notesTakingFn({ type: "NOTESBGCOLOR", payload: null });
//   }

//   useEffect(() => {
//     setId(localStorage.getItem("id"));
//     notesTakingFn({
//       type: "PRIORITYRADIOBOXVALUE",
//       payload: localStorage.getItem("priorityRadioBoxValue"),
//     });
//     notesTakingFn({
//       type: "NOTESBGCOLOR",
//       payload: localStorage.getItem("notesBgColor"),
//     });
//     notesTakingFn({
//       type: "INPUTTEXTTITLEVALUE",
//       payload: localStorage.getItem("inputTextTitleValue"),
//     });
//     notesTakingFn({
//       type: "LABELINPUTBOXVALUE",
//       payload: localStorage.getItem("labelInputBoxValue"),
//     });
//     notesTakingFn({
//       type: "TEXTAREABOXVALUE",
//       payload: localStorage.getItem("textareaBoxValue"),
//     });
//   }, []);
//   return (
//     <div>
//       <div
//         className="notes2-container"
//         style={{
//           backgroundColor: notesBgColor,
//         }}
//       >
//         <div className="form-container1">
//           <form onSubmit={updateNotesDataFn}>
//             <input
//               type="text"
//               name="name"
//               required
//               value={inputTextTitleValue}
//               class="navigation__input"
//               placeholder="notes Title....!"
//               onChange={(e) =>
//                 notesTakingFn({
//                   type: "INPUTTEXTTITLEVALUE",
//                   payload: e.target.value,
//                 })
//               }
//             />
//             <label className="label-radio-box1">
//               Priority
//               <input
//                 type="radio"
//                 name="priority"
//                 defaultValue="top"
//                 value={priorityRadioBoxValue}
//                 required
//                 checked={priorityRadioBoxValue === "top"}
//                 onChange={(e) =>
//                   notesTakingFn({
//                     type: "PRIORITYRADIOBOXVALUE",
//                     payload: e.target.value,
//                   })
//                 }
//               />
//               Top
//               <input
//                 type="radio"
//                 name="priority"
//                 value={priorityRadioBoxValue}
//                 required
//                 defaultValue="medium"
//                 checked={priorityRadioBoxValue === "medium"}
//                 onChange={(e) =>
//                   notesTakingFn({
//                     type: "PRIORITYRADIOBOXVALUE",
//                     payload: e.target.value,
//                   })
//                 }
//               />
//               Medium
//               <input
//                 type="radio"
//                 name="priority"
//                 defaultValue="low"
//                 value={priorityRadioBoxValue}
//                 required
//                 checked={priorityRadioBoxValue === "low"}
//                 onChange={(e) =>
//                   notesTakingFn({
//                     type: "PRIORITYRADIOBOXVALUE",
//                     payload: e.target.value,
//                   })
//                 }
//               />
//               Low{" "}
//             </label>
//             <input
//               type="text"
//               name="name"
//               value={labelInputBoxValue}
//               required
//               class="navigation__input"
//               placeholder="add labels....!"
//               onChange={(e) =>
//                 notesTakingFn({
//                   type: "LABELINPUTBOXVALUE",
//                   payload: e.target.value,
//                 })
//               }
//             />
//             <div className="rte-icons1">
//               <RTEEditor textareaBoxValue={textareaBoxValue} />
//             </div>

//             <div className="color-pallete1">
//               <input type="submit" className="take-notes-btn" />
//               <label>
//                 <input
//                   type="color"
//                   className="input-color"
//                   value={notesBgColor}
//                   onChange={(e) =>
//                     notesTakingFn({
//                       type: "NOTESBGCOLOR",
//                       payload: e.target.value,
//                     })
//                   }
//                 />
//                 <span className="material-icons rte-icons2">color_lens </span>
//               </label>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditForm;

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "../../Utils/CustomUtils";
import axios from "axios";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import RTEEditor from "../../Components/Editor/RTEEditor";

function EditForm() {
  const {
    notesTakingFn,
    priorityRadioBoxValue,
    notesBgColor,
    textareaBoxValue,
    labelInputBoxValue,
    inputTextTitleValue,
  } = useNoteTakingContext();

  const [noteId, setNoteId] = useState(null);
  const navigate = useNavigate();
  const toast = useToast();

  const noteCreatedAt = new Date();
  const noteUpdatedAt = new Date(noteCreatedAt).toLocaleString("en-US", {
    timeZone: "Asia/Kolkata",
  });

  const updateNotesDataFn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/notes/${noteId}`, {
        note: {
          labelInputBoxValue,
          textareaBoxValue,
          priorityRadioBoxValue,
          inputTextTitleValue,
          notesBgColor,
          noteUpdatedAt,
        },
        headers: { authorization: localStorage.getItem("token") },
      });
      notesTakingFn({
        type: "GETNOTESDATAFROMAPI",
        payload: response.data.notes,
      });
      toast({
        title: "Note Updated Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/Home");
    } catch (error) {
      toast({
        title: "Something went wrong",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }

    // Clear form data
    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: "" });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: "" });
    notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: "" });
    notesTakingFn({ type: "TEXTAREABOXVALUE", payload: "" });
    notesTakingFn({ type: "NOTESBGCOLOR", payload: "" });
  };

  useEffect(() => {
    setNoteId(localStorage.getItem("id"));
    notesTakingFn({
      type: "PRIORITYRADIOBOXVALUE",
      payload: localStorage.getItem("priorityRadioBoxValue"),
    });
    notesTakingFn({
      type: "NOTESBGCOLOR",
      payload: localStorage.getItem("notesBgColor"),
    });
    notesTakingFn({
      type: "INPUTTEXTTITLEVALUE",
      payload: localStorage.getItem("inputTextTitleValue"),
    });
    notesTakingFn({
      type: "LABELINPUTBOXVALUE",
      payload: localStorage.getItem("labelInputBoxValue"),
    });
    notesTakingFn({
      type: "TEXTAREABOXVALUE",
      payload: localStorage.getItem("textareaBoxValue"),
    });
  }, []);

  return (
    <Box
      bg={notesBgColor}
      p={6}
      rounded="md"
      boxShadow="md"
      maxWidth="600px"
      mx="auto"
      mt={10}
    >
      <form onSubmit={updateNotesDataFn}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Note Title</FormLabel>
            <Input
              type="text"
              value={inputTextTitleValue}
              placeholder="Enter note title"
              onChange={(e) =>
                notesTakingFn({
                  type: "INPUTTEXTTITLEVALUE",
                  payload: e.target.value,
                })
              }
            />
          </FormControl>

          <FormControl as="fieldset" isRequired>
            <FormLabel>Priority</FormLabel>
            <RadioGroup
              value={priorityRadioBoxValue}
              onChange={(value) =>
                notesTakingFn({
                  type: "PRIORITYRADIOBOXVALUE",
                  payload: value,
                })
              }
            >
              <Stack direction="row">
                <Radio value="top">Top</Radio>
                <Radio value="medium">Medium</Radio>
                <Radio value="low">Low</Radio>
              </Stack>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Add Labels</FormLabel>
            <Input
              type="text"
              value={labelInputBoxValue}
              placeholder="Add labels"
              onChange={(e) =>
                notesTakingFn({
                  type: "LABELINPUTBOXVALUE",
                  payload: e.target.value,
                })
              }
            />
          </FormControl>

          <Box w="100%">
            <FormLabel>Note Content</FormLabel>
            <RTEEditor textareaBoxValue={textareaBoxValue} />
          </Box>

          <FormControl>
            <FormLabel>Background Color</FormLabel>
            <Input
              type="color"
              value={notesBgColor}
              onChange={(e) =>
                notesTakingFn({
                  type: "NOTESBGCOLOR",
                  payload: e.target.value,
                })
              }
            />
          </FormControl>

          <Button type="submit" colorScheme="teal" w="full">
            Update Note
          </Button>
        </VStack>
      </form>
    </Box>
  );
}

export default EditForm;
