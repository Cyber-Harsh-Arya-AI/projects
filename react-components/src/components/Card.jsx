import { useState } from "react";
import Button from "./Button";

// Props: title, description, tags. State: expanded, liked.
export default function Card({ title, description, tags = [] }) {
  const [expanded, setExpanded] = useState(false);
  const [liked, setLiked] = useState(false);
  const text = expanded || description.length <= 80 ? description : description.slice(0, 80) + "...";

  return (
    <article className="card">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      <div className="actions">
        {description.length > 80 && (
          <Button label={expanded ? "Show less" : "Read more"} variant="ghost" onClick={() => setExpanded(!expanded)} />
        )}
        <Button label={liked ? "Liked" : "Like"} onClick={() => setLiked(!liked)} />
      </div>
    </article>
  );
}
