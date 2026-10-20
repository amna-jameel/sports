const sharp = require('sharp');
const path = require('path');

async function processNewKit() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');

  // 1. Inspect metadata for all new assets
  const meta1 = await sharp(path.join(assetsDir, 'source_green_yellow_naveed56.png')).metadata();
  console.log('Green Yellow Shirt:', meta1.width, meta1.height);

  const meta2 = await sharp(path.join(assetsDir, 'source_black_green_polo_56.png')).metadata();
  console.log('Black Green Naveed 56 Polo:', meta2.width, meta2.height);

  const meta3 = await sharp(path.join(assetsDir, 'source_teal_kit_poster.png')).metadata();
  console.log('Teal Team Kit Poster:', meta3.width, meta3.height);

  const meta4 = await sharp(path.join(assetsDir, 'source_gladiator_sublimation.png')).metadata();
  console.log('Gladiator Sublimation Template:', meta4.width, meta4.height);

  // 2. Extract Green & Yellow Naveed 56 Shirt - Front view (Left half)
  const gFrontW = Math.floor(meta1.width * 0.58);
  await sharp(path.join(assetsDir, 'source_green_yellow_naveed56.png'))
    .extract({ left: 0, top: 0, width: gFrontW, height: meta1.height })
    .toFile(path.join(assetsDir, 'apex_green_yellow_front.png'));

  // 3. Extract Black & Green Naveed 56 Polo - Front view (Left half)
  const bgFrontW = Math.floor(meta2.width * 0.52);
  const bgMainH = Math.floor(meta2.height * 0.82); // exclude bottom thumbnail strip
  await sharp(path.join(assetsDir, 'source_black_green_polo_56.png'))
    .extract({ left: 0, top: Math.floor(meta2.height * 0.05), width: bgFrontW, height: bgMainH })
    .toFile(path.join(assetsDir, 'apex_black_green_polo_front.png'));

  // 4. Extract from Teal Kit Poster (source_teal_kit_poster.png)
  const tw = meta3.width;
  const th = meta3.height;

  // Teal Sublimated Polo (Left half, excluding top & bottom banners)
  await sharp(path.join(assetsDir, 'source_teal_kit_poster.png'))
    .extract({
      left: Math.floor(tw * 0.02),
      top: Math.floor(th * 0.04),
      width: Math.floor(tw * 0.46),
      height: Math.floor(th * 0.90)
    })
    .toFile(path.join(assetsDir, 'apex_teal_geometric_polo.png'));

  // Teal Track Trousers (Center)
  await sharp(path.join(assetsDir, 'source_teal_kit_poster.png'))
    .extract({
      left: Math.floor(tw * 0.46),
      top: Math.floor(th * 0.05),
      width: Math.floor(tw * 0.28),
      height: Math.floor(th * 0.88)
    })
    .toFile(path.join(assetsDir, 'apex_teal_track_trousers.png'));

  // Teal Team Cap (Bottom Right)
  await sharp(path.join(assetsDir, 'source_teal_kit_poster.png'))
    .extract({
      left: Math.floor(tw * 0.64),
      top: Math.floor(th * 0.60),
      width: Math.floor(tw * 0.34),
      height: Math.floor(th * 0.34)
    })
    .toFile(path.join(assetsDir, 'apex_teal_team_cap.png'));

  // 5. Update Categories with pristine High-Res Garments:
  // T-Shirts: Black & Green Polo or Flame Polo
  await sharp(path.join(assetsDir, 'apex_black_green_polo_front.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'tshirts.jpg'));

  // Trousers: HD Teal Track Trousers!
  await sharp(path.join(assetsDir, 'apex_teal_track_trousers.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'trousers.jpg'));

  // Shorts: Yellow Match Shorts with enhanced background containment
  await sharp(path.join(assetsDir, 'apex_yellow_shorts_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'shorts.jpg'));

  // Caps: HD Teal Team Cap!
  await sharp(path.join(assetsDir, 'apex_teal_team_cap.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'caps.jpg'));

  // Socks: Team Socks
  await sharp(path.join(assetsDir, 'apex_team_socks_clean.png'))
    .resize(600, 450, { fit: 'contain', background: '#121212' })
    .toFile(path.join(catDir, 'socks.jpg'));

  console.log('All new product extractions and category assets completed successfully!');
}

processNewKit().catch(console.error);
