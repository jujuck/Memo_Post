### L'objectif de ce puzzle est d'assembler l'ensemble des pièces du Puzzle pour réaliser l'interfae ci dessous

<img src="./puzzle.png" />

Pour remplir cet objectif, tu n'as pas besoin de coder la moindre chose. Ton objectif est de décortiquer la structure du projet pour y placer les bouts de code suivant. Chaque bout de code n'a qu'une seule place possible et tous les fichiers nécessaires sont en place
A toi de les comprendre et les intéger en copier-coller au bon endroit. Une fois intégrer dans le fichier, vérifies si certaines lignes ne sont pas à décommenter
Attention, Les bouts de code ne sont pas triès par ordre..

Si ce n'est pas déjà fait, penses à lire le Readme et configurer ton projet avant de te lancer.

### Liste des pièces du puzzle

# Piece 1

`
return (

<main>
<h1>Ajouter un article</h1>
<form onSubmit={handleArticle}>
<InputForm label="Titre de l'article" value={title} />
<InputForm label="Sous titre de l'article" value={subtitle} />
<TextAreaForm label="Description" value={paragraph} />
<InputForm label="Résumé" value={summary} />
<SelectForm
          label="Auteur"
          value={author}
          path="authors"
          property="name"
        />
<button type="submit" className="btn">
Ajouter
</button>
</form>
</main>
);
`

# Piece 2

`const create = async (mountain) => {
  // Execute the SQL INSERT query to add a new mountain to the "mountain" table
  const [result] = await client.query(
   `insert into mountain (title, subtitle, summary, paragraph, author_id) values (?, ?, ?, ?, ?)`,
[
mountain.title,
mountain.subtitle,
mountain.summary,
mountain.paragraph,
mountain.author_id,
]
);

// Return the ID of the newly inserted mountain
return result.insertId;
};`

# Piece 3

`create table author (
  id int primary key auto_increment not null,
  name varchar(255) not null,
  birthday DATE not NULL,
  description LongText not null
);`

# Piece 4

`app.use(express.json());`

# Piece 5

`
function TextAreaForm({ label, value }) {
return (
<label>
{label}
<textarea type="text" ref={value} required />
</label>
);
}

TextAreaForm.propTypes = {
value: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
};
`

# Piece 6

`{
  path: "/ajouter",
  element: <MountainsForms />,
},`

# Piece 7

`const mountain = req.body;`

# Piece 8

`
const handleArticle = useCallback(
async (event) => {
event.preventDefault();

      try {
        const data = {
          title: title.current.value,
          subtitle: subtitle.current.value,
          paragraph: paragraph.current.value,
          summary: summary.current.value,
          author_id: author.current.value,
        };
        await connexion.post("/api/mountains", data);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    },
    [navigate]

);

`

# Piece 9

`
const [options, setOptions] = useState([]);

useEffect(() => {
(async () => {
try {
const myOptions = await connexion.get(`/api/${path}`);
setOptions(myOptions.data);
} catch (error) {
console.error(error);
}
})();
}, [path]);

`

# Piece 10

`router.post("/mountains", mountains.add);`

# Piece 11

`
INSERT INTO author (name, birthday, description) VALUES ('John Doe', '1985-05-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), ('Jane Smith', '1975-08-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), ('Bob MacLinsay','1985-05-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), ('Michael Johnson', '1990-12-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), ('Emily Davis', '1983-03-03', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'), ('Sarah Brown', '1978-05-15', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

`

# Piece 12

`
InputForm.propTypes = {
value: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
};

`

# Piece 13

`
const title = useRef();
const subtitle = useRef();
const paragraph = useRef();
const summary = useRef();
const author = useRef();
const navigate = useNavigate();

`

# Piece 14

`
h1 {
text-align: center;
}

form {
display: flex;
flex-direction: column;
justify-content: center;
margin: 2rem 15%;
border: 1px solid lightskyblue;
border-radius: 2rem;
padding: 2%;
}

label {
font-weight: 800;
}

`

# Piece 15

`function InputForm({ label, value }) {
  return (
    <label>
      {label}
      <input type="text" ref={value} required />
    </label>
  );
}`

# Piece 16

`
return (
<label>
{label}
<select ref={value}>
{options.map((opt) => (

<option key={opt.id} value={opt.id}>
{opt[property]}
</option>
))}
</select>
</label>
);

`

# Piece 17

`
const cors = require("cors");

app.use(
cors({
origin: [
process.env.CLIENT_URL, // keep this one, after checking the value in`server/.env`",
],
})
);

`

# Piece 18

`
const authors = require("./controllers/authors");

router.get("/authors", authors.browse);

`

# Piece 19

`
try {
// Insert the mountain into the database
const insertId = await mountainsModel.create(mountain);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted mountain
    res.status(201).json({ insertId });

} catch (err) {
// Pass any errors to the error-handling middleware
next(err);
}

`

# Piece 20

`
const browse = async (req, res, next) => {
try {
// Fetch all montains from the database
const authors = await authorsModel.readAll();

    // Respond with the montains in JSON format
    res.status(200).json(authors);

} catch (err) {
// Pass any errors to the error-handling middleware
next(err);
}
};

`

# Piece 21

`
nav {
display: flex;
justify-content: space-around;
}

.btn {
background-color: lightskyblue;
margin: 0.5rem 1rem;
padding: 1rem 1.5rem;
border-radius: 0.4rem;
text-decoration: none;
color: white;
font-weight: 800;
}

`

# Piece 22

`
import axios from "axios";

const instance = axios.create({
baseURL: import.meta.env.VITE_API_URL,
});

export default instance;

`

# Piece 23

`

<nav>
<Link to="/">
  <h1>Get All Puzzle</h1>
</Link>
<Link to="/ajouter" className="btn">
  Créer
</Link>
</nav>`

# Piece 24

`
const readAll = async () => {
  // Execute the SQL SELECT query to retrieve all cars from the "car" table
  const [authors] = await client.query(`select \* from author`);

// Return the array of cars
return authors;
};

`
