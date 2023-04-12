import Image from "next/image";
import Link from "next/link";
// el logo tiene un tamaño total de 106x106px, este tamaño tiene que ser respetado por el resto de componentes para que no se sobrepongan
const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <div className={"image"}>
          <Image
            src="/alura-v2-any-bg.png"
            width={"90"}
            height={"90"}
            alt="logo alura latam"
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
      `}</style>
    </>
  );
};

export default Logo;
