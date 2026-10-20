import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";

const initial = [
  { id: 1, title: "VulNRecon", description: "A full-stack vulnerability intelligence platform for tracking and understanding security issues.", tags: ["Security", "Full-stack"] },
  { id: 2, title: "CropAI", description: "Crop disease detection and yield prediction using machine learning.", tags: ["ML", "Agriculture"] },
];

export default function App() {
  const [cards, setCards] = useState(initial);

  return (
    <>
      <Header title="Component Practice" links={[{ label: "Cards", href: "#cards" }, { label: "Add", href: "#add" }]} />
      <main className="container">
        <section id="cards" className="cards">
          {cards.length === 0 && <p>No cards yet. Add one below.</p>}
          {cards.map((c) => <Card key={c.id} {...c} />)}
        </section>
        <section id="add">
          <Form onSubmit={(item) => setCards([item, ...cards])} />
        </section>
      </main>
      <Footer name="Harsh" />
    </>
  );
}
