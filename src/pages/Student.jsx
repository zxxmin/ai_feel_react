import SelectEmoVal from "../components/SelectEmoVal";

const StudentPage = () => {
    return (
        <>
            <div className="tit-area">
                <h1>학생</h1>
            </div>
            <SelectEmoVal pageType='stu' />
            학생 페이지
        </>
    )
}

export default StudentPage;