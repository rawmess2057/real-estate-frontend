const fs = require('fs');
const path = require('path');

function copyFileSafe(src, dest) {
  try {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${path.basename(src)} to ${dest}`);
  } catch (err) {
    console.warn(`Could not copy ${src}: ${err.message}`);
  }
}

function main() {
  const projectRoot = path.resolve(__dirname, '..');
  const nodeModulesImages = path.join(projectRoot, 'node_modules', 'leaflet', 'dist', 'images');
  const publicImages = path.join(projectRoot, 'public', 'images');

  if (!fs.existsSync(nodeModulesImages)) {
    console.warn('Leaflet images folder not found. Ensure `leaflet` is installed.');
    return;
  }

  if (!fs.existsSync(publicImages)) {
    fs.mkdirSync(publicImages, { recursive: true });
  }

  const files = [
    'marker-icon.png',
    'marker-icon-2x.png',
    'marker-shadow.png'
  ];

  files.forEach((f) => {
    const src = path.join(nodeModulesImages, f);
    const dest = path.join(publicImages, f);
    copyFileSafe(src, dest);
  });
}

main();
