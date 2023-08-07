import { Route, Routes } from "react-router"
import Add_stu from "./component/Add_stu/Add_stu"
import View_stu from "./component/View_stu/View_stu"
import Edit_stu from "./component/Edit_stu/Edit_stu"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<View_stu />} />
        <Route path='/add' element={<Add_stu />} />
        <Route path='/edit/:id' element={<Edit_stu />} />
      </Routes>
    </>
  )
}

export default App
