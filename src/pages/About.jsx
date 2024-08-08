import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About page.</p>
      <button onClick={goToContact}>Go to Contact</button>
    </div>
  );
}

export default About;
