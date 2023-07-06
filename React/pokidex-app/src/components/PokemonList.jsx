import React,{useState,useEffect} from 'react'
import PokemonCard from './PokemonCard';
import axios from "axios";
const PokemonList = () => {
    const[pokemons,setPokemons] = useState([]);

    const[currectUrl,setCurrentURl] = useState("https://pokeapi.co/api/v2/pokemon/");

    const[nextPageUrl,setNextPageURl] = useState(null);

    const[prevPageUrl,setprevPageURl] = useState(null);

    const [isLoading,setIsLoading] = useState
    (true);

    

    useEffect(()=>{
        setIsLoading(true);
        const controller = new AbortController();
        let signal = controller.signal;
        fetch(currectUrl,{
            method:"get",
            signal:signal,
        }).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data);
        setIsLoading(false);
        setPokemons(data.results);
        setNextPageURl(data.next);
        setprevPageURl(data.previous);
    });
    return ()=> controller.abort();
    // let cancel = null;
    // axios(currectUrl,{
    //     cancelToken : new axios.CancelToken(c=>cancel=c)
    // }).then(res=>{
    //     console.log(res.data);
    //     setIsLoading(false);
    //     setPokemons(res.data.results);
    //     setNextPageURl(res.data.next);
    //     setprevPageURl(res.data.previous);
    // })
    // return ()=> cancel();
    },[currectUrl]);
  return (
    <div>
        {isLoading?<h1>Loading...</h1>:
            pokemons.map((pokemon)=>{
                return <PokemonCard key={pokemon.name} name ={pokemon.name}></PokemonCard>
            })
        }
       {prevPageUrl &&  <button onClick={()=>{
            setCurrentURl(prevPageUrl);
        }}>Previous</button>}
        {nextPageUrl && <button onClick={()=>{
            setCurrentURl(nextPageUrl);
        }}>Next</button>}
    </div>
  )
}

export default PokemonList