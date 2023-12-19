# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






### todo List를 만들며 알게된 점




//my-app
// map 배열 객체 메서드
// 배열의 각 요소에서 함수를 호출하고, 그 함수의 반환값으로 새로운 배열을 생성

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





 // slice : 배열 일부분 복사해서 새로운 배열 반환
    // 원본에 있던 배열은 변경되지 않지만 시작-종료 인덱스 

    // splice :  배열에 내용을 수정하거나 삭제하고, 필요에 따라 새로운 요소를 추가할 수 있음 
    // slice splice : 배열을 조작
    //파이썬에서 많이 씀

