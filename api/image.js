const draw = (hex) => {
  const { createCanvas } = require('canvas');

  const canvas = createCanvas(1000, 1000);
  const context = canvas.getContext('2d');

  context.fillStyle = `#${hex}`;
  context.fillRect(0, 0, 1000, 1000);

  const buffer = canvas.toBuffer('image/png');

  return buffer.toString('base64');
};

module.exports = (req, res) => {
  const hex = 'ff0000';

  res.status(200).json({
    header: { 'Content-Type': 'image/png' },
    body: draw(hex),
  });

  // draw(hex).pngStream().pipe(res);
};
