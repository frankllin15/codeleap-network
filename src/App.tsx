import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { ErrorPage } from "./pages/error";
import { Navbar } from "./components/Navbar";

function App() {
    return (
        <div className="flex flex-col w-full min-h-screen">
            <Navbar />
            <main className="flex-1 flex justify-center ">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
