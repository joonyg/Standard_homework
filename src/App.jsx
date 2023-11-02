import { useState } from "react";
import "./App.css"
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const initialstate = ["apple","banana","cherry","date","elderberry"]
  const [array,setArray]= useState(initialstate);
  const[result ,setResult] = useState("");
  const [query,setQuery] = useState("");//input을 위한 value


  const handlerForEach= ()=>{
   let temp = ""
   array.forEach(function(item,index){
    temp  +=`${index}:${item } /`;
   });
   setResult(temp);
  }
  const handlerFilter = function(){ 
   const filtered = array.filter((item,index)=>{return item.includes(query)});

   setResult(filtered.join(","))
  };
  const handlerMap = () =>{
    const mapped = array.map((item,index)=>{
      return item.toUpperCase()
      
    });
   setResult(mapped.join(", "))
  };
 const handlerPop = () =>{
  //1,  원본배열에 pop한 값을 저장한다.
  const newArr = [...array];
  newArr.pop()
  //2. setarray
  setArray(newArr)
  //3. array를 기반으로 reslut 생성(setResult)
  setResult(newArr.join(", "))
  

 };
  //하나씩 누적한 데이타
  const handlerReduce = () =>{
    const reduced = array.reduce((acc,cur)=>{
      return `${acc} + ${cur}`
    });
    setResult(reduced);
  };
  const handlerPush = () =>{
    if(query.length <=0){
      alert("값을 추가하시오")
      return false
    }
    const newArr = [...array,query];
    setArray(newArr)
    setResult(newArr.join(", "))
  }
const handlerSlice= () =>{
  const newSlice = array.slice(1,4)
  setResult(newSlice.join(", "))
}
 const handlerSplice =() =>{
  //1.array 배열을  setResult배열에 옮긴다.
  const newArray = [...array];
  newArray.splice(2,2,"kiwi", "lime")
  
  setResult(newArray)
 } 

const handlerindexOf = () =>{
  const Clickindexof = array.indexOf(query)
  setResult(Clickindexof)
}

const handlerincludes = () =>{
  const Clickindexof = array.includes(query)
  setResult(Clickindexof)
}
const handlerfind =() =>{
  const ClickFind = array.find((element) => element === query);
  if(ClickFind){
    setResult(ClickFind)
  }else{
    setResult(array[0])
  }
 }

 const handlersome=()=>{
  const clickSome = array.some((element) => element.includes(query))
 
  setResult(clickSome);
  
 }
 const handlerevery = () =>{
  const clickEvery =array.every((element)=> element.length>=2)
  setResult(clickEvery);
 }
 const handlerSort = () =>{
  const clikcSort =array.sort()
  setResult(clikcSort)
 }
 const handlerjoin = () =>{
  const clickJoin = array.join(", ")
  setResult(clickJoin)
 }
  return ( 
    <div>< h1>standard반 배열 API 테스트</h1>
    <input value={query}onChange={function(e){
      setQuery(e.target.value)
    }}/>
    <div>
    <button onClick={handlerForEach}>foreach</button>
    <button onClick={handlerFilter}>filter</button>
    <button onClick={handlerMap}>map</button>
    <button onClick={handlerReduce}>reduce</button>
    <button onClick={handlerPush}>push</button>
    <button onClick={handlerPop}>Pop</button>
    <button onClick={handlerSlice}>Slice</button>
    <button onClick={handlerSplice}>Splice</button>
    <button onClick={handlerindexOf}>indexof</button>
    <button onClick={handlerincludes}>includes</button>
    <button onClick={handlerfind}>find</button>
    <button onClick={handlersome}>some</button>
    <button onClick={handlerevery}>every</button>
    <button onClick={handlerSort}>sort</button>
    <button onClick={handlerjoin}>join</button>
    </div>
    <div>
      <h3>원본배열</h3>
      <p>{array.join(", ")}</p>
    </div>
    <div>
      <h3>결과물</h3>
      <p>{result.toString()}</p>
    </div>
    </div>
  );
}

export default App;
