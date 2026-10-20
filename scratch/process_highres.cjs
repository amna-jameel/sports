const sharp = require('sharp');
const path = require('path');

async function processHighRes() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');
  const posterPath = path.join(assetsDir, 'source_team_kit_poster.png');

  const meta = await sharp(posterPath).metadata();
  const pw = meta.width;
  const ph = meta.height;

  // Function to extract, upscale 3x with lanczos3, sharpen, and save
  async function extractItem(crop, outName, resizeWidth = 600) {
    await sharp(posterPath)
      .extract(crop)
      .resize({ width: resizeWidth, kernel: sharp.kernel.lanczos3 })
      .sharpen()
      .toFile(path.join(assetsDir, outName));
  }

  // 1. Cap
  await extractItem({
    left: Math.floor(pw * 0.60),
    top: Math.floor(ph * 0.245),
    width: Math.floor(pw * 0.355),
    height: Math.floor(ph * 0.088)
  }, 'apex_team_cap_clean.png', 500);

  // 2. Shorts
  await extractItem({
    left: Math.floor(pw * 0.58),
    top: Math.floor(ph * 0.334),
    width: Math.floor(pw * 0.40),
    height: Math.floor(ph * 0.105)
  }, 'apex_yellow_shorts_clean.png', 600);

  // 3. Socks
  await extractItem({
    left: Math.floor(pw * 0.61),
    top: Math.floor(ph * 0.435),
    width: Math.floor(pw * 0.35),
    height: Math.floor(ph * 0.118)
  }, 'apex_team_socks_clean.png', 500);

  // 4. Track Trousers
  await extractItem({
    left: Math.floor(pw * 0.62),
    top: Math.floor(ph * 0.555),
    width: Math.floor(pw * 0.33),
    height: Math.floor(ph * 0.235)
  }, 'apex_track_trousers_clean.png', 500);

  // 5. Track Jacket
  await extractItem({
    left: Math.floor(pw * 0.025),
    top: Math.floor(ph * 0.285),
    width: Math.floor(pw * 0.51),
    height: Math.floor(ph * 0.25)
  }, 'apex_track_jacket_clean.png', 600);

  // 6. Yellow Match Jersey (Top Left)
  await extractItem({
    left: Math.floor(pw * 0.02),
    top: Math.floor(ph * 0.02),
    width: Math.floor(pw * 0.48),
    height: Math.floor(ph * 0.23)
  }, 'apex_yellow_jersey_clean.png', 600);

  // Also update category images with the genuine product photographs!
  // T-shirts category -> Flame Polo or Cream Polo
  await sharp(path.join(assetsDir, 'source_flame_polo.png'))
    .resize(600, 450, { fit: 'cover' })
    .toFile(path.join(catDir, 'tshirts.jpg'));

  // Trousers category -> Yellow Track Trousers
  await sharp(path.join(assetsDir, 'apex_track_trousers_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'trousers.jpg'));

  // Shorts category -> Yellow Match Shorts
  await sharp(path.join(assetsDir, 'apex_yellow_shorts_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'shorts.jpg'));

  // Caps category -> Team Cap
  await sharp(path.join(assetsDir, 'apex_team_cap_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'caps.jpg'));

  // Socks category -> Team Socks
  await sharp(path.join(assetsDir, 'apex_team_socks_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'socks.jpg'));

  console.log('High-res cleanup and category image synchronization complete!');
}

processHighRes().catch(console.error);
