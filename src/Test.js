import axios from "axios";
import React, { useEffect, useState } from "react"

function Test() {

    const [joke, setjoke] = useState("");

    const fetchjk = () => {
        axios.get(" https://icanhazdadjoke.com/", { headers: { Accept: "application/json" } }).then(res => setjoke(res.data)).catch(err => console.log(err))
    }

    return (
        <div>
            <div class="card text-center">
                <div class="card-header">
                    Joke
  </div>
                <div class="card-body">
                    <h5 class="card-title">Generateur Jokes</h5>
                    <p class="card-text">{joke.joke}</p>
                    <a className="btn btn-primary" onClick={fetchjk}>get a joke</a>
                </div>
            </div>
        </div>
    )
}
export default Test;