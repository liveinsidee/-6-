// App.js

import { useState } from "react";
import "./App.css";

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState("https://localhost:123");

    const roomBiographies = {
        general: "live_insidee - It's me!",
        travel: "Travel Room - Share your travel experiences.",
        music: "Music Room - Discuss your favorite music.",
        dance: "Dance Room - Connect with fellow dancers.",
        live_insidee: "live_insidee - Connect with me on Instagram, TikTok, and Telegram!",
    };

    return (
        <div className="chat-room">
            <h1>Welcome to the {roomId} room</h1>
            <p>{roomBiographies[roomId]}</p>
            {roomId === "music" && (
                <p>
                    Check out my music collection on Spotify:{" "}
                    <a
                        href="https://open.spotify.com/playlist/37i9dQZF1E39lFq30neXFj?si=tio0l1QnSiiC7n8_B2BmRQ&pi=e-bbt2aKwPRK-A"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Spotify Collection
                    </a>
                </p>
            )}
            {roomId === "travel" && (
                <>
                    <p>I've been to England and experienced its rich history and culture.</p>
                    <p>I've also visited Egypt and marveled at the ancient wonders.</p>
                </>
            )}
            {roomId === "live_insidee" && (
                <>
                    <p>Instagram: <a href="https://goo.su/cgxa" target="_blank" rel="noopener noreferrer">https://goo.su/cgxa</a></p>
                    <p>TikTok: <a href="https://goo.su/In1Dm" target="_blank" rel="noopener noreferrer">https://goo.su/In1Dm</a></p>
                    <p>Telegram: <a href="https://goo.su/vfciQE" target="_blank" rel="noopener noreferrer">https://goo.su/vfciQE</a></p>
                </>
            )}
        </div>
    );
}

export default function App() {
    const [roomId, setRoomId] = useState("general");
    const [show, setShow] = useState(false);

    return (
        <div className="app-container">
            <label>
                Choose room : {""}
                <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="room-selector"
                >
                    {/* Опция "live_insidee" удалена */}
                    <option value="travel">Travel</option>
                    <option value="music">Music</option>
                    <option value="dance">Dance</option>
                    <option value="live_insidee">Live Insidee</option>
                </select>
            </label>
            <button onClick={() => setShow(!show)} className="toggle-chat-button">
                {show ? "Close chat" : "Open Chat"}
            </button>
            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </div>
    );
}
