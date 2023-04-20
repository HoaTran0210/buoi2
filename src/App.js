import StudentList from "./StudentList";
import { useState } from "react";
function App() {
  const [x, setX] = useState(0);
  const [text, setText] = useState("Hi");
  const [name, setName] = useState("");
  const [student, setStudent] = useState({ name: "Le Cho", old: 5 });
  const [check, setCheck] = useState("true");
  const [list, setList] = useState([1, 2, 3, 4]);
  const vd=[{name:'Heo',old:2},{name:'Ga',old:3}]
  if (!localStorage.getItem("list2")) {// lần đầu tiên, khi chưa lưu list vào localstorage
    localStorage.setItem("list2", JSON.stringify(list2))
}
  const [list2, setList2] = useState(()=>{
    let listLocal
    if (localStorage.getItem("list2")){
      listLocal=JSON.parse(localStorage.getItem("list2"))
    }
    else{
      listLocal=vd
    }
    console.log(listLocal)
    return listLocal
  })
  const handle_increase = () => {
    setX((pre) => pre + 10);
    setX((pre) => pre * 10);
  };
  const handle_change_text = (e) => {
    e.preventDefault();
    setText(name);
    setStudent((pre) => ({ ...pre, name: name }));
    setName("");
  };
  const handle_change_name = (e) => {
    setName(e.target.value);
  };
  const handle_toggle_student = () => {
    setCheck((pre) => !pre);
  };

  const handle_add_student = (e) =>{
    setList2((pre)=> {
      const newList= [...pre,{name:name,old:3}]
      localStorage.setItem("list2",JSON.stringify(newList))
      return newList
    })
    setName("");
    
  }

  return (
    <div>
      <h1>{x}</h1>
      <h1>Name:{text}</h1>
      <h2>React JS</h2>
      <StudentList />
      <h1>
        Ho Ten: {student.name}, Tuoi: {student["old"]}
        {JSON.stringify(student)}
      </h1>
      <button onClick={handle_increase}>Increase</button>
      <br></br>
      <button onClick={handle_change_text}>Change Text</button>
      <form onSubmit={handle_change_text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>
      <button onClick={handle_toggle_student}>Toggle Student</button>
      {check ? <StudentList /> : ""}

      <ul>
        {list.map((st,key)=>{
          return <li>{st}</li>
        })
        }
      </ul>


      <ul>
        {
          list2.map((st,key)=>{
            return <li>{st.name + "-" + st.old}</li>
          })
        }
      </ul>

      <form onSubmit={handle_change_text}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handle_change_name}
        />
      </form>
      <button onClick={handle_add_student}>Add Student</button>
    </div>
  );
}

export default App;