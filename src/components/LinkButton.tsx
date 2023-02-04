import Image from "next/image";
import linkImage from "../asset/external-link-svgrepo-com.svg"


interface Props {
  link: string
  content: string
}


export const LinkButton = (props:Props) => {



  return(
    <div>
      <a href={props.link} className="flex mb-1 mt-1 float-left bg-gray-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded shadow-md">
        <div className="float-left mr-1">
          {props.content}
        </div>
        <Image
          /* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */
          src={linkImage}
          alt={"link image"}
          width={15}
          height={15}
          decoding={"sync"}
          className="float-right  mt-0 mb-0"
        />
      </a>
    </div>
  )
}