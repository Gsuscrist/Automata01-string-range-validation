import main from '../assets/Img/bar status 0.svg'
import stg1 from '../assets/Img/bar status 1.svg'
import stg2a from '../assets/Img/bar status 2a.svg'
import stg2b from '../assets/Img/bar status 2b.svg'
import stg3a from '../assets/Img/bar status 3a.svg'
import stg3b from '../assets/Img/bar status 3b.svg'
import stg4a from '../assets/Img/bar status 4a.svg'
import stg4b from '../assets/Img/bar status 4b.svg'
import stg5a from '../assets/Img/bar status 5a.svg'
import stg5b from '../assets/Img/bar status 5b.svg'
import stg6a from '../assets/Img/bar status 6a.svg'
import stg6b from '../assets/Img/bar status 6b.svg'
import stg7a from '../assets/Img/bar status 7a.svg'
import stg7b from '../assets/Img/bar status 7b.svg'
import stg8a from '../assets/Img/bar status 8a.svg'
import stg8b from '../assets/Img/bar status 8b.svg'
import stg9a from '../assets/Img/bar status 9a.svg'
import stg9b from '../assets/Img/bar status 9b.svg'
import stg10a from '../assets/Img/bar status 10a.svg'
import stg10b from '../assets/Img/bar status 10b.svg'
import stg11a from '../assets/Img/bar status 11a.svg'
import stg11b from '../assets/Img/bar status 11b.svg'
import stg12a from '../assets/Img/bar status 12a.svg'
import stg12b from '../assets/Img/bar status 12b.svg'
import stg13a from '../assets/Img/bar status 13a.svg'
import stg13b from '../assets/Img/bar status 13b.svg'
import stg14a1 from '../assets/Img/bar status 14a-1.svg'
import stg14a2 from '../assets/Img/bar status 14a-2.svg'
import stg14a3 from '../assets/Img/bar status 14a-3.svg'
import stg14b1 from '../assets/Img/bar status 14b-1.svg'
import stg14b2 from '../assets/Img/bar status 14b-2.svg'
import stg14b3 from '../assets/Img/bar status 14b-3.svg'
import stgfa1 from '../assets/Img/bar status f-a-1.svg'
import stgfa2 from '../assets/Img/bar status f-a-2.svg'
import stgfa3 from '../assets/Img/bar status f-a-3.svg'
import stgfb1 from '../assets/Img/bar status f-b-1.svg'
import stgfb2 from '../assets/Img/bar status f-b-2.svg'
import stgfb3 from '../assets/Img/bar status f-b-3.svg'
//styles
import '../assets/Css/automata.css'
//utilities
import {useEffect, useState} from "react";


export const Automata=()=>{
const [keyword,setKeyword]= useState("");
const [automataPath, setAutomataPath]=useState('');
const [string, setString]=useState("");

useEffect(()=>{
    const automataStage={
        default: main,
        stg1: stg1,
        stg2a: stg2a, stg2b:stg2b,
        stg3a: stg3a, stg3b:stg3b,
        stg4a: stg4a, stg4b:stg4b,
        stg5a: stg5a, stg5b: stg5b,
        stg6a: stg6a, stg6b: stg6b,
        stg7a: stg7a, stg7b: stg7b,
        stg8a: stg8a, stg8b: stg8b,
        stg9a: stg9a, stg9b: stg9b,
        stg10a: stg10a, stg10b: stg10b,
        stg11a: stg11a, stg11b: stg11b,
        stg12a: stg12a, stg12b: stg12b,
        stg13a: stg13a, stg13b: stg13b,
        stg14a1: stg14a1, stg14b1: stg14b1,
        stg14a2: stg14a2, stg14b2: stg14b2,
        stg14a3: stg14a3, stg14b3: stg14b3,
        stgfa1: stgfa1, stgfb1: stgfb1,
        stgfa2: stgfa2, stgfb2: stgfb2,
        stgfa3: stgfa3, stgfb3: stgfb3,


    };
    if(automataStage[keyword]){
        setAutomataPath(automataStage[keyword])
    }else {setAutomataPath(automataStage.default)}
},[keyword]);

const handlerStringChange=(e)=>{
    setString(e.target.value);
}

const handlerStart=(e)=>{
    e.preventDefault()
    if(!string || string.length!=9){
        console.log('error')
    }
    setKeyword("stg1")
}

const handlerReset=(e)=>{
    e.preventDefault()
    //hacer confirmacion para limpiar
    setKeyword("")

}
    return(
        <>
        <div className={"container"}>
            <div className={"row"}>
            <div className={"automata-container col-12"}>
                {/*imagen autamata*/}
                <img src={automataPath} className={"automata-img"}/>

            </div>
            <div className={"evaluation-container container col-lg-12"}>
                <div className={"row"}>
                   <div className={"status-container col-9"}>
                   {/*imagen*/}
                       <h3>imagen</h3>
                   </div>

                   <div className={"expression-container col"}>
                       <div className={"string-container"}>
                            {/*input*/}
                             <div className={"form-floating mb-3"}>
                                 <input type={"text"} id={"floatingInput"} className={"form-control"}
                                        placeholder={"string"} onChange={handlerStringChange}
                                        onInput={(e)=>{
                                     e.target.value=e.target.value.toUpperCase();
                                 }}/>
                                 <label htmlFor={"chain"} className={"input-label"}>String  ||   Cadena</label>
                             </div>
                            <div className={"evaluation-options"}>
                                <div>
                                    <button type={"button"} className={"btn btn-outline-light"}
                                    onClick={handlerStart}>Start</button>
                                    <button type={"button"} className={"btn btn-outline-light"}
                                    onClick={handlerReset}>Reset</button>
                                </div>
                                <div>
                                    <button type={"button"} className={"btn btn-outline-light"}>Next</button>
                                </div>


                            </div>

                        </div>
                        <div className={"info-container"}>
                            {/*gramatica y notacion*/}
                            <h3>notacion</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        <div/>
        </>
    )
}
