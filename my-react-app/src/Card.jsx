import profilePic from './assets/unnamed.jpg';

function Card() {
    return (
        <div className='card'>
            <img className='card-img' src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make YouTube videos and play video games</p>
        </div>
    );
}

export default Card