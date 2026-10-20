const sharp = require('sharp');
const path = require('path');

async function processImages() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');

  // 1. Inspect metadata
  const flameMeta = await sharp(path.join(assetsDir, 'source_flame_polo.png')).metadata();
  console.log('Flame Polo:', flameMeta.width, flameMeta.height);

  const creamMeta = await sharp(path.join(assetsDir, 'source_cream_black_polo.png')).metadata();
  console.log('Cream Polo:', creamMeta.width, creamMeta.height);

  const posterMeta = await sharp(path.join(assetsDir, 'source_team_kit_poster.png')).metadata();
  console.log('Team Kit Poster:', posterMeta.width, posterMeta.height);

  // 2. Crop Flame Polo front view
  // Flame polo image contains front on left, back on right
  const flameFrontWidth = Math.floor(flameMeta.width * 0.52);
  await sharp(path.join(assetsDir, 'source_flame_polo.png'))
    .extract({ left: 0, top: 0, width: flameFrontWidth, height: flameMeta.height })
    .toFile(path.join(assetsDir, 'apex_flame_polo_front.png'));

  // Full Flame Polo presentation (both sides)
  await sharp(path.join(assetsDir, 'source_flame_polo.png'))
    .toFile(path.join(assetsDir, 'apex_flame_polo_full.png'));

  // 3. Crop Cream & Black Polo front view
  const creamFrontWidth = Math.floor(creamMeta.width * 0.52);
  await sharp(path.join(assetsDir, 'source_cream_black_polo.png'))
    .extract({ left: 0, top: 0, width: creamFrontWidth, height: creamMeta.height })
    .toFile(path.join(assetsDir, 'apex_cream_polo_front.png'));

  // Full Cream & Black Polo presentation
  await sharp(path.join(assetsDir, 'source_cream_black_polo.png'))
    .toFile(path.join(assetsDir, 'apex_cream_polo_full.png'));

  // 4. Extract individual items from Yellow & Black Team Kit Poster
  const pw = posterMeta.width;
  const ph = posterMeta.height;

  // Tee front (Top Left)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.02),
      top: Math.floor(ph * 0.015),
      width: Math.floor(pw * 0.48),
      height: Math.floor(ph * 0.24)
    })
    .toFile(path.join(assetsDir, 'apex_yellow_tee.png'));

  // Jacket / Track Top (Middle Left)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.02),
      top: Math.floor(ph * 0.28),
      width: Math.floor(pw * 0.52),
      height: Math.floor(ph * 0.26)
    })
    .toFile(path.join(assetsDir, 'apex_track_jacket.png'));

  // Athletic Shorts (Middle Right)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.58),
      top: Math.floor(ph * 0.33),
      width: Math.floor(pw * 0.40),
      height: Math.floor(ph * 0.11)
    })
    .toFile(path.join(assetsDir, 'apex_yellow_shorts.png'));

  // Headwear / Cap (Middle Right above shorts)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.60),
      top: Math.floor(ph * 0.24),
      width: Math.floor(pw * 0.36),
      height: Math.floor(ph * 0.09)
    })
    .toFile(path.join(assetsDir, 'apex_team_cap.png'));

  // Performance Socks (Below shorts)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.60),
      top: Math.floor(ph * 0.43),
      width: Math.floor(pw * 0.36),
      height: Math.floor(ph * 0.12)
    })
    .toFile(path.join(assetsDir, 'apex_team_socks.png'));

  // Track Trousers (Bottom Right)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.62),
      top: Math.floor(ph * 0.55),
      width: Math.floor(pw * 0.34),
      height: Math.floor(ph * 0.24)
    })
    .toFile(path.join(assetsDir, 'apex_track_trousers.png'));

  // Long Sleeve Match Shirt (Bottom Left)
  await sharp(path.join(assetsDir, 'source_team_kit_poster.png'))
    .extract({
      left: Math.floor(pw * 0.02),
      top: Math.floor(ph * 0.57),
      width: Math.floor(pw * 0.52),
      height: Math.floor(ph * 0.22)
    })
    .toFile(path.join(assetsDir, 'apex_long_sleeve_jersey.png'));

  console.log('All individual product extractions completed successfully!');
}

processImages().catch(console.error);
