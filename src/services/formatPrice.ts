export default function formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', maximumFractionDigits: 0});
}