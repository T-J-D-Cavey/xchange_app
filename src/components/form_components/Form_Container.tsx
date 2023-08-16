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
export const Form_Container: React.FC<formProps> = (formProps) => {
    return (
        <form>
            <Currency_To_Convert_Form 
                convert_amount={formProps.convert_amount}
                set_convert_amount={formProps.set_convert_amount}
                convert_currency={formProps.convert_currency}
                set_convert_currency={formProps.set_convert_currency}
            />
            <Target_Currency_Form
                target_amount={formProps.target_amount}
                set_target_amount={formProps.set_target_amount}
                target_currency={formProps.target_currency}
                set_target_currency={formProps.set_target_currency}
            />
        </form>
    )
}