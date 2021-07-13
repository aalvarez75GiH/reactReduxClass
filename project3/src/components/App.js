import React from 'react'
import SearchBar from './searchBar'
import unsplash from '../api/unsplash'
import ImageList from './imageList'

class App extends React.Component  {
    state = {
        images:[]
    }

    onSearchSubmit = async(term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}, 
        })
    this.setState({ images: response.data.results })
    console.log(this.state.images)
}
    render(){
        return (
            <div>
                <SearchBar onSearch = { this.onSearchSubmit }/>
                <ImageList images = { this.state.images } />
                
            </div>
        )
    }
}
 
export default App