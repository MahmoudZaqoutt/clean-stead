import React from "react";
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

function createData(
  numberOfBook: number,
  name: string,
  address: string,
  price: string,
  time: string,
  repetitionOfWork: string,
  status: any,
  action: any
) {
  return {
    numberOfBook,
    name,
    address,
    price,
    time,
    repetitionOfWork,
    status,
    action,
  };
}

const rows = [
  createData(
    6351,
    "محمد الهبيل",
    "النصر, شارع النصر",
    "150$",
    "22/5/2022 | 09:30 AM",
    "مره واحده",
    "pending",
    "delete"
  ),
  createData(
    6351,
    "محمد الهبيل",
    "النصر, شارع النصر",
    "150$",
    "22/5/2022 | 09:30 AM",
    "مره واحده",
    "acceptable",
    "delete"
  ),
  createData(
    6351,
    "محمد الهبيل",
    "النصر, شارع النصر",
    "150$",
    "22/5/2022 | 09:30 AM",
    "مره واحده",
    "unacceptable",
    "delete"
  ),
];

const BookPage = () => {
  return (
    <div>
      <div className="flex items-center justify-between h-[60px] bg-white px-[15px] rounded-xl">
        <div className="w-[272.63px] h-[45px] border-2 border-[#F2F2F2] rounded-xl flex items-center pr-3 bg-white">
          <BsSearch className="w-[15px] h-[15px] text-[#C5C7CD]" />
          <input
            placeholder="1565 او محمد الهبيل .."
            type="text"
            title="search"
            className="outline-none w-full h-full pr-2 text-sm rounded-xl"
          />
        </div>

        <div className="flex items-center">
          <button className="text-[#00ADEE] w-[100px] h-[45px] bg-[#EBF8FE] rounded-xl">
            الكل
          </button>
          <button className="text-[#808080] w-[100px] h-[45px]  rounded-xl">
            معلق
          </button>
          <button className="text-[#808080] w-[100px] h-[45px]  rounded-xl">
            تم تأكيده
          </button>
          <button className="text-[#808080] w-[100px] h-[45px]  rounded-xl">
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
                <TableCell className="text-[#9FA2B4] text-center">
                  رقم الحجز
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  الاسم
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  العنوان
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  السعر
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  الوقت
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  تكرار العمل
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  الحالة
                </TableCell>
                <TableCell className="text-[#9FA2B4] text-center">
                  اكشن
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any, index: number) => (
                <TableRow key={index}>
                  <TableCell className=" text-center">
                    {row.numberOfBook}
                  </TableCell>
                  <TableCell className=" text-center">{row.name}</TableCell>
                  <TableCell className=" text-center">{row.address}</TableCell>
                  <TableCell className=" text-center">{row.price}</TableCell>
                  <TableCell className=" text-center">{row.time}</TableCell>
                  <TableCell className=" text-center">
                    {row.repetitionOfWork}
                  </TableCell>
                  <TableCell className=" text-center">
                    {row.status === "pending" ? (
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
                        {row.status === "acceptable" ? (
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
                            {row.status === "unacceptable" ? (
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
                      <button className="w-[35px] h-[35px] bg-[#F7F8FC] rounded-lg flex justify-center items-center">
                        <Image src={deleteImage} alt="" />
                        {""}
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default BookPage;
