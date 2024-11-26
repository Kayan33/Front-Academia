import { Link } from "react-router-dom";

export default function Login(){
return(
    <div>
        <Link to = '/LoginAluno'>Sou Aluno</Link>
<br></br>
       <Link to = '/LoginPersonal'>Sou Pesonal</Link>
    </div>
)
}