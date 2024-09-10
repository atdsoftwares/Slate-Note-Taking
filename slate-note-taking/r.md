# Building your own Productivity app using React JS and Mock API's

Productivity apps are the bless to humanity as it allows to effectively manage and create the tasks and notes and also according to the psychology writing down your thoughts the biggest anxiety killer.

Have you ever thought of building your own Note taking app clone like google keep with some advance features, I know that's big to develop and maintain but as a side project you can definitely try it out to test your skills and feel what it is like to develop your small version of a note taking app with an addition to some more features on top of it.

Today I will be guiding you to develop your version of the small note taking app with some new features keeping all the important features of google keep.

I will be using the React JS, Tailwind CSS and Mock API's.

# Folder Structure of the Project

I will be using the standard folder structure to separate components and pages as it allows better management of files and data and improves the navigation inside the project.

The Folder structure snippets are here you can see :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sceg3e52vax3ax0vkiym.png)

Inside the main ` src` directory I have separated the files and folders for everything backend folder is handling the all mock backend stuff, components folder has components that I will be using in the project as React allows me to break down big pages into components and later I can also reuse the components.

`Context ` folder has the useContext React API which is helping us in projects to manage the states the folder has useReducers code.

The pages folder is all about pages where each page of our app is assembling the components.

The services folder has the API calling methods there I am calling the APIs and storing the response.

Utils contain important code and small libraries or something that is not very common.

The rest of the files are related to projects in which the App.js file is important as it is the main file that holds the entire application.

## Let's Build

Generally I have Figma Files for the inspirations and developers utilise the pre-existing desigs to turn them into code.

Figma Files has all the designs about product development in form of pages therefore its suitable to first develop the pages to get an details overview of pages and how they are interlinking.

This will also give you an overview of the application like how many pages you will need and which page will host and display what type of data.

If you have a situation where you have to show multiple pages and the count of the pages will increase with time then it would be technically impossible to make so many pages but React has a special library where you can make as many pages as you want with respect to some unique URL, to do so I will use React Router which allows to make dynamic pages.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0k9puic7m6kd0knd8e0e.png)

This application has :

1. Welcome page
2. Home page
3. Archives page
4. Trash page
5. Editnotes page
6. Label page
7. Login page
8. Signup page
9. Account page

## Welcomepage

The Welcomepage is very simple and minimal it only reflects that what is our application is all about and how does it work how many features it has and how to use the application.

The page contains Header, banner and footer components and I will be using the same header and footer across the app.

The welcomepage looks like this

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h3n8ixn0xol7o7c4c5ll.png)

You can also see the React code for building the welcomepage

```
import { Footer, Header, Hero } from "../Components/IndexAllComponents";

function Welcomepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default Welcomepage;
```

How clean the code is,isnt it ? That's why I follow standard coding practices and folder structure to improve the overall look of the code so that even a beginner can understand.

## Homepage

The home page has the ,header,sidebar,footer and a filter section on top which automatically filters the notes based on their priority which are selected at the time of note creation.

The Sidebar has multiple options and each option redirects to the page the pages are Homepage.Archive Page, Trash page and Accounts page .

Homepage is the main page where notes are being displayed ,Archives page shows the notes which are archived , Trash Page has the all notes pushed to Trash and Accounts page has the details about the users and their data.

The page looks like this after it gets loaded :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rjksl4dxrvqkxpbvdcdr.png)

You can also see the React code for building the Home page

```
import { React, useEffect } from "../Utils/CustomUtils";
import { useNoteTakingContext } from "../Context/IndexAllContext";

import "./Homepage.css";
import {
  Filters,
  Footer,
  Header,
  NotesCard,
  NotesModal,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Homepage() {
  const { finalData, notesTakingFn, priorityData } = useNoteTakingContext();
   useEffect(() => {
    getNotesDataFromAPIFn(notesTakingFn);
  }, []);
  return (
    `<div>`
      `<Header />`
      `<Sidebar />`
      `<Filters />`

    `<div>`
        {finalData.length <= 0 ? (
          `<h1 className="header-text">`
            No notes to display in Homepage , add some from
            `<NotesModal />`
          `</h1>`
        ) : (
          `<div className="notes-container">`
            {priorityData &&
              priorityData.map((notes) => (
                <NotesCard notesData={notes} key={notes._id} />
              ))}
          `</div>`
        )}
      `</div>`

    `<Footer />`
    `</div>`
  );
}

export default Homepage;
```

This code defines a React component named Homepage. The component imports various utilities, context hooks, CSS styles, UI components, and a function to fetch data from an API. Within the Homepage function, the useNoteTakingContext hook is used to access data and functions related to note-taking.

