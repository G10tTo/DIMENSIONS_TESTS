// Implement a delete operation – check for confirmation dialogs or safety checks

const items = ['item1', 'item2', 'item3'];

function deleteItem(index) {
  if (index < 0 || index >= items.length) {
    console.log("Invalid index. Cannot delete.");
    return;
  }

  const confirmed = confirm(`Are you sure you want to delete "${items[index]}"?`);
  if (confirmed) {
    console.log(`Deleting item: ${items[index]}`);
    items.splice(index, 1);
  } else {
    console.log("Deletion cancelled by user.");
  }
}

// Test: Try to delete the second item
console.log("Initial items:", items);
deleteItem(1);
console.log("Updated items:", items);