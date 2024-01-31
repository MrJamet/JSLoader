class SpinningDots extends HTMLElement{

    constructor(){
        super()
        const width = 28
        const circles = 8
        const circleRadius = 2
        const root = this.attachShadow({mode:'open'})
        root.innerHTML = `<div>
            ${this.buildStyle(width)}
            ${this.buildCircle(w, circles, circleRadius)}
        </div>`
    }

    /**
     * Construit un SVG contenant nos différents cercles
     * @param {number} w Largeur du SVG
     * @param {number} n Nombre de cercle
     * @param {number} r Rayon de chaque cercle
     */
    buildCircle(w,n,r)
    {

    }

    /**
     * Construit le style de notre loader
     * @param {number} w Largeur de l'élément
     * @returns {string}
     */
    buildStyle(w)
    {
        return `
        <style>
            :host {
                display: inline-blocl;
            }
            div{
                height: ${w}px;
                width: ${w}px;
                background: red;
            }
        </style>`
    }

}

try
{
    customElements.define('spinning-dots', SpinningDots)
}
catch(e)
{
    if (e instanceof DOMException)
    {
        console.error('DOMException : ' + e.message);
    }
    else
    {
        throw e
    }
}