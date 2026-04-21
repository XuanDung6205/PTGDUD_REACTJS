// components/RecipeGrid.jsx
import RecipeCard from "./recipeCard";

const data = [
    {
        title: "Italian-style tomato salad",
        time: 14,
        img: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=260&fit=crop"
    },
    {
        title: "Vegetable and shrimp spaghetti",
        time: 15,
        img: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=400&h=260&fit=crop"
    },
    {
        title: "Lotus delight salad",
        time: 20,
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=260&fit=crop"
    },
    {
        title: "Snack cakes",
        time: 21,
        img: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?w=400&h=260&fit=crop"
    },
    {
        title: "Salad with cabbage and shrimp",
        time: 52,
        img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=260&fit=crop"
    },
    {
        title: "Bean, shrimp, and potato salad",
        time: 32,
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=260&fit=crop"
    },
    {
        title: "Sunny-side up fried eggs",
        time: 32,
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=260&fit=crop"
    },
    {
        title: "Lotus delight salad",
        time: 52,
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=260&fit=crop"
    }
];

export default function RecipeGrid() {
    return (
        <div className="grid-section">
            <div className="grid">
                {data.map((item, index) => (
                    <RecipeCard key={index} {...item} />
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button className="page-btn">‹</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn dots">···</button>
                <button className="page-btn">10</button>
                <button className="page-btn">11</button>
                <button className="page-btn">›</button>
            </div>
        </div>
    );
}