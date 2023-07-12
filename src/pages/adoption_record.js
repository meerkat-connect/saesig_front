import React from 'react';
import sampleImage1 from '../assets/images/sample/sample1.webp'
import sampleImage2 from '../assets/images/sample/sample2.jpg'
import sampleImage3 from '../assets/images/sample/sample3.jpg'
import sampleImage4 from '../assets/images/sample/sample4.webp'
import sampleImage5 from '../assets/images/sample/sample5.jpg'
import sampleImage6 from '../assets/images/sample/sample6.jpg'
import sampleImage7 from '../assets/images/sample/sample7.webp'

const adoption_record = () => {
    return (
        <div className="saesig-content-wrap">
            <div className="saesig-title-con">
                <img className="saesig-title-icon" />
                <span className="saesig-title">
                    🐶 분양 기록
                </span>
            </div>
            <div className="saesig-filter-con">
                <button className="saesig-round-default-button active">
                    전체
                </button>
                <button className="saesig-round-default-button">
                    분양중/예약중
                </button>
                <button className="saesig-round-default-button">
                    예약완료
                </button>
            </div>
            <div className="saesig-content-con">
                <div className="saesig-content-card-style0">
                    <div className="saesig-content-card-left-image-con">
                        <img src={sampleImage3} alt="Sample1" className="saesig-content-card-left-image" />
                    </div>
                    <div className="saesig-content-desc">
                        <div className="saesig-content-desc-row">
                            <div className="saesig-tag0 orange"> 분양중 </div>
                            <span className="sub-text-gray"> 책임비 30,000 </span>
                            <div className="saesig-content-desc-row-about">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2041_55030)">
                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2041_55030">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="saesig-content-desc-row">
                            30개월 여아 래브라도 리트리버
                        </div>
                        <div className="saesig-content-desc-row">
                            <span className="saesig-tag1-orange"> #강아지 </span>
                            <span className="saesig-tag1-orange"> #래브라도 리트리버</span>
                            <span className="saesig-tag1-orange"> #귀여운 </span>
                            <span className="saesig-tag1-orange"> #튼튼한 </span>
                        </div>
                    </div>
                </div>
                <div className="saesig-content-card-style0">
                    <div className="saesig-content-card-left-image-con">
                        <img src={sampleImage4} alt="Sample1" className="saesig-content-card-left-image" />
                    </div>
                    <div className="saesig-content-desc">
                        <div className="saesig-content-desc-row">
                            <div className="saesig-tag0 green"> 예약중 </div>
                            <span className="sub-text-gray"> 책임비 30,000 </span>
                            <div className="saesig-content-desc-row-about">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2041_55030)">
                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2041_55030">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="saesig-content-desc-row">
                            400개월 여아
                        </div>
                        <div className="saesig-content-desc-row">
                            <span className="saesig-tag1-orange"> #강아지 </span>
                            <span className="saesig-tag1-orange"> #래브라도 리트리버</span>
                            <span className="saesig-tag1-orange"> #귀여운 </span>
                            <span className="saesig-tag1-orange"> #튼튼한 </span>
                        </div>
                    </div>
                </div>
                <div className="saesig-content-card-style0">
                    <div className="saesig-content-card-left-image-con">
                        <img src={sampleImage5} alt="Sample1" className="saesig-content-card-left-image" />
                    </div>
                    <div className="saesig-content-desc">
                        <div className="saesig-content-desc-row">
                            <div className="saesig-tag0 gray"> 분양중 </div>
                            <span className="sub-text-gray"> 책임비 30,000 </span>
                            <div className="saesig-content-desc-row-about">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2041_55030)">
                                        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="black"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2041_55030">
                                            <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="saesig-content-desc-row">
                            30개월 여아 래브라도 리트리버
                        </div>
                        <div className="saesig-content-desc-row">
                            <span className="saesig-tag1-orange"> #강아지 </span>
                            <span className="saesig-tag1-orange"> #래브라도 리트리버</span>
                            <span className="saesig-tag1-orange"> #귀여운 </span>
                            <span className="saesig-tag1-orange"> #튼튼한 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default adoption_record;