Upon mounting, the useEffect hook triggers a call to fetch notes data from an API using the provided function. The returned data is then used to update the context.

The component's JSX structure includes several imported UI components such as Header, Sidebar, Filters, and Footer. The main content area conditionally displays a message prompting users to add notes if no notes are available. If notes are present, it maps over the priorityData array to render NotesCard components for each note.

Finally, the Homepage component is exported as the default export, making it accessible for use in other parts of the application.

## Archives page

Archive page is the place where I can see the archived notes , this page is used to hide the notes without permanently deleteing it ,if there is a note which I don't want anyone to see it I can move that note to archive.

When I create a new note I get an option to move this perticular note to Archive page when the note is moved to archive page I also get the option to restore it as normal note and once the note is back to normal state I can see it on homepage.

The page looks like this :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/4p0h9fl27ydyi679jwq9.png)

Here is the code snippet :

```
import { React, useEffect } from "../Utils/CustomUtils";
import { useArchiveContext } from "../Context/IndexAllContext";
import {
  ArchiveNotesCard,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";
import { getArchiveNotesFn } from "../Services/ArchiveNotesServices";

function Archivespage() {
  const { getArchivedNotes, notesArchiveFn } = useArchiveContext();

  useEffect(() => {
    getArchiveNotesFn(notesArchiveFn);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />

      <div>
        {getArchivedNotes.length <= 0 ? (
          <h1 className="header-text">
            {" "}
            No notes to display in archive page, add some !
          </h1>
        ) : (
          <div className="notes-container" style={{ marginTop: "5rem" }}>
            {getArchivedNotes.map((archivenotesdata) => (
              <ArchiveNotesCard
                archivenotesdata={archivenotesdata}
                key={archivenotesdata._id}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Archivespage;
```

This code defines a React component called Archivespage, which displays archived notes. Here's a detailed explanation of its structure and functionality:

1. **Imports**:

   - React and useEffect are imported from a custom utilities file.
   - The useArchiveContext hook is imported to access context data related to archived notes.
   - CSS styles for the component are implicitly referenced through the JSX structure.
   - Various UI components such as ArchiveNotesCard, Footer, Header, and Sidebar are imported from a central components file.
   - A function to fetch archived notes from an API is imported from a services file.
2. **Function Declaration**:

   - The Archivespage component is defined as a functional component.
   - Within this component, the useArchiveContext hook is used to extract getArchivedNotes (an array of archived notes) and notesArchiveFn (a function for handling notes archiving).
3. **useEffect Hook**:

   - The useEffect hook is used to perform a side effect when the component mounts. It calls the getArchiveNotesFn function with notesArchiveFn as an argument to fetch archived notes from an API and update the context.
4. **Rendering**:

   - The component returns JSX markup to define its structure.
   - It includes several UI components such as Header, Sidebar, and Footer.
   - In the main content area, it conditionally renders a message if there are no archived notes available, prompting the user to add some.
   - If there are archived notes, it maps over the getArchivedNotes array and renders ArchiveNotesCard components for each archived note, passing the note data as a prop.
5. **Export**:

   - The Archivespage component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the Archivespage component is responsible for fetching and displaying archived notes, incorporating various UI elements, and conditionally rendering content based on the availability of archived notes.

## Trash Page

Trash Page hold the notes which are moved to Trash basicaly I want to remove the notes from the system so I can use  Trash option which I get when I create a new note ,this Trash page also acts as recyle bin because I get an option to restore the notes to normal and also get the option permanently remove the notes from the system.

The page looks like this :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/owysup96p6qcspi5j7zz.png)

Here is the code snippet :

````
import { useEffect } from "../Utils/CustomUtils";
import { useTrashNotesContext } from "../Context/IndexAllContext";
import {
  Footer,
  Header,
  Sidebar,
  TrashNotesCard,
} from "../Components/IndexAllComponents";
import { getTrashedNotesFn } from "../Services/TrashNotesServices";

