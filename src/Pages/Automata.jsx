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
import Swal from "sweetalert2";


export const Automata=()=>{
const [keyword,setKeyword]= useState("");
const [automataPath, setAutomataPath]=useState('');
const [string, setString]=useState("");
const [stringList, setStringList]=useState([]);
const [evaluationOpc, setEvaluationOpc] = useState(0);

    //events handler
    const handlerStringChange=(e)=>{
        setString(e.target.value);
    }

    const handlerStart=(e)=>{
        e.preventDefault()
        if(!string){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingrese una cadena valida!',
                background: "#2c2c2c",
                color: "#fff",
                confirmButtonColor: "#850287",
                iconColor: "#850287"

            })
            return null;
        }
        setKeyword("stg1")
        setStringList(string.split(""))
        setEvaluationOpc(1)

    }

    const handlerReset=(e)=>{
        e.preventDefault()
        //hacer confirmacion para limpiar
        document.getElementById('floatingInput').value = '';
        setKeyword("")
        setStringList([])
        setEvaluationOpc(0)


    }

    //functions
    const getElementOf=(list)=>{
        let newElement = list.shift()
       if (newElement==null || newElement ===" "){
           Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Cadena Invalida, elementos faltantes!',
               background: "#2c2c2c",
               color: "#fff",
               confirmButtonColor: "#850287",
               iconColor: "#850287"

           })
       }else{
           return newElement;
       }
    }

    const validateLetterAtoZ=(element)=>{
        switch (element){
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "N":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "T":
            case "U":
            case "V":
            case "W":
            case "X":
            case "Y":
            case "Z":
                return true;
            default:
                return false;

        }
    }
    const validateLetterAtoE=(element)=>{
        switch (element){
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                return true;
            default:
                return false;
        }
    }
    const validateDigits0to9=(element)=>{
        switch (element) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return true;
            default:
                return false;
        }
    }
    const validateDigits1to9=(element)=>{
        switch (element) {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                return true;
            default:
                return false;
        }
    }


    const validateChainFast=()=>{
        if(stringList){
            let element = getElementOf(stringList);
            if (element=="C"){
                element = getElementOf(stringList);
                setKeyword("stg2a")
                if(element === "Z"){
                    setKeyword("stg3a")
                    element = getElementOf(stringList)
                    if(validateLetterAtoZ(element)){
                        setKeyword("stg4a")
                        element = getElementOf(stringList)
                        if(element==="-"){
                            setKeyword("stg5a")
                            element = getElementOf(stringList)
                            if(element==="0"){
                                setKeyword("stg6a")
                                element = getElementOf(stringList)
                                if(element==="0"){
                                    setKeyword("stg7a")
                                    element = getElementOf(stringList)
                                    if(validateDigits1to9(element)){
                                        setKeyword("stg8a")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14a1")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfa1")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptación',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: 'Transicion Q₈-Q₁₄ invalida!',
                                                text: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₇-Q₈ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else if(validateDigits1to9(element)){
                                    setKeyword("stg9a")
                                    element=getElementOf(stringList)
                                    if(validateDigits0to9(element)){
                                        setKeyword("stg10a")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14a2")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfa2")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptación',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: 'Transicion Q₁₀-Q₁₄ invalida!',
                                                text: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₉-Q₁₀ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        footer: 'Transicion Q₆-Q₇ o Q₉ invalida!',
                                        text: `Cadena ${string} Invalida`,
                                        background: "#2c2c2c",
                                        color: "#fff",
                                        confirmButtonColor: "#850287",
                                        iconColor: "#850287"

                                    })
                                }
                            }else if(validateDigits1to9(element)){
                                setKeyword("stg11a")
                                element =getElementOf(stringList)
                                if(validateDigits0to9(element)){
                                    setKeyword("stg12a")
                                    element =getElementOf(stringList)
                                    if(validateDigits0to9(element)){
                                        setKeyword("stg13a")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14a3")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfa3")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptación',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: 'Transicion Q₁₃-Q₁₄ invalida!',
                                                text: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₁₂-Q₁₃ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        footer: 'Transicion Q₁₁-Q₁₂ invalida!',
                                        text: `Cadena ${string} Invalida`,
                                        background: "#2c2c2c",
                                        color: "#fff",
                                        confirmButtonColor: "#850287",
                                        iconColor: "#850287"

                                    })
                                }
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    footer: 'Transicion Q₅-Q₆ o Q₁₁ invalida!',
                                    text: `Cadena ${string} Invalida`,
                                    background: "#2c2c2c",
                                    color: "#fff",
                                    confirmButtonColor: "#850287",
                                    iconColor: "#850287"

                                })
                            }
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                footer: 'Transicion Q₄-Q₅ invalida!',
                                text: `Cadena ${string} Invalida`,
                                background: "#2c2c2c",
                                color: "#fff",
                                confirmButtonColor: "#850287",
                                iconColor: "#850287"

                            })
                        }
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            footer: 'Transicion Q₃-Q₄ invalida!',
                            text: `Cadena ${string} Invalida`,
                            background: "#2c2c2c",
                            color: "#fff",
                            confirmButtonColor: "#850287",
                            iconColor: "#850287"

                        })
                    }
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        footer: 'Transicion Q₁-Q₃ invalida!',
                        text: `Cadena ${string} Invalida`,
                        background: "#2c2c2c",
                        color: "#fff",
                        confirmButtonColor: "#850287",
                        iconColor: "#850287"

                    })
                }
            }else
            if(element=="D"){
                setKeyword("stg2b")
                element = getElementOf(stringList);
                if(validateLetterAtoE(element)){
                    setKeyword("stg3b")
                    element = getElementOf(stringList)
                    if(validateLetterAtoZ(element)){
                        setKeyword("stg3b")
                        element = getElementOf(stringList)
                        if(element==="-"){
                            setKeyword("stg5b")
                            element = getElementOf(stringList)
                            if(element==="0"){
                                setKeyword("stg6b")
                                element = getElementOf(stringList)
                                if(element==="0"){
                                    setKeyword("stg7b")
                                    element = getElementOf(stringList)
                                    if(validateDigits1to9(element)){
                                        setKeyword("stg8b")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14b1")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfb1")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptación',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: 'Transicion Q₈-Q₁₄ invalida!',
                                                text: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₇-Q₈ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else if(validateDigits1to9(element)){
                                    setKeyword("stg9b")
                                    element=getElementOf(stringList)
                                    if(validateDigits0to9(element)){
                                        setKeyword("stg10b")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14b2")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfb2")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptación',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Transicion Q₁₀-Q₁₄ invalida!',
                                                footer: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₉-Q₁₀ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        footer: 'Transicion Q₆-Q₇ o Q₉ invalida!',
                                        text: `Cadena ${string} Invalida`,
                                        background: "#2c2c2c",
                                        color: "#fff",
                                        confirmButtonColor: "#850287",
                                        iconColor: "#850287"

                                    })
                                }
                            }else if(validateDigits1to9(element)){
                                setKeyword("stg11b")
                                element =getElementOf(stringList)
                                if(validateDigits0to9(element)){
                                    setKeyword("stg12b")
                                    element =getElementOf(stringList)
                                    if(validateDigits0to9(element)){
                                        setKeyword("stg13b")
                                        element = getElementOf(stringList)
                                        if(element==="-"){
                                            setKeyword("stg14b3")
                                            element = getElementOf(stringList)
                                            if(validateLetterAtoZ(element)){
                                                setKeyword("stgfb3")
                                                if(stringList.length !== 0){
                                                    Swal.fire({
                                                        icon: 'error',
                                                        title: 'Oops...',
                                                        footer: 'cadena no finalizada!, quedan elementos por evaluar',
                                                        text: `Cadena ${string} Invalida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"

                                                    })
                                                }else{
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Congrats...',
                                                        footer: 'Cadena finalizada en estado de aceptacion',
                                                        text: `Cadena ${string} Valida`,
                                                        background: "#2c2c2c",
                                                        color: "#fff",
                                                        confirmButtonColor: "#850287",
                                                        iconColor: "#850287"
                                                    })
                                                }
                                            }else{
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    footer: 'Transicion Q₁₄-Q₁₅ invalida!',
                                                    text: `Cadena ${string} Invalida`,
                                                    background: "#2c2c2c",
                                                    color: "#fff",
                                                    confirmButtonColor: "#850287",
                                                    iconColor: "#850287"

                                                })
                                            }
                                        }else{
                                            Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                footer: 'Transicion Q₁₃-Q₁₄ invalida!',
                                                text: `Cadena ${string} Invalida`,
                                                background: "#2c2c2c",
                                                color: "#fff",
                                                confirmButtonColor: "#850287",
                                                iconColor: "#850287"

                                            })
                                        }
                                    }else{
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            footer: 'Transicion Q₁₂-Q₁₃ invalida!',
                                            text: `Cadena ${string} Invalida`,
                                            background: "#2c2c2c",
                                            color: "#fff",
                                            confirmButtonColor: "#850287",
                                            iconColor: "#850287"

                                        })
                                    }
                                }else{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        footer: 'Transicion Q₁₁-Q₁₂ invalida!',
                                        text: `Cadena ${string} Invalida`,
                                        background: "#2c2c2c",
                                        color: "#fff",
                                        confirmButtonColor: "#850287",
                                        iconColor: "#850287"

                                    })
                                }
                            }else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    footer: 'Transicion Q₅-Q₆ o Q₁₁ invalida!',
                                    text: `Cadena ${string} Invalida`,
                                    background: "#2c2c2c",
                                    color: "#fff",
                                    confirmButtonColor: "#850287",
                                    iconColor: "#850287"

                                })
                            }
                        }else{
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                footer: 'Transicion Q₄-Q₅ invalida!',
                                text: `Cadena ${string} Invalida`,
                                background: "#2c2c2c",
                                color: "#fff",
                                confirmButtonColor: "#850287",
                                iconColor: "#850287"

                            })
                        }
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            footer: 'Transicion Q₃-Q₄ invalida!',
                            text: `Cadena ${string} Invalida`,
                            background: "#2c2c2c",
                            color: "#fff",
                            confirmButtonColor: "#850287",
                            iconColor: "#850287"

                        })
                    }
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        footer: 'Transicion Q₂-Q₃ invalida!',
                        text: `Cadena ${string} Invalida`,
                        background: "#2c2c2c",
                        color: "#fff",
                        confirmButtonColor: "#850287",
                        iconColor: "#850287"

                    })
                }
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    footer: 'Transicion Q₀-Q₁ o Q₂ invalida!',
                    text: `Cadena ${string} Invalida`,
                    background: "#2c2c2c",
                    color: "#fff",
                    confirmButtonColor: "#850287",
                    iconColor: "#850287"

                })
            }
        }

    }

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
                   {/*tabla de transcicion*/}
                        <table className={"transition-table"}>
                            <thead>
                                <tr>
                                    <th scope={"col"}>State</th>
                                    <th scope={"col"}>C</th>
                                    <th scope={"col"}>D</th>
                                    <th scope={"col"}>Z</th>
                                    <th scope={"col"}>A...Z</th>
                                    <th scope={"col"}>A...E</th>
                                    <th scope={"col"}>-</th>
                                    <th scope={"col"}>0</th>
                                    <th scope={"col"}>0...9</th>
                                    <th scope={"col"}>1...9</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope={"row"}>Q₀</th>
                                    <th scope={"row"}>Q₁</th>
                                    <th scope={"row"}>Q₂</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₃</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₂</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₃</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₃</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₅</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₅</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₆</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₁</th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₆</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₇</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₉</th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₇</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₈</th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₈</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₉</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₀</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₀</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₁</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₂</th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₂</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₃</th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₃</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₄</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}>Q₁₅</th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                    <th scope={"row"}></th>
                                </tr>
                                <tr>
                                    <th scope={"row"}>Q₁₅</th>
                                    <th scope={"row"}>*</th>
                                    <th scope={"row"}>*</th>
                                    <th scope={"row"}>AC</th>
                                    <th scope={"row"}>EP</th>
                                    <th scope={"row"}>TA</th>
                                    <th scope={"row"}>CI</th>
                                    <th scope={"row"}>ON</th>
                                    <th scope={"row"}>*</th>
                                    <th scope={"row"}>*</th>
                                </tr>
                            </tbody>
                        </table>

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
                                    {
                                        evaluationOpc ===1?<button type={"button"} className={"btn btn-outline-light"}
                                                                   onClick={validateChainFast}>Fast Evaluation</button>
                                                           :<></>
                                    }

                                </div>


                            </div>

                        </div>
                        <div className={"info-container"}>
                            {/*gramatica y notacion*/}

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
