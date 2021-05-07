import './Square.css';

export default function Square({ value, onClick }) {
    return (
        <li className="square" onClick={onClick}>
            {value}
        </li>
    );
}
