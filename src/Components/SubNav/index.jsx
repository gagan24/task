
import Item from "./SubNavItem"

const SubNav = ({handleClick}) => {


  return (
    <>
    <div className="flex flex-col lg:flex-row justify-between bg-[#112C41] py-6 px-8">

      {
        DATA.map((el, index) => <Item key={index} onClick={handleClick} label={el.label} index={index} />)
      }
      </div>
    </>
  )
}

export default SubNav

const DATA = [
  {
    label: "We stay connected",
  },
  {
    label: "We believe in diversity & inclusion",
  },
  {
    label: "We celebrate success",
  },
]
