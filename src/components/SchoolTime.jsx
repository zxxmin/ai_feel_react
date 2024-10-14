import { useRecoilValue } from 'recoil';
import Pagenation from './Pagenation';
import SelectEmoVal from './SelectEmoVal';
import { studentState } from '../recoilState';

const SchoolTime = () => {
    const students = useRecoilValue(studentState)
    const studentsCount = students.length

    return (
        <div>
            <SelectEmoVal pageType='emo' />
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>학년</th>
                                <th>학생 아이디</th>
                                <th>이름</th>
                                <th>날짜</th>
                                <th>시간</th>
                                <th>단계</th>
                                <th>등/하교 시간</th>
                                <th>유형</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((stu) => (
                                <tr key={`등하교시간-${stu.id}`}>
                                    <td>{stu.id}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.date}</td>
                                    <td>{stu.schlTime}</td>
                                    <td>{stu.level}</td>
                                    <td>오전</td>
                                    <td>{stu.emoType}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagenation total={studentsCount} />
            </div>
        </div>
    )
}

export default SchoolTime;