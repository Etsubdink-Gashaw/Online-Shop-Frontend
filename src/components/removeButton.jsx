
import API from "../api/axios.js";
export default function RemoveButton({itemId}) {
    const handleRemove =async () => {
        try {
           const response = await API.delete(`/cart/${itemId}`);
           const data = response.data;
            console.log("Remove item response:", data);
            if (!data.success) {
                throw new Error("Failed to remove item from cart");
            }
            console.log("Item removed from cart");
        } catch (error) {
            console.error("Error removing item from cart:", error);
            alert("Failed to remove item. Please try again.");
            return;
        }
        alert("Item removed from cart!");
    }
    return (
        <button className="remove-button" onClick={handleRemove}>
            Remove
        </button>
    )
}