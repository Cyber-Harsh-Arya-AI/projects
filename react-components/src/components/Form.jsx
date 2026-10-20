import { useState } from "react";
import Button from "./Button";

// Props: onSubmit(item). State: controlled inputs + error message.
export default function Form({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      setError("Title and description are required.");
      return;
    }
    onSubmit({
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
    });
    setTitle(""); setDescription(""); setTags(""); setError("");
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a card</h2>
      <label>Title<input value={title} onChange={(e) => setTitle(e.target.value)} /></label>
      <label>Description<textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
      <label>Tags (comma separated)<input value={tags} onChange={(e) => setTags(e.target.value)} /></label>
      {error && <p className="error" role="alert">{error}</p>}
      <Button type="submit" label="Add card" />
    </form>
  );
}
