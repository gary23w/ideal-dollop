import React from 'react';
//import { isPropertySignature } from 'typescript';
import './searcharea.css';


interface SearchListProps {
    items: {
        id: string, 
        text: string,
        response: string
    }[];
    onDeleteSearch: (id: string) => void;
}


const SearchList: React.FC<SearchListProps> = props  => {
    const followLink = (test: string) => {
        console.log("FOLLOW LINK?" + test);
        window.open(test);
    }
    return (
     <ul>
        {props.items.map(r => (
             <li key={r.id}>
                 <span>
                       {r.text}
                       <p>
                       RESPONSE: {r.response}
                       </p>

                 </span>
                 <button onClick={() => followLink(r.text)}>Follow</button>
              </li>
        ))}
    </ul>
    );

};

export default SearchList;