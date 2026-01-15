export default function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <span>
        {name}: {number}
      </span>

      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
