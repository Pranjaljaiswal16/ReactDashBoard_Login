import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
  return (
    <>
      <div className=" searchbox position-relative d-flex align-items-center">
        <IoSearchOutline className="mr-2" size={15} />

        <input type="text" placeholder="Search Here..." />
      </div>
    </>
  );
};

export default SearchBox;