function Trashpage() {
  const { getTrashedNotes, notesTrashFn } = useTrashNotesContext();

  useEffect(() => {
    getTrashedNotesFn(notesTrashFn);
  }, []);

  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        {getTrashedNotes && getTrashedNotes.length <= 0 ? (
          <h1 className="header-text">
            No notes to display in trash page, add some ..!
          </h1>
        ) : (
          <div className="notes-container" style={{ marginTop: "5rem" }}>
            {getTrashedNotes &&
              getTrashedNotes.map((trashnotesdata) => (
                <TrashNotesCard
                  trashnotesdata={trashnotesdata}
                  key={trashnotesdata._id}
                />
              ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Trashpage;

````

This code defines a React component named Trashpage, which handles the display of trashed notes. Here's an explanation of its components and functionality:

1. **Imports**:

   - The useEffect hook is imported from a custom utilities file.
   - The useTrashNotesContext hook is imported to access context data and functions related to trashed notes.
   - Various UI components such as Footer, Header, Sidebar, and TrashNotesCard are imported from a central components file.
   - A function to fetch trashed notes from an API is imported from a services file.
2. **Function Declaration**:

   - The Trashpage component is defined as a functional component.
   - Within this function, the useTrashNotesContext hook is used to extract getTrashedNotes (an array of trashed notes) and notesTrashFn (a function for handling trashed notes).
3. **useEffect Hook**:

   - The useEffect hook is used to perform a side effect when the component mounts. It calls the getTrashedNotesFn function with notesTrashFn as an argument to fetch trashed notes from an API and update the context.
4. **Rendering**:

   - The component returns JSX markup to define its structure.
   - It includes several UI components such as Header, Sidebar, and Footer.
   - The main content area conditionally renders a message if there are no trashed notes available, prompting the user to add some.
   - If there are trashed notes, it maps over the getTrashedNotes array and renders TrashNotesCard components for each trashed note, passing the note data as a prop.
5. **Export**:

   - The Trashpage component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the Trashpage component is responsible for fetching and displaying trashed notes, incorporating various UI elements, and conditionally rendering content based on the availability of trashed notes.

## Editnotes page

We human commit mistakes as the mistakes could happen anywhere and anytime so having an option to corrent it is like a blessings therfore in this note taking app I can also make mistaked while composing notes but I have an option to edit the notes and correct the mistakes and again republish the notes.

An edit option is a feature which allows to fix the problems and this perticular feature is tough to develop as its the backbone of note taking system.

Look into this picture :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/70ayyai1ghnt4vzq00s2.png)

As you can see this is the first note which we have made it has title,a paragraph for details,labels,priority,when the note was created,edit icon to edit note,trash icon to move notes to trash , archive note icon and when the note was created on what date and time , the option when the note was updated(edited) is empty.

Look into this image :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mdc0fjnbknr2ac9etnaj.png)

In this picture you can clearly see an updated note from the previous image the title,paragraph,label is updated and the note updation date and time is clearly mentioned on note itself,I can also change the background color of note while editing the note.

here is how note compose and edit form looks  at the page  :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2zv7lecqe0i1keq8og2.png)

here is the code :

```
import {
  EditForm,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";

function Editnotespage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <EditForm />
      <Footer />
    </div>
  );
}

export default Editnotespage;
```

This code defines a React component named Editnotespage. Here's an explanation of its components and functionality:

1. **Imports**:

   - The EditForm, Footer, Header, and Sidebar components are imported from a central components file.
2. **Function Declaration**:

   - The Editnotespage component is defined as a functional component.
3. **Rendering**:

   - The component returns JSX markup to define its structure.
   - It includes several UI components: Header, Sidebar, EditForm, and Footer.
     - **Header**: Typically displays the top navigation or title.
     - **Sidebar**: Usually contains navigation links or additional options.
     - **EditForm**: A form component for editing notes.
     - **Footer**: Typically displays the bottom navigation or additional information.
4. **Export**:

   - The Editnotespage component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the Editnotespage component serves as a page layout that includes a header, sidebar, an editing form for notes, and a footer. It is responsible for providing a structured interface for editing notes within the application.

## Label page

When I create a new page I get an option to add label to that specific note , when I will have too much notes It will be difficult to handle and find each note so I added this feature to filter out notes from the sidebar menu once the note is created with specific label that label will be automatically added to sidebar I can easily find the note by clicking on that perticular label.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/p9kqhllrt920xd0og4gu.png)

I have added to notes with the same label name ``demo`` and both of the notes are visible on demo page ,the acess to demo page was given through the sidebar where `demo` label is added when the note was created and ``demo`` as label was gievn there.

here is the code snippet :

```
 import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer, Header, Sidebar } from "../Components/IndexAllComponents";
import LabelNotesCard from "../Components/NotesCard/LabelNotesCard";
import { useNoteTakingContext } from "../Context/NotetakingContext";
import { getNotesDataFromAPIFn } from "../Services/NoteTakingServices";

function Labelpage() {
const { notesTakingFn, getNotesData, priorityData } = useNoteTakingContext();

const params = useParams();

const labeledData = priorityData.filter(
(f) => f.labelInputBoxValue === params.label
);

useEffect(() => {
getNotesDataFromAPIFn(notesTakingFn);
}, []);

return (
<div>
<Header />
<Sidebar />
<div className="notes-container" style={{ marginTop: "5rem" }}>
{labeledData &&
labeledData.map((labeledNotesData) => (
<LabelNotesCard
           key={labeledNotesData._id}
           labeledNotesData={labeledNotesData}
         />
))}
</div>
<Footer />
</div>
);
}

export default Labelpage;
```

This code defines a React component named Labelpage, which is responsible for displaying notes filtered by a specific label. Here's an explanation of its components and functionality:

1. **Imports**:

   - React and useEffect are imported from the React library.
   - The useParams hook is imported from react-router-dom to access route parameters.
   - Several UI components (Footer, Header, Sidebar) are imported from a central components file.
   - The LabelNotesCard component is imported from a subdirectory.
   - The useNoteTakingContext hook is imported to access note-taking context data.
   - A function to fetch notes data from an API is imported from a services file.
2. **Function Declaration**:

   - The Labelpage component is defined as a functional component.
   - Inside this component, the useNoteTakingContext hook is used to extract notesTakingFn, getNotesData, and priorityData from the context.
   - The useParams hook is used to get the label parameter from the URL.
3. **Filtering Data**:

   - The labeledData variable is created by filtering the priorityData array to include only notes with a label that matches the label parameter from the URL.
4. **useEffect Hook**:

   - The useEffect hook is used to fetch notes data from an API when the component mounts. It calls the getNotesDataFromAPIFn function with notesTakingFn as an argument to update the context.
5. **Rendering**:

   - The component returns JSX markup to define its structure.
   - It includes the Header, Sidebar, and Footer components.
   - It renders a container for notes with a margin at the top.
   - Inside the container, it maps over the labeledData array and renders a LabelNotesCard component for each filtered note, passing the note data as a prop.
6. **Export**:

   - The Labelpage component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the Labelpage component is responsible for fetching notes data, filtering the notes based on the label from the URL parameter, and displaying the filtered notes using the LabelNotesCard component along with other UI elements like the header, sidebar, and footer.

## Account manager page

The account manager page shows the data related to your account where I am showing how many notes I have  created, what's my name and email and phone number.

Here is what the page looks like :

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/h4j2ivrkvaf808xqrfd8.png)

in this image I have a special unique used Id , my name and email along with the how many notes how I have created here I have made 3 notes therefore 3 notes are showing.

Here is the code snippet :

```
import {
  Account,
  Footer,
  Header,
  Sidebar,
} from "../Components/IndexAllComponents";

function Accountpage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Account />
      <Footer />
    </div>
  );
}

export default Accountpage;


```

This code defines a React component named Accountpage. Here's an explanation of its structure and functionality:

1. **Imports**:

   - Several UI components (Account, Footer, Header, Sidebar) are imported from a central components file. These components are likely used to build the page layout.
2. **Function Declaration**:

   - The Accountpage component is defined as a functional component.
3. **Rendering**:

   - The component returns JSX markup to define its structure.
   - It includes several UI components:
     - **Header**: Likely displays the top navigation or page title.
     - **Sidebar**: Usually contains navigation links or additional options.
     - **Account**: Presumably displays account-related information or settings for the user.
     - **Footer**: Typically displays the bottom navigation or additional information.
4. **Export**:

   - The Accountpage component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the Accountpage component serves as a page layout that includes a header, sidebar, account information section, and footer. It provides a structured interface for displaying account-related information or settings within the application.

## The Note-taking functionality :

As the app is all about taking notes and managing them its is important to dicuss about the notes taking feature , it's the backbone of application and how I have managed to build this notes app using React JS and MockAPIs.

The note taking functions takes notes header, priority ,label ,paragraph and notes color and produces the final notes based on the given input values.

Here is the snapshot of note taking feature: 

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t2zv7lecqe0i1keq8og2.png)


  here is  the code snippet:

