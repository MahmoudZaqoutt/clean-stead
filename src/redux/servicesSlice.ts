import { createSlice } from "@reduxjs/toolkit";

interface ServiceState {
  name: string;
  phoneNumber: string;
  address: string;
  Surgical_address: string;
  date: string;
  repetition: string;
  book: any;
}

const initialState: ServiceState = {
  name: "",
  phoneNumber: "",
  address: "",
  Surgical_address: "",
  date: "",
  repetition: "",
  book: [
    {
      id: 0,
      name: "تنظيف المنازل",
      countOfServices: 0,
      services: [
        {
          id: 0,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
      ],
    },
    {
      id: 1,
      name: "التنظيف التجاري",
      countOfServices: 0,
      services: [
        {
          id: 0,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
      ],
    },
    {
      id: 2,
      name: "تنظيف النوافذ",
      countOfServices: 0,
      services: [
        {
          id: 0,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
      ],
    },
    {
      id: 3,
      name: "تنظيف السجاد",
      countOfServices: 0,
      services: [
        {
          id: 0,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 1,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
        {
          id: 2,
          name: "غرفة النوم",
          price: "15 $",
          amount: 0,
          isChecked: false,
        },
      ],
    },
  ],
};

export const servicesSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    handleIncrementAmount: (state, action) => {
      const { bookId, serviceId } = action.payload;
      const updatedServices = state.book.map((book: any) => {
        if (book.id === bookId) {
          const updatedServices = book.services.map((service: any) => {
            if (service.id === serviceId) {
              service.amount += 1;
            }
            return service;
          });

          return {
            ...book,
            serviceData: updatedServices,
          };
        }
        return book;
      });

      state.book = updatedServices;
    },
    handleDecrementAmount: (state, action) => {
      const { bookId, serviceId } = action.payload;
      const updatedServices = state.book.map((book: any) => {
        if (book.id === bookId) {
          const updatedServices = book.services.map((service: any) => {
            if (service.id === serviceId) {
              if (service.amount > 0) service.amount -= 1;
            }
            return service;
          });

          return {
            ...book,
            serviceData: updatedServices,
          };
        }
        return book;
      });

      state.book = updatedServices;
    },

    handleCheckedChange: (state, action) => {
      const { event, bookId, serviceId } = action.payload;
      const updatedServices = state.book.map((book: any) => {
        if (book.id === bookId) {
          const updatedServices = book.services.map((service: any) => {
            if (service.id === serviceId) {
              service.isChecked = event.target.checked;
              if (service.isChecked) {
                book.countOfServices += 1;
              } else {
                book.countOfServices -= 1;
              }
            }
            return service;
          });
          return {
            ...book,
            serviceData: updatedServices,
          };
        }
        return book;
      });
      state.book = updatedServices;
    },
    handleRepetition: (state, action) => {
      state.repetition = action.payload;
    },
    handleDate: (state, action) => {
      state.date = action.payload;
    },
    handleName: (state, action) => {
      state.name = action.payload;
    },
    handlePhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    handleAddress: (state, action) => {
      state.address = action.payload;
    },
    handleSurgical_address: (state, action) => {
      state.Surgical_address = action.payload;
    },
    handleBackToFirstStep: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const {
  handleIncrementAmount,
  handleDecrementAmount,
  handleCheckedChange,
  handleDate,
  handleRepetition,
  handleName,
  handlePhoneNumber,
  handleAddress,
  handleSurgical_address,
  handleBackToFirstStep,
} = servicesSlice.actions;

export default servicesSlice.reducer;
