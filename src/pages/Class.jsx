import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import SelectEmoVal from "../components/SelectEmoVal";
import { btnTwoDataState } from "../recoilState";

const ClassPage = () => {
    const btnData = useRecoilValue(btnTwoDataState)

    return (
        <>
            <div className="tit-area">
                <h1>반</h1>
                <Button
                    text={'반 추가'}
                    icon={'addclass'}
                />
            </div>
            <SelectEmoVal pageType='cls' />
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>반</th>
                                <th>조치</th>
                            </tr>
                        </thead>
                        <tbody>
                            <td>한아름</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ClassPage;