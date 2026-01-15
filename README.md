<h1>📱 React Homework 03 — Phonebook Application</h1>

<p>
This project is a simple <b>Phonebook application</b> built with <b>React</b>.
The main goal of the homework is to practice working with
<b>events</b>, <b>component state</b>, <b>controlled inputs</b>,
<b>forms with Formik</b>, and <b>localStorage</b>.
</p>

<hr />

<h2>🔗 Project Links</h2>
<ul>
  <li>
    <b>GitHub Repository:</b>
    <a href="https://github.com/kutluhangil/goit-react-hw-03" target="_blank">
      goit-react-hw-03
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

<h2>🎯 Project Requirements</h2>
<ul>
  <li>The project is created using <b>Vite</b></li>
  <li>Forms are built using <b>Formik</b></li>
  <li>Form validation is implemented with <b>Yup</b></li>
  <li>No errors or warnings appear in the browser console</li>
  <li>Each component has its own folder inside <code>src/components</code></li>
  <li>Each folder contains a <code>.jsx</code> file and a <code>.module.css</code> file</li>
  <li>Components are exported using <b>export default</b></li>
  <li>Styles are implemented using <b>CSS Modules</b></li>
  <li>Code is clean, readable, and formatted with <b>Prettier</b></li>
</ul>

<hr />

<h2>📖 Application Description</h2>
<p>
The Phonebook application allows users to:
</p>
<ul>
  <li>Add new contacts using a form</li>
  <li>Filter contacts by name (case-insensitive)</li>
  <li>Delete existing contacts</li>
  <li>Persist contacts using <b>localStorage</b> so data is not lost on page refresh</li>
</ul>

<hr />

<h2>🧩 Component Structure</h2>

<p>
All components are rendered inside the <b>App</b> component.
The main structure of the application is as follows:
</p>

<pre>
&lt;div&gt;
  &lt;h1&gt;Phonebook&lt;/h1&gt;
  &lt;ContactForm /&gt;
  &lt;SearchBox /&gt;
  &lt;ContactList /&gt;
&lt;/div&gt;
</pre>

<p>The application consists of the following components:</p>

<ul>
  <li><b>App</b> — Root component that manages state and logic</li>
  <li><b>ContactForm</b> — Form for adding new contacts (Formik + Yup)</li>
  <li><b>SearchBox</b> — Controlled input for filtering contacts by name</li>
  <li><b>ContactList</b> — Renders the list of contacts</li>
  <li><b>Contact</b> — Displays a single contact with a delete button</li>
</ul>

<hr />

<h2>🪜 Homework Steps Implementation</h2>

<h3>Step 1 — Contact List</h3>
<p>
The list of contacts is stored in the <b>App</b> component state as an array of objects.
Initially, static test data is used to verify functionality.
Contacts are rendered using <b>ContactList</b> and <b>Contact</b> components.
</p>

<h3>Step 2 — Search by Name</h3>
<p>
A <b>SearchBox</b> component is added to filter contacts by name.
The filter value is stored in the <b>App</b> state.
Filtering is case-insensitive and performed directly in the App component.
</p>

<h3>Step 3 — Add Contact</h3>
<p>
A <b>ContactForm</b> component is created using <b>Formik</b>.
Each contact includes <code>id</code>, <code>name</code>, and <code>number</code>.
The <b>nanoid</b> library is used to generate unique IDs.
Form validation is implemented with <b>Yup</b>:
</p>
<ul>
  <li>All fields are required</li>
  <li>Minimum length: 3 characters</li>
  <li>Maximum length: 50 characters</li>
</ul>

<h3>Step 4 — Delete Contact</h3>
<p>
Each contact card includes a <b>Delete</b> button.
Clicking the button removes the contact from the state.
</p>

<h3>Step 5 — Persist Data with localStorage</h3>
<p>
Contacts are saved to <b>localStorage</b> using React effects.
When the application loads, stored contacts are read from localStorage
and used to initialize the state.
This ensures data persistence after page reloads.
</p>

<hr />

<h2>📌 Final Notes</h2>
<p>
This homework focuses on real-world React fundamentals:
state management, controlled components, form handling,
data persistence, and component-based architecture.
It provides a solid foundation for building larger React applications.
</p>

<p><b>Happy coding! 🚀</b></p>
