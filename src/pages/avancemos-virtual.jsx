import Login from "@/components/avancemos-virtual/login.jsx";


export default function AvancemosVirtual() {
  return (
    <div className="h-screen bg-cover bg-center flex items-center"
    style={{ backgroundImage: "url('/login/FotoCoorporativa.jpg')" }}>
      <div className="fixed top-4 left-4">
        <Login />
      </div>
    </div>
  );
}