import React from "react";

import Unsplash from '../API/Unsplash'
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component{

    state = {images : [] }
    onSearchSubmit = async term => {
        
            const response = await Unsplash.get('/search/photos',{
            params :{query: term}
        })
   
        this.setState({images : response.data.results})
        console.log(response.data.results);
    }
    render()
    {
        return(
                <>
                <div className="ui container" style={{marginTop:"20px"}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    Found : {this.state.images.length} Images
                    <ImageList images={this.state.images}/>
                </div>
                </>
            )
    }
}
export default App;