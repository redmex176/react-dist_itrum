import ORDERS_DATA from '../constants/orders_request';

interface OrdersList {
  data: {
    id: string;
    order_type: string;
    total: number;
    isViewedByAdmin: boolean;
    order_number: string;
    delivery_type: string;
    isPayed: boolean;
    user: {
      id: string | null;
      name: string | null;
      lastName: string | null;
      secondName: string | null;
      firmName: string | null;
      role: string | null;
    };
    warehouse: { city: string };
    date: string;
  }[];
}

const initialState: OrdersList = {
  data: ORDERS_DATA[0].data
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default rootReducer;
