//使用 WebSocket 的網址向 Server 開啟連結
let ws = new WebSocket(
  "ws://127.0.0.1:9222/03a9b31f-518c-4dff-bca5-f4a36a0d9056"
  // "ws://127.0.0.1:9222/devtools/browser/ae8554ca-2afe-4d4f-9160-9fd78f81edc1"
);

//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
ws.onopen = () => {
  console.log("open connection");
};

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
  console.log("close connection");
};
