import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' }

    onInputChange = (event) => {
        const text = event.target.value;
        this.setState({ term: text });
        console.log(text);
    }

    render(){
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}></input>
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;