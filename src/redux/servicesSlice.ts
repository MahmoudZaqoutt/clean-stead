import { createSlice } from "@reduxjs/toolkit";

interface ServiceState {
  newBook: any;
  book: any;
  Bookings: any;
}

const initialState: ServiceState = {
  newBook: {
    id: Math.round(Math.random() * 10),
    bookingNumber: String(Math.round(Math.random() * 100)),
    name: "",
    phoneNumber: "",
    address: "",
    Surgical_address: "",
    date: "",
    repetition: "",
    status: "acceptable",
    totalPrice: 120,
  },
  Bookings: [
    {
      id: Math.round(Math.random() * 10),
      bookingNumber: String(Math.round(Math.random() * 100)),
      name: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      Surgical_address: "456 Surgery St",
      date: "2023-09-16",
      repetition: "شهريا",
      status: "pending",
      totalPrice: 50,
    },
    {
      id: Math.round(Math.random() * 10),
      bookingNumber: String(Math.round(Math.random() * 100)),
      name: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      Surgical_address: "456 Surgery St",
      date: "2023-09-16",
      repetition: "شهريا",
      status: "pending",
      totalPrice: 50,
    },
    {
      id: Math.round(Math.random() * 10),
      bookingNumber: String(Math.round(Math.random() * 100)),
      name: "John Doe",
      phoneNumber: "123-456-7890",
      address: "123 Main St",
      Surgical_address: "456 Surgery St",
      date: "2023-09-16",
      repetition: "شهريا",
      status: "pending",
      totalPrice: 50,
    },
  ],

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
export const servicesSlice: any = createSlice({
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
    handleDeleteBooking: (state, action) => {
      const bookingIdToDelete = action.payload;
      state.Bookings = state.Bookings.filter(
        (booking: any) => booking?.id !== bookingIdToDelete
      );
    },

    handleTotalPrice: (state, action) => {
      state.newBook.totalPrice = action.payload;
    },
    handleRepetition: (state, action) => {
      state.newBook.repetition = action.payload;
    },
    handleDate: (state, action) => {
      state.newBook.date = action.payload;
    },
    handleName: (state, action) => {
      state.newBook.name = action.payload;
    },
    handlePhoneNumber: (state, action) => {
      state.newBook.phoneNumber = action.payload;
    },
    handleAddress: (state, action) => {
      state.newBook.address = action.payload;
    },
    handleSurgical_address: (state, action) => {
      state.newBook.Surgical_address = action.payload;
    },
    handleBackToFirstStep: (state, action) => {
      state.Bookings = [...state.Bookings, action.payload];
      state.book = initialState.book;
      state.newBook = initialState.newBook;
    },
  },
});

export const {
  handleTotalPrice,
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
  handleDeleteBooking,
} = servicesSlice.actions;

export default servicesSlice.reducer;
