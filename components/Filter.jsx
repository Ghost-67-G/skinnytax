import React from "react";
import { Form } from "react-bootstrap";

export default function Filter({placeholder}) {
    return (
        <div className="filter_main-div mt-4">
            <div className="row">
                <div className="col-lg-7">
                    {/* Search bar */}
                    <div className="search-assets">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                        >
                            <path
                                d="M7.02059 16C6.73725 16 6.49975 15.9042 6.30809 15.7125C6.11642 15.5208 6.02059 15.2833 6.02059 15V9L0.220588 1.6C-0.0294118 1.26667 -0.0669118 0.916667 0.108088 0.55C0.283088 0.183333 0.587255 0 1.02059 0H15.0206C15.4539 0 15.7581 0.183333 15.9331 0.55C16.1081 0.916667 16.0706 1.26667 15.8206 1.6L10.0206 9V15C10.0206 15.2833 9.92476 15.5208 9.73309 15.7125C9.54142 15.9042 9.30392 16 9.02059 16H7.02059ZM8.02059 8.3L12.9706 2H3.07059L8.02059 8.3Z"
                                fill="#A29E9E"
                            />
                        </svg>
                        <Form.Control
                            type="text"
                            placeholder={placeholder}
                        />
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="filters_selectors">
                        <Form.Select aria-label="Default select example" className="ms-auto">
                            <option>Day</option>
                            <option value="Week">Week</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>
                        </Form.Select>
                    </div>
                </div>
            </div>

        </div>
    )
}