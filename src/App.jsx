import { useState } from "react";
import "./App.css";
import { FiEdit } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";

const initEditor = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.
\`<u></u>\`

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [source, setSource] = useState(() => initEditor);
  const handleSource = (e) => setSource(e.target.value);

  return (
    <>
      <div id="container">
        <div className="card-1">
          <div className="border-top">
            <p id="titulo-editor">
              {" "}
              <FiEdit></FiEdit> Editor
            </p>
          </div>
          <textarea
            value={source}
            onChange={handleSource}
            id="editor"
            type="text"
          ></textarea>
        </div>

        <div className="card-2">
          <div className="border-top-2">
            <p id="titulo-preview">
              <VscOpenPreview></VscOpenPreview> Previewer
            </p>
          </div>
          <div
            style={{
              maxWidth: "800px",
              overflowWrap: "break-word",
              minHeight: "200px",
            }}
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked.parse(source, { breaks: true }),
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
