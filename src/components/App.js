// create your App component here
import React, {useState, useEffect} from 'react';


function App(){

    const [currentDog, changeDog] = useState({
        status : '',
        message : ''
    });

    const [showingImg, setShowingImg] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(dog => {
            changeDog({...dog});
            console.log(currentDog)
            console.log(dog)
            setShowingImg(true);
        })
    },[])


    return(
        <React.Fragment>
        {(showingImg)?
        <img src={currentDog.message} alt="A Random Dog"/>
        : <p>Loading...</p> 
        }
        </React.Fragment>
    )
};

export default App;