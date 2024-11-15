import profilePic from './assets/Profile-picture.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className='card-title'>Ajit Singh Bal</h2>
            <p className='card-text'>I am a student and a programmer</p>
        </div>

    );
}
export default Card