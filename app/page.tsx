import Navigation from "./feature/Navigation/Navigation";
import Quis from "./feature/Quis/Quis";
import { ContainedQuis } from "./feature/components/Quis/Soal/Soal";

interface dummy_inter {
  s: string, // soal
  o: string // opsi
}

export default function Home() {


  return (
    <>
      <Navigation />
    </>
  )
}
