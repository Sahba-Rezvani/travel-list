export default function Item({ itemObj, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => handleToggleItem(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity + " "}
        {itemObj.description}
      </span>
      <button onClick={() => handleDeleteItem(itemObj.id)}>❌</button>
    </li>
  );
}
