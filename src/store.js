import { createStore } from "redux";

const intialState = {
    jugadores: [{
        id: 1,
        nombre: "Rodrigo Martínez",
        foto: "https://lh3.googleusercontent.com/-QQtIyNXJ8hI/YNX1Nk_xetI/AAAAAAAABW8/rHBjtTj9JX4JEe-FhoUEgvuVQtA9fcyUwCEwYBhgLKtQDABHVOhwauXf_XXOtnJEDAaDhFT1fsjsQhg51P9dI-Sz_hWjr5gkoKBobLgu5aS7bXwaAv2HwhRce85TBbpO6rSQ1dVfXMtbiWJPsAkllvELTZfrQMom5eYb3MOMjWjj0aC5u-gtLpAJ-_eMOGx1jv-whxwSmUpKEnszcY-NV9j29TbjdWmbQuyF1JHTh8Xe96_kybBdxkJwnYvL-eMcIAV1dInMxwO7LIfvZ-VLFrjfP_bUVQJmmCXIWSq61ILJb4pcBqhaF-Lx7eLijuxmo7204gzTb4naLiZTLvhGCf1_2-_4J2Mrmqlqu-XYeA3DBR9Wsr8TUk5MXzL5f0aV1XDpg-CnbW-5ScWbZ1MSRnkTgN9qEplQ-o_T3UmGlUIt087g1UOahIgZgKgsoUiN91S5dtYg8_2vyyNSC-dKEVJBsLsMTeujY5VwAy6XWyMco4_NWUPTOVLJUREz2J1-6TELumM_RcnVBq2AavFQls9BxXrS5Emwwm9K2_j7dnNwfqhU5njgxXRD6oopyQj3dNTjUMaj_eF-dq0yySNoMWbqsLIqAFzcnHR441c_IuJViM8fTkMbRyfIrcOQMY-P5qqc_O8W8e2Dbk43xvGAg1JwjX1aFMKupzocG/w140-h139-p/ProfilePicturePhoto"
    },
    {
        id: 2,
        nombre: "Mengano Martínez",
        foto: "https://qph.fs.quoracdn.net/main-qimg-20df28f3b31895e56cba6dbc0515c635"
    },
    {
        id: 3,
        nombre: "Fulano Martínez",
        foto: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }    
],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = intialState, action) => {
    if(action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    
    if(action.type === "AGREGAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)