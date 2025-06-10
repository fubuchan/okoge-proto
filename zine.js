document.addEventListener("DOMContentLoaded", () => {
  console.log("🟡 DOMContentLoaded 発火");

  const socket = new WebSocket("wss://okoge.onrender.com");

  socket.onopen = () => {
    console.log("✅ WebSocket接続成功");
    alert("✅ WebSocket接続成功");
  };
});
