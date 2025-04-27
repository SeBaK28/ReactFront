import { Form } from "react-bootstrap";


const ProvinceList = () =>{
    return (
        <>
            <Form.Group>Wojewodztwo</Form.Group>
            <Form.Select>
                <option>Wybierz</option>
                <option value="1">Dolnoslaskie</option>
                <option value="2">Kujawsko-Pomorskie</option>
                <option value="3">Lubelskie</option>
                <option value="4">Lubuskie</option>
                <option value="5">Lodzkie</option>
                <option value="6">Malopolskie</option>
                <option value="7">Mazowieckie</option>
                <option value="8">Opolskie</option>
                <option value="9">Podkarpackie</option>
                <option value="10">Podlaskie</option>
                <option value="11">Pomorskie</option>
                <option value="12">Slaskie</option>
                <option value="13">Swietokrzyskie</option>
                <option value="14">Warminsko-Mazurskie</option>
                <option value="15">Wielkopolskie</option>
                <option value="16">Zachodniopomorskie</option>
            </Form.Select>
        </>
    );
}

export default ProvinceList;