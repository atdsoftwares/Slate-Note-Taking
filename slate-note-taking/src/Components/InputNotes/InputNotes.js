// import { useNoteTakingContext } from "../../Context/IndexAllContext";
// import { addNotesintoDbFn } from "../../Services/NoteTakingServices";
// import RTEEditor from "../Editor/RTEEditor";

// function InputNotes() {
//   // { toggleModal }
//   const {
//     notesBgColor,
//     inputTextTitleValue,
//     priorityRadioBoxValue,
//     labelInputBoxValue,
//     textareaBoxValue,
//     noteCreationTime,
//     notesTakingFn,
//     isOpen,
//   } = useNoteTakingContext();
//   function submitNotes(e) {
//     addNotesintoDbFn(
//       e,
//       inputTextTitleValue,
//       priorityRadioBoxValue,
//       labelInputBoxValue,
//       textareaBoxValue,
//       notesBgColor,
//       noteCreationTime,
//       notesTakingFn
//     );

//     notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: null });
//     notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: null });
//     notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: null });
//     notesTakingFn({ type: "TEXTAREABOXVALUE", payload: null });
//     notesTakingFn({ type: "NOTESBGCOLOR", payload: null });
//     // toggleModal();
//   }

//   return (
//     <div>
//       <div
//         className="col p-2 m-2  border-solid border-2 border-gray-500  absolute top-24 left-80  justify-center"
//         style={{
//           backgroundColor: notesBgColor,
//         }}
//         defaultValue="#FFFF"
//       >
//         {/* <div className="form-container">
//           <form onSubmit={submitNotes}>
//             <div class="relative mb-4">
//               <label for="name" class="leading-7 text-sm text-gray-600">
//                 Note Title
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="notes Title....!"
//                 onChange={(e) =>
//                   notesTakingFn({
//                     type: "INPUTTEXTTITLEVALUE",
//                     payload: e.target.value,
//                   })
//                 }
//                 class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               />
//             </div>

//             <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
//               Priority
//             </h3>
//             <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
//               <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//                 <div class="flex items-center ps-3">
//                   <input
//                     id="horizontal-list-radio-license"
//                     type="radio"
//                     value="top"
//                     required
//                     checked={priorityRadioBoxValue === "top"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     name="list-radio"
//                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                   />
//                   <label
//                     for="horizontal-list-radio-license"
//                     class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Top
//                   </label>
//                 </div>
//               </li>
//               <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//                 <div class="flex items-center ps-3">
//                   <input
//                     id="horizontal-list-radio-id"
//                     type="radio"
//                     name="priority"
//                     value="medium"
//                     required
//                     checked={priorityRadioBoxValue === "medium"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                   />
//                   <label
//                     for="horizontal-list-radio-id"
//                     class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Medium
//                   </label>
//                 </div>
//               </li>
//               <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//                 <div class="flex items-center ps-3">
//                   <input
//                     id="horizontal-list-radio-military"
//                     name="priority"
//                     value="low"
//                     required
//                     checked={priorityRadioBoxValue === "low"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
//                   />
//                   <label
//                     for="horizontal-list-radio-military"
//                     class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//                   >
//                     Low
//                   </label>
//                 </div>
//               </li>
//             </ul>

//             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
//               <div class="flex items-center ps-2">
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   class="navigation__input"
//                   placeholder="add labels....!"
//                   onChange={(e) =>
//                     notesTakingFn({
//                       type: "LABELINPUTBOXVALUE",
//                       payload: e.target.value,
//                     })
//                   }
//                   className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out"
//                 />
//               </div>
//             </li>

//             <div className="w-full m-2 pr-2">
//               <RTEEditor />
//             </div>

//             <div className="color-pallete">
//               <input type="submit" className="take-notes-btn" />
//               <label>
//                 <input
//                   type="color"
//                   className="input-color"
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
//         </div> */}
//         <div class="flex items-center justify-center  bg-gray-100">
//           <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//             <form onSubmit={submitNotes}>
//               <div class="mb-4">
//                 <label
//                   for="main-input"
//                   class="block text-sm font-medium text-gray-700"
//                 >
//                   Not Heading
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   name="name"
//                   placeholder="notes Title....!"
//                   onChange={(e) =>
//                     notesTakingFn({
//                       type: "INPUTTEXTTITLEVALUE",
//                       payload: e.target.value,
//                     })
//                   }
//                   id="main-input"
//                   class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div class="mb-4 flex items-center space-x-4">
//                 <label class="inline-flex items-center">
//                   <input
//                     required
//                     type="radio"
//                     value="top"
//                     checked={priorityRadioBoxValue === "top"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     class="text-indigo-600 border-gray-300 focus:ring-indigo-500"
//                   />
//                   <span class="ml-2 text-sm text-gray-700">Top </span>
//                 </label>
//                 <label class="inline-flex items-center">
//                   <input
//                     type="radio"
//                     value="medium"
//                     required
//                     checked={priorityRadioBoxValue === "medium"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     class="text-indigo-600 border-gray-300 focus:ring-indigo-500"
//                   />
//                   <span class="ml-2 text-sm text-gray-700">Medium</span>
//                 </label>
//                 <label class="inline-flex items-center">
//                   <input
//                     type="radio"
//                     value="low"
//                     checked={priorityRadioBoxValue === "low"}
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "PRIORITYRADIOBOXVALUE",
//                         payload: e.target.value,
//                       })
//                     }
//                     class="text-indigo-600 border-gray-300 focus:ring-indigo-500"
//                   />
//                   <span class="ml-2 text-sm text-gray-700">Low</span>
//                 </label>
//               </div>
//               <div class="mb-4">
//                 <label
//                   for="secondary-input"
//                   class="block text-sm font-medium text-gray-700"
//                 >
//                   Secondary Input
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="name"
//                   class="navigation__input"
//                   placeholder="add labels....!"
//                   onChange={(e) =>
//                     notesTakingFn({
//                       type: "LABELINPUTBOXVALUE",
//                       payload: e.target.value,
//                     })
//                   }
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 />
//               </div>
//               <div className="w-full m-2 pr-2">
//                 <RTEEditor />
//               </div>

