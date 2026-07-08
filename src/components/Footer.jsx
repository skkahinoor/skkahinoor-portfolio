export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          © {year} SK Kahinoor. Signing Off !!
        </p>
        <div className="footer-links">
          <a href="https://github.com/skkahinoor" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/skkahinoor" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/919827472688?text=Hi%20Kahinoor!%20I%20have%20a%20query%20regarding%20a%20web%20development%20project%20and%20would%20love%20to%20discuss%20it%20with%20you." target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
