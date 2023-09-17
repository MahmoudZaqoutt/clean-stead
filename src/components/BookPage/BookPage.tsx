import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import pendingImg from "../../assets/Icon2.svg";
import acceptableImg from "../../assets/Icon3.svg";
import unacceptableImg from "../../assets/Icon4.svg";
import editImage from "../../assets/Edit.svg";
import deleteImage from "../../assets/delete.svg";
import mes from "../../assets/mes.svg";
import personImg from "../../assets/_header.png";
import { useDispatch, useSelector } from "react-redux";
import { handleDeleteBooking } from "@/redux/servicesSlice";

const BookPage = () => {
  const [searchManually, setSearchManually] = useState(false);
  const [allButtonColor, setAllButtonColor] = useState("blue");
  const [pendingButtonColor, setPendingButtonColor] = useState("white");
  const [acceptableButtonColor, setAcceptableButtonColor] = useState("white");
  const [unacceptableButtonColor, setUnacceptableButtonColor] =
    useState("white");

  const Bookings = useSelector((state: any) => state.servicesReducer.Bookings);
  const dispatch = useDispatch();
  const [bookingData, setBookingData] = useState(Bookings);

  const handleDeleteBook = (id: number) => {
    dispatch(handleDeleteBooking(id));
  };

  const handleInputChange = (e: any) => {
    setBookingData(
      Bookings.filter(
        (item: any) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.bookingNumber?.includes(e.target.value)
      )
    );
    setSearchManually(true);
  };

  const handleAllBookings = () => {
    setAllButtonColor("blue");
    setPendingButtonColor("white");
    setAcceptableButtonColor("white");
    setUnacceptableButtonColor("white");
    setBookingData(Bookings);
  };

  const handlePendingBookings = () => {
    setAllButtonColor("white");
    setPendingButtonColor("blue");
    setAcceptableButtonColor("white");
    setUnacceptableButtonColor("white");
    setSearchManually(true);
    setBookingData(Bookings.filter((item: any) => item.status === "pending"));
  };

  const handleAcceptableBookings = () => {
    setAllButtonColor("white");
    setPendingButtonColor("white");
    setAcceptableButtonColor("blue");
    setUnacceptableButtonColor("white");
    setSearchManually(true);
    setBookingData(
      Bookings.filter((item: any) => item.status === "acceptable")
    );
  };

  const handleUnAcceptableBookings = () => {
    setAllButtonColor("white");
    setPendingButtonColor("white");
    setAcceptableButtonColor("white");
    setUnacceptableButtonColor("blue");
    setSearchManually(true);
    setBookingData(
      Bookings.filter((item: any) => item.status === "unacceptable")
    );
  };

  return (
    <div>
      <div className="mt-[35px] flex justify-between items-center mb-[53px]">
        <p className="font-bold text-3xl">الحجوزات</p>
        <div className="flex items-center gap-4">
          <div className="w-[45px] h-[45px] bg-white rounded-xl flex justify-center items-center">
            <Image src={mes} alt="" className="w-[16px] h-[16px]" />
          </div>
          <Image src={personImg} alt="" className="w-[44px] h-[44px]" />
          <p className="text-sm font-medium">محمود زقوت</p>
        </div>
      </div>

      <div className="flex items-center justify-between h-[60px] bg-white px-[15px] rounded-xl">
        <div className="w-[272.63px] h-[45px] border-2 border-[#F2F2F2] rounded-xl flex items-center pr-3 bg-white">
          <BsSearch className="w-[15px] h-[15px] text-[#C5C7CD]" />
          <input
            onChange={handleInputChange}
            placeholder="1565 او محمد الهبيل .."
            type="text"
            title="search"
            className="outline-none w-full h-full pr-2 text-sm rounded-xl"
          />
        </div>

        <div className="flex items-center">
          <button
            onClick={handleAllBookings}
            className={`text-[#808080] w-[100px] h-[45px] rounded-xl ${
              allButtonColor === "blue" ? "bg-[#EBF8FE] !text-[#00ADEE]" : ""
            }`}
          >
            الكل
          </button>
          <button
            onClick={handlePendingBookings}
            className={`text-[#808080] w-[100px] h-[45px] rounded-xl ${
              pendingButtonColor === "blue"
                ? "bg-[#EBF8FE] !text-[#00ADEE]"
                : ""
            }`}
          >
            معلق
          </button>
          <button
            onClick={handleAcceptableBookings}
            className={`text-[#808080] w-[100px] h-[45px] rounded-xl ${
              acceptableButtonColor === "blue"
                ? "bg-[#EBF8FE] !text-[#00ADEE]"
                : ""
            }`}
          >
            تم تأكيده
          </button>
          <button
            onClick={handleUnAcceptableBookings}
            className={`text-[#808080] w-[100px] h-[45px] rounded-xl ${
              unacceptableButtonColor === "blue"
                ? "bg-[#EBF8FE] !text-[#00ADEE]"
                : ""
            }`}
          >
            تم رفضه
          </button>
        </div>

        <div>
          <select
            name=""
            id=""
            title="select"
            className="w-[100px] h-[45px] border-2 rounded-xl outline-none text-[#808080] "
          >
            <option value="الأحدث">الأحدث</option>
            <option value="الأقدم">الأقدم</option>
          </select>
        </div>
      </div>
      <div className="mt-[17px]">
        <TableContainer component={Paper}>
          <Table className="">
            <TableHead>
              <TableRow>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  رقم الحجز
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  الاسم
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  العنوان
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  السعر
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  الوقت
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  تكرار العمل
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  الحالة
                </TableCell>
                <TableCell className="!text-[#9FA2B4] !text-center">
                  اكشن
                </TableCell>
              </TableRow>
            </TableHead>
            {searchManually ? (
              <TableBody>
                {bookingData.map((row: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className=" !text-center">
                      {row?.bookingNumber}
                    </TableCell>
                    <TableCell className=" !text-center">{row?.name}</TableCell>
                    <TableCell className=" !text-center">
                      {row?.address}
                    </TableCell>
                    <TableCell className=" !text-center">
                      $ {row?.totalPrice}
                    </TableCell>
                    <TableCell className=" !text-center">{row?.date}</TableCell>
                    <TableCell className=" !text-center">
                      {row?.repetition}
                    </TableCell>
                    <TableCell className=" !text-center">
                      {row?.status === "pending" ? (
                        <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#FFF3E8]">
                          <Image
                            src={pendingImg}
                            alt=""
                            className="w-[15px] h-[15px]"
                          />
                          <p>معلق</p>
                        </div>
                      ) : (
                        <>
                          {row?.status === "acceptable" ? (
                            <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#E5F8EE]">
                              <Image
                                src={acceptableImg}
                                alt=""
                                className="w-[15px] h-[15px]"
                              />
                              <p>مقبول</p>
                            </div>
                          ) : (
                            <>
                              {row?.status === "unacceptable" ? (
                                <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#FCEAEB]">
                                  <Image
                                    src={unacceptableImg}
                                    alt=""
                                    className="w-[15px] h-[15px]"
                                  />
                                  <p>مرفوض</p>
                                </div>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </>
                      )}
                    </TableCell>
                    <TableCell className=" text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-[35px] h-[35px] bg-[#F7F8FC] rounded-lg flex justify-center items-center">
                          <Image src={editImage} alt="" />
                          {""}
                        </button>
                        <button
                          onClick={() => handleDeleteBook(row?.id)}
                          className="w-[35px] h-[35px] bg-[#F7F8FC] rounded-lg flex justify-center items-center"
                        >
                          <Image src={deleteImage} alt="" />
                          {""}
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            ) : (
              <TableBody>
                {Bookings.map((row: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className=" !text-center">
                      {row?.bookingNumber}
                    </TableCell>
                    <TableCell className=" !text-center">{row?.name}</TableCell>
                    <TableCell className=" !text-center">
                      {row?.address}
                    </TableCell>
                    <TableCell className=" !text-center">
                      $ {row?.totalPrice}
                    </TableCell>
                    <TableCell className=" !text-center">{row?.date}</TableCell>
                    <TableCell className=" !text-center">
                      {row?.repetition}
                    </TableCell>
                    <TableCell className=" !text-center">
                      {row?.status === "pending" ? (
                        <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#FFF3E8]">
                          <Image
                            src={pendingImg}
                            alt=""
                            className="w-[15px] h-[15px]"
                          />
                          <p>معلق</p>
                        </div>
                      ) : (
                        <>
                          {row?.status === "acceptable" ? (
                            <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#E5F8EE]">
                              <Image
                                src={acceptableImg}
                                alt=""
                                className="w-[15px] h-[15px]"
                              />
                              <p>مقبول</p>
                            </div>
                          ) : (
                            <>
                              {row?.status === "unacceptable" ? (
                                <div className="flex items-center gap-2 rounded-lg  h-[34.67px] justify-center bg-[#FCEAEB]">
                                  <Image
                                    src={unacceptableImg}
                                    alt=""
                                    className="w-[15px] h-[15px]"
                                  />
                                  <p>مرفوض</p>
                                </div>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                        </>
                      )}
                    </TableCell>
                    <TableCell className=" text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-[35px] h-[35px] bg-[#F7F8FC] rounded-lg flex justify-center items-center">
                          <Image src={editImage} alt="" />
                          {""}
                        </button>
                        <button
                          onClick={() => handleDeleteBook(row?.id)}
                          className="w-[35px] h-[35px] bg-[#F7F8FC] rounded-lg flex justify-center items-center"
                        >
                          <Image src={deleteImage} alt="" />
                          {""}
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BookPage;
