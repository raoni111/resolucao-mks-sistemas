export default function formatPrice(price: number, amount?: number): string {
    let myPrice = price;

    if (amount && amount > 0) {
        myPrice = price * amount;
    }

    return myPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0
    });
}