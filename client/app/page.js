import AuthContext from "./components/AuthContext";
import Login from "./components/Login";


export default function Home() {
  return (
    <AuthContext>
      <Login/>
    </AuthContext>
  )
}
