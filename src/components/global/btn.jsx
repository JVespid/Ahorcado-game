  import { motion } from "framer-motion";
import style from "./btn.module.scss";

/**
 * Este es un componente funcional en JavaScript usando React. Está definiendo un componente llamado
  'Btn' que toma accesorios con los nombres 'valor', 'acción', 'tipo', 'ancho' y 'alto'. Estos
  accesorios se pueden pasar cuando el componente se usa en otra parte del código. 
 * @param {string} value - El texto que se mostrará en el botón.
 * @param {function} action - La función que se ejecutará cuando se haga clic en el botón.
 * @param {string} type - El tipo de botón que se mostrará. Los valores posibles son 'activo' y 'inactivo'.
 * @param {string} width - El ancho del botón. El valor predeterminado es '100%'.
 * @param {string} height - La altura del botón. El valor predeterminado es 'auto'
 * @returns  {JSX.Element} - The button component.
 */
export default function Btn({ value, action, type, width, height }) {
  const variant = type == "active" || type == "inactive" ? type : "inactive";

  const functions = typeof action == "function" ? action : () => {};
  const variants = {
    active: {
      width: width && typeof width == "string" ? width : "100%",
      height: height && typeof height == "string" ? height : "auto",
    },
    inactive: {
      width: width && typeof width == "string" ? width : "100%",
      height: height && typeof height == "string" ? height : "auto",
    },
  };
  return (
    <>
      <motion.button
        onClick={functions}
        animate={variant}
        initial={variant}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        type={variant}
        className={style[`btn-${variant}`]}
      >
        {value}
      </motion.button>
    </>
  );
}
