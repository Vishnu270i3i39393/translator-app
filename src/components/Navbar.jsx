import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex space-x-4 justify-center">
        <Link to="/" className="hover:underline">Translator</Link>
        <Link to="/random" className="hover:underline">Random String</Link>
      </div>
    </nav>
  );
};

export default Navbar;