```

import { useNoteTakingContext } from "../../Context/IndexAllContext";
import { addNotesintoDbFn } from "../../Services/NoteTakingServices";
import RTEEditor from "../Editor/RTEEditor";
import "./InputNotes.css";
function InputNotes({ toggleModal }) {
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
    toggleModal();
  }

  return (
    <div>
      <div
        className="notes1-container"
        style={{
          backgroundColor: notesBgColor,
        }}
        defaultValue="#FFFF"
      >
        <div className="form-container">
          <form onSubmit={submitNotes}>
            <input
              type="text"
              name="name"
              required
              class="navigation__input"
              placeholder="notes Title....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "INPUTTEXTTITLEVALUE",
                  payload: e.target.value,
                })
              }
            />
            <label className="label-radio-box">
              Priority
              <input
                type="radio"
                name="priority"
                value="top"
                required
                checked={priorityRadioBoxValue === "top"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Top
              <input
                type="radio"
                name="priority"
                value="medium"
                required
                checked={priorityRadioBoxValue === "medium"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Medium
              <input
                type="radio"
                name="priority"
                value="low"
                required
                checked={priorityRadioBoxValue === "low"}
                onChange={(e) =>
                  notesTakingFn({
                    type: "PRIORITYRADIOBOXVALUE",
                    payload: e.target.value,
                  })
                }
              />
              Low{" "}
            </label>
            <input
              type="text"
              name="name"
              required
              class="navigation__input"
              placeholder="add labels....!"
              onChange={(e) =>
                notesTakingFn({
                  type: "LABELINPUTBOXVALUE",
                  payload: e.target.value,
                })
              }
            />
            <div className="rte-icons">
              <RTEEditor />
            </div>

            <div className="color-pallete">
              <input type="submit" className="take-notes-btn" />
              <label>
                <input
                  type="color"
                  className="input-color"
                  onChange={(e) =>
                    notesTakingFn({
                      type: "NOTESBGCOLOR",
                      payload: e.target.value,
                    })
                  }
                />
                <span className="material-icons rte-icons2">color_lens </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputNotes;


```


