import React from "react"
import './firstview.css'

export function FirstView() {
    function Download(system) {
        alert('Download ' + system);
    }
    return (
        <div className="firstview">
            <span>Apresentação XPunto: Mussum Ipsum, cacilds vidis litro abertis.</span>
            <p>Delegadis gente finis, bibendum egestas augue arcu ut est. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Per aumento de cachacis, eu reclamis. Atirei o pau no gatis, per gatis num morreus.</p>
            <div className="button">
            <button onClick={() => Download('Android !')}>Download Android</button>
            <button onClick={() => Download('IOS !')}>Download IOS</button>
            </div>
        </div >
    )
}