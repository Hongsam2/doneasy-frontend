import { GrMapLocation } from 'react-icons/gr';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';


function Intro() {
    return (
        <>
        <div className='bg-gray-50 py-12'>
            <div className=" w-1/2 mx-auto">
                <div className="my-4">
                    <div className="bg-green-600 border shadow-md mx-auto mt-12 mb-12 rounded-2xl">
                    <div className='w-11/12 rounded-xl mx-auto my-8 bg-white border border-green-600'>
                    <div className='w-1/2 mx-auto mt-24 mb-12'><img alt='' src='/img/logo.png'></img></div>
                        <div className="text-center font-bold text-xl mt-12">" 안녕하세요, 기부 단체 Doneasy 입니다. "</div>
                        <div className='w-11/12 mx-auto mt-12 mb-12'><img alt='' src='/img/donation.jpg'></img></div>
                        <div className="text-center font-bold text-xl mt-12">" 여러분의 소중한 후원과 참여를 기다립니다. "</div>
            
                        <BiPhoneCall className=' mt-24 h-8 w-8 mx-auto' size="sm"/>
                        <div className="text-center mt-6 ">02-123-456</div>

                        <AiOutlineMail className=' mt-12 h-8 w-8 mx-auto' size="sm"/>
                        <div className="text-center mt-6 ">doneasy@gmail.com</div>
            
                        <GrMapLocation className=' mt-12 h-8 w-8 mx-auto' size="sm"/>
                        <div className="text-center mt-6 ">경기도 성남시 분당구 판교로 289번길 20</div>
                        <div className='w-1/2 mx-auto mt-6 mb-4'><img alt='' src='/img/loca.PNG'></img></div>

                        <div className='w-1/3 ml-auto px-4 mt-6 mb-4'><img alt='' src='/img/donate.png'></img></div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}
export default Intro;