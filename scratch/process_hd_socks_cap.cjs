const sharp = require('sharp');
const path = require('path');

async function processHDSocksAndCap() {
  const assetsDir = path.join('D:', 'sports', 'public', 'assets', 'products');
  const catDir = path.join('D:', 'sports', 'public', 'assets', 'categories');

  const socksSrc = path.join(assetsDir, 'source_hd_socks.jpg');
  const capSrc = path.join(assetsDir, 'source_hd_cap.jpg');

  const sMeta = await sharp(socksSrc).metadata();
  console.log('Socks meta:', sMeta.width, sMeta.height);

  const cMeta = await sharp(capSrc).metadata();
  console.log('Cap meta:', cMeta.width, cMeta.height);

  // 1. Process HD Socks for Product Catalogue (4:5 aspect ratio)
  await sharp(socksSrc)
    .resize(800, 1000, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(path.join(assetsDir, 'apex_hd_embossed_socks.jpg'));

  // 2. Process HD Cap for Product Catalogue (4:5 aspect ratio)
  await sharp(capSrc)
    .resize(800, 1000, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(path.join(assetsDir, 'apex_hd_embroidered_cap.jpg'));

  // 3. Update Categories (4:3 aspect ratio)
  await sharp(capSrc)
    .resize(600, 450, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(path.join(catDir, 'caps.jpg'));

  await sharp(socksSrc)
    .resize(600, 450, {
      fit: 'cover',
      position: 'center'
    })
    .toFile(path.join(catDir, 'socks.jpg'));

  console.log('HD socks and cap processing complete!');
}

processHDSocksAndCap().catch(console.error);
