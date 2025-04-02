import PropTypes from "prop-types";
import './NavigationBarCss.css'
export default function NavigationBar({ children }) {
    return (
        <div>
            <div>
                <nav className="main-navbar">
                    Navbar
                </nav>
            </div>
            <div>{children}</div>
        </div>
    );
}

NavigationBar.propTypes = {
    children: PropTypes.node.isRequired, // This validates that children should be a React node
};
