export default function generateRandomCode(length = 4) {
  return Math.floor(1000 + Math.random() * 9000).toString();
}
