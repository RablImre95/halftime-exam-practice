const data = require('./data')

const countCompletedTodos = (todosArr) => {
    let completedTodosCounter = 0;
    // for (let i = 0; i < todosArr.length; i ++) {
    //     if (todosArr[i].completed === true) {
    //         completedTodosCounter ++;
    //    }
    // }

    // todosArr.forEach(todo => {
    //     if (todo.completed === true) {
    //         completedTodosCounter++;
    //     }
    // })

    // todosArr.forEach(todo => (todo.completed) ? completedTodosCounter++ : null)
    // return completedTodosCounter;

    return todosArr.filter(todo => todo.completed === true).length

    // return todosArr.reduce((counter, todo) => {
    //     return todo.completed ? counter + 1 : counter;
    // }, 0);

}

// console.log(countCompletedTodos(data));

const getUniqueUserIds = (todosArr) => {
    const uniqueIds = [];

    todosArr.forEach(todo => (!uniqueIds.includes(todo.userId)) ? uniqueIds.push(todo.userId) : null)

// for (let i = 0; i < todosArr.length; i++) {
//     const newUserId = todosArr[i].userId;

//     if (!uniqueIds.includes(newUserId)) {
//         uniqueIds.push(newUserId)
//     }

//     // for (let j = 0; j < uniqueIds.length; j++){
//     //     const currentUserId = uniqueIds[j]

//     //     if (newUserId[j] === currentUserId) {
//     //         break;
//     //     }

//     //     if (j === uniqueIds.length - 1) {
//     //         uniqueIds.pish(newUserId);
//     //         break;
//     //     }
//     // }
// }

    return uniqueIds;

}

console.log(getUniqueUserIds(data))