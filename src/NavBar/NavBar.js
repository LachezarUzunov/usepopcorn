import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

export default function NavBar({ children }) {
    return (
        <nav className="nav-bar">
            <Logo />
            {children}
        </nav>
    )
}
