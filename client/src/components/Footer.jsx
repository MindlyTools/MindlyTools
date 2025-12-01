import "../styles/footer.css";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="copyright"> © {date} MindlyTools</div>
    </footer>
  );
}
