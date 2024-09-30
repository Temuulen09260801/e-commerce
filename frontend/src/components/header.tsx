import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Search } from "lucide-react";
import { IoMdPerson } from "react-icons/io";

export const Header = () => {
  return (
    <header className="flex justify-between bg-black px-6 py-4 items-center">
      <div className="flex gap-8 items-center">
        <div className="flex gap-[6px] items-center">
          <img src="/img/Vector.png" alt="photo" className="w-8 h-[27px]" />
          <div className="text-white text-sm">ECOMMERCE</div>
        </div>
        <div className="text-white text-sm opacity-75">Ангилал</div>
      </div>
      <div className="bg-[#18181B] rounded-[20px] flex items-center px-4 py-1 gap-2 w-[300px]">
        <Search color="#FAFAFA" size={24} />
        <Input
          type="text"
          placeholder="Бүтээгдэхүүн хайх"
          className="text-[#71717A] text-sm border-none"
        />
      </div>
      <div className="flex gap-6 items-center">
        <FaRegHeart color="white" size={24} />
        <IoCartOutline color="white" size={24} />
        <Button className="rounded-[18px] border-[#2563EB] border-[1px] py-2 px-3 text-white text-sm">
          Бүртгүүлэх
        </Button>
        <Button className="rounded-[18px] py-2 px-3 text-white text-sm bg-[#2563EB]">
          Нэвтрэх
        </Button>
        {/* <IoMdPerson color="white" size={24} /> */}
      </div>
    </header>
  );
};

export default Header;
