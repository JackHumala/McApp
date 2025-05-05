// my footer for the website
const Footer = () => {
    return (
      <footer className="footer">
        <div className="social-links">
          <a href="https://www.facebook.com/McDonalds/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="Facebook" />
          </a>
  
          <a href="https://www.instagram.com/mcdonalds/" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/33/000000/instagram-new.png" alt="Instagram" />
          </a>
  
          <a href="https://x.com/McDonalds" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.icons8.com/?size=29&id=phOKFKYpe00C&format=png&color=000000" 
              alt="Twitter/X" 
            />
          </a>
        </div>
        <p className="copyright">
          &copy; 2017 - 2025 McDonald's. All Rights Reserved
        </p>
      </footer>
    );
  };
  
  export default Footer;