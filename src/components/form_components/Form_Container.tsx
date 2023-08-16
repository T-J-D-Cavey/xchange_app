import { Currency_To_Convert_Form } from "./Currency_To_Convert_Form";
import { Target_Currency_Form } from "./Target_Currency_Form";

interface formProps {
    convert_amount: number;
    set_convert_amount: (amount: number) => void;
    target_amount: number;
    set_target_amount: (amount: number) => void;
    convert_currency: string;
    set_convert_currency: (amount: string) => void;
    target_currency: string;
    set_target_currency: (amount: string) => void;
}
export const Form_Container: React.FC<formProps> = () => {
    return (
        <form>
            <Currency_To_Convert_Form />
            <Target_Currency_Form />
        </form>
    )
}