import React, { useRef } from 'react';
import data from './osint-links.json';
import './searcharea.css'


type NewSearchProps = {
    onAddSearch: (todoText: string) => void;
}

interface myObj {
  errorType: string
  url: string
  urlMain: string
  username_claimed: string
  username_unclaimed: string
}
let jsonString = JSON.stringify(data);
let obj: myObj[] = JSON.parse(jsonString)


const NewSearch: React.FC<NewSearchProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
    const searchSubmitHandler = (event: React.FormEvent)=> {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        console.log(enteredText);
        findPerson(enteredText);
        props.onAddSearch(enteredText);
    };

     const findPerson = (name: string) => {
        for(let i in obj) {  
            //console.log(obj[i]['url'].replace("{}", name));
            let final = obj[i]['url'];
            let replace = final.replace("{}", name);
            let response = checkUrl(replace);
            if(response) {
                props.onAddSearch(replace);
            } else {
                console.log("No response. Sorry");
            }
            console.log(replace);
        }
    }


    return (
    <form onSubmit={searchSubmitHandler}>
        <div className ="form-control">
            <label htmlFor='todo-text'>Name:</label>
            <input type='text' id='todo-text' ref={textInputRef}/>
        </div>
        <button type='submit'>Search</button>

    </form>
    );
};

async function checkUrl(url: string) {
    const headers = {
        'Access-Controll-Allow-Origin': '*',
        'Origin': 'moms basement',
        'User-Agent': 'Gary/5.0 (X11; Pwnux) Firefux/1.0',
        'Content-Type': 'application/react'
    }
    let response = await fetch(url, {headers});
    return response;
} 

export default NewSearch;