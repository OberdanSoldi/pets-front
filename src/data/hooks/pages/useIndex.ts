import {useEffect, useState} from "react";
import {Pet} from "../../@types/Pet";
import {ApiService} from "../../services/ApiService";
import {AxiosError} from "axios";

export function useIndex() {
    const [petList, setPetList] = useState<Pet[]>([]),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [value, setValue] = useState(''),
        [message, setMessage] = useState('')

    useEffect(() => {
        ApiService.get('/pets/').then((resp) => {
            setPetList(resp.data)
        })
    }, [])

    useEffect(() => {
        if (selectedPet === null) {
            ClearForm();
        }
    }, [selectedPet])

    function adopt() {
        if (selectedPet !== null) {
            if (AdoptionValidate()) {
                ApiService.post('/adoption', {
                    pet_id: selectedPet.id,
                    email: email,
                    value: value
                }).then(() => {
                    setSelectedPet(null)
                    setMessage('Pet adotado com sucesso!')
                    ClearForm()
                }).catch((err: AxiosError) => {
                    setMessage(err.message)
                })
            } else {
                setMessage('Preencha todos os campos corretamente!')
            }
        }
    }

    function AdoptionValidate() {
        return email.length > 0 && value.length > 0;
    }

    function ClearForm() {
        setEmail('')
        setValue('')
    }

    return {
        petList: petList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        adopt
    };
}
