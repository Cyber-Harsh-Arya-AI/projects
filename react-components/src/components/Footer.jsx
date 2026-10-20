// Props: name, year
export default function Footer({ name, year = new Date().getFullYear() }) {
  return <footer className="footer">&copy; {year} {name}. All rights reserved.</footer>;
}
