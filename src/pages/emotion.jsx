import { useState } from "react";
import Tab from "../components/Tab";
import SchoolTime from "../components/SchoolTime";
import MonthEmo from "../components/MonthEmo";
import StuEmo from "../components/StuEmo";

const EmotionPage = () => {
    const [selectedTab, setSelectedTab] = useState(1)

    const onClickTab = (id) => {
        setSelectedTab(id)
    }

    return (
        <>
            <div className="tit-area">
                <h1>정서</h1>
                <Tab
                    onClickTab={onClickTab}
                    selectedTab={selectedTab}
                />
            </div>
            <div className="tab-cont">
                {selectedTab === 1 && <SchoolTime />}
                {selectedTab === 2 && <MonthEmo />}
                {selectedTab === 3 && <StuEmo />}
            </div>
        </>
    )
}

export default EmotionPage;