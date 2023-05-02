import { useState } from "react";

function AddCategory() {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {

  }

  return (
    <div>
      <input size="15" type="text" value={category} placeholder="Category name" onChange={onChangeCategory} />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
}

export default AddCategory;