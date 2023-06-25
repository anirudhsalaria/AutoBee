import { CustomButtonProps } from "@/types";
import Image from "next/image";
"use client";

const CustomButton = ({title, containerStyles, handleClick}: CustomButtonProps) => {
  return (
    <div>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className={"flex-1"}>
            {title}
        </span>
      </button>
    </div>
  )
}

export default CustomButton
