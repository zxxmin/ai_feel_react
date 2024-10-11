import Header from "../components/Header";
import Nav from "../components/Nav";

const StudentPage = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <Nav />
                <div>
                    학생 페이지
                </div>
            </div>
        </div>
    )
}

export default StudentPage;