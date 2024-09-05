// export default function Avatar() {
//   return (
//       <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio Y. Zara"
//       />
//   );
// }

// export default function Avatar() {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return (
//         <img
//             className="avatar"
//             src={avatar}
//             alt={description}
//         />
//     );
// }

// export default function TodoList() {
//     const name = 'Hedy Lamarr';
//     return (
//         <h1>{name}'s To Do List</h1>
//     );
// }

const today = new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
        ).format(date);
}

export default function TodoList() {
    return (
        <h1>To do List for {formatDate(today)}</h1>
    );
}