This code defines a React component named InputNotes, which provides a form for creating and submitting notes. Here’s a detailed explanation of its components and functionality:

1. **Imports**:

   - The `useNoteTakingContext` hook is imported to access the context for note-taking.
   - The `addNotesintoDbFn` function is imported to handle the logic of adding a note to the database.
   - The `RTEEditor` component is imported to provide a rich text editor for note content.
   - CSS styles specific to this component are imported from "InputNotes.css".
2. **Function Declaration**:

   - The `InputNotes` component is defined as a functional component that receives a `toggleModal` function as a prop.
   - Inside this component, various state values and functions are extracted from the note-taking context, such as `notesBgColor`, `inputTextTitleValue`, `priorityRadioBoxValue`, `labelInputBoxValue`, `textareaBoxValue`, `noteCreationTime`, `notesTakingFn`, and `isOpen`.
3. **Form Submission**:

   - The `submitNotes` function is defined to handle form submission. It takes an event (`e`) as an argument.
   - This function calls `addNotesintoDbFn` with various note attributes and the `notesTakingFn` to add the note to the database.
   - After adding the note, it resets the form fields by dispatching actions to the `notesTakingFn`.
   - Finally, it calls `toggleModal` to close the modal containing the form.
4. **Rendering**:

   - The component returns JSX markup to define its structure.
   - The main container has a background color set to `notesBgColor`.
   - The form includes:
     - An input field for the note title, with an `onChange` handler to update the `inputTextTitleValue`.
     - A set of radio buttons for selecting the note's priority, each with an `onChange` handler to update the `priorityRadioBoxValue`.
     - An input field for adding labels, with an `onChange` handler to update the `labelInputBoxValue`.
     - The `RTEEditor` component for rich text editing.
     - A color picker for selecting the background color of the note, with an `onChange` handler to update the `notesBgColor`.
     - A submit button to submit the form.
5. **Export**:

   - The `InputNotes` component is exported as the default export, making it accessible for use in other parts of the application.

Overall, the `InputNotes` component provides a user interface for creating and submitting new notes, including setting the note title, priority, labels, content, and background color. The form submission logic handles adding the note to a database and resetting the form fields.


## Conclusion :

Finally I thoroughly enjoyed building this small note taking app clone as it has given me a deeper understanding of React development and various other tools of the React ecosystem, here is the breakdown of the technologies I have learned :

- ReactJS
- React Router v6
- React Context API and useReducer
- React Player
- [Slate UI]([https://slateui.netlify.app/](https://slateui.netlify.app/)) - CSS Component Library
- MockBee
- React Hot Toast

here is the feature list of the application :

* Add Notes
* Edit Notes
* Archive Notes
* Delete Notes
* Search Notes
* Add/update Note labels
* Add/update Note priority
* Add/update Note color
* Filter and sort Notes
* Rich Text Editor
* Toasts
* Authentication

Thanks for Reading it you can see the complete code on [github](https://github.com/VayuSoftwares/Slate-Note-Taking/tree/development/slate-note-taking) and can browse the project [here](https://slate-note-taking.netlify.app/)

If you have anything to share with me or want me to develop some web app I am always open to opportunities you can connect here on [Linkedin]([https://www.linkedin.com/in/prankurpandeyy/](https://www.linkedin.com/in/prankurpandeyy/))

\*\*
