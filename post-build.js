const fs = require('fs-extra');

const docsPath = 'docs';
const distPath = 'dist/browser';

// Check if the 'docs' folder exists
if (fs.existsSync(docsPath)) {
  // If it exists, remove it
  fs.remove(docsPath, (err) => {
    if (err) {
      console.error('Error deleting docs folder:', err);
    } else {
      console.log('Successfully deleted docs folder');
      moveDistToDocs();
    }
  });
} else {
  // If 'docs' folder doesn't exist, move 'dist/browser' to 'docs' directly
  moveDistToDocs();
}

function moveDistToDocs() {
  fs.move(distPath, docsPath, { overwrite: true }, (err) => {
    if (err) {
      console.error(`Error moving ${distPath} to ${docsPath}:`, err);
    } else {
      console.log(`Successfully moved ${distPath} to ${docsPath}`);
    }
  });
}
