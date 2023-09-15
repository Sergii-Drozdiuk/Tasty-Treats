export async function getResByArea() {
  const response = await axios.get(`https://tasty-treats-backend.p.goit.global/api/areas`);
  return response;
}
