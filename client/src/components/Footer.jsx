import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 text-gray-300 bg-gray-800">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Teaching Materials. All rights
          reserved to <small> Bashar Alwarad </small>.
        </p>
        <div className="mt-2 space-x-4">
          <Link className="hover:text-white" to={'/about'}>
            About
          </Link>
          <Link className="hover:text-white" to={'/Contact'}>
            Contact
          </Link>
          <Link className="hover:text-white" to={'/privacy'}>
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
