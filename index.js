class SpinningDots extends HTMLElement{

    constructor(){
        super()
        const width = 28
        const circles = 8
        const circleRadius = 2
        const root = this.attachShadow({mode: 'open'})
        root.innerHTML = `<div>
            ${this.buildStyle(width)}
            ${this.buildCircles(width, circles, circleRadius)}
        </div>`
    }
    /**
     * Construit un SVG contenant nos cercles
     * @param {number} w Largeur du SVG
     * @param {number} n Nombre de cercles
     * @param {number} r Rayon de chaque cercle
     * @return {string}
     */
    buildCircles(w, n, r){
        let dom = `<svg width="${w}" height="${w}" viewBox="0 0 ${w} ${w}">`
        dom += `<circle cx="${w/2}" cy="${w/2}" r="${r}"/>`

        for(let i=0; i<n; i++){
            //angle de 360°c=pi*2, divisé par 8 cercles, multiplié par chacun
            //0, 45, 90, 135, 180, ...
            const angle = i * (Math.PI * 2) / n

        }

        return dom + `</svg>`
    }
    /**
     * Construire le style de notre loader
     * @param {number} w largeur de l'élément 
     * @return {string}
     */
    buildStyle(w){
        return `<style>
                :host{
                    display: inline-block;
                }
                div{
                    width: ${w}px;
                    height: ${w}px;
                    background: red;
                }
            </style>`
    }
}

try{
    customElements.define('spinning-dots', SpinningDots)
}
catch(e){
    if (e instanceof DOMException)    {
        console.error('DOMException : ' + e.message);
    }
    else{
        throw e
    }
}