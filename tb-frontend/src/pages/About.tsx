import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="about">
      <blockquote>
        “Nothing is so privileged as thinking history belongs to the past.”
      </blockquote>
      <p>
        TB—despite being preventable and curable since the 1950s—is still the
        world's deadliest infectious disease during non-pandemic years. That is
        more than the number of people who died of malaria, typhoid, and war
        combined.
      </p>
      <p>
        While TB is often considered a thing of the past in high-income
        countries, it remains a significant problem in low- and middle-income
        countries. This is due to a combination of factors including a
        deeply-rooted stigma against the disease, the greed of those with the
        power to end TB, and the legacies left by colonialism that have severely
        weakened healthcare infrastructure in high-burden countries.
      </p>
      <p>
        We tend to solve the problems we pay the most attention to. This project
        aims to show just how much tuberculosis remains a problem and why, so
        that, hopefully, we pay more attention to TB and end the TB epidemic.
      </p>
      <div className="about-button-wrapper">
        <Link to="/data" className="about-button">
          See The Data
        </Link>
      </div>
    </div>
  );
}
