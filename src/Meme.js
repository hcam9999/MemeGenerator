
import React from "react"

const Meme = () => {  
    const [meme, setMeme] = React.useState ( {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

const [allMemes, setallMemes] = React.useState([])
    
React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then (res => res.json())
            .then(data => setallMemes(data.data.memes))
    },[])
   

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
           ...prevMeme,
           [name] : value
        }))
    }

    function getMemeImage () {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme((prevMeme) => ({
            ...prevMeme, randomImage: url
        }))
        
    }
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    onChange={handleChange}
                    placeholder="Bottom text"
                    name="bottomText"
                    value={meme.bottomText}
                    className="form--input"
                />
                <button 
                    onClick={getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}

export default Meme
