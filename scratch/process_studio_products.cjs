const sharp = require('sharp');
const path = require('path');

async function processStudioProducts() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');

  // 1. Black Player 18 Track Trousers
  await sharp(path.join(assetsDir, 'source_hd_black_trousers_18.jpg'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .toFile(path.join(assetsDir, 'apex_hd_black_trousers_18.jpg'));

  // 2. White Pinstripe Player 18 Shirt (Crop front view - left half)
  const wMeta = await sharp(path.join(assetsDir, 'source_hd_white_shirt_18.jpg')).metadata();
  const wFrontW = Math.floor(wMeta.width * 0.52);
  await sharp(path.join(assetsDir, 'source_hd_white_shirt_18.jpg'))
    .extract({ left: 0, top: 0, width: wFrontW, height: wMeta.height })
    .resize(800, 1000, { fit: 'contain', background: '#ececec' })
    .toFile(path.join(assetsDir, 'apex_hd_white_shirt_18.jpg'));

  // 3. Black Match Shorts 18
  await sharp(path.join(assetsDir, 'source_hd_black_shorts_18.jpg'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .toFile(path.join(assetsDir, 'apex_hd_black_shorts_18.jpg'));

  // 4. Teal Podium Track Trousers
  await sharp(path.join(assetsDir, 'source_hd_teal_trousers.jpg'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .toFile(path.join(assetsDir, 'apex_hd_teal_trousers_podium.jpg'));

  // 5. Teal Geometric Team Cap
  await sharp(path.join(assetsDir, 'source_hd_teal_cap.jpg'))
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .toFile(path.join(assetsDir, 'apex_hd_teal_cap_podium.jpg'));

  // Update Category Cards to use these studio HD images:
  // T-Shirts: Naveed 56 or Flame Polo
  await sharp(path.join(assetsDir, 'source_flame_polo.png'))
    .resize(600, 450, { fit: 'cover' })
    .toFile(path.join(catDir, 'tshirts.jpg'));

  // Trousers: Black 18 Trousers
  await sharp(path.join(assetsDir, 'source_hd_black_trousers_18.jpg'))
    .resize(600, 450, { fit: 'cover', position: 'center' })
    .toFile(path.join(catDir, 'trousers.jpg'));

  // Shorts: Black 18 Shorts
  await sharp(path.join(assetsDir, 'source_hd_black_shorts_18.jpg'))
    .resize(600, 450, { fit: 'cover', position: 'center' })
    .toFile(path.join(catDir, 'shorts.jpg'));

  // Caps: Gold Embroidered Cap
  await sharp(path.join(assetsDir, 'source_hd_cap.jpg'))
    .resize(600, 450, { fit: 'cover', position: 'center' })
    .toFile(path.join(catDir, 'caps.jpg'));

  // Socks: Gold Pinstripe Socks
  await sharp(path.join(assetsDir, 'source_hd_socks.jpg'))
    .resize(600, 450, { fit: 'cover', position: 'center' })
    .toFile(path.join(catDir, 'socks.jpg'));

  console.log('All studio HD products processed successfully!');
}

processStudioProducts().catch(console.error);
