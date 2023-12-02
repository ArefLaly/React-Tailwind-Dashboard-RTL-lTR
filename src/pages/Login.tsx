import {
  Button,
  Card,
  Checkbox,
  IconButton,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";

import { FormEvent, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { EyeIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import appService from "../data/services/app.service";
import { toast } from "react-toastify";
const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [passVisible, setPassVisible] = useState(false);
  const [error, setError] = useState<string>("");
  const { user, setUser } = useUser();

  const togglePassword = () => setPassVisible(!passVisible);
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    setError("");
    // const file = event.target.files[0];
    // console.log(file);
    const formData = new FormData(event.currentTarget);
    const toastId = toast.loading(t("waiting"));

    await appService.authService
      .login(formData)
      .then((data) => {
        data.image && localStorage.setItem("user-image", data.image);
        data.token && setUser(data.token);
        toast.success(t("Welcome To Rana Student Portal!"));
      })
      .catch((error) => {
        setError(error?.response?.data?.message || error.message);
        toast.error(error?.response?.data?.message || error.message);
      });
    toast.dismiss(toastId);
    setLoading(false);
  };
  useEffect(() => {
    user && navigate("/home");
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen">
      <Card
        className={`mt-8  duration-500  dark:bg-boxdark  opacity-100 mb-2  w-full md:w-[360px]  p-3 overflow-hidden m-auto bg-white md:p-4`}
        shadow={false}
      >
        <img
          src={logo}
          width="160"
          className="w-40 min-h-[100px] m-auto"
          alt=""
        />
        <Typography variant="h4" className="text-center dark:text-white">
          {t("Login")}
        </Typography>
        <form
          className="mt-8 mb-2 duration-300"
          onSubmit={onSubmit}
          encType="multipart/form-data"
        >
          <div className="flex flex-col gap-6 mb-4">
            <div>
              <Input
                crossOrigin={Input}
                size="lg"
                color="gray"
                defaultValue={"Arif@mail.com"}
                label={t("Email").toString()}
                className="dark:text-white rtl:text-right"
                dir="ltr"
                required
                name="reg_no"
                autoComplete="off"
                min={3}
                type="email"
              />
            </div>
            <div className="relative flex w-full">
              <Input
                crossOrigin={Input}
                type={passVisible ? "text" : "password"}
                color="gray"
                size="lg"
                required
                defaultValue={"12345678"}
                label={t("Password").toString()}
                name="password"
                className="dark:text-white "
              />
              <IconButton
                size="sm"
                variant="text"
                className="!absolute text-inherit  rtl:left-1  ltr:right-1 top-2 rounded"
                onClick={togglePassword}
              >
                <EyeIcon className="w-5 h-5" />
              </IconButton>
            </div>
            <Link to="/auth/user/reset-password" className="text-sm text-right">
              {t("Forgot Password?")}
            </Link>
          </div>
          <Checkbox
            crossOrigin={Checkbox}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                {t("Remember-me")}
              </Typography>
            }
            name="remember"
            containerProps={{ className: "-ml-2.5" }}
          />
          <Typography
            variant="small"
            className={`text-red-300 duration-300 origin-top-left h-4 scale-x-0  ${
              error && "scale-x-100"
            }`}
          >
            {error}
          </Typography>

          {loading ? (
            <Spinner color="red" className="w-8 h-8 m-auto" />
          ) : (
            <Button
              type="submit"
              ripple={false}
              className={` mt-6  duration-300    flex gap-3 items-center text-center justify-center`}
              variant="outlined"
              color="red"
              fullWidth
            >
              {t("Login")}
              <LockOpenIcon strokeWidth={2} className={` h-5 w-5 `} />
            </Button>
          )}
        </form>
        <Typography color="gray" className="mt-4 font-normal text-center">
          {t("Arif")} | {t("Laly")}
        </Typography>
        <Typography color="gray" className="mt-4 font-normal text-center">
          2023-2024 © Arif Laly Project
        </Typography>
        <div
        // className={`w-full animate-pulse ${loading ? 'scale-1' : 'scale-0'}  duration-300   opacity-40 -z-0 top-0 left-0 h-full absolute bg-gray-800`}
        ></div>
      </Card>

      {/* <SocialLinks /> */}
    </div>
  );
};
export default Login;
