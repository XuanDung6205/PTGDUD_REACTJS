// components/RecipeCard.jsx

export default function RecipeCard({ title, time, img }) {
    return (
        <div className="card">
            <div className="card-img-wrapper">
                <img src={img} alt={title} />
            </div>

            <div className="card-body">
                <div className="card-text">
                    <h4>{title}</h4>
                    <span className="time">{time} minutes</span>
                </div>

                <button className="bookmark-btn" title="Save recipe">
                    <svg viewBox="0 0 24 24">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}