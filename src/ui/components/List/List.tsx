import {Button} from "@mui/material";
import {Description, Information, ItemList, ListStyled, Name, Photo} from "./List.style";
import {Pet} from "../../../data/@types/Pet";

import {TextService} from "../../../data/services/TextService";

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function List(props: ListProps) {
    const maxText = 200;
    return (
        <ListStyled>
            {props.pets.map(pet => (
                <ItemList key={pet.id}>
                    <Photo src={pet.photo}/>
                    <Information>
                        <Name>{pet.name}</Name>
                        <Description>
                            {TextService.TextLimit(pet.history, maxText)}
                        </Description>
                        <Button
                            variant={'contained'} fullWidth
                            onClick={() => props.onSelect(pet)}
                        >
                            Adotar {pet.name}
                        </Button>
                    </Information>
                </ItemList>
            ))}
        </ListStyled>
    )
}
