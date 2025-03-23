import { Noted } from "../../assets/noted"
import Piala from '../../assets/piala.png'
import BackgroundListCompetition from '../../assets/background-list-competition.png'
const ListCompetition = () => {
    return (
        <div className="flex flex-col w-screen h-screen relative">
            <Noted />
            <div className="flex absolute">
                <div className="relative w-full h-full">
                    <img src={BackgroundListCompetition} className="w-screen h-screen" />
                </div>
                <div className="flex flex-col items-center w-full h-full  absolute z-10 pt-28">
                    <img src={Piala} className="w-36 h-36" />
                    <div className="flex gap-1">
                        <h1 className="font-bold text-5xl">Challange</h1>
                        <h2 className="font-bold text-5xl text-[#FDC833]">Your Skills!</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default ListCompetition