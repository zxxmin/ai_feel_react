import React, { useEffect, useState } from 'react';
import { DatePicker, Select } from 'antd';
import 'antd/dist/reset.css';
import dayjs from 'dayjs';

import './SelectEmoVal.css'

const { Option } = Select;
const { RangePicker } = DatePicker;

const SelectEmoVal = ({ pageType }) => {
    const [selectedYear, setSelectedYear] = useState(null)
    // const [rangeDisabled, setRangeDisabled] = useState(true);
    const [selectedGrade, setSelectedGrade] = useState("유치원");
    const [selectedClass, setSelectedClass] = useState("한아름");
    const [rangeValue, setRangeValue] = useState([dayjs(), dayjs()]);


    useEffect(() => {
        const currentYear = dayjs().year();
        setSelectedYear(currentYear.toString());
        // setRangeDisabled(false);

        // 오늘 날짜를 포함한 한 주의 범위를 설정
        const startOfWeek = dayjs().startOf('week');
        const endOfWeek = dayjs().endOf('week');
        setRangeValue([startOfWeek, endOfWeek]);
    }, []);


    const onChangeYear = (date) => {
        if (date) {
            const yearString = date.format('YYYY');
            setSelectedYear(yearString);

            // 선택된 연도에 따라 날짜 범위를 업데이트
            const startOfYear = dayjs(yearString).startOf('year');
            const endOfYear = dayjs(yearString).endOf('year');
            setRangeValue([startOfYear, endOfYear]);
        }
    };

    const onChangeGrade = (value) => {
        setSelectedGrade(value);
    };

    const onChangeClass = (value) => {
        setSelectedClass(value)
    }

    const onChangeDateRange = (dates) => {
        if (dates) {
            setRangeValue(dates);
        }
    }

    return (
        <div className='date-wrap'>
            <div>
                <label htmlFor="grade">학년/유치원</label>
                <Select
                    id='grade'
                    value={selectedGrade}
                    onChange={onChangeGrade}
                >
                    <Option value="유치원">유치원</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="5">5</Option>
                    <Option value="6">6</Option>
                </Select>
            </div>
            {(pageType === 'stu' || pageType === 'emo') && (
                <>
                <div>
                    <label htmlFor="cls">반</label>
                    <Select
                        id='cls'
                        value={selectedClass}
                        onChange={onChangeClass}
                    >
                        <Option value="한아름">한아름</Option>
                    </Select>
                </div>
                <div>
                    <label htmlFor="year">연도</label>
                    <DatePicker
                        id='year'
                        picker='year'
                        value={selectedYear ? dayjs(selectedYear, 'YYYY') : null}
                        onChange={onChangeYear}
                        placeholder='연도를 선택하세요'
                    />
                </div>
                </>
            )}
            {pageType === 'emo' && (
                <div>
                    <label htmlFor="dateRange">날짜 범위</label>
                    <RangePicker
                        id='dateRange'
                        value={rangeValue}
                        onChange={onChangeDateRange}
                        // disabled={rangeDisabled}
                        placeholder={['시작 날짜', '종료 날짜']}
                        style={{ width: '100%' }}
                        disabledDate={(current) =>
                            selectedYear
                                ? current.year() !== parseInt(selectedYear)
                                : false
                        }
                    />
                </div>
            )}
        </div>
    )
}

export default SelectEmoVal;