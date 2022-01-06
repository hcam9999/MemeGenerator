import trollface from './troll-face.png'
const Header = () => {
    return (
        <header className="header">
            <img 
                src={trollface} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">This version uses API</h4>
        </header>
    )
}

export default Header
