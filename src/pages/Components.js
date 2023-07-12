import React from 'react';


const Components = () => {
    return (
        <div className="saesig-content-wrap">
            <div className="saesig-title-con">
                <img className="saesig-title-icon" />
                <span className="saesig-title">
                    🐶 퍼블리시 컴포넌트 모음
                </span>
            </div>
            <div className="saesig-filter-con">
                <button className="saesig-round-default-button">
                    버튼
                </button>
                <button className="saesig-round-default-button active">
                    버튼입니다.
                </button>
                <button className="saesig-round-write-button icon">
                    오늘의 일기 작성
                </button>
                <div className="saesig-datepicker-con">
                    <input type="text" className="saesig-datepicker-input" id="datepicker" placeholder="YYYY-MM-DD" readOnly/>
                    <label htmlFor="datepicker" className="saesig-datepicker-label">
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Components;