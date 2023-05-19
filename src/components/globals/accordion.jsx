import React from "react";

import Table from "./table";

const Accordion = ({ tabs }) => {
    React.useEffect(() => {
        const radio = document.getElementById('radio-0');

        if (radio) {
            radio.checked = true;
        }
    }, []);

    return (
        <>
            <div className="tabs">
                {
                    tabs && tabs.map((tab, index) =>
                        <div className="tab" key={index}>
                            <input type="radio" id={`radio-${index}`} name="rd"/>
                            <label className="tab-label" htmlFor={`radio-${index}`}><p>{tab.title}</p></label>
                            <div className="tab-content">
                                {tab.component}
                                {
                                    tab.table && <Table rows={tab.table} />
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Accordion;