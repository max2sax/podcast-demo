import React from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

// class SearchBar extends React.Component {
//     componentDidMount(){};
//     componentDidUpdate(){};
//     render(){
//         // text area with magnifying glass icon:k
//     };
// }
// todo: add hooks for state
// - state will store search results that display a list of auto complete
export default function SearchBar() {

    return (
        <div id="podcast-search-bar">
            <Input
                id="search-input"
                type="text"
                endAdornment={
                    <InputAdornment position="end">
                        <SearchIcon />
                    </InputAdornment>
                }
            />
        </div>
    );
}
