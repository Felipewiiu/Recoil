import { useSetRecoilState } from "recoil"
import { IEvento } from "../../interfaces/IEvento"
import { listaDeEventosState } from "../atom";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
    const setListaDeEvento = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return(evento: IEvento) => {

        const hoje = new Date()

        if (evento.inicio < hoje) {
            throw new Error("Eventos não podem ser cadastrados com a data menor que a atual.")
        }

        evento.id = obterId();
        return setListaDeEvento(listaAntiga => [...listaAntiga, evento])
    }
}

export default useAdicionarEvento;