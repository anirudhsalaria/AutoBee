import Image from "next/image";
"use client";

const CustomButton = () => {
  return (
    <div>
      <button
        disabled={false}
        type={"button"}
        className={`custom-btn`}
        onClick={() => {}}
      >
        <span className={"flex-1"}>
            title
        </span>
      </button>
    </div>
  )
}

export default CustomButton
