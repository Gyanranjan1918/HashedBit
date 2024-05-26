import { useEffect, useState } from "react";
import './App.css'


function App() {
  const[allTODOS , setAllTODOS] = useState([])
  const[singleTODO, setSingleTODO] = useState({title : "", desc : ""})

  //const [title, setTitle] = useState("");
  //const [desc, setDesc] = useState("");

  function handleAddTODO(){
        //setAllTODOS(prevValue => [...prevValue , singleTODO])
        if(!singleTODO.title || !singleTODO.desc) {
          return
        }
        setAllTODOS([...allTODOS, singleTODO ]);
        saveTODOLocalstore([...allTODOS, singleTODO ])
        
   //console.log(title, desc);
  }
  function deleteTODO(i) { 
        let newArr = [...allTODOS]
       // console.log(i);
        newArr.splice(i, 1);
        saveTODOLocalstore(newArr)
        //tTODOFromLocalStore()
       setAllTODOS(newArr);
  }

  function saveTODOLocalstore(TODO) { 
        localStorage.setItem("TODOS", JSON.stringify(TODO))
  }

  function getTODOFromLocalStore() {
        let data = JSON.parse(localStorage.getItem("TODOS")) || [] ;
        console.log(data);
        setAllTODOS(data)
  }

  useEffect(() => {
        getTODOFromLocalStore()
  } , [])


  return (

    <div className="mainDiv"> 
          <h1 className="">TODO APP</h1> 
    <div className="inputDiv">
        <input
         type="text" placeholder="title" onChange={(e) => setSingleTODO(prevValue => ({...prevValue, title : e.target.value})) } /> 
        
        <input type="text" placeholder="desc"  onChange={(e) =>  setSingleTODO(prevValue => ({...prevValue, desc : e.target.value})) } />  
        
        <button onClick={handleAddTODO}>Add TODO</button>
    </div>
    <div className="showDivParent">
      <table>
<thead>
      <tr>

      <th>sn</th>
      <th>Title</th>
      <th>Desc</th>
      <th>Action</th>
      </tr>
</thead>
<tbody>

         {
               allTODOS.map((data, i) => (
                  //    <div key={i} className="showDiv">
                  <tr>

                          <td>{i+1}.</td>
                          <td>{data.title}</td>
                          <td>{data.desc}</td>
                          <td >

                          <button className="dltBtn" onClick={() => deleteTODO(i)} >Delete</button>
                          </td>
                          </tr>
                  //   </div>      
              ))
              
            }
            </tbody>
            </table>
    </div>
    </div>
    
  )

    
    
          
              
          
    

  
      
}
 
export default App;
