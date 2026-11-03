const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');

const routes = [
  'hire-developer',
  'odoo-developer-kerala',
  'web-development-kerala',
  'privacy-policy',
  'terms',
  'delete-data'
];

routes.forEach((route) => {
  const dirPath = path.join(outDir, route);
  const indexPath = path.join(dirPath, 'index.html');
  const htmlPath = path.join(outDir, `${route}.html`);

  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, htmlPath);
    console.log(`Copied ${indexPath} -> ${htmlPath}`);
  }
});

// Ensure CNAME and .nojekyll
fs.writeFileSync(path.join(outDir, 'CNAME'), 'adarsh.digitalproductsolutions.in\n');
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');
console.log('Postbuild completed successfully: CNAME and .nojekyll verified.');

