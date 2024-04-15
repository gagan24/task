

const Item = ({label, index, onClick}) => {
  return (
    <div className="lg:w-[25%] flex flex-col justify-center border-1 border-red px-4 text-white">

            <p className="text-[#6B6B6B]"> 0{index + 1}</p>

        <div className="flex justify-between items-center py-4">
            <p>{label}</p>
            <button style={{border: "1px solid #FFE1E1"}} onClick={() => onClick(index)} className=" rounded-full w-10 h-10 " >{">"}</button>
        </div>
    </div>
  )
}

export default Item