import { ButtonProps } from "@/types"

export const Button = ({btnType, title, containerStyles, handlePress}: ButtonProps) => {

    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handlePress}
        >
            <span className="flex-1">{title}</span>

        </button>
    )
}