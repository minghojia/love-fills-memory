const API_URL = "http://localhost:3001";

export async function getMemories() {
  const res = await fetch(`${API_URL}/memory`);
  return res.json();
}

export async function createMemory(text: string) {
  const res = await fetch(`${API_URL}/memory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  return res.json();
}