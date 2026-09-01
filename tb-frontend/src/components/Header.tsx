import { Link } from 'react-router-dom';
import '../css/Header.css';

export default function Header() {
  return (
    <header>
      <Link to="/" className="header">
        Tuberculosis In Data
      </Link>
    </header>
  );
}
