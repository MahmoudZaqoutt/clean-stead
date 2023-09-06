import * as React from "react";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { HiOutlineMail } from "react-icons/hi";
import { CiLock } from "react-icons/ci";
import { useRouter } from "next/router";
import { BsTelephone } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import axios from "axios";

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [errors, setErrors] = React.useState<any>([]);
  const [error, setError] = React.useState<any>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isLogin, setIsLogin] = React.useState<any>(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schema = yup.object().shape({
    name: yup.string().required("هذا الحقل مطلوب"),
    email: yup.string().email("إيميل غير صالح").required("هذا الحقل مطلوب"),
    phone: yup
      .number()
      .typeError("رقم الجوال يجب أن يكون رقمًا")
      .required("هذا الحقل مطلوب"),
    password: yup.string().required("هذا الحقل مطلوب"),
  });

  const handleLoginSubmit = async (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then()
      .catch((error: any) => {
        const Errors: any = {};
        error.inner.forEach((error: any) => {
          Errors[error.path] = error.message;
        });
        setErrors(Errors);
      });

    try {
      const res = await axios.post("https://student.valuxapps.com/api/login", {
        email: formData.email,
        password: formData.password,
      });
      if (res) {
        if (res.data.message.includes("لم")) {
          setOpen(true);
          setError(res.data.message);
        } else {
          setError(res.data.message);
          setError("");
          setFormData({
            name: "",
            email: "",
            password: "",
            phone: "",
          });
          setOpen(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegisterSubmit = (event: any) => {
    event.preventDefault();
    schema
      .validate(formData, { abortEarly: false })
      .then(async () => {
        try {
          const res = await axios.post(
            "https://student.valuxapps.com/api/register",
            formData
          );
          if (res) {
            if (res.data.message.includes("قبل")) {
              setOpen(true);
              setError(res.data.message);
            } else {
              setError(res.data.message);
              setError("");
              setFormData({
                name: "",
                email: "",
                password: "",
                phone: "",
              });
              setOpen(false);
            }
          }
        } catch (error: any) {
          console.log(error);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignUp = (e: any) => {
    e.preventDefault();
    setIsLogin(false);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    setIsLogin(true);
  };

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="text-xl pb-3 font-semibold hover:bg-blue-50 ease-in-out duration-150 text-[#00ADEE]  rounded-full border-2 border-[#00ADEE] w-[120px] h-[50px] pt-2 text-center md:block hidden"
      >
        دخول
      </button>
      <Dialog open={open} onClose={handleClose} className="min-h-[600px] ">
        <DialogTitle className="text-center text-xl font-bold ">
          من فضلك قم بتسجيل الدخول للاستمرار
        </DialogTitle>

        {isLogin ? (
          <>
            <DialogContent className="rounded-xl">
              <div className="w-[95%] mx-auto flex items-center justify-around border-b-2 border-[#F2F2F2] pb-5 mb-[33px] mt-[35px]">
                <button
                  onClick={handleSignUp}
                  className="text-xl text-[#7D7E82] font-semibold "
                >
                  إنشاء حساب
                </button>
                <p className="text-[#F2F2F2]">|</p>
                <button
                  onClick={handleLogin}
                  className="text-xl text-[#00ADEE] font-semibold"
                >
                  تسجيل دخول
                </button>
              </div>
              <div className="w-[400px]">
                <form className=" w-full ">
                  <div className="flex flex-col justify-center items-center gap-2  ">
                    <div className="w-[95%]">
                      <label className="font-semibold block mb-1">
                        الايميل
                      </label>
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
                      <label className="font-semibold block mb-1">
                        كلمة المرور
                      </label>
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
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
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
                    <p className="text-lg  text-center w-full lowercase text-red-500   inline-block ">
                      {error ? error : ""}
                    </p>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogContent className="rounded-xl">
              <div className="w-[95%] mx-auto flex items-center justify-around border-b-2 border-[#F2F2F2] pb-5 mb-[33px] mt-[30px]">
                <button
                  onClick={handleSignUp}
                  className="text-xl text-[#00ADEE] font-semibold "
                >
                  إنشاء حساب
                </button>
                <p className="text-[#F2F2F2]">|</p>
                <button
                  onClick={handleLogin}
                  className="text-xl text-[#7D7E82] font-semibold"
                >
                  تسجيل دخول
                </button>
              </div>
              <div className="w-[400px] overflow-hidden">
                <form className=" w-full ">
                  <div className="flex flex-col justify-center items-center ">
                    <div className="w-[95%]">
                      <label className="font-semibold block mb-1">الاسم</label>
                      <TextField
                        placeholder="أدخل الاسم"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <GoPerson className="text-2xl text-[#CCD2E3]" />
                            </InputAdornment>
                          ),
                        }}
                        value={formData.name}
                        name="name"
                        title="Name"
                        onChange={handleInputChange}
                        className="w-full  h-12  border-gray-300 outline-none rounded-xl  text-lg"
                      />
                      <p className="text-sm  text-red-500  p-2 inline-block ">
                        {errors.name ? errors.name : ""}
                      </p>
                    </div>

                    <div className="w-[95%]">
                      <label className="font-semibold block mb-1">
                        الايميل
                      </label>
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
                      <label className="font-semibold block mb-1">
                        رقم الجوال
                      </label>
                      <TextField
                        placeholder="رقم الجوال"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <BsTelephone className="text-2xl text-[#CCD2E3]" />
                            </InputAdornment>
                          ),
                        }}
                        value={formData.phone}
                        name="phone"
                        title="phone"
                        onChange={handleInputChange}
                        className="w-full  h-14 border-2 border-gray-300 outline-none rounded-xl  text-lg"
                      />
                      <p className="text-sm  text-red-500  p-2 inline-block ">
                        {errors.phone ? errors.phone : ""}
                      </p>
                    </div>
                    <div className="w-[95%]">
                      <label className="font-semibold block mb-1">
                        كلمة المرور
                      </label>
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
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
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
                    <p className="text-lg  text-center w-full lowercase text-red-500   inline-block ">
                      {error !== "" ? error : ""}
                    </p>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </DialogContent>
          </>
        )}

        <DialogActions className="w-[95%] mx-auto">
          {isLogin ? (
            <button
              onClick={handleLoginSubmit}
              className=" w-full bg-[#00ADEE] hover:bg-opacity-80 duration-150 text-white text-xl font-semibold  h-[50px] rounded-xl"
            >
              دخول
            </button>
          ) : (
            <button
              onClick={handleRegisterSubmit}
              className=" w-full bg-[#00ADEE] hover:bg-opacity-80 duration-150 text-white text-xl font-semibold  h-[50px] rounded-xl"
            >
              إنشاء حساب
            </button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
