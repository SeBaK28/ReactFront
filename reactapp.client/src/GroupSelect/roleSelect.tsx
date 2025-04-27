import { Form } from "react-bootstrap";


const RoleList = () => {
    return (
        <>
            <Form.Group>
                <Form.Label>Stanowisko</Form.Label>
                <Form.Select>
                    <option>Wybierz</option>
                    <option value="1">Blacharz</option>
                    <option value="2">Lakiernik</option>
                    <option value="3">Mechanik</option>
                    <option value="4">Elektryk samochodowy</option>
                    <option value="5">Diagnosta</option>
                    <option value="6">Doradca serwisowy</option>
                    <option value="7">Kierownik warsztatu</option>
                    <option value="8">Pracownik recepcji</option>
                    <option value="9">Specjalista ds. czesci zamiennych</option>
                    <option value="10">Detailer samochodowy</option>
                    <option value="11">Ksiegowa</option>
                    <option value="12">Magazynier</option>
                    <option value="13">Specjalista HR</option>
                </Form.Select>
            </Form.Group>
        </>
    );
}

export default RoleList;