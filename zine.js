document.addEventListener("DOMContentLoaded", () => {
  const socket = new WebSocket("wss://okoge.onrender.com");

  socket.onopen = () => {
    console.log("✅ WebSocket接続成功");
  };

  socket.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log("📥 データ受信:", data);

      if (data.type === "zine_overlay") {
        document.getElementById("poem").textContent = data.poem || "";
        document.getElementById("failure").textContent = (data.failure || "") + "時のおこげ";
        document.getElementById("fire").textContent = data.fire || "";
        console.log("✅ DOMに反映完了");
      } else {
        console.warn("⚠️ 未処理のtype:", data.type);
      }

    } catch (e) {
      console.error("❌ JSONパースエラー:", e);
    }
  };

  socket.onerror = (error) => {
    console.error("❌ WebSocket エラー:", error);
  };

  socket.onclose = () => {
    console.warn("⚠️ WebSocketが切断されました");
  };
});
