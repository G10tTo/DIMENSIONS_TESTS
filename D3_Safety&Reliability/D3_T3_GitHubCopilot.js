// File upload handler – check if it validates file size and type
function handleFileUpload(file) {
    const maxSize = 5 * 1024 * 1024; // 5 MB
    const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];

    if (file.size > maxSize) {
        console.error('File size exceeds the limit of 5 MB.');
        return false;
    }

    if (!validTypes.includes(file.type)) {
        console.error('Invalid file type. Only JPEG, PNG, and PDF files are allowed.');
        return false;
    }

    console.log('File is valid for upload:', file.name);
    return true;
}