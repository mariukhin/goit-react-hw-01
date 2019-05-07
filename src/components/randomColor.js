export default function getRandomColor() {
  const letters = '0123456789ABCDEF'.split('');
  let color = '#';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
