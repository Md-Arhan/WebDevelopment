// import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {

  const handleClick = () => {
    console.log("Clicked")
  }

  return (
    <>
       <h1>Material UI</h1>
       <Button variant="outlined" onClick={handleClick}>Outlined</Button>
       <Button variant="disabled" onClick={handleClick} startIcon={<DeleteIcon />}>Disabled</Button>
    </>
  )
}

export default App
