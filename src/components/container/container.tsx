import s from "./container.module.css";

export default function Container({ children }: any) {
  return <div className={s.container}>{children}</div>;
}
