import { useEffect, useState } from "react";

export default function joker() {
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let response = await fetch(URL);
    const responsejson = await response.json();
    // console.log(await response.json());
    // console.log(response)
    setJoke({ setup: responsejson.setup, punchline: responsejson.punchline });
  };

  useEffect(() => {
    async function setData() {
      let response = await fetch(URL);
      const responsejson = await response.json();
      setJoke({ setup: responsejson.setup, punchline: responsejson.punchline });
    }
    setData();
  }, []);

  const [joke, setJoke] = useState({}); //we cant access async function inside useState

  return (
    <div>
      <h3>Joker</h3>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
      <button onClick={getJoke}>New Joke</button>
    </div>
  );
}
