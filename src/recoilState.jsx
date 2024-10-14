import { atom } from "recoil";

export const emailState = atom({
    key: 'emailState',
    default: '',
})

export const passwordState = atom({
    key: 'passwordState',
    default: '',
})

export const btnTwoDataState = atom ({
    key: 'btnDataTwoState',
    default: [
        { id: 1, text: '수정 버튼', icon: 'edit'},
        { id: 2, text: '삭제 버튼', icon: 'del'},
    ]
})

export const btnDataState = atom({
    key: 'btnDataState',
    default: [
        { id: 1, text: '담당학급정보 버튼', icon: 'info' },
        { id: 2, text: '비밀번호 변경 버튼', icon: 'changepwd' },
        { id: 3, text: '반 지정 버튼', icon: 'checkclass' },
        { id: 4, text: '삭제 버튼', icon: 'del' },
    ],
});

export const homeTeaState = atom({
    key: 'homeTeaState',
    default: [
        { id: 1, name: '박지영', email: 'jiyoung.park@naver.com', phone: '010-2345-6789' },
        { id: 2, name: '이정훈', email: 'jeonghoon.lee@naver.com', phone: '010-3456-7890' },
        { id: 3, name: '최은지', email: 'eunji.choi@gmail.com', phone: '010-4567-8901' },
        { id: 4, name: '김다현', email: 'dahyun.kim@naver.com', phone: '010-5678-9012' },
        { id: 5, name: '정수민', email: 'sumin.jung@hanmail.net', phone: '010-6789-0123' },
        { id: 6, name: '박서연', email: 'seoyeon.park@gmail.com', phone: '010-7890-1234' },
        { id: 7, name: '장민지', email: 'minji.jang@naver.com', phone: '010-9012-3456' },
        { id: 8, name: '조윤호', email: 'younho.cho@naver.com', phone: '010-0123-4567' },
    ],
})

export const teacherState = atom({
    key: 'teacherState',
    default: [
        { id: 1, name: '이윤아', email: '0093784@hanmail.net', phone: '010-4903-1723' },
    ]
})

export const studentState = atom({
    key: 'studentState',
    default: [
        { id: 1, name: '김희진', email: '2470114', password: '3556', disabledPassword: '****', class: '한아름', date: '2024-10-01', schlTime: '13:36:31', level: '4', emoType: '행복', content: '5', happy: '0', sorrow: '4.3', anger: '4.7',},
        { id: 2, name: '노나현', email: '2470104', password: '5053', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '08:49:29', level: '5', emoType: '행복', content: '3', happy: '2', sorrow: '5', anger: '2.3',},
        { id: 3, name: '이해리', email: '2470109', password: '9569', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '08:50:17', level: '1', emoType: '행복', content: '5', happy: '0', sorrow: '5', anger: '3',},
        { id: 4, name: '노혜림', email: '2470105', password: '3361', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '08:51:37', level: '3', emoType: '슬픔', content: '0', happy: '5', sorrow: '4.3', anger: '4.3',},
        { id: 5, name: '김태리', email: '2470102', password: '2968', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '08:52:39', level: '1', emoType: '분노', content: '1', happy: '4', sorrow: '2.5', anger: '0',},
        { id: 6, name: '곽하랑', email: '2470101', password: '9877', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '09:02:12', level: '5', emoType: '분노', content: '2.7', happy: '2.5', sorrow: '0', anger: '2',},
        { id: 7, name: '채시은', email: '2470111', password: '0626', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '09:05:29', level: '1', emoType: '행복', content: '0', happy: '5', sorrow: '0', anger: '0',},
        { id: 8, name: '김희진', email: '2470114', password: '2411', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '09:20:07', level: '1', emoType: '만족', content: '2', happy: '3.8', sorrow: '3.5', anger: '2',},
        { id: 9, name: '김희연', email: '2470113', password: '4081', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '09:21:13', level: '3', emoType: '행복', content: '0', happy: '1.4', sorrow: '1', anger: '0',},
        { id: 10, name: '남유주', email: '2470112', password: '4582', disabledPassword: '****', class: '한아름', date: '2024-10-02', schlTime: '09:22:30', level: '1', emoType: '행복', content: '0', happy: '4.3', sorrow: '3', anger: '0',},
    ]
})

export const interestStudentState = atom({
    key: 'interestStudentState',
    default: [
        { id: 1, name: '강윤슬', email: '2460201', grade: '2', class: '3', sorrow: '', anger: '3.5',},
        { id: 2, name: '송연재', email: '2460205', grade: '2', class: '3', sorrow: '5', anger: '1',},
        { id: 3, name: '이봄', email: '2460206', grade: '2', class: '3', sorrow: '', anger: '3',},
        { id: 4, name: '곽하랑', email: '2470101', grade: '유치원', class: '한아름', sorrow: '4.3', anger: '4.3',},
        { id: 5, name: '김태리', email: '2470102', grade: '유치원', class: '한아름', sorrow: '5', anger: '2.7',},
        { id: 6, name: '남온유', email: '2470103', grade: '유치원', class: '한아름', sorrow: '5', anger: '3',},
        { id: 7, name: '노나현', email: '2470104', grade: '유치원', class: '한아름', sorrow: '4.3', anger: '3.5',},
        { id: 8, name: '안지후', email: '2470108', grade: '유치원', class: '한아름', sorrow: '5', anger: '2',},
        { id: 9, name: '남유주', email: '2470112', grade: '유치원', class: '한아름', sorrow: '5', anger: '',},
        { id: 10, name: '부석훈', email: '2450112', grade: '5', class: '1', sorrow: '', anger: '5',},
    ]
})