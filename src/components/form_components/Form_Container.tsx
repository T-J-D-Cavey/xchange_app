import { Form_Selects } from "./Form_Selects";
import { Form_Button } from './Form_Button';

export function Form_Container() {
    return (
        <div>
            <form>
                <label htmlFor='to_convert'>Currency to convert:</label>
                <Form_Selects />
                <Form_Button />
            </form>
        </div>
    )
}