import "@/styles/global.css";
import MainLayout from "../widgets/layouts/main-layout";

export default function App({ Component, ...rest }) {
    return <MainLayout><Component {...rest} /></MainLayout>;
}