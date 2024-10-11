import SelectEmoVal from "./SelectEmoVal";

const StuEmo = () => {
    return (
        <div>
            <SelectEmoVal pageType='emo' />
            <div>
                <div className='table-wrap'>
                    <table>
                        <thead>
                            <tr>
                                <th>학생 아이디</th>
                                <th>이름</th>
                                <th className="emo-content">만족</th>
                                <th className="emo-happy">행복</th>
                                <th className="emo-sorrow">슬픔</th>
                                <th className="emo-anger">분노</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2470114</td>
                                <td>김희진</td>
                                <td>5</td>
                                <td>0</td>
                                <td>4.3</td>
                                <td>4.7</td>
                            </tr>
                            <tr>
                                <td>2470104</td>
                                <td>노나현</td>
                                <td>3</td>
                                <td>2</td>
                                <td>5</td>
                                <td>2.3</td>
                            </tr>
                            <tr>
                                <td>2470109</td>
                                <td>이해리</td>
                                <td>5</td>
                                <td>0</td>
                                <td>5</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>2470105</td>
                                <td>노혜림</td>
                                <td>0</td>
                                <td>5</td>
                                <td>4.3</td>
                                <td>4.3</td>
                            </tr>
                            <tr>
                                <td>2470102</td>
                                <td>김태리</td>
                                <td>1</td>
                                <td>4</td>
                                <td>2.5</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2470101</td>
                                <td>곽하랑</td>
                                <td>2.7</td>
                                <td>2.5</td>
                                <td>0</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2470111</td>
                                <td>채시은</td>
                                <td>0</td>
                                <td>5</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2470114</td>
                                <td>김희진</td>
                                <td>2</td>
                                <td>3.8</td>
                                <td>3.5</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>2470113</td>
                                <td>김희연</td>
                                <td>0</td>
                                <td>1.4</td>
                                <td>1</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>2470112</td>
                                <td>남유주</td>
                                <td>0</td>
                                <td>4.3</td>
                                <td>3</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default StuEmo;