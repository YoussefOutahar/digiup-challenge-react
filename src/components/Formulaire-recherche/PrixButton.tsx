const PrixButton = ({
    value,
    onChange,
    label,
    name,
}: {
    value: number;
    onChange: (newValue: number) => void;
    label: string;
    name: string;
}) => {
    return (
        <div className="flex space-x-1 items-center">
            <label className="font-lg font-bold" htmlFor={label}>
                {label}
            </label>
            <button
                className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
                type="button"
                onClick={() => onChange(value - 10)}
            >
                -
            </button>
            <input
                value={value}
                id={label}
                name={name}
                className="h-8 rounded-md w-24 text-black text-xl font-semibold text-center"
                onChange={(e) => onChange(Number(e.target.value))}
                type="number"
            />
            <button
                className="w-8 h-8 bg-orange-400 text-xl rounded-md font-extrabold"
                type="button"
                onClick={() => onChange(value + 10)}
            >
                +
            </button>
        </div>
    );
};

export default PrixButton;
