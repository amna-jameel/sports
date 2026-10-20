const sharp = require('sharp');
const path = require('path');

async function processGladiatorAndSharpen() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');

  // 1. Process Gladiator Template
  const gMeta = await sharp(path.join(assetsDir, 'source_gladiator_sublimation.png')).metadata();
  const gw = gMeta.width;
  const gh = gMeta.height;

  // Front Jersey (Upper Left quadrant)
  await sharp(path.join(assetsDir, 'source_gladiator_sublimation.png'))
    .extract({
      left: Math.floor(gw * 0.20),
      top: Math.floor(gh * 0.12),
      width: Math.floor(gw * 0.28),
      height: Math.floor(gh * 0.38)
    })
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_gladiator_jersey.png'));

  // Gladiator Track Trousers (Bottom Center)
  await sharp(path.join(assetsDir, 'source_gladiator_sublimation.png'))
    .extract({
      left: Math.floor(gw * 0.36),
      top: Math.floor(gh * 0.49),
      width: Math.floor(gw * 0.23),
      height: Math.floor(gh * 0.49)
    })
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_gladiator_trousers.png'));

  // 2. High-Quality enhancements for Yellow Kit items
  // Yellow Flame Polo is already HD 625x532, ensure it has a sleek neutral dark backing
  await sharp(path.join(assetsDir, 'apex_flame_polo_front.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_flame_polo_hd.png'));

  // Cream & Black Polo
  await sharp(path.join(assetsDir, 'apex_cream_polo_front.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_cream_polo_hd.png'));

  // Black & Green Naveed 56 Polo
  await sharp(path.join(assetsDir, 'apex_black_green_polo_front.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_black_green_polo_hd.png'));

  // Teal Geometric Polo
  await sharp(path.join(assetsDir, 'apex_teal_geometric_polo.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_teal_geometric_polo_hd.png'));

  // Teal Track Trousers
  await sharp(path.join(assetsDir, 'apex_teal_track_trousers.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_teal_track_trousers_hd.png'));

  // Teal Team Cap
  await sharp(path.join(assetsDir, 'apex_teal_team_cap.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_teal_team_cap_hd.png'));

  // Yellow Match Shorts
  await sharp(path.join(assetsDir, 'apex_yellow_shorts_clean.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_yellow_shorts_hd.png'));

  // Yellow Team Socks
  await sharp(path.join(assetsDir, 'apex_team_socks_clean.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_team_socks_hd.png'));

  // Yellow Track Jacket
  await sharp(path.join(assetsDir, 'apex_track_jacket_clean.png'))
    .resize(600, 750, { fit: 'contain', background: '#121212' })
    .toFile(path.join(assetsDir, 'apex_track_jacket_hd.png'));

  // 3. Perfect HD Category Tiles for Explore The Collection:
  // T-shirts: Flame Polo HD
  await sharp(path.join(assetsDir, 'source_flame_polo.png'))
    .resize(600, 450, { fit: 'cover' })
    .toFile(path.join(catDir, 'tshirts.jpg'));

  // Trousers: Teal Track Trousers
  await sharp(path.join(assetsDir, 'apex_teal_track_trousers.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'trousers.jpg'));

  // Shorts: Yellow Shorts
  await sharp(path.join(assetsDir, 'apex_yellow_shorts_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'shorts.jpg'));

  // Caps: Teal Team Cap
  await sharp(path.join(assetsDir, 'apex_teal_team_cap.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'caps.jpg'));

  // Socks: Yellow & Black Technical Sports Socks
  await sharp(path.join(assetsDir, 'apex_team_socks_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'socks.jpg'));

  console.log('Gladiator extractions and HD standardization complete!');
}

processGladiatorAndSharpen().catch(console.error);
