import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the Contact page.</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
}

export default Contact;
