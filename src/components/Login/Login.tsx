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

export default function Login() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const [errors, setErrors] = React.useState<any>([]);
  const [error, setError] = React.useState<any>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
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
          const res = await fetch(
            "http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/auth/login",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(formData),
            }
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

  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="text-xl pb-3 font-semibold hover:bg-blue-50 ease-in-out duration-150 text-[#00ADEE]  rounded-full border-2 border-[#00ADEE] w-[120px] h-[50px] pt-2 text-center md:block hidden"
      >
        دخول
      </button>
      <Dialog open={open} onClose={handleClose} className="h-[500px] ">
        <DialogTitle className="text-center text-xl font-bold ">
          من فضلك قم بتسجيل الدخول للاستمرار
        </DialogTitle>
        <DialogContent className="rounded-xl">
          <div className="w-[400px]">
            <form onSubmit={handleSubmit} className=" w-full ">
              <div className="flex flex-col justify-center items-center gap-2  ">
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
            </form>
          </div>
        </DialogContent>
        <DialogActions className="w-[95%] mx-auto">
          <button
            onClick={handleSubmit}
            className=" w-full bg-[#00ADEE] hover:bg-opacity-80 duration-150 text-white text-xl font-semibold  h-[50px] rounded-xl"
          >
            دخول
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
