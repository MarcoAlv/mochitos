import Circle from "@/components/Circle"
import { PROJECT_URL } from "@/config/app.config";

export default function Home() {
  return (
      <div className="">
        This is a test
        <Circle imageSrc={`${PROJECT_URL}/assets/img_icon.png`}/>
      </div>
  )
}
