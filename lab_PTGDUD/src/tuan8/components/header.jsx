// components/Header.jsx
import "../styles/main.css";

export default function Header() {
    return (
        <header className="header">
            {/* Logo */}
            <a className="logo" href="#">
                <div className="logo-icon">🍳</div>
                Chefify
            </a>

            {/* Search */}
            <div className="search-wrapper">
                <span className="search-icon">🔍</span>
                <input
                    className="search"
                    placeholder="What would you like to cook?"
                />
            </div>

            {/* Nav */}
            <nav className="nav">
                <a href="#">What to cook</a>
                <a href="#">Recipes</a>
                <a href="#">Ingredients</a>
                <a href="#">Occasions</a>
                <a href="#">About Us</a>
            </nav>

            {/* Actions */}
            <div className="header-actions">
                <button className="recipe-box-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 7H4C2.9 7 2 7.9 2 9v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z"/>
                        <path d="M16 3H8L6 7h12l-2-4z"/>
                    </svg>
                    Your Recipe Box
                </button>

                <div className="avatar-btn">
                    <img
                        src="https://i.pravatar.cc/40?img=47"
                        alt="User avatar"
                    />
                </div>
            </div>
        </header>
    );
}