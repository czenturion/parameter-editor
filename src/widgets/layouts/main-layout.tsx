import s from "@/widgets/layouts/layout-general.module.css";

const MainLayout = ({children}) => {
  return (
    <main className={s.main}>
      {children}
    </main>
  )
};

export default MainLayout;