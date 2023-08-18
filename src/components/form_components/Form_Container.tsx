import { Currency_To_Convert_Form } from "./Currency_To_Convert_Form";
import { Target_Currency_Form } from "./Target_Currency_Form";

// I should delete this component:
export const Form_Container = () => {
    return (
        <form>
            <Currency_To_Convert_Form />
            <Target_Currency_Form />
        </form>
    )
}