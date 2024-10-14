import { useRecoilValue } from "recoil";
import Pagenation from "./Pagenation";
import SelectEmoVal from "./SelectEmoVal";
import { studentState } from "../recoilState";

const MonthEmo = () => {
    const students = useRecoilValue(studentState);
    const studentsCount = students.length

    return (
        <div>
            <SelectEmoVal pageType='emo' />
            <div>
                <div className="table-wrap">
                    <table>
                        <colgroup>
                            <col style={{width: '80px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                            <col style={{width: '100px'}} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th rowSpan={2}>이름</th>
                                <th colSpan={4}>2024-09-11</th>
                                <th colSpan={4}>2024-09-12</th>
                                <th colSpan={4}>2024-09-13</th>
                                <th colSpan={4}>2024-09-14</th>
                            </tr>
                            <tr>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-content">만족</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-content">만족</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-content">만족</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-content">만족</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>김희진</td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td>4</td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>노나현</td>
                                <td></td>
                                <td>1</td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>1</td>
                                <td>5</td>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>이해리</td>
                                <td>5</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                                <td></td>
                                <td>5</td>
                                <td>5</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>노혜림</td>
                                <td></td>
                                <td>5</td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td>5</td>
                                <td></td>
                                <td>5</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>김태리</td>
                                <td>3</td>
                                <td></td>
                                <td>4</td>
                                <td></td>
                                <td>2</td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td>1</td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>곽하랑</td>
                                <td></td>
                                <td></td>
                                <td>3</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>채시은</td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>김희진</td>
                                <td>2</td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td>5</td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>김희연</td>
                                <td></td>
                                <td>1.5</td>
                                <td></td>
                                <td>1</td>
                                <td></td>
                                <td>1</td>
                                <td></td>
                                <td></td>
                                <td>2</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>남유주</td>
                                <td></td>
                                <td></td>
                                <td>4</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>5</td>
                                <td></td>
                                <td>3</td>
                                <td></td>
                                <td>4</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Pagenation total={studentsCount} />
            </div>
        </div>
    )
}

export default MonthEmo;