import { useRecoilValue } from "recoil";
import Button from "./Button";
import Pagenation from "./Pagenation";
import SelectEmoVal from "./SelectEmoVal";

import './StuEmo.css'
import { studentState } from "../recoilState";

const StuEmo = () => {
    const students = useRecoilValue(studentState)
    const studentsCount = students.length

    
    return (
        <div>
            <SelectEmoVal pageType='emo' />
            <div className="stuemo-wrap">
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>학생 아이디</th>
                                <th>이름</th>
                                <th className="emo-content">만족</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((stu) => (
                                <tr key={`학생별평균정서-${stu.id}`}>
                                    <td>{stu.email}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.content}</td>
                                    <td>{stu.happy}</td>
                                    <td>{stu.sorrow}</td>
                                    <td>{stu.anger}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagenation total={studentsCount} />

                <div className="report-btn-wrap">
                    <Button
                        text={'보고서 출력 (PDF)'}
                        icon={'pdf'}
                    />
                    <Button
                        text={'보고서 출력 (Excel)'}
                        icon={'excel'}
                    />
                </div>
            </div>
        </div>
    )
}

export default StuEmo;