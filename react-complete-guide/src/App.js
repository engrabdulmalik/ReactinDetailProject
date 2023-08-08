import Expenses from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id : 'el1',
      amount : '$750.00',
      title : 'Toilet paper',
      date : new Date(2020,7,14 ),
    },
    {
      id : 'el2',
      amount : '$850.00',
      title : 'Car Insurance',
      date : new Date(2020,9,14 ),
    },
    {
      id : 'el3',
      amount : '$950.00',
      title : 'New Desk Wooden',
      date : new Date(2020,10,14 ),
    },
    {
      id : 'el4',
      amount : '$650.00',
      title : 'Coffee Maker',
      date : new Date(2020,11,14 ),
    }
  ]
  return (
    <div>
   <Expenses item = {expenses}/>
   </div>
  );
}

export default App;
