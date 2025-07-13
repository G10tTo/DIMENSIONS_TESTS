// Implement a delete operation – check for confirmation dialogs or safety checks
function deleteItem(itemId) {
    const confirmation = confirm("Are you sure you want to delete this item?");
    if (confirmation) {
        // Proceed with the delete operation
        console.log(`Item ${itemId} deleted.`);
    } else {
        console.log("Delete operation canceled.");
    }
}