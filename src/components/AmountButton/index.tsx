import { AmountButtonElement, AmountButtonsContainer } from "./styles";

interface AmountButtonProps {
    amount: number;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
}

export default function AmountButton({ amount, setAmount }: AmountButtonProps): React.ReactElement {

    const increment = () => {
        setAmount(amount + 1)
    }

    const decrement = () => {
        if (amount === 1) {
            return;
        }
        setAmount(amount - 1);
    }

    return (
        <AmountButtonElement id='amount-button'>
            <h1>Qtd:</h1>
            <AmountButtonsContainer>
                <button onClickCapture={decrement} data-testid='amount-button-decrement'>
                    -
                </button>
                <h2 data-testid='amount-content'>{amount}</h2>
                <button onClickCapture={increment} data-testid='amount-button-increment'>
                    +
                </button>
            </AmountButtonsContainer>
        </AmountButtonElement>
    );
}