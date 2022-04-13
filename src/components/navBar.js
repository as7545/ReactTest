import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Weather App</h1>
            </div>

            <div className="col-md-6">
                <form className="region" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="regioninput" placeholder="Enter city Name" onChange={(e) => { props.changeRegion(e.target.value) }} />
                  <input type="submit" className='btn' onChange={(e) => { props.changeRegion(e.target.value) }}/>
                
                </form>
            </div>

        </div>
    )
}