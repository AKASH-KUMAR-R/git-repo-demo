
const PlayList = () => {

    const playList = [
        { id: '1', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '2', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '3', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '4', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '5', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '1', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '2', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '3', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '4', artist: 'abcd', songName: 'hello world', album: 'from1' },
        { id: '5', artist: 'abcd', songName: 'hello world', album: 'from1' }
    ];

    return (
        <div className="playlist-container">
            <div className="playlist-collection">
                {playList.map((eachSong) => (
                    <div key={eachSong.id} className="eachsong-details">
                        <span>{eachSong.artist}</span>
                        <span>{eachSong.songName}</span>
                        <span>{eachSong.album}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlayList;