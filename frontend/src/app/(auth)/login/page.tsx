"use client";

import { apiUrl } from "@/app/utils/util";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  interface IUser {
    email: string;
    password: string;
  }
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });
  const login = async () => {
    const { email, password } = userData;
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email: "",
        password: "",
      });
      if (response.status === 200) {
        toast.success("Хэрэглэгч амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

  return (
    <section className="h-[806px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-6 w-[334px]">
        <h3 className="text-2xl font-semibold">Нэвтрэх</h3>
        <div className="flex flex-col w-full gap-4">
          <Input
            placeholder="Имэйл хаяг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          ></Input>
          <Input
            placeholder="Нууц үг"
            className="w-full rounded-[18px] px-3 py-1 text-sm"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          ></Input>
          <Button
            className="w-full rounded-[18px] px-4 py-2 bg-[#2563EB] text-white"
            onClick={login}
          >
            Нэвтрэх
          </Button>
          <Button className="w-1/2 m-auto bg-inherit border-none text-sm text-[#71717A] underline-offset-2">
            Нууц үг мартсан
          </Button>
          <Button className="w-full rounded-[18px] px-4 py-2 text-[#2563EB] bg-white border-[1px] border-[#2563EB]">
            Бүртгүүлэх
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Login;