//               <div className="color-pallete">
//                 <input type="submit" className="take-notes-btn" />
//                 <label>
//                   <input
//                     type="color"
//                     className="input-color"
//                     onChange={(e) =>
//                       notesTakingFn({
//                         type: "NOTESBGCOLOR",
//                         payload: e.target.value,
//                       })
//                     }
//                   />
//                   <span className="material-icons rte-icons2">color_lens </span>
//                 </label>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InputNotes;

import {
  Box,
  Input,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  HStack,
  Button,
  Flex,
  Textarea,
  ColorPicker,
} from "@chakra-ui/react";
import { useNoteTakingContext } from "../../Context/IndexAllContext";
import { addNotesintoDbFn } from "../../Services/NoteTakingServices";
import RTEEditor from "../Editor/RTEEditor";

function InputNotes() {
  const {
    notesBgColor,
    inputTextTitleValue,
    priorityRadioBoxValue,
    labelInputBoxValue,
    textareaBoxValue,
    noteCreationTime,
    notesTakingFn,
    isOpen,
  } = useNoteTakingContext();

  function submitNotes(e) {
    e.preventDefault();
    addNotesintoDbFn(
      e,
      inputTextTitleValue,
      priorityRadioBoxValue,
      labelInputBoxValue,
      textareaBoxValue,
      notesBgColor,
      noteCreationTime,
      notesTakingFn
    );

    notesTakingFn({ type: "INPUTTEXTTITLEVALUE", payload: null });
    notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: null });
    notesTakingFn({ type: "LABELINPUTBOXVALUE", payload: null });
    notesTakingFn({ type: "TEXTAREABOXVALUE", payload: null });
    notesTakingFn({ type: "NOTESBGCOLOR", payload: null });
  }

  return (
    <Box
      p={4}
      borderWidth={2}
      borderRadius="lg"
      borderColor="gray.500"
      bg={notesBgColor}
      maxWidth="500px"
      mx="auto"
      mt={6}
    >
      <form onSubmit={submitNotes}>
        <FormControl mb={4}>
          <FormLabel>Note Title</FormLabel>
          <Input
            type="text"
            placeholder="Enter note title..."
            value={inputTextTitleValue || ""}
            onChange={(e) =>
              notesTakingFn({
                type: "INPUTTEXTTITLEVALUE",
                payload: e.target.value,
              })
            }
            required
          />
        </FormControl>

        <FormControl as="fieldset" mb={4}>
          <FormLabel as="legend">Priority</FormLabel>
          <RadioGroup
            value={priorityRadioBoxValue}
            onChange={(value) =>
              notesTakingFn({ type: "PRIORITYRADIOBOXVALUE", payload: value })
            }
          >
            <HStack spacing={4}>
              <Radio value="top">Top</Radio>
              <Radio value="medium">Medium</Radio>
              <Radio value="low">Low</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Add Label</FormLabel>
          <Input
            type="text"
            placeholder="Enter label..."
            value={labelInputBoxValue || ""}
            onChange={(e) =>
              notesTakingFn({
                type: "LABELINPUTBOXVALUE",
                payload: e.target.value,
              })
            }
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Notes</FormLabel>
          <Textarea
            placeholder="Enter your notes..."
            value={textareaBoxValue || ""}
            onChange={(e) =>
              notesTakingFn({
                type: "TEXTAREABOXVALUE",
                payload: e.target.value,
              })
            }
            required
          />
        </FormControl>

        <RTEEditor />

        <Flex mt={4} justifyContent="space-between" alignItems="center">
          <Button type="submit" colorScheme="blue">
            Save Note
          </Button>

          <Box>
            <FormLabel>Background Color</FormLabel>
            <Input
              type="color"
              value={notesBgColor}
              onChange={(e) =>
                notesTakingFn({ type: "NOTESBGCOLOR", payload: e.target.value })
              }
              cursor="pointer"
            />
          </Box>
        </Flex>
      </form>
    </Box>
  );
}

export default InputNotes;
