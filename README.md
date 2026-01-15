<h1>📱 React Homework 03 — Phonebook Application</h1>

<p>
This project is a <b>Phonebook application</b> built with <b>React</b>.
The main purpose of this homework is to practice working with
<b>events</b>, <b>component state</b>, <b>forms</b>,
<b>Formik</b>, <b>Yup validation</b>, and <b>localStorage</b>.
</p>

<hr />

<h2>🔗 Project Links</h2>
<ul>
  <li>
    <b>GitHub Repository:</b>
    <a href="https://github.com/kutluhangil/goit-react-hw-03" target="_blank">
      https://github.com/kutluhangil/goit-react-hw-03
    </a>
  </li>
  <li>
    <b>Live Demo (Vercel):</b>
    <a href="https://goit-react-hw-03-gamma-navy.vercel.app/" target="_blank">
      https://goit-react-hw-03-gamma-navy.vercel.app/
    </a>
  </li>
</ul>

<hr />

<h2>🛠️ Technologies & Libraries Used</h2>

<ul>
  <li>
    <b>React</b> — Building the user interface using components and hooks
  </li>
  <li>
    <b>Vite</b> — Fast development environment and build tool
  </li>
  <li>
    <b>Formik</b> — Managing form state and form submission
  </li>
  <li>
    <b>Yup</b> — Schema-based form validation
  </li>
  <li>
    <b>nanoid</b> — Generating unique IDs for contacts
  </li>
  <li>
    <b>CSS Modules</b> — Scoped and modular component styles
  </li>
  <li>
    <b>localStorage</b> — Persisting contacts between page reloads
  </li>
</ul>

<hr />

<h2>📦 Library Installation</h2>

<p>The following libraries were installed manually during the project setup:</p>

<pre>
npm install formik
npm install yup
npm install nanoid
</pre>

<p>
These libraries are listed in <code>package.json</code> and are used throughout
the application.
</p>

<hr />

<h2>📂 Project Structure</h2>

<pre>
GOIT-REACT-HW-03
 ├── dist
 ├── node_modules
 ├── public
 ├── src
 │    ├── assets
 │    │    └── react.svg
 │    ├── components
 │    │    ├── Contact
 │    │    │    ├── Contact.jsx
 │    │    │    └── Contact.module.css
 │    │    ├── ContactForm
 │    │    │    ├── ContactForm.jsx
 │    │    │    └── ContactForm.module.css
 │    │    ├── ContactList
 │    │    │    ├── ContactList.jsx
 │    │    │    └── ContactList.module.css
 │    │    └── SearchBox
 │    │         ├── SearchBox.jsx
 │    │         └── SearchBox.module.css
 │    ├── App.css
 │    ├── App.jsx
 │    ├── App.module.css
 │    ├── index.css
 │    └── main.jsx
 ├── .gitattributes
 ├── .gitignore
 ├── eslint.config.js
 ├── index.html
 ├── LICENSE
 ├── package-lock.json
 ├── package.json
 ├── README.md
 └── vite.config.js
</pre>

<hr />

<h2>📖 Application Description</h2>

<p>
The Phonebook application allows users to manage a list of contacts.
Each contact contains a <b>name</b>, <b>phone number</b>, and a unique <b>ID</b>.
</p>

<p>Main features:</p>
<ul>
  <li>Add new contacts using a validated form</li>
  <li>Filter contacts by name (case-insensitive)</li>
  <li>Delete contacts from the list</li>
  <li>Automatically save contacts to localStorage</li>
  <li>Restore saved contacts on page reload</li>
</ul>

<hr />

<h2>🧩 Component Architecture</h2>

<p>
All components are rendered inside the <b>App</b> component.
The main markup structure is:
</p>

<pre>
&lt;div&gt;
  &lt;h1&gt;Phonebook&lt;/h1&gt;
  &lt;ContactForm /&gt;
  &lt;SearchBox /&gt;
  &lt;ContactList /&gt;
&lt;/div&gt;
</pre>

<p>Components overview:</p>
<ul>
  <li><b>App</b> — Root component, manages state and business logic</li>
  <li><b>ContactForm</b> — Formik-based form for adding new contacts</li>
  <li><b>SearchBox</b> — Controlled input for filtering contacts</li>
  <li><b>ContactList</b> — Renders the list of contacts</li>
  <li><b>Contact</b> — Displays a single contact with delete functionality</li>
</ul>

<hr />

<h2>🪜 Homework Steps Implementation</h2>

<h3>Step 1 — Contact List</h3>
<p>
Contacts are stored in the <b>App</b> component as an array in state.
Initially, static test data is used to verify rendering.
</p>

<h3>Step 2 — Search by Name</h3>
<p>
A controlled input (<b>SearchBox</b>) filters contacts by name.
Filtering logic is case-insensitive and handled in the App component.
</p>

<h3>Step 3 — Add Contact</h3>
<p>
New contacts are added using <b>ContactForm</b> built with Formik.
Validation rules are implemented with Yup.
Unique IDs are generated using nanoid.
</p>

<h3>Step 4 — Delete Contact</h3>
<p>
Each contact includes a <b>Delete</b> button that removes it from state.
</p>

<h3>Step 5 — Persist Contacts</h3>
<p>
Contacts are saved to <b>localStorage</b> whenever the state changes.
On application load, stored contacts are read and restored.
</p>

<hr />

<h2>📌 Final Notes</h2>
<p>
This homework strengthens core React skills such as component composition,
state management, controlled inputs, form handling, validation,
and data persistence. It serves as a solid foundation for more advanced
React applications.
</p>

<p><b>Happy coding! 🚀</b></p>
