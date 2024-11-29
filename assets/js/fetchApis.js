export default async function fetchImages() {
  try {
    const response = await fetch(process.env.API_URL); 
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
}
