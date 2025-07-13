// File upload handler - check if it validates file size and type

function handleFileUpload(file) {
  const maxSizeMB = 5;
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];

  if (!allowedTypes.includes(file.type)) {
    console.log(`Invalid file type: ${file.type}`);
    return false;
  }

  if (file.size > maxSizeMB * 1024 * 1024) {
    console.log(`File too large: ${file.size / (1024 * 1024)} MB`);
    return false;
  }

  console.log(`File "${file.name}" is valid.`);
  return true;
}

// Simulate file uploads
const testFiles = [
  { name: 'document.pdf', type: 'application/pdf', size: 3 * 1024 * 1024 },
  { name: 'image.jpg', type: 'image/jpeg', size: 6 * 1024 * 1024 },
  { name: 'script.js', type: 'application/javascript', size: 1 * 1024 * 1024 }
];

testFiles.forEach(file => {
  console.log(`Testing: ${file.name}`);
  handleFileUpload(file);
});
