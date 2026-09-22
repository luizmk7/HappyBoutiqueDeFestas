import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { getAssetSvg } from './assets-generator.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Asset route: serves physical asset if present, otherwise provides thematic vector artwork
app.get('/assets/:filename', (req, res, next) => {
  const filename = req.params.filename.split('?')[0];
  const filePath = path.join(__dirname, 'assets', filename);
  if (fs.existsSync(filePath)) {
    res.setHeader('Cache-Control', 'no-cache, must-revalidate');
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
      res.setHeader('Content-Type', 'image/jpeg');
    } else if (filename.endsWith('.png')) {
      res.setHeader('Content-Type', 'image/png');
    }
    return res.sendFile(filePath);
  }
  const svg = getAssetSvg(filename);
  if (svg) {
    res.setHeader('Content-Type', 'image/svg+xml; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    return res.send(svg);
  }
  next();
});

app.use(express.static(__dirname));

// Serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
