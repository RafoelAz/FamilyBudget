const initialState = [
  {
    id: 1,
    name: 'Vadik',
    month: 200,
    year: 2200,
    data: '16.02.2020',
    total_money: 2500,
  },
  {
    id: 2,
    name: 'Ira',
    month: 3000,
    year: 45000,
    data: '16.02.2020',
    total_money: 50000,
  },
];

export default function usersReducer(state = initialState, action) {
  return state;
}
