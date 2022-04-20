import React from "react";
import { Tracklist } from './Tracklist';
import './Searchresult.css';


export class SearchResult extends React.Component{
    render(){
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                    <Tracklist />
                </div>
        );
    }
}