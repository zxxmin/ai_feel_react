import { useRecoilValue } from "recoil";
import Button from "../components/Button";
import Pagenation from "../components/Pagenation";
import SearchArea from "../components/SearchArea";
import { btnDataState, homeTeaState } from "../recoilState";

const HomeTeaPage = () => {
    const homeTeachers = useRecoilValue(homeTeaState);
    const hommTeachersCount = homeTeachers.length;
    const btnData = useRecoilValue(btnDataState)

    return (
        <>
            <div className="tit-area">
                <h1>담임교사</h1>
                <SearchArea btnType={'hmt'} />
            </div>
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>순번</th>
                                <th>이름</th>
                                <th>이메일</th>
                                <th>전화번호</th>
                                <th>조치</th>
                            </tr>
                        </thead>
                        <tbody>
                            {homeTeachers.map((hometea) => (
                                <tr key={hometea.id}>
                                    <td>{hometea.id}</td>
                                    <td>{hometea.name}</td>
                                    <td>{hometea.email}</td>
                                    <td>{hometea.phone}</td>
                                    <td>
                                        <div className="btn-wrap">
                                            {btnData.map((btn) => (
                                                <Button
                                                    key={btn.id}
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

                <Pagenation total={hommTeachersCount} />
            </div>
        </>
    )
}

export default HomeTeaPage;