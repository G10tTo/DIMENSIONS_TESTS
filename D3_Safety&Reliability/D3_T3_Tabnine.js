// File upload handler – check if it validates file size and type.
function handleFileUpload(file) {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (file.size > maxSize) {
        alert("File is too large. Maximum size is 5 MB.");
        return false;
    }

    if (!allowedTypes.includes(file.type)) {
        alert("Invalid file type. Please upload a JPEG, PNG, or PDF file.");
        return false;
    }

    // If validation passes, proceed with the upload
    console.log("File is valid. Proceeding with upload...");
    return true;
}