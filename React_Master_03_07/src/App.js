// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];
//
// export default function List() {
//   const listItems = people.map(person =>
//       <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }

import {people} from "./data";
import {getImageUrl} from "./utils";

export default function List() {
    const chemists = people.filter(person =>
        person.profession === 'chemist'
    );
    const listItems = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return <ul>{listItems}</ul>;
}