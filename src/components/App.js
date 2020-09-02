import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = { videos: [], videoSelect: null }

    componentDidMount(){
        this.onTermSubmit('Formula 1');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: { 
                q: term
            }
        })

        this.setState(
            { 
                videos: response.data.items,
                videoSelect: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ videoSelect: video });
    };
    
    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.videoSelect}/>
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;