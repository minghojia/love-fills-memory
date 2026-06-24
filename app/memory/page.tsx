const handleSave = async () => {
  // 1️⃣ save memory
  const res = await fetch("/api/save-memory", {
    method: "POST",
    body: JSON.stringify({
      content,
      emotion,
    }),
  });

  const memory = await res.json();

  // 2️⃣ trigger AI summary
  await fetch("/api/summarize", {
    method: "POST",
    body: JSON.stringify({
      memoryId: memory.id,
      content,
    }),
  });

  alert("已儲存並生成摘要");
};