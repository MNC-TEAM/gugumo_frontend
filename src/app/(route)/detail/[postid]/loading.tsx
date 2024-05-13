import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div style={{top : 0, left : 0, width : "100%", height : "100%", position : "fixed", display : "flex", alignItems : "center", justifyContent : "center", background : "rgba(255,255,255,0.2)", backdropFilter : "blur(10px)"}}>
      <MoonLoader color="#000"></MoonLoader>
    </div>
  )
}
