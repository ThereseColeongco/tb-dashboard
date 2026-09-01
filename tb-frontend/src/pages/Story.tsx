import { Link } from 'react-router-dom';

export default function Story() {
  return (
    <div>
      <blockquote>
        “Where are the drugs? The drugs are where the disease is not. And where
        is the disease? The disease is where the drugs are not.”
        <cite> —Dr. Peter Mugyenyi</cite>
      </blockquote>
      <div className="about-button-wrapper">
        <Link to="/" className="about-button">
          Back Home
        </Link>
      </div>
    </div>
  );
}
