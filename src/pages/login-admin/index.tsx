import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import Container from "@/components/Shared/Container/Container";
import axios from "axios";
import { useRouter } from "next/router";
import { FormControl } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import img from "../../assets/image1.png";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";

const Login_admin = () => {
  const router = useRouter();
  const [errors, setErrors] = useState<any>([]);
  const [error, setError] = useState<any>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    email: yup.string().email("إيميل غير صالح").required("هذا الحقل مطلوب"),
    password: yup.string().required("هذا الحقل مطلوب"),
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          const res = await axios.post(
            "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/login",
            formData
          );

          if (res) {
            // localStorage.setItem("token", res.data.accessToken);
            // router.push("/creator");
            console.log(res);
          }
        } catch (error: any) {
          setError(
            error.response.data.code || "أدخلت ايميل او كلمة مرور خاطئة"
          );
        }
      })
      .catch((error: any) => {
        const Errors: any = {};
        error.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <div className="w-[400px] mx-auto mt-20">
          <div className="flex items-center gap-1 w-full justify-center flex-row-reverse">
            <p className="text-3xl font-semibold">كلين ستيد</p>
            <Image
              src={img}
              alt="img"
              className="!w-[54.37px] !h-[55.44px]  p-[4px]"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className=" min-h-[251px] w-full  rounded-xl shadow-xl  mt-20 pb-10 mb-16"
          >
            <div className="flex flex-col justify-center items-center gap-2  pt-8">
              <div className="w-[95%]">
                <label className="font-semibold block mb-1">الايميل</label>
                <TextField
                  placeholder="أدخل الإيميل"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <HiOutlineMail className="text-2xl text-[#CCD2E3]" />
                      </InputAdornment>
                    ),
                  }}
                  value={formData.email}
                  name="email"
                  title="Email"
                  onChange={handleInputChange}
                  className="w-full  h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg"
                />
                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.email ? errors.email : ""}
                </p>
              </div>
              <div className="w-[95%]">
                <label className="font-semibold block mb-1">كلمة المرور</label>
                <FormControl
                  className="w-full h-14 border-2 border-gray-300 outline-none rounded-xl text-lg"
                  variant="outlined"
                >
                  <OutlinedInput
                    placeholder="أدخل كلمة المرور"
                    startAdornment={
                      <InputAdornment position="start">
                        <CiLock className="text-2xl text-[#CCD2E3] -mr-[14px] ml-2" />
                      </InputAdornment>
                    }
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          className="text-2xl text-[#CCD2E3] -ml-[18px]"
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    title="Password"
                    onChange={handleInputChange}
                    name="password"
                    value={formData.password}
                  />
                </FormControl>

                <p className="text-sm  text-red-500  p-2 inline-block ">
                  {errors.password ? errors.password : ""}
                </p>
              </div>
            </div>

            {error ? (
              <p className="text-lg ml-4 sm:ml-6 lg:ml-8 xl:ml-9 text-end w-full lowercase text-red-500  p-2 inline-block ">
                {error ? error : ""}
              </p>
            ) : (
              ""
            )}

            <div className="w-[95%] mx-auto">
              <button
                type="submit"
                className=" w-full bg-[#00ADEE] hover:bg-opacity-80 duration-150 text-white text-xl font-semibold mt-8 p-3 rounded-xl"
              >
                دخول
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login_admin;
