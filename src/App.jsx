import { useState } from "react";
import "./App.css";
import { FiEdit } from "react-icons/fi";
import { VscOpenPreview } from "react-icons/vsc";

function App() {
  const [count, setCount] = useState(0);

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
          <textarea id="editor" type="text"></textarea>
        </div>

        <div className="card-2">
          <div className="border-top-2" id="preview">
            <p id="titulo-preview">
              <VscOpenPreview></VscOpenPreview> Previewer
            </p>
          </div>
          <h1 id="welcome">Welcome to my React Markdown Previewer!</h1>
          <h2 id="head">This is a sub-heading...</h2>
          <h3 id="extra"> And here's some other cool stuff:</h3>
          <p style={{ fontSize: "1rem" }}>
            Heres some code, <code>&lt;div&gt;&lt;/div&gt;</code>, between 2
            backticks.
          </p>
          <pre id="pre">
            {"          "}
            <code>
              {"\n"}
              {"            "}
              <span className="token comment">// this is multi-line code:</span>
              {"\n"}
              {"            "}
              <span className="token keyword">function</span>{" "}
              <span className="token function">anotherExample</span>
              <span className="token punctuation">(</span>
              <span className="token parameter">
                firstLine<span className="token punctuation">,</span> lastLine
              </span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation"> {"{"} </span>
              {"\n"}
              {"  "}
              <span className="token keyword">if</span>{" "}
              <span className="token punctuation">(</span>firstLine{" "}
              <span className="token operator">==</span>{" "}
              <span className="token string">'```'</span>{" "}
              <span className="token operator">&amp;&amp;</span> lastLine{" "}
              <span className="token operator">==</span>{" "}
              <span className="token string">'```'</span>
              <span className="token punctuation">)</span>{" "}
              <span className="token punctuation">{"{"}</span>
              {"\n"}
              {"    "}
              <span className="token keyword">return</span> multiLineCode
              <span className="token punctuation">;</span>
              {"\n"}
              {"  "}
              <span className="token punctuation">{"}"}</span>
              {"\n"}
              <span className="token punctuation">{"}"}</span>
              {"\n"}
            </code>
          </pre>
          <p id="content-styles">
            {" "}
            You can also make text <strong>bold</strong>... whoa!
            <br />
            Or <i>italic</i>.
            <br />
            Or... wait for it...{" "}
            <strong>
              <i>both!</i>
            </strong>
            <br />
            And feel free to go crazy <del>crossing stuff out.</del>
            <br />
            <br />
            There's also{" "}
            <a
              target="_blank"
              href=""
              style={{ textDecoration: "none", color: "black" }}
            >
              links
            </a>
            , and{" "}
            <blockquote id="blockquote">
              {" "}
              <p id="text-blockquotes">Block Quotes!</p>
            </blockquote>
            And if you want to get really crazy, even tables:
          </p>
          <table id="table">
            <thead>
              <tr>
                <th>Wild Header</th>
                <th>Crazy Header</th>
                <th>Another Header?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your content can</td>
                <td>be here, and it</td>
                <td>can be here...</td>
              </tr>
              <tr>
                <td>And here.</td>
                <td>Okay.</td>
                <td>I think we get it.</td>
              </tr>
            </tbody>
          </table>
          <div id="list-container">
            <ul id="lista1">
              <li>And or course there are list.</li>
              <li>Some are bulleted.</li>
              <li>With different indentation levels.</li>
              <li>That look like this.</li>
            </ul>
            <ol id="lista2">
              <li>And there are numbered lists too.</li>
              <li>Use just 1s if you want!</li>
              <li>And last but not least, let's not forget embedded images:</li>
            </ol>
          </div>
          <img
            id="logo"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
            alt="freeCodeCamp Logo"
          ></img>
        </div>
      </div>
    </>
  );
}

export default App;
