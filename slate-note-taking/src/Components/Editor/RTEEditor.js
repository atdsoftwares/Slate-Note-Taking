// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";

// import { useNoteTakingContext } from "../../Context/IndexAllContext";
// function RTEEditor() {
//   const { textareaBoxValue, notesTakingFn } = useNoteTakingContext();

//   return (
//     <div>
//       <ReactQuill
//         theme="snow"
//         required
//         value={textareaBoxValue}
//         onChange={(event) =>
//           notesTakingFn({ type: "TEXTAREABOXVALUE", payload: event })
//         }
//         className="editor"
//       />
//     </div>
//   );
// }

// export default RTEEditor;
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Box } from "@chakra-ui/react";
import { useNoteTakingContext } from "../../Context/IndexAllContext";

function RTEEditor() {
  const { textareaBoxValue, notesTakingFn } = useNoteTakingContext();

  return (
    <Box>
      <ReactQuill
        theme="snow"
        required
        value={textareaBoxValue}
        onChange={(event) =>
          notesTakingFn({ type: "TEXTAREABOXVALUE", payload: event })
        }
      />
    </Box>
  );
}

export default RTEEditor;
