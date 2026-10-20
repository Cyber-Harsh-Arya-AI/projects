import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => {
        if (!response.ok) throw new Error("Could not load blog posts.");
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load posts. Please try again.");
        setLoading(false);
      });
  }, []);

  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const filteredPosts = posts.filter((post) => {
    const searchText = search.toLowerCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchText) ||
      post.description.toLowerCase().includes(searchText) ||
      post.author.toLowerCase().includes(searchText);
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#top">BlogSpace<span>.</span></a>
        <span className="nav-text">Ideas worth sharing</span>
      </header>

      <main className="container" id="top">
        <section className="hero">
          <p className="eyebrow">THE BLOG COLLECTION</p>
          <h1>Stories, ideas &amp; inspiration.</h1>
          <p className="subtitle">Explore articles on technology, programming and cybersecurity.</p>
        </section>

        <section className="controls" aria-label="Search and filter articles">
          <input
            type="search"
            placeholder="Search articles or authors..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search blog posts"
          />
          <select value={category} onChange={(event) => setCategory(event.target.value)} aria-label="Filter by category">
            {categories.map((item) => (
              <option key={item} value={item}>{item === "All" ? "All categories" : item}</option>
            ))}
          </select>
        </section>

        <div className="results">
          <h2>Latest articles</h2>
          {!loading && !error && <span>{filteredPosts.length} articles found</span>}
        </div>

        {loading ? (
          <p className="message">Loading articles...</p>
        ) : error ? (
          <p className="message" role="alert">{error}</p>
        ) : filteredPosts.length > 0 ? (
          <section className="blog-grid" aria-label="Blog posts">
            {filteredPosts.map((post) => (
              <article className="post-card" key={post.id}>
                <div className="card-top">
                  <span className="category">{post.category}</span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p className="description">{post.description}</p>
                <div className="card-footer">
                  <div className="author">
                    <div className="avatar" aria-hidden="true">{post.author.charAt(0)}</div>
                    <div>
                      <strong>{post.author}</strong>
                      <small>{new Date(`${post.date}T12:00:00`).toLocaleDateString("en-IN", {
                        day: "numeric", month: "short", year: "numeric"
                      })}</small>
                    </div>
                  </div>
                  <span className="arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <div className="empty-state">
            <h3>No articles found</h3>
            <p>Try another search term or select a different category.</p>
            <button onClick={() => { setSearch(""); setCategory("All"); }}>Clear filters</button>
          </div>
        )}
      </main>

      <footer className="footer"><p>BlogSpace · Built with React</p></footer>
    </div>
  );
}

export default App;
