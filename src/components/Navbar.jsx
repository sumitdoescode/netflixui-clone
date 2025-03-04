import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch("");
    };
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="navbar-logo">
                        <img src={Logo} alt="" />
                    </Link>
                    <form onSubmit={handleSubmit} className="navbar-search">
                        <input type="text" placeholder="Search.." name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                    </form>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
