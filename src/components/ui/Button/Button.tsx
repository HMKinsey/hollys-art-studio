interface ButtonProps  {
    ariaLabel: string;
    onClick: () => void;
    type: "submit" | "reset" | "button" | undefined ;
    buttonText: string;
}

function Button ({ariaLabel, onClick, type, buttonText}: ButtonProps){
return (
     <div className="flex flex-col items-center gap-2">
          <button
            aria-label={ariaLabel}
            className="bg-rose hover:bg-rose-dark rounded px-4 py-2 font-semibold text-white"
            onClick={onClick}
            type={type} >
            {buttonText}
          </button>
        </div>
        )
}

export default Button
