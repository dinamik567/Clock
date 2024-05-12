import style from "./style.module.css";

export function Clock() {
  return (
    <div className={style.clock}>
      <div className={style.wrapper_short_arrow}>
        <div className={style.short_arrow}></div>
      </div>
      <div className={style.wrapper_long_arrow}>
        <div className={style.long_arrow}></div>
      </div>
      <div className={style.circle}></div>
    </div>
  );
}
