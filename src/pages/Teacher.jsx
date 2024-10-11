import Header from "../components/Header";
import Nav from "../components/Nav";

const TeacherPage = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Nav />
                <div>비담임 교사 페이지</div>
            </div>
        </div>
    )
}

export default TeacherPage;