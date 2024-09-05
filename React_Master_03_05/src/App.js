// function Avatar() {
//   return(
//       <img
//         className="avatar"
//         src="https://i.imgur.com/1bX5QH6.jpg"
//         alt="Lin Lanying"
//         width={100}
//         height={100}
//       />
//   );
// }
//
// export default function Profile() {
//   return(
//       <Avatar />
//   );
// }

import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
            <Avatar
                size={80}
                person={{
                    name: 'Aklilu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />
        </div>
    );
}
