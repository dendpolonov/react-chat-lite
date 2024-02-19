import React from 'react';


function JoinBlock(){
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');

    return (
    <div className="join-block">
        <span className="header-form">Authorization</span>
        <input
            type="text"
            placeholder="Room ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
        />
        <input
            type="text"
            placeholder="Your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
        />
        <button className="btn">Sign In</button>
    </div>
    );
}

export default JoinBlock