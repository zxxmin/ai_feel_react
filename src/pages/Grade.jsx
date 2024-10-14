import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import { btnTwoDataState } from "../recoilState";

const GradePage = () => {
    const gradeData = [
        { id: 0, grade: '유치원' },
        { id: 1, grade: 1 },
        { id: 2, grade: 2 },
        { id: 3, grade: 3 },
        { id: 4, grade: 4 },
        { id: 5, grade: 5 },
        { id: 6, grade: 6 },
    ]

    const btnData = useRecoilValue(btnTwoDataState)
    
    return (
        <>
            <div className="tit-area">
                <h1>학년/유치원</h1>
                <Button
                    text={'학년/유치원 추가'}
                    icon={'addgrade'}
                />
            </div>
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>학년/유치원</th>
                                <th>조치</th>
                            </tr>
                        </thead>
                        <tbody>
                            {gradeData.map((grd) => (
                                <tr key={`설정-학년-${grd.id}`}>
                                    <td>{grd.grade}</td>
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
            </div>
        </>
    )
}

export default GradePage;