class SpinningDots extends HTMLElement{

    constructor(){
        super()
        const width = 28
        const circles = 8
        const circleRadius = 2
        const root = this.attachShadow({mode: 'open'})
        root.innerHTML = `<div>
            ${this.buildStyle(width)}
        </div>`
    }
    /**
     * 
     * @param {number} w largeur de la div 
     */
    buildStyle(w){
        return `<style>
                div{
                    width: ${w}px;
                    height: ${w}px;
                    background: red;
                }
            </style>`
    }
    
    /**${this.buildCircle(w, circles, circleRadius)} */
    
    /**
     * Construit le style de notre loader
     * @param {number} w Largeur de l'élément
     * @returns {string}
     */
    // buildStyle(w){
    //     return `<style>
    //         div{
    //             height: 40px;
    //             width: 40px;
    //             background: red;
    //         }
    //     </style>`
    // }
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