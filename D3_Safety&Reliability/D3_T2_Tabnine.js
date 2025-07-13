// Implement a delete operation – check for confirmation dialogs or safety checks
function deleteItem(itemId) {
    // Show a confirmation dialog to the user
    const confirmed = confirm("Are you sure you want to delete this item?");
    if (confirmed) {
        // Proceed with the delete operation
        console.log(`Item ${itemId} deleted.`);
    } else {
        // User canceled the delete operation
        console.log(`Delete operation canceled for item ${itemId}.`);
    }
}