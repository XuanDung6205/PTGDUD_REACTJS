// components/Footer.jsx

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: "#1a1a1a",
            color: "#ffffff",
            fontFamily: "'Segoe UI', sans-serif",
        }}>
            {/* Main footer content */}
            <div style={{
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "48px 24px 40px",
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: "40px",
            }}>
                {/* Column 1: About Us */}
                <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "12px", color: "#ffffff" }}>
                        About Us
                    </h3>
                    <p style={{ fontSize: "13px", color: "#aaaaaa", lineHeight: "1.6", marginBottom: "20px" }}>
                        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
                    </p>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <input
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: "10px 14px",
                                fontSize: "13px",
                                borderRadius: "6px",
                                border: "1px solid #444",
                                backgroundColor: "#2a2a2a",
                                color: "#ffffff",
                                outline: "none",
                            }}
                        />
                        <button style={{
                            padding: "10px 18px",
                            backgroundColor: "#e91e8c",
                            color: "#ffffff",
                            fontSize: "13px",
                            fontWeight: "600",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                        }}>
                            Send
                        </button>
                    </div>
                </div>

                {/* Column 2: Learn More */}
                <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "12px", color: "#ffffff" }}>
                        Learn More
                    </h3>
                    {["Our Cooks", "See Our Features", "FAQ"].map((item) => (
                        <p key={item} style={{ fontSize: "13px", color: "#aaaaaa", marginBottom: "10px", cursor: "pointer" }}>
                            {item}
                        </p>
                    ))}
                </div>

                {/* Column 3: Shop */}
                <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "12px", color: "#ffffff" }}>
                        Shop
                    </h3>
                    {["Gift Subscription", "Send Us Feedback"].map((item) => (
                        <p key={item} style={{ fontSize: "13px", color: "#aaaaaa", marginBottom: "10px", cursor: "pointer" }}>
                            {item}
                        </p>
                    ))}
                </div>

                {/* Column 4: Recipes */}
                <div>
                    <h3 style={{ fontSize: "14px", fontWeight: "700", marginBottom: "12px", color: "#ffffff" }}>
                        Recipes
                    </h3>
                    {["What to Cook This Week", "Pasta", "Dinner", "Healthy", "Vegetarian", "Vegan", "Christmas"].map((item) => (
                        <p key={item} style={{ fontSize: "13px", color: "#aaaaaa", marginBottom: "10px", cursor: "pointer" }}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{
                borderTop: "1px solid #333",
                padding: "20px 24px",
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                gap: "24px",
            }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ fontSize: "20px" }}>🍽️</span>
                    <span style={{ fontSize: "16px", fontWeight: "700", color: "#ffffff" }}>Chefify</span>
                </div>

                <span style={{ fontSize: "12px", color: "#777777" }}>2023 Chefify Company</span>
                <span style={{ fontSize: "12px", color: "#777777", cursor: "pointer" }}>Terms of Service</span>
                <span style={{ fontSize: "12px", color: "#777777", cursor: "pointer" }}>Privacy Policy</span>
            </div>
        </footer>
    );
}