const socket = new WebSocket('wss://sassa12345.github.io/online-card-game/');

socket.onopen = () => {
    console.log('サーバーに接続されました');
};

socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'gameStarted') {
        document.getElementById('gameInfo').innerText = 'ゲームが開始されました！';
    } else if (data.type === 'error') {
        alert(data.message);
    }
};

document.getElementById('startGame').addEventListener('click', () => {
    // ゲーム開始のためのメッセージをサーバーに送信
    socket.send(JSON.stringify({ type: 'startGame' }));
});
