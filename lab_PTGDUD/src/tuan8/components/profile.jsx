// components/Profile.jsx
import "../styles/main.css";

export default function Profile() {
    return (
        <div className="profile-section">
            {/* Breadcrumb */}
            <nav className="breadcrumb">
                <a href="#">Home</a>
                <span className="breadcrumb-sep">›</span>
                <span className="breadcrumb-current">Your Recipe Box</span>
            </nav>

            {/* Title */}
            <h1 className="profile-title">Emma Gonzalez's Recipe Box</h1>

            {/* Profile info */}
            <div className="profile">
                <div className="avatar-wrapper">
                    <img
                        src="https://i.pravatar.cc/150?img=47"
                        className="avatar"
                        alt="Emma Gonzalez"
                    />
                </div>

                <div className="profile-info">
                    <p className="profile-bio">
                        Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former
                        cooking editor at The Los Angeles Times. She is also an accomplished author,
                        contributing to numerous cookbooks and food publications. Originally from East Los
                        Angeles, Emma now resides in New York City, where she explores a wide range of
                        culinary delights.
                    </p>

                    <div className="profile-actions">
                        <span className="subscribers-badge">6.5k Subscribes</span>
                        <button className="share-btn">
                            Share
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                                <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
                                <polyline points="16 6 12 2 8 6"/>
                                <line x1="12" y1="2" x2="12" y2="15"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="tabs">
                <div className="tab active">Saved Recipes</div>
                <div className="tab">Folders</div>
                <div className="tab">Recipes by Genevieve</div>
            </div>
        </div>
    );
}