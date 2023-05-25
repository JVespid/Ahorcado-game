import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
// el logo tiene un tamaño total de 106x106px, este tamaño tiene que ser respetado por el resto de componentes para que no se sobrepongan
export default function Logo() {
  return (
    <>
      <Link href={"/"}>
        <div className={"image"}>
          <Image
            src="/alura-v2-any-bg.png"
            className="logo"
            width={"90"}
            height={"90"}
            alt="logo alura latam"
            priority
          />
        </div>
      </Link>
      <style jsx>{`
        .image {
          position: absolute;
          top: 20px;
          left: 20px;
          width: auto;
          height: auto;
        }
        .logo{
          
        }
        .logo::hover{
          scale: 1.1;
        }
      `}</style>
    </>
  );
}
