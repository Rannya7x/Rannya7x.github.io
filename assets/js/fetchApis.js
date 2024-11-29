export default async function fetchImages() {
  try {
    const response = await fetch("https://imersao-alura-backend.onrender.com/posts"); 
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
  
}
