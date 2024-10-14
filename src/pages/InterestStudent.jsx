import { useRecoilValue } from "recoil";
import Pagenation from "../components/Pagenation";
import { interestStudentState } from "../recoilState";

const InterestStudentPage = () => {
    const intStudents = useRecoilValue(interestStudentState)
    const intStudentsCount = intStudents.length

    return (
        <>
            <div className="tit-area tit-row">
                <h1>관심학생</h1>
                <p>최근 7일 : 09/20~09/26</p>
            </div>
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>학생 아이디</th>
                                <th>이름</th>
                                <th>학년</th>
                                <th>반</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                            </tr>
                        </thead>
                        <tbody>
                            {intStudents.map((int) => (
                                <tr key={int.id}>
                                    <td>{int.id}</td>
                                    <td>{int.email}</td>
                                    <td>{int.name}</td>
                                    <td>{int.grade}</td>
                                    <td>{int.class}</td>
                                    <td>{int.sorrow}</td>
                                    <td>{int.anger}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagenation total={intStudentsCount} />
            </div>
        </>
    )
}

export default InterestStudentPage;