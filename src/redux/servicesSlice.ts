import { createSlice } from "@reduxjs/toolkit";

interface ServiceState {
  book: any;
  Booking: any;
}

const initialState: ServiceState = {
  Booking: [
    {
      id: 0,
      bookingNumber: "6351",
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
      state.Booking = state.Booking.filter(
        (booking: any) => booking.id !== bookingIdToDelete
      );
    },

    handleRepetition: (state, action) => {
      state.Booking[0].repetition = action.payload;
    },
    handleDate: (state, action) => {
      state.Booking[0].date = action.payload;
    },
    handleName: (state, action) => {
      state.Booking[0].name = action.payload;
    },
    handlePhoneNumber: (state, action) => {
      state.Booking[0].phoneNumber = action.payload;
    },
    handleAddress: (state, action) => {
      state.Booking[0].address = action.payload;
    },
    handleSurgical_address: (state, action) => {
      state.Booking[0].Surgical_address = action.payload;
    },
    handleBackToFirstStep: (state) => {
      return initialState;
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
  handleDeleteBooking,
} = servicesSlice.actions;

export default servicesSlice.reducer;
