import './SearchArea.css'
import Button from "./Button";


const SearchArea = ({ btnType }) => {

    const btnData = (btnType) => {
        switch(btnType) {
            case 'stu' :
                return {
                    text: '학생 추가',
                    icon: 'addperson',
                    placeholder: '검색 (이름, 번호)'
                }
            case 'hmt' :
                return {
                    text: '담임교사 등록',
                    icon: 'addperson',
                    placeholder: '검색 (이름, 이메일, 전화번호)'
                }
            case 'tea' :
                return {
                    text: '비담임교사 등록',
                    icon: 'addperson',
                    placeholder: '검색 (이름, 이메일, 전화번호)'
                }
            default:
                return;
        }

    }

    const { text, icon } = btnData(btnType);

    return (
        <fieldset className="search-area">
            <legend>검색</legend>
            <div className="search">
                <input type="text" placeholder="검색 (이름, 번호)" title="검색어 입력" />
                <button className="search-btn">검색</button>
            </div>
            <div className="search-option">
                <Button
                    text={text}
                    icon={icon}
                />
            </div>
        </fieldset>
    )
}

export default SearchArea;