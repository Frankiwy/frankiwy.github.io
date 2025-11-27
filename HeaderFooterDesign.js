class SpecialHeaderDesktop extends HTMLElement{
    connectedCallback () {
        this.innerHTML = `
        <header class="desktop-header">
            <nav>
                <a href="index.html" class="active"><i class="fa-solid fa-house-chimney fa-lg"></i>Home</a>
                <a href="research.html"><i class="fa-solid fa-microscope fa-lg"></i>Research</a>
                <a href="publications.html"><i class="fa-solid fa-newspaper fa-lg"></i>Publications</a>
            </nav>
        <header>
        `
    }
}

customElements.define('special-header-desktop', SpecialHeaderDesktop)

class SpecialHeaderMobile extends HTMLElement{
    connectedCallback () {
        this.innerHTML = `
        <header class="mobile-header">
            <nav>
                <a href="index.html" title="Home"><i class="fa-solid fa-house-chimney fa-lg"></i></a>
                <a href="research.html" title="Research"><i class="fa-solid fa-microscope fa-lg"></i></a>
                <a href="publications.html" title="Publications"><i class="fa-solid fa-newspaper fa-lg"></i></a>
            </nav>
        <header>
        `
    }
}

customElements.define('special-header-mobile', SpecialHeaderMobile)




