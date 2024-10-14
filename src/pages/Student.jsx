import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import Pagenation from "../components/Pagenation";
import SearchArea from "../components/SearchArea";
import SelectEmoVal from "../components/SelectEmoVal";
import { btnTwoDataState, studentState } from "../recoilState";

const StudentPage = () => {
    const students = useRecoilValue(studentState)
    const studentsCount = students.length

    const btnData = useRecoilValue(btnTwoDataState);

    return (
        <>
            <div className="tit-area">
                <h1>학생</h1>
                <SearchArea btnType={'stu'} />
            </div>
            <SelectEmoVal pageType='stu' />
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>반</th>
                                <th>번호</th>
                                <th>이름</th>
                                <th>비밀번호</th>
                                <th>조치</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((stu) => (
                                <tr key={`학생-${stu.id}`}>
                                    <td>{stu.id}</td>
                                    <td>{stu.class}</td>
                                    <td>{stu.id}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.disabledPassword}</td>
                                    <td>
                                        <div className="btn-wrap">
                                            {btnData.map((btn) => (
                                                <Button
                                                    key={btn.icon}
                                                    iconOnly={true}
                                                    text={btn.text}
                                                    icon={btn.icon}
                                                />
                                            ))}
                                        </div>
                                     </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Pagenation total={studentsCount} />
            </div>
        </>
    )
}

export default StudentPage;