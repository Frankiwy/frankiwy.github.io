class SpecialHeader extends HTMLElement{
    connectedCallback () {
        this.innerHTML = `
        <header>
            <nav>
                <a href="index.html" class="active"><i class="fa-solid fa-house-chimney fa-lg"></i> Home</a>
                <a href="research.html"><i class="fa-solid fa-microscope fa-lg"></i> Research</a>
                <a href="publications.html"><i class="fa-solid fa-newspaper fa-lg"></i> Publications</a>
            </nav>
        <header>
        `
    }
}


customElements.define('special-header', SpecialHeader)




