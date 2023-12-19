import React,{useEffect, useState} from 'react';
import './App.css';

//class App extends Component{}


//const App = () => {}



const App = () => {







  // todos의 초기값을 빈 배열로 생성하겠다는 의미

  // todos 할 일 목록 들을 저장하는 공간
  // newTodo 새로운 할 일을 추가 작성할 수 있는 공간
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');


  useEffect(() =>{
    console.log(`todos 변경됨 :`, todos)
  }, [todos]);






  //할 일이 추가될 때마다 추가할 수 있는 const를 생성 
  const addTodo = () => {
    if(newTodo.trim() !== ''){

    
    // setTodos에서 ([...todos, newTodo]); 현재 입력되어있는 할 일 목록
    //배열인 todos를 복사해서 복사한 todos에 새로운 할일인 newTodo를 배열에 추가한 후 
    //할 일 목록 설정에 newTodo가 추가된 목록으로 최종 설정해주기 위한 setTodos
    setTodos([...todos, newTodo]);

    //저장된 할일 목록을 초기화 시켜주기 위해 setNewTodo를 초기화 시켜줌
    setNewTodo('');
  }

  };


  // 할 일을 삭제할 때마다 삭제할 수 있는 const를 생성 
  const removeTodo = (index) => {
    //현재 할 일 목록 배열을 복사
    const updateTodos = [...todos];
    // 복사된 배열에서 지정된 자리값(index)를 1개 제거하겠다는 의미
    //updateTodos : 복사된 배열
    // slice : 배열 일부분 복사해서 새로운 배열 반환
    // 원본에 있던 배열은 변경되지 않지만 시작-종료 인덱스 

    // splice :  배열에 내용을 수정하거나 삭제하고, 필요에 따라 새로운 요소를 추가할 수 있음 
    // slice splice : 배열을 조작
    //파이썬에서 많이 씀

      updateTodos.splice(index, 1);
    //내가 제거하고 싶은 할 일을 제거한 후
    //setTodos를 활용해서 할 일 목록을 재설정
    setTodos(updateTodos);
  } 

  return (
    <div>
      <h2>useState를 활용한 TodoList</h2>
      <div>
        <div className='list'>
          <input 
          
          type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>할 일 추가하기</button>
        </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
          <button onClick={() => removeTodo(index)}>삭제하기</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;




//my-app
// map 배열 객체 메서드
// 배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로 새로운 배열을 생성

/*
 예제코드 : 
    const newArray = array.map((value, index, array)=> {});   
 value : 현재 배열안에 있는 배열의 요소 

 index : 배열안에 있는 자릿값

 array : 배열의 원본

 반환값{} : 새로운 배열에서 해당하는 인덱스에 들어갈 값


{todos.map((todo, index)=() => (

<li key={index}> key={index} map 함수로 요소를 생성할 때 각 요소의 고요한 키 값을 지정
                                      react가 각 값에 대한 번호를 부여함으로써 목록을 부여된 번호로 추적하기 위해 사용됨
  {todo}
  <button onClick={()=> removeTodo(index)}>삭제하기</button>
  </li>
)}


array.map((요소, 자릿값, 만약에 새로운 배열이 필요하다면 배열 값 넣어줌) => {
  리턴값으로 새로운 배열을 구성
})


 */