import React, { useState } from "react";
import ShowMore from "../ServicesCard/ShowMore";
import Image from "next/image";
import img from "../../assets/Mask1group.png";

const StepOne = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleCheckedChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const handleIncrementAmount = (e: any) => {
    setAmount((prevState) => prevState + 1);
  };

  const handleDecrementAmount = () => {
    setAmount((prevState) => (prevState > 0 ? prevState - 1 : 0));
  };

  return (
    <div>
      <p className="min-w-[417px] text-xl font-medium mb-[21px]">
        اختر الخدمات التي تحتاج تنظيفها من أي تصنيف تريده
      </p>
      <div className="flex flex-col justify-center gap-[15px]">
        <div className="border-[#F2F2F2] border-2 rounded-2xl">
          <ShowMore
            title="رؤية الخدمات"
            subTitle="تنظيف المنازل"
            classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[51.42px]"
            classNameOfSubTitle="text-lg "
            classNameOfIcon="!mt-[20px]"
            hiddenTitle="اخفاء الخدمات"
            contentToShow={
              <div className="border-[#F2F2F2] border-2 rounded-2xl ">
                <ShowMore
                  title="رؤية التفاصيل"
                  subTitle={
                    <div className="flex items-center">
                      <input
                        onChange={handleCheckedChange}
                        type="checkbox"
                        title="check"
                        className="w-[30px] h-[30px] "
                      />
                      <Image
                        src={img}
                        alt=""
                        className="w-[80px] h-[80px] mr-[20px] ml-[16px]"
                      />
                      <p className="text-lg">غرفة النوم</p>
                      <p className="text-lg mr-[34px] ml-[64px]">15 $</p>

                      <div className="flex items-center gap-3 ">
                        <button
                          name="one"
                          onClick={handleIncrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md "
                        >
                          +
                        </button>
                        <p className="w-[30px] h-[30px] border-[1px] border-[#E5F7FD] rounded-md text-center">
                          {amount}
                        </p>
                        <button
                          onClick={handleDecrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  }
                  classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[110px]"
                  classNameOfSubTitle="text-lg "
                  classNameOfIcon="!mt-[50px]"
                  hiddenTitle="اخفاء التفاصيل"
                  contentToShow={
                    <div className="pr-[50px]">
                      <p className="text-md text-[#7D7E82]">
                        العناصر التي ستيم تنظيفها في هذه الغرفة
                      </p>
                      <ul className="list-disc pr-4 flex flex-col gap-5 mt-4 mb-5">
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                      </ul>
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
        <div className="border-[#F2F2F2] border-2 rounded-2xl">
          <ShowMore
            title="رؤية الخدمات"
            subTitle="تنظيف المنازل"
            classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[51.42px]"
            classNameOfSubTitle="text-lg "
            classNameOfIcon="!mt-[20px]"
            hiddenTitle="اخفاء الخدمات"
            contentToShow={
              <div className="border-[#F2F2F2] border-2 rounded-2xl ">
                <ShowMore
                  title="رؤية التفاصيل"
                  subTitle={
                    <div className="flex items-center">
                      <input
                        onChange={handleCheckedChange}
                        type="checkbox"
                        title="check"
                        className="w-[30px] h-[30px] "
                      />
                      <Image
                        src={img}
                        alt=""
                        className="w-[80px] h-[80px] mr-[20px] ml-[16px]"
                      />
                      <p className="text-lg">غرفة النوم</p>
                      <p className="text-lg mr-[34px] ml-[64px]">15 $</p>

                      <div className="flex items-center gap-3 ">
                        <button
                          onClick={handleIncrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md "
                        >
                          +
                        </button>
                        <p className="w-[30px] h-[30px] border-[1px] border-[#E5F7FD] rounded-md text-center">
                          {amount}
                        </p>
                        <button
                          onClick={handleDecrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  }
                  classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[110px]"
                  classNameOfSubTitle="text-lg "
                  classNameOfIcon="!mt-[50px]"
                  hiddenTitle="اخفاء التفاصيل"
                  contentToShow={
                    <div className="pr-[50px]">
                      <p className="text-md text-[#7D7E82]">
                        العناصر التي ستيم تنظيفها في هذه الغرفة
                      </p>
                      <ul className="list-disc pr-4 flex flex-col gap-5 mt-4 mb-5">
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                      </ul>
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
        <div className="border-[#F2F2F2] border-2 rounded-2xl">
          <ShowMore
            title="رؤية الخدمات"
            subTitle="تنظيف المنازل"
            classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[51.42px]"
            classNameOfSubTitle="text-lg "
            classNameOfIcon="!mt-[20px]"
            hiddenTitle="اخفاء الخدمات"
            contentToShow={
              <div className="border-[#F2F2F2] border-2 rounded-2xl ">
                <ShowMore
                  title="رؤية التفاصيل"
                  subTitle={
                    <div className="flex items-center">
                      <input
                        onChange={handleCheckedChange}
                        type="checkbox"
                        title="check"
                        className="w-[30px] h-[30px] "
                      />
                      <Image
                        src={img}
                        alt=""
                        className="w-[80px] h-[80px] mr-[20px] ml-[16px]"
                      />
                      <p className="text-lg">غرفة النوم</p>
                      <p className="text-lg mr-[34px] ml-[64px]">15 $</p>

                      <div className="flex items-center gap-3 ">
                        <button
                          onClick={handleIncrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md "
                        >
                          +
                        </button>
                        <p className="w-[30px] h-[30px] border-[1px] border-[#E5F7FD] rounded-md text-center">
                          {amount}
                        </p>
                        <button
                          onClick={handleDecrementAmount}
                          className="w-[30px] h-[30px] bg-[#E5F7FD] rounded-md"
                        >
                          -
                        </button>
                      </div>
                    </div>
                  }
                  classNameOfTitle="flex justify-between items-center w-full !mr-0 rounded-2xl min-h-[110px]"
                  classNameOfSubTitle="text-lg "
                  classNameOfIcon="!mt-[50px]"
                  hiddenTitle="اخفاء التفاصيل"
                  contentToShow={
                    <div className="pr-[50px]">
                      <p className="text-md text-[#7D7E82]">
                        العناصر التي ستيم تنظيفها في هذه الغرفة
                      </p>
                      <ul className="list-disc pr-4 flex flex-col gap-5 mt-4 mb-5">
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                        <li>العناصر المختارة</li>
                      </ul>
                    </div>
                  }
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StepOne;
