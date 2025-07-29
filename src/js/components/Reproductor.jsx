import React from 'react'

const Reproductor = (props) => {

    const playClasses = {
        play: "fa-solid fa-play",
        pause: "fa-solid fa-pause"
    }

    return (

        <nav className="navbar navbar-dark  reproductor">
            <form className="container-fluid d-flex justify-content-center">
                <div>
                    <button type="button" onClick={props.prevSong} className="btn btn-outline-light rounded-circle mx-2">
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button type="button" onClick={props.togglePlay} className="btn btn-outline-light rounded-circle mx-2">
                        <i className={`${playClasses[props.playing]}`}></i>
                    </button>
                    <button type="button" onClick={props.nextSong} className="btn btn-outline-light rounded-circle mx-2">
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
                </div>
            </form>
        </nav >
    )
}

export default Reproductor