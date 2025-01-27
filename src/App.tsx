import { useState } from "react";
import * as C from "./App.styles";
import {Item} from './types/item';
import ListItem from "./components/listItem";
import { AddArea } from "./components/AddArea";



const App = ()=>{ 
const [list, setList] = useState<Item[]>([{id:1, name:'Aula de Ingles', done: true},
     {id:2, name:'Estudar ', done: false},]);

     const handleAddTesk=(taskName:string)=>{
      const newList = [...list];
      newList.push({
        id:list.length + 1,
        name: taskName,
        done: false,

      });
      setList(newList);
     }
     const handleTaskChange = (id: number, done: boolean) => {
      const newList= [...list];
      for(const i in newList){ 
        if(newList[i].id === id) {
          newList[i].done = done;
        }
      }
      setList(newList);
    }

  return (
    <C.Container>
        <C.Area>
          <C.Header>
            Lista de tarefas
          </C.Header>
          <AddArea onEnter={handleAddTesk}/>
          {list.map((item, index)=>(
            <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
          ))}
        </C.Area> 
    </C.Container>
  )
}

export default App